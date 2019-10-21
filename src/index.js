document.addEventListener("DOMContentLoaded", function() {
  const contents = document.getElementById('contents');
  const footer = document.getElementById('footer');
  const footerItems = footer.querySelectorAll('.footer-item');
  const home = document.getElementById('home');
  const behavioral = document.getElementById('behavioral');
  const technical = document.getElementById('technical');
  const tips = document.getElementById('tips');

  /**
   * click event handler for footer item
   * step 1. remove existing .active class
   * step 2. add .active class to the clicked item
   * step 3. change view
   */
  function onClickFooterItem() {
    if (this.dataset.value === this.innerHTML.toLowerCase() && this.classList.contains('active')) {
      return;
    }
    footer.querySelector('.active').classList.remove('active');
    this.classList.add('active');

    const page = contents.querySelector(`#${this.dataset.value}`);
    if (!page.classList.contains('display-none')) return;
    resetView();
    page.classList.remove('display-none');
  }

  function onClickHomeCard() {
    footer.querySelector('.active').classList.remove('active');
    footer.querySelector(`span[data-value="${this.dataset.value}"]`).classList.add('active');
    const page = contents.querySelector(`#${this.dataset.value}`);
    if (!page.classList.contains('display-none')) return;
    resetView();
    page.classList.remove('display-none');
  }

  function resetView() {
    home.classList.add('display-none');
    behavioral.classList.add('display-none');
    technical.classList.add('display-none');
    tips.classList.add('display-none');
  }

  footerItems.forEach(el => el.addEventListener('click', onClickFooterItem));
  home.querySelectorAll('.card').forEach(el => el.addEventListener('click', onClickHomeCard));
});

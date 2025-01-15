function initTabNav() {
  const tabMenu = document.querySelectorAll('.js-tabmenu li');
  const tabContent = document.querySelectorAll('.js-tabcontent section');

  if (tabMenu.length && tabContent.length) {
    tabContent[0].classList.add('active');

    function activeTab(index) {
      tabContent.forEach((section) => {
        section.classList.remove('active');
      });
      tabContent[index].classList.add('active');
    }

    tabMenu.forEach((itemMenu, index) => {
      itemMenu.addEventListener('click', () => {
        activeTab(index);
      });
    });
  }
}

initTabNav();

function initAccordion() {
  const accordionList = document.querySelectorAll('.js-accordion dt');
  const activeClass = document.querySelectorAll('.active');

  if (accordionList.length) {
    accordionList[0].classList.add('active');
    accordionList[0].nextElementSibling.classList.add('acitve'); // select DD

    function accordionClick() {
      this.classList.toggle('active');
      this.nextElementSibling.classList.toggle('active');
    }
    accordionList.forEach((item) => {
      item.addEventListener('click', accordionClick);
    });
  }
}

initAccordion();

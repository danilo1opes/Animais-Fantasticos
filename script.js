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

function initScrollSmooth() {
  const linksInternos = document.querySelectorAll('.js-menu a[href^="#"]');

  linksInternos.forEach((link) => {
    function scrollToSection(event) {
      event.preventDefault();
      const href = event.currentTarget.getAttribute('href');
      const section = document.querySelector(href);

      section.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    }
    link.addEventListener('click', scrollToSection);
  });
}

initScrollSmooth();

function initAnimationScroll() {
  const sections = document.querySelectorAll('.js-scroll');

  if (sections.length > 0) {
    const windowMiddle = window.innerHeight * 0.6;

    function animaScroll() {
      sections.forEach((section) => {
        const sectionTop = section.getBoundingClientRect().top;
        const inSectionVisible = sectionTop - windowMiddle < 0;
        if (inSectionVisible) section.classList.add('active');
        else {
          section.classList.remove('active');
        }
      });
    }
    animaScroll();

    window.addEventListener('scroll', animaScroll);
  }
}

initAnimationScroll();

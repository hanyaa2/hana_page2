// ===== Season Tab =====
const buttons = document.querySelectorAll('.season-btn');
const contents = document.querySelectorAll('.season-content');

for (let i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener('click', function () {
    for (let j = 0; j < buttons.length; j++) {
      buttons[j].classList.remove('active');
      contents[j].classList.remove('active');
    }
    this.classList.add('active');
    const tabName = this.getAttribute('data-tab');
    document.getElementById(tabName).classList.add('active');
  });
}

// ===== Hamburger Menu =====
const hamburger = document.getElementById('hamburger');
const mobileNav = document.getElementById('mobileNav');
const mobileLinks = document.querySelectorAll('.mobile-link');

hamburger.addEventListener('click', function () {
  const isOpen = mobileNav.classList.contains('open');
  if (isOpen) {
    mobileNav.classList.remove('open');
    hamburger.classList.remove('open');
    hamburger.setAttribute('aria-label', '메뉴 열기');
  } else {
    mobileNav.classList.add('open');
    hamburger.classList.add('open');
    hamburger.setAttribute('aria-label', '메뉴 닫기');
  }
});

// 메뉴 링크 클릭 시 닫기
mobileLinks.forEach(function (link) {
  link.addEventListener('click', function () {
    mobileNav.classList.remove('open');
    hamburger.classList.remove('open');
    hamburger.setAttribute('aria-label', '메뉴 열기');
  });
});

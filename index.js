// cache DOM
const hamburgerBtns = document.querySelectorAll('.hamburger');
const mobileMenus = document.querySelectorAll('.mobile-menu');
const menuXBtns = document.querySelectorAll('.menu-x');

// add event listeners
hamburgerBtns.forEach(btn => btn.addEventListener('click', showMobileMenu));
menuXBtns.forEach(btn => btn.addEventListener('click', hideMobileMenu));

// show matching mobile menu on hamburger button click
function showMobileMenu(e) {
  console.log("Hello");
  mobileMenus.forEach(menu => {
    if (datasetsMatch(e.target, menu)) menu.classList.add('visible');
  });
}

// hide mobile menu when 'x' button button is clicked
function hideMobileMenu(e) {
  mobileMenus.forEach(menu => {
    if (!datasetsMatch(e.target, menu)) menu.classList.remove('visible');
  });
}

// return whether event target's dataset.for matches menu's dataset.id
function datasetsMatch(eventTarget, menu) {
  return (eventTarget.dataset.for === menu.dataset.id);
}

const mobileMenu = document.getElementById("js-menu");
const openMenu = document.getElementById("js-open");
const closeMenu = document.getElementById("js-close");
const menuLink = document.getElementById("js-link");

openMenu.addEventListener('click', function () {
    mobileMenu.classList.add('show');
});

closeMenu.addEventListener('click', function () {
    mobileMenu.classList.remove('show');
});

menuLink.addEventListener('click', function () {
    mobileMenu.classList.remove('show');
});

window.addEventListener('click', function (event) {
    if (event.target === mobileMenu) {
        mobileMenu.classList.remove('show');
    }
});
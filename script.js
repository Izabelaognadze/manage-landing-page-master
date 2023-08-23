const hamburgerMenu = document.getElementById('hamburger-menu');
const menuElements = document.getElementById('menu-elements');
const openBurger = document.getElementById('open-burger');
const closeBurger = document.getElementById('close-burger');

hamburgerMenu.addEventListener('click', () => {
    openBurger.classList.toggle('hidden');
    closeBurger.classList.toggle('hidden');
    menuElements.classList.toggle('flex');
    menuElements.classList.toggle('hidden');
});

const slider = new A11YSlider(document.querySelector(".slider"), {
    slidesToShow: 1,
    dots: true,
    autoplay: true,
    autoplaySpeed: 3500,
    arrows: false,
    responsive: {
        768: {
            slidesToShow: 2,
            dots: true,
        },
        1280: {
            slidesToShow: 3,
            dots: false,
        }
    }
});

const mailNot = document.getElementById('mail');
// mailNot.text
console.log(mailNot)
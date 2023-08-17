function enableBurger() {
    document.body.dataset.hamburger = "enabled";
}

function disableBurger() {
    document.body.dataset.hamburger = "disabled"
}

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
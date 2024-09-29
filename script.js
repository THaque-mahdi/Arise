var swiper = new Swiper(".mySwiper", {
    spaceBetween: 30,
    centeredSlides: true,
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
});

const menu = document.querySelector(".navbar");
const menuBtn = document.querySelector("#open-menu-btn");
const closeBtn = document.querySelector("#close-menu-btn");

menuBtn.addEventListener('click', () => {
    menu.style.display = "flex";
    closeBtn.style.display = "inline-block";
    menuBtn.style.display = "none";
});

const closeNav = () => {
    menu.style.display = "none";
    closeBtn.style.display = 'none';
    menuBtn.style.display = "inline-block";
};

menuBtn.addEventListener('click', () => {
    menu.style.display = "flex";
});

closeBtn.addEventListener('click', closeNav);


const animate = ScrollReveal({
    origin: "top",
    distance: "60px",
    duration: "2500",
    delay: "400",
});

animate.reveal(".nav");
animate.reveal(".home-text", {origin: "left"});
animate.reveal(".home-img", {origin: "bottom"});
animate.reveal(".ser-box, .product-box, .team-box, .book-data", {interval: "100"});


//  Initialize Swiper
let commonSlider = new Swiper(".mySwiper", {
  slidesPerView: "auto",
  spaceBetween: 16,
  
  // Responsive breakpoints
  breakpoints: {
    // when window width is >= 480px
    480: {
      slidesPerView: 2,
      spaceBetween: 20
    },
    // when window width is >= 640px
    640: {
      slidesPerView: 3,
      spaceBetween: 40
    }
  },
  
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    autoplay: {
      delay: 300,
    },
  },
});
commonSlider.autoplay.start()
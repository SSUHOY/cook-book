import { Swiper } from "swiper";
import { Pagination, Navigation } from "swiper/modules";

document.addEventListener("DOMContentLoaded", () => {
  const swiperIMG = new Swiper(".slider-img", {
    modules: [Navigation, Pagination],
    speed: 500,
    slideToClickedSlide: true,
    hashNavigation: {
      watchState: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    pagination: {
      el: ".swiper-pagination-fraction",
      type: "fraction",
    },
  });
});

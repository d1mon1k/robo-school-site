import Swiper, { Navigation, Scrollbar } from 'swiper';

Swiper.use([Navigation, Scrollbar])
const swiper = new Swiper('.trainers__content', {
  slidesPerView: 'auto',
  spaceBetween: 40,
  scrollbar: {
    el: '.trainers__scrollbar',
    draggable: true,
    dragClass: 'trainers__drag',
  },
  navigation: {
    prevEl: '.trainers__btn--prev',
    nextEl: '.trainers__btn--next'
  }
});


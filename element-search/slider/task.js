const prev = document.querySelector('.slider__arrow_prev');
const next = document.querySelector('.slider__arrow_next');
const slider__item = document.querySelectorAll('.slider__item');
let array = Array.from(slider__item);

let sliderActive = 0;

prev.onclick = function() {
    let activeSlide = array.findIndex((item, idx) => item.className.includes('slider__item_active'));
    array[activeSlide].classList.toggle("slider__item_active");
    activeSlide = (activeSlide == 0) ? array.length - 1 : activeSlide - 1;
    array[activeSlide].classList.toggle("slider__item_active");
  };
  
  next.onclick = function() {
    let activeSlide = array.findIndex((item, idx) => item.className.includes('slider__item_active'));
    array[activeSlide].classList.toggle("slider__item_active");
    activeSlide = (activeSlide == array.length - 1) ? 0 : activeSlide + 1;;
    array[activeSlide].classList.toggle("slider__item_active");
  };
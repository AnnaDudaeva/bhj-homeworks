const prev = document.querySelector('.slider__arrow_prev');
const next = document.querySelector('.slider__arrow_next');
const slider__item = document.querySelectorAll('.slider__item');
let arr = Array.from(slider__item);

let sliderActive = 0;

prev.onclick = function() {
    let activeSlide = arr.findIndex((item, idx) => item.className.includes('slider__item_active'));
    arr[activeSlide].classList.toggle("slider__item_active");
    activeSlide = (activeSlide == 0) ? arr.length - 1 : activeSlide - 1;
    arr[activeSlide].classList.toggle("slider__item_active");
  };
  
  next.onclick = function() {
    let activeSlide = arr.findIndex((item, idx) => item.className.includes('slider__item_active'));
    arr[activeSlide].classList.toggle("slider__item_active");
    activeSlide = (activeSlide == arr.length - 1) ? 0 : activeSlide + 1;;
    arr[activeSlide].classList.toggle("slider__item_active");
  };
const slider = document.querySelectorAll(".slider__item");
const arrowPrev = document.querySelector(".slider__arrow_prev");
const arrowNext = document.querySelector(".slider__arrow_next");
const dots = document.querySelectorAll(".slider__dot");

//let sliderActive = 0;

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
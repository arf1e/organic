var quoteBlock = document.querySelector('.quote-block');
var leftSlide = document.querySelector('.slider-controls .left');
var rightSlide = document.querySelector('.slider-controls .right');
var currentSlide = 0;
var slides = document.querySelectorAll('.quote-block .quote');
var slideSpace = 237;
var y = 0;

function slideLeft() {
  leftSlide.addEventListener('click', function () {
    if (currentSlide > 0) {
    quoteBlock.style.transform = ('translateY(-' + (y - slideSpace) + 'px)');
      y -= slideSpace;
      currentSlide--;
      rightSlide.classList.remove('disabled');
      if (currentSlide === 0) {
        leftSlide.classList.add('disabled');
      }
  }
  });
}

function slideRight() {
    rightSlide.addEventListener('click', function () {
      if (currentSlide < slides.length - 1) {
      quoteBlock.style.transform = ('translateY(-' + (y + slideSpace) + 'px)');
        y += slideSpace;
        currentSlide++;
        leftSlide.classList.remove('disabled');
        if (currentSlide + 1 === slides.length) {
          rightSlide.classList.add('disabled');
        }
    }
  });
}


slideLeft();
slideRight();
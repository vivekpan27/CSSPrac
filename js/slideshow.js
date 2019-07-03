slideNo = 0;
maxSlides = document.getElementsByClassName('slide').length;

function nextSlide() {
  if (slideNo == maxSlides) {
    hideSlide(slideNo - 1);
    slideNo = 0;
  }
  if (slideNo == 0) {
    showSlide(slideNo);
  }
  else {
    hideSlide(slideNo - 1);
    showSlide(slideNo);
  }

  slideNo++;
};

function prevSlide() {
  if (slideNo > 0) {
    hideSlide(slideNo);
    slideNo--;
    showSlide(slideNo);
  }
};


function hideSlide(slideNo) {
  document.getElementsByClassName('slide')[slideNo].style.display = "none";
  document.getElementsByClassName('thumbnail-sec')[slideNo].classList.remove('thumbnail-active');
}

function showSlide(slideNo) {
  document.getElementsByClassName('slide')[slideNo].style.display = "block";
  document.getElementsByClassName('thumbnail-sec')[slideNo].classList.add('thumbnail-active');
}

showSlide(slideNo);
slideNo++;
setInterval(nextSlide, 1000);

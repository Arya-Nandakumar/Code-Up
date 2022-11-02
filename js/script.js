const second = 1000,
  minute = second * 60,
  hour = minute * 60,
  day = hour * 24;

let countDown = new Date("Dec 18, 2022 09:00:00").getTime(),
  x = setInterval(function () {
    let now = new Date().getTime(),
      distance = countDown - now;

    (document.getElementById("days").innerText =
      Math.floor(distance / day) > 0 ? Math.floor(distance / day) : 0),
      (document.getElementById("hours").innerText =
        Math.floor((distance % day) / hour) > 0
          ? Math.floor((distance % day) / hour)
          : 0),
      (document.getElementById("minutes").innerText =
        Math.floor((distance % hour) / minute) > 0
          ? Math.floor((distance % hour) / minute)
          : 0),
      (document.getElementById("seconds").innerText =
        Math.floor((distance % minute) / second) > 0
          ? Math.floor((distance % minute) / second)
          : 0);

    //do something later when date is reached
    //if (distance < 0) {
    //  clearInterval(x);
    //  'IT'S COUNTED DOWN!;
    //}
  }, second);

const items = document.querySelectorAll(".accordion a");

function toggleAccordion() {
  console.log(items);
  items.forEach((item) => {
    item.classList.remove("active");
    item.nextElementSibling.classList.remove("active");
  });
  this.classList.toggle("active");
  this.nextElementSibling.classList.toggle("active");
}

items.forEach((item) => item.addEventListener("click", toggleAccordion));

var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";  
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
}

document.addEventListener("DOMContentLoaded", function () {
  let devfolioOptions = {
    buttonSelector: "#devfolio-apply-now",
    key: "tinkerhub",
  };

  let script = document.createElement("script");
  document.head.append(script);

  script.onload = function () {
    new Devfolio(devfolioOptions);
  };

  script.onerror = function () {
    document
      .querySelector(devfolioOptions.buttonSelector)
      .addEventListener("click", function () {
        window.location.href =
          "" + devfolioOptions.key;
      });
};
});
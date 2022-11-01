// header
$(document).ready(function () {
  $(".header__burger").click(function (event) {
    $(".header__burger, .header__menu").toggleClass("active");
    $("body").toggleClass("lock");
    $(".header").toggleClass("active");
  }),
    $(".header__menu").click(function (event) {
      $(".header__burger, .header__menu").removeClass("active");
      $("body").removeClass("lock");
      $(".header").removeClass("active");
    });
});

// slides
var slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides((slideIndex += n));
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides((slideIndex = n));
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("slide__column");
  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slides[slideIndex - 1].style.display = "block";
}

// advantage
var index = 1;
setSlide(index);

// Next/previous controls
function switchSlides(n) {
  setSlide((index += n));
}

// Thumbnail image controls
function slide(n) {
  setSlide((index = n));
}

function setSlide(n) {
  var i;
  var slides = document.getElementsByClassName("advantage__row");
  if (n > slides.length) {
    index = 1;
  }
  if (n < 1) {
    index = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slides[index - 1].style.display = "flex";
}

function openTab(evt, tab) {
  var i, tabcontent, tablinks;

  // Get all elements with class="tabcontent" and hide them
  tabcontent = document.getElementsByClassName("category__tab");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }

  // Get all elements with class="tablinks" and remove the class "active"
  tablinks = document.getElementsByClassName("category__column");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }

  // Show the current tab, and add an "active" class to the button that opened the tab
  document.getElementById(tab).style.display = "block";
  evt.currentTarget.className += " active";
}
document.getElementById("defaultOpen").click();

// scroll button
function backToTop() {
  let button = $(".back-to-top");

  $(window).on("scroll", () => {
    if ($(this).scrollTop() >= 165) {
      button.fadeIn();
    } else {
      button.fadeOut();
    }
  });

  button.on("click", (e) => {
    e.preventDefault();
    $("html").animate({ scrollTop: 0 }, 1000);
  });
}

backToTop();

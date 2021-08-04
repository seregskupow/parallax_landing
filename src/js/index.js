window.onload=()=>{
  $('#preloader').fadeOut("slow");
}


if (window.innerWidth <= 1280) {
  var mySwiper = new Swiper(".swiper-container", {
    // Optional parameters
    direction: "horizontal",
    loop: true,
    breakpoints: {
      // when window width is <= 320px
      1280: {
        slidesPerView: 2,
        spaceBetween: 10
      },
      // when window width is <= 480px
      1020: {
        slidesPerView: 1,
        spaceBetween: 20
      }
    },
    // If we need pagination
    pagination: {
      el: ".swiper-pagination"
    },

    // Navigation arrows
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev"
    },

    // And if we need scrollbar
    scrollbar: {
      el: ".swiper-scrollbar"
    }
  });
}
// if (window.innerWidth<=1280){
// document.getElementById('prev').classList.remove('hidden');
// document.getElementById('next').classList.remove('hidden');
// }

var wraper = document.getElementById("wrapgal");
var more = document.getElementById("more");
var arr = document.querySelectorAll(".list");

console.log(arr[0]);

more.onclick = function(event) {
  // event.preventDefault();
  if (window.innerWidth >= 780) {
    if (wraper.style.height == "1105px") {
      wraper.style.height = "2290px";
      more.innerHTML = "Show less";
      arr.forEach(function(element) {
        element.style.backgroundImage =
          "url(" + element.getAttribute("data") + ")";
        console.log(element.getAttribute("data"));
        element.style.opacity = "1";
      });
    } else {
      wraper.style.height = "1105px";
      more.innerHTML = "Show more";
      arr.forEach(function(element) {
        element.style.backgroundImage = 'url("")';
        element.style.opacity = "0";
      });
    }
  }
  if (window.innerWidth <= 779) {
    if (wraper.style.height == "1105px") {
      wraper.style.height = "4650px";
      more.innerHTML = "Show less";
      arr.forEach(function(element) {
        element.style.backgroundImage =
          "url(" + element.getAttribute("data") + ")";
        console.log(element.getAttribute("data"));
        element.style.opacity = "1";
      });
    } else {
      wraper.style.height = "1105px";
      more.innerHTML = "Show more";
      arr.forEach(function(element) {
        element.style.backgroundImage = 'url("")';
        element.style.opacity = "0";
      });
    }
  }
};

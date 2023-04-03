// navbar
// search-box 
let navbar = document.querySelector(".navbar1");
let searchBox = document.querySelector(".search-box1 .bx-search");


searchBox.addEventListener("click", ()=>{
  navbar.classList.toggle("showInput");
  if(navbar.classList.contains("showInput")){
    searchBox.classList.replace("bx-search" ,"bx-x");
  }else {
    searchBox.classList.replace("bx-x" ,"bx-search");
  }
});

// sidebar 
let navLinks = document.querySelector(".nav-links");
let menuOpenBtn = document.querySelector(".navbar1 .bx-menu");
let menuCloseBtn = document.querySelector(".nav-links .bx-x");
menuOpenBtn.onclick = function() {
navLinks.style.left = "0";
}
menuCloseBtn.onclick = function() {
navLinks.style.left = "-100%";
}


// sidebar submenu
let i = document.querySelector(".links i");
let htmlcssArrow = document.querySelector(".htmlcss-arrow");
htmlcssArrow.onclick = function() {
  navLinks.classList.toggle("show1");

}
let moreArrow = document.querySelector(".more-arrow");
moreArrow.onclick = function() {
  navLinks.classList.toggle("show2");
}
let jsArrow = document.querySelector(".js-arrow");
jsArrow.onclick = function() {
 navLinks.classList.toggle("show3");
}
let threeArrow = document.querySelector(".three-arrow");
threeArrow.onclick = function() {
 navLinks.classList.toggle("show4");
}
let fourArrow = document.querySelector(".four-arrow");
fourArrow.onclick = function() {
 navLinks.classList.toggle("show5");
}
let fiveArrow = document.querySelector(".five-arrow");
fiveArrow.onclick = function() {
 navLinks.classList.toggle("show6");
}
let sixArrow = document.querySelector(".six-arrow");
sixArrow.onclick = function() {
 navLinks.classList.toggle("show7");
}


// -----------slider-------
var responsiveSlider = function() {

    var slider = document.getElementById("slider");
    var sliderWidth = slider.offsetWidth;
    var slideList = document.getElementById("slideWrap");
    var count = 1;
    var items = slideList.querySelectorAll("li").length;
    var prev = document.getElementById("prev");
    var next = document.getElementById("next");
    
    window.addEventListener('resize', function() {
      sliderWidth = slider.offsetWidth;
    });
    
    var prevSlide = function() {
      if(count > 1) {
        count = count - 2;
        slideList.style.left = "-" + count * sliderWidth + "px";
        count++;
      }
      else if(count = 1) {
        count = items - 1;
        slideList.style.left = "-" + count * sliderWidth + "px";
        count++;
      }
    };
    
    var nextSlide = function() {
      if(count < items) {
        slideList.style.left = "-" + count * sliderWidth + "px";
        count++;
      }
      else if(count = items) {
        slideList.style.left = "0px";
        count = 1;
      }
    };
    
    next.addEventListener("click", function() {
      nextSlide();
    });
    
    prev.addEventListener("click", function() {
      prevSlide();
    });
    
    setInterval(function() {
      nextSlide()
    }, 5000);
    
    };
    
    window.onload = function() {
    responsiveSlider();
    }
    
    
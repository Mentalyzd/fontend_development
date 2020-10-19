var mobile_menu_wrap = document.querySelector("#mobile_menu_wrap");
var menu_open = document.querySelector("#menu_open");
var menu_close = document.querySelector("#menu_close");

function openMenu() {
  mobile_menu_wrap.children[0].classList.add("mobile_menu_open");
  mobile_menu_wrap.classList.add("mobile_menu_open_wrap");
  mobile_menu_wrap.children[0].classList.remove("mobile_menu_close");
  mobile_menu_wrap.classList.remove("mobile_menu_close_wrap");
}

function closeMenu() {
  mobile_menu_wrap.children[0].classList.add("mobile_menu_close");
  mobile_menu_wrap.classList.add("mobile_menu_close_wrap");
  setTimeout(function(){
    mobile_menu_wrap.children[0].classList.remove("mobile_menu_open");
    mobile_menu_wrap.classList.remove("mobile_menu_open_wrap");
  }, 250);
}

menu_open.addEventListener("click", openMenu);
menu_close.addEventListener("click", closeMenu);


let courselCont;
let carouselFwdBtn;
let carouselBwdBtn;
let carouselWith;
let carouselChild;
let carouselStep;
let positie = [];



carousel_style = document.getElementsByClassName("carousel_style");

for (var i = 0; i < carousel_style.length; i++) {
  positie.push(0);
  carousel_style[i].addEventListener("mouseenter", testen);
}

function testen(carousel_style) {
  welkeCarousel = carousel_style.target.getAttribute("data-carousel");
  welkeCarousel = welkeCarousel-1;
  courselCont = carousel_style.toElement.children[2];
  carouselFwdBtn = carousel_style.toElement.children[1];
  carouselBwdBtn = carousel_style.toElement.children[0];

  carouselWith = courselCont.offsetWidth;
  carouselChild = courselCont.childElementCount;
  carouselStep = carouselWith/carouselChild*2;

  console.log(welkeCarousel);
  console.log(courselCont);
  console.log(carouselFwdBtn);
  console.log(carouselBwdBtn);
  console.log(carouselWith);
  console.log(carouselChild);
  console.log(carouselStep);

  carouselFwdBtn.addEventListener("click", function() {
    naarvoren(courselCont, carouselFwdBtn, carouselBwdBtn, carouselWith, carouselChild, carouselStep, welkeCarousel );
  });
  carouselBwdBtn.addEventListener("click", function() {
    naarachter(courselCont, carouselFwdBtn, carouselBwdBtn, carouselWith, carouselChild, carouselStep, welkeCarousel);
  });
}

//courselCont = document.querySelector('#coursel_cont');
//carouselFwdBtn = document.querySelector('#carousel_fwd_btn');
//carouselBwdBtn = document.querySelector('#carousel_bwd_btn');

//var carouselWith = courselCont.offsetWidth;
//var carouselChild = courselCont.childElementCount;
//var carouselStep = carouselWith/carouselChild*2;

//function updateCont() {
  //carouselWith = courselCont.offsetWidth;
  //carouselChild = courselCont.childElementCount;
  //carouselStep = carouselWith/carouselChild*2;
//}



function naarvoren( courselCont, carouselFwdBtn, carouselBwdBtn, carouselWith, carouselChild, carouselStep, welkeCarousel){
  //updateCont();
  console.log(positie);

  if (positie[welkeCarousel] >= carouselWith - carouselStep - carouselStep) {
    carouselFwdBtn.style.display = "none";
    positie[welkeCarousel] = carouselWith - carouselStep;
    courselCont.style.transform = "translateX(-"+ positie[welkeCarousel] +"px)";
  }else {
    carouselBwdBtn.style.display = "flex";
    positie[welkeCarousel] = positie[welkeCarousel] + carouselStep;
    courselCont.style.transform = "translateX(-"+ positie[welkeCarousel] +"px)";
  }
}

function naarachter( courselCont, carouselFwdBtn, carouselBwdBtn, carouselWith, carouselChild, carouselStep, welkeCarousel){
  //updateCont();
  console.log(positie);
  if (positie[welkeCarousel] <= carouselStep) {
    carouselBwdBtn.style.display = "none";
    positie[welkeCarousel] = 0;
    courselCont.style.transform = "translateX(-"+ positie[welkeCarousel] +"px)";
  }else{
    carouselFwdBtn.style.display = "flex";
    positie[welkeCarousel] = positie[welkeCarousel] - carouselStep;
    courselCont.style.transform = "translateX(-"+ positie[welkeCarousel] +"px)";
  }

}

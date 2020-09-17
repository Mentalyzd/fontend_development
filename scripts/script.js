// JavaScript Document
courselCont = document.querySelector('#coursel_cont');
carouselFwdBtn = document.querySelector('#carousel_fwd_btn');
carouselBwdBtn = document.querySelector('#carousel_bwd_btn');

var carouselWith = courselCont.offsetWidth;
var carouselChild = courselCont.childElementCount;
var carouselStep = carouselWith/carouselChild*2;


var positie = 0;

function naarvoren(){
  if (positie >= carouselWith - carouselStep - carouselStep) {
    carouselFwdBtn.style.display = "none";
    positie = carouselWith - carouselStep;
    courselCont.style.transform = "translateX(-"+ positie +"px)";
  }else {
    carouselBwdBtn.style.display = "flex";
    positie = positie + carouselStep;
    courselCont.style.transform = "translateX(-"+ positie +"px)";
  }
}

function naarachter(){
  if (positie <= carouselStep) {
    carouselBwdBtn.style.display = "none";
    positie = 0;
    courselCont.style.transform = "translateX(-"+ positie +"px)";
  }else{
    carouselFwdBtn.style.display = "flex";
    positie = positie - carouselStep;
    courselCont.style.transform = "translateX(-"+ positie +"px)";
  }

}

carouselFwdBtn.addEventListener("click", naarvoren);
carouselBwdBtn.addEventListener("click", naarachter);

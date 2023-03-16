var homepastry = document.querySelector('#homepastry')
var zestcode = document.querySelector('#zestcode')
var zencoffee = document.querySelector('#zencoffee')
var cvtony = document.querySelector('#cvenligne')
var nasa = document.querySelector('#nasa')

var closeprojet1 = document.querySelector('#close1')
var closeprojet2 = document.querySelector('#close2')
var closeprojet3 = document.querySelector('#close3')
var closeprojet4 = document.querySelector('#close4')
var closeprojet5 = document.querySelector('#close5')


var homepastrypage = document.querySelector('.openhomepastry')
var zestcodepage = document.querySelector('.openzestcode')
var zencoffeepage = document.querySelector('.openzencoffee')
var cvtonypage = document.querySelector('.opencvenligne')
var nasapage = document.querySelector('.opennasa')



closeprojet1.addEventListener("click", function(){
  homepastrypage.style.display = "none";
})

homepastry.addEventListener("click", function(){
  homepastrypage.style.display = "flex";
})

zestcode.addEventListener("click", function(){
  zestcodepage.style.display = "flex";
})

closeprojet2.addEventListener("click", function(){
  zestcodepage.style.display = "none";
})

zencoffee.addEventListener("click", function(){
  zencoffeepage.style.display = "flex";
})

closeprojet3.addEventListener("click", function(){
  zencoffeepage.style.display = "none";
})

cvtony.addEventListener("click", function(){
  cvtonypage.style.display = "flex";
})

closeprojet4.addEventListener("click", function(){
  cvtonypage.style.display = "none";
})

nasa.addEventListener("click", function(){
  nasapage.style.display = "flex";
})

closeprojet5.addEventListener("click", function(){
  nasapage.style.display = "none";
})



var slider = new Swiper(".swiper-container", {
  slidesPerView: 'auto',
  spaceBetween: 150,
  centeredSlides: true,
  mousewheel: true
})

slider.on('slideChange', function () {
  TweenMax.to('.slide-text span', .2, {
    y: '-100px',
  })
  TweenMax.to('.slide-number span', .2, {
    x: '-100px',
  })
  TweenMax.to('.swiper-slide-active', .5, {
    scale: .85
  })
})

slider.on('slideChangeTransitionEnd', function () {

  TweenMax.to('.slide-text span', .2, {
    y: 0,
    delay: .5
  })
  TweenMax.to('.slide-text span', 0, {
    y: '100px',
  })

  TweenMax.to('.slide-number span', .2, {
    x: 0,
    delay: .7
  })
  TweenMax.to('.slide-number span', 0, {
    x: '100px',
  })

  TweenMax.to('.swiper-slide-active', .5, {
    scale: 1,
    ease: Power4.easeOut,
  })

  TweenMax.to('.swiper-slide-active .slide-text', 0, {
    autoAlpha: 1
  })
  TweenMax.to('.swiper-slide-active .slide-number', 0, {
    autoAlpha: 1
  })

  TweenMax.to('.swiper-slide-next .slide-text', 0, {
    autoAlpha: 0
  })
  TweenMax.to('.swiper-slide-prev .slide-text', 0, {
    autoAlpha: 0
  })

  TweenMax.to('.swiper-slide-next .slide-number', 0, {
    autoAlpha: 0
  })
  TweenMax.to('.swiper-slide-prev .slide-number', 0, {
    autoAlpha: 0
  })
})

TweenMax.to('.swiper-slide-next .slide-text', 0, {
  autoAlpha: 0
})
TweenMax.to('.swiper-slide-prev .slide-text', 0, {
  autoAlpha: 0
})

TweenMax.to('.swiper-slide-next .slide-number', 0, {
  autoAlpha: 0
})
TweenMax.to('.swiper-slide-prev .slide-number', 0, {
  autoAlpha: 0
})

TweenMax.to('.swiper-slide', 0, {
  scale: .85,
})

TweenMax.to('.swiper-slide-active', 0, {
  scale: 1,
})
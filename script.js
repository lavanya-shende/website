const scroll = new LocomotiveScroll({
    el: document.querySelector('#main'),
    smooth: true
})

function page4(){
    var a = document.querySelector('#element-container')
var fixed = document.querySelector("#fixed-image")
a.addEventListener("mouseenter",function(){
    fixed.style.display = "block"
})

a.addEventListener("mouseleave",function(){
    fixed.style.display = "none"
})

var elems = document.querySelectorAll("#element")
elems.forEach(function(e){
    e.addEventListener("mouseenter",function(){
        var image=e.getAttribute("data-img")
        fixed.style.backgroundImage=`url(${image})`
    })
})

var headings = document.querySelectorAll('h4')
var b=document.querySelector("#div2")

headings.forEach(function(h){
    h.addEventListener("click",function(){
        headings.forEach(function (otherH) {
            otherH.style.color = "grey";
        });

        h.style.color="white"
        var image=h.getAttribute("data-img")
        b.style.backgroundImage=`url(${image})`
    })
})
}

function swiper(){
    var swiper = new Swiper(".mySwiper", {
        slidesPerView: "auto",
        centeredSlides: true,
        spaceBetween: 100,
      });
}

swiper()
page4()

var menu = document.querySelector("nav h3")
var scr = document.querySelector("#fullScr")
var img = document.querySelector("nav img")
var flag= 0
menu.addEventListener("click",function(){
    if(flag==0){
        fullScr.style.top=0
        img.style.opacity =0
        flag=1
    }else{
        fullScr.style.top="-100%"
        img.style.opacity =1
        flag=0
    }
    
})

var load = document.querySelector("#loader")
setTimeout(function(){
    load.style.top = "-100%"
},4000)
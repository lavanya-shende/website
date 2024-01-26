const scroll = new LocomotiveScroll({
    el: document.querySelector('#main'),
    smooth: true
})

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
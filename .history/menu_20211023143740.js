window.addEventListener("scroll",function(){
    var menuslide = document.querySelector("nav");
    menuslide.classList.toggle("abajo",window.scrollY>0)
})
window.addEventListener("scroll",function(){
    var menuslide = document.getElementById("menuslide");
    menuslide.classList.toggle("abajo",window.scrollY>0)
})
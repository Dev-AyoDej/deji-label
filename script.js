const nav = 
    document.getElementById("nav");

const menuBtn = 
    document.getElementById("menuBtn");

menuBtn.addEventListener("click", function(event){
    event.stopPropagation();
    nav.classList.toggle("active"); 
});

document.addEventListener("click", function(){
    nav.classList.remove("active");
});
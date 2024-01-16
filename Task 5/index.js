var thumbnails = document.getElementById("thumbnails")
var imgs = thumbnails.getElementsByTagName("img")
var main = document.getElementById("main")
var counter=0;

for(let i=0;i<imgs.length;i++){
  let img=imgs[i]
  
  
  img.addEventListener("click",function(){
  main.src=this.src
})
  
}

let slideIndex = 0;
showSlides();

function showSlides() {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1} 
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  setTimeout(showSlides, 2000);
}
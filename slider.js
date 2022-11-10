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
  if (slideIndex > slides.length){
    slideIndex = 1
  }    
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
  setTimeout(showSlides, 3000); // Change image every 3 seconds
}

let mybutton = document.getElementById("goTOP");

function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}

let progrid = document.querySelectorAll(".pro_grid_div")
// .addEventListener("click",showproduct);
// console.log(pro);
for(let i=0;i<progrid.length;i++){
  progrid[i].addEventListener("click",showproduct(() => {
    alert("prod,jgf");
  }));
}
// function showproduct(){
//   alert("Show products");
// }

document.querySelector("#menuBtn").addEventListener("click" ,()=>{
   let mobileMenu = document.querySelector(".overlay-deactive");
   mobileMenu.classList.remove("overlay-deactive");
   mobileMenu.classList.add("overlay-active");
  
})
document.querySelector("#backbtn").addEventListener("click" ,()=>{
    let mobileMenu = document.querySelector(".overlay-active");
    mobileMenu.classList.remove("overlay-active");
    mobileMenu.classList.add("overlay-deactive");
   
 })

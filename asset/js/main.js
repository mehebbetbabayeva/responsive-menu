document.querySelector("#menuBtn").addEventListener("click" ,()=>{
   let mobileMenu = document.querySelector(".deactive");
   mobileMenu.classList.remove("deactive");
   mobileMenu.classList.add("active");
  
})
document.querySelector("#backbtn").addEventListener("click" ,()=>{
    let mobileMenu = document.querySelector(".overlay");
    mobileMenu.classList.remove("active");
    mobileMenu.classList.add("deactive");
   
 })

document.querySelector(".overlay").addEventListener("click" , function(){
    this.classList.remove("active");
    this.classList.add("deactive");
});



 function navSize(){
    let width =window.innerWidth;
    if(width>900){
            
            let mobileMenu = document.querySelector(".overlay");
            mobileMenu.classList.remove("active");
            mobileMenu.classList.add("deactive");   
    }
    else{
        let mobileMenu = document.querySelector(".overlay");
        mobileMenu.classList.remove("deactive");
        mobileMenu.classList.add("active"); 
    }
 }
window.onresize =navSize;
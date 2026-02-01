let searchBtn=document.querySelector('#search-btn');
let searchBar=document.querySelector('.search-bar-container');
let formBtn=document.querySelector('#login-btn');
let loginForm=document.querySelector('.login-form-container');
let formClose=document.querySelector('#form-close');
let videoBtn=document.querySelectorAll('.vid-btn');
 
window.onscroll =() =>{
    searchBtn.classList.remove('fa-times');
    searchBar.classList.remove('active');
}
 
searchBtn.addEventListener('click',() =>{
    searchBtn.classList.toggle('fa-times');
    searchBar.classList.toggle('active');


});
formBtn.addEventListener('click',() =>{
    loginForm.classList.add('active');
  
});
formClose.addEventListener('click',() =>{
    loginForm.classList.remove('active');
   
});
videoBtn.forEach(btn=>{
    btn.addEventListener('click',()=>{
        document.querySelector('.controls.active').classList.remove('active');
        btn.classList.add('active');
        let src=btn.getAttribute('data-src');
        document.querySelector('#video-slider').src = src;

    });
});
var swiper=new Swiper(".review-slider",{
    spaceBetweem: 20,
    loop:true,
    autoplay:{
        delay:2500,
        disableOnInteraction: false,
    },
    breakpoints:{
        640:{
            slidePerview:1,
        },
        768:{
            slidePerview:2,
        },
        1024:{
            slidePerview:3,
        },
    },
});
var swiper=new Swiper(".brand-slider",{
    spaceBetweem: 20,
    loop:true,
    autoplay:{
        delay:2500,
        disableOnInteraction: false,
    },
    breakpoints:{
        450:{
            slidePerview:2,
        },
        768:{
            slidePerview:3,
        },
        991:{
            slidePerview:4,
        },
        1200: {
            slidesPerview:5
        }
       
    },
});

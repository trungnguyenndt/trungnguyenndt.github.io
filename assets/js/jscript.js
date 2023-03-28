// % SKILL
let number_1 = document.getElementById("skill-number-1");
let number_2 = document.getElementById("skill-number-2");
let number_3 = document.getElementById("skill-number-3");
let counter_1 = 0;
let counter_2 = 0;
let counter_3 = 0;
setInterval (()=> {
    if(counter_1 == 75){
        clearInterval();
    }
    else{
        counter_1 +=1;
        number_1.innerHTML =counter_1 + "%";
    }
},26)

setInterval (()=> {
    if(counter_2 == 65){
        clearInterval();
    }
    else{
        counter_2 +=1;
        number_2.innerHTML =counter_2 + "%";
    }
},30)

setInterval (()=> {
    if(counter_3 == 70){
        clearInterval();
    }
    else{
        counter_3 +=1;
        number_3.innerHTML =counter_3 + "%";
    }
},28)


// BG COLOR HEADER
$(document).ready(function(){
    $(document).on('click','.container-next-project ul li', function(){
        $(this).addClass('next_bg_color').siblings().removeClass('next_bg_color');
    })
})

function changeBg(){
    var header = document.getElementById('header');
    var scrollValue = window.scrollY;
    if (scrollValue < 150){
        header.classList.remove('bg-header');
    }else{
        header.classList.add('bg-header');
    }
}
window.addEventListener('scroll', changeBg);

// SCROLL SMOOTH
$('.nav a').on('click', function(e){
    if(this.hash!=''){
        e.preventDefault();
        const hash = this.hash;
        $('html, body').animate({
            scrollTop: $(hash).offset().top
        },800)
    }
})

// const observer = new IntersectionObserver((entries)=>{
//     entries.forEach((entry)=>{
//         console.log(entry)
//         if(entry.isIntersecting){
//             entry.target.classList.add('circle');
//         }else{
//             entry.target.classList.remove('circle');
//         }
//     })
// })

// const hiddenElements = document.querySelectorAll('.hidden');
// hiddenElements.forEach((el) => observer.observe(el));

// window.addEventListener('scroll', reveal);
// function reveal(){
//     var reveals = document.querySelectorAll('.container-circle');
//     for(var i = 0; i < reveals.length; i++){
//         var windowheight = window.innerHeight;
//         var revealtop = reveals[i].getBoundingClientRect().top;
//         var revealpoint = 159;
//         if(revealtop <windowheight - revealpoint){
//             reveals[i].classList.add('container-circle-trans');
//         }else{
//             reveals[i].classList.remove('container-circle-trans');
//         }
//     }
// }

// SCROLL SMOOTH
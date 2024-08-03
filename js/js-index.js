
//-------------------------------start-button--------------------------

$(document).ready(function(){
    var goToServiceVar = $("#button-start-click-a");  

    goToServiceVar.click(function(event){   
        event.preventDefault();    

        $("body, html").animate({   //.animate = jquery
            scrollTop: $(this.hash).offset().top,  // 
        },2000);

    })
});

//--------------------button-start-animation-----------------------------
document.addEventListener("DOMContentLoaded", function() {
    var buttonStart = document.querySelector('#button-start-click');
    if (window.innerWidth < 1100){
        buttonStart.style.transform = 'translateY(-200px)';
    }else{
        buttonStart.style.transform = 'translateY(-140px)';
    }
    buttonStart.style.filter = 'blur(0)';
    buttonStart.style.opacity = '1';

    setTimeout( function() {
        buttonStart.style.animation = 'jump 0.5s infinite alternate';
    }, 2000);
});
//-------------------------------------------------------------------------



//--------------------coverrrrrrrr-----------------------------

document.addEventListener("DOMContentLoaded", function() {
    let currentIndex = 0;
    const slides = document.querySelectorAll('.slides');
    const totalSlides = slides.length;

    function showSlide(index) {
        slides.forEach((slide, i) => {
            if (i === index) {
                slide.classList.add('actives');
            } else {
                setTimeout(function (){  
                    slide.classList.remove('actives');
                }, 1000);
                
            }
        });
    }

    function nextSlide() {
        currentIndex = (currentIndex + 1) % totalSlides;
        showSlide(currentIndex);
    }

    setInterval(nextSlide, 3000); // change image with a 3 seconds intervale

    showSlide(currentIndex); // Show first image at the start
});

//--------------------end cover-----------------------------





//-----------------------Service---------------------------
document.addEventListener("DOMContentLoaded", function() {
    var textLeft = document.querySelectorAll('.service-content-inter-text-left');
    var textRight = document.querySelectorAll('.service-content-inter-text-right')
    var imgs = document.querySelectorAll('.service-content-inter-img');
    var windowHeight = window.innerHeight;
    var windowWidth = window.innerWidth;
 
    function checkVisibility(){

        for (let i= 0; i < 6; i++){
            var boundingImg = imgs[i].getBoundingClientRect();
            
            if (boundingImg.top >= 0 && boundingImg.top <= windowHeight - 100){
                imgs[i].style.opacity = '1';
            }
        }

        for (var i = 0; i < 3; i++){
            var boundingLeft = textLeft[i].getBoundingClientRect();
            var boundingRight = textRight[i].getBoundingClientRect();

            if (windowWidth >= 1300){
                if (boundingLeft.top >= 0 && boundingLeft.top <= windowHeight - 100){
                    textLeft[i].style.opacity = '1';
                    textLeft[i].style.transform = 'translateX(-80px)';
                    textLeft[i].style.filter = 'blur(0)';
                }

                if (boundingRight.top >= 0 && boundingRight.top <= windowHeight - 100){
                    textRight[i].style.opacity = '1';
                    textRight[i].style.transform = 'translateX(80px)'
                    textRight[i].style.filter = 'blur(0)';
                }
            }else{
                if (boundingLeft.top >= 0 && boundingLeft.top <= (windowHeight - 100)){
                    textLeft[i].style.opacity = '1';
                    textLeft[i].style.transform = 'translateY(-40px)';
                    textLeft[i].style.filter = 'blur(0)';
                }

                if (boundingRight.top >= 0 && boundingRight.top <= (windowHeight - 100)){
                    textRight[i].style.opacity = '1';
                    textRight[i].style.transform = 'translateY(-40px)';
                    textRight[i].style.filter = 'blur(0)';
                }  
            }
        }

    }

    
    window.addEventListener('scroll', checkVisibility);
    window.addEventListener('resize', function() {
        windowHeight = window.innerHeight;
        windowWidth = window.innerWidth;
        checkVisibility();
     }); // verify the visibility when the user change the window size
    checkVisibility();

});

//click info service
document.querySelectorAll('.service-content-inter-text').forEach(function(element){
    element.addEventListener("click", function (event){
        var text = element.querySelector('.service-content-inter-text-p');
        var h2 = element.querySelector('.service-content-inter-text-h2');

    if (getComputedStyle(text).display === "none"){
        h2.style.opacity = "0";
        setTimeout(function (){
            h2.style.display = "none";
            text.style.display = "flex";
            setTimeout(function (){  
                text.style.opacity = "1";
            }, 100);
        }, 500);
        }else{
            text.style.opacity = "0";
            setTimeout(function (){
                h2.style.display = "block";
                text.style.display = "none";

                setTimeout(function (){  
                    h2.style.opacity = "1";
                }, 100);

            }, 500);
        }
    });
});
//----------------------------------------------------------------


//---------------------cursor service----------------------------

var cursorService = document.getElementById("cursor-service");

window.addEventListener('scroll', function() {
    scrollVertical = window.scrollY;
    var wantedPosition = 500;   
    var h1_0 = document.getElementById("service-content-inter-text-h2-id0");
    var text_0 = document.getElementById("service-content-inter-text-p-id0");

    if ((wantedPosition < scrollVertical) && cursorService.style.display !== 'none'){
        cursorService.style.transform = 'translateX(0) translateY(36px)';
        cursorService.style.opacity = '1';

        setTimeout(function (){  
            cursorService.style.transition = 'transform 300ms ease, opacity 1s ease, color 300ms ease';
            cursorService.style.transform = 'scale(1.2)';
        }, 2000);

        setTimeout(function (){  
            cursorService.style.opacity = '0';
            
            h1_0.style.opacity = "0";
            setTimeout(function (){
                cursorService.style.display = 'none';
                h1_0.style.display = "none";
                text_0.style.display = "flex";


                setTimeout(function (){  
                    text_0.style.opacity = "1";
                }, 100);

            }, 500);

        }, 2300);

    }

});

//--------------------------------------------------------------





//----------------------curse-slider-auto------------------------//

let slider = document.querySelector(".container-slider");
let sliderIndividual = document.querySelectorAll(".content-slider")
let counter = 1;
let width = sliderIndividual[0].clientWidth;
let interval = 3000;
let reverse = false;

window.addEventListener("resize", function(){
    width = sliderIndividual[0].clientWidth;
});

setInterval(function(){
    slides();
}, interval);

function slides(){

    if (counter < 6 && !reverse){
        slider.style.transform = "translate(" + (-width * counter)+"px)";
        slider.style.transition = "transform 1.5s ease"
        counter++;
        
    }else{
        reverse = true
        
    }

    if (counter > 0 && reverse){
        counter--;
        slider.style.transform = "translate(" + (-width * counter)+"px)";
        slider.style.transition = "transform 1.5s ease"
    }else{
        reverse = false;
    }

}




const elements = document.getElementsByClassName('bar');
var arrow = document.querySelectorAll('.inactive');

for (let i = 0; i < elements.length; i++) {
    
    elements[i].addEventListener('click', () => {
        const containerBar = elements[i].querySelector('.container-bar');
        const isActive = containerBar.classList.contains('active-bar');
        

        // hide all bar containers before show the clicked bar
        const allContainerBars = document.querySelectorAll('.container-bar');
        allContainerBars.forEach(container => {
            container.classList.remove('active-bar');
        });
        arrow.forEach(arrows => {
            arrows.style.transform = 'rotate(0)';
        });

        // If the atual container is off, show it. otherwise, hide it 
        
        if (!isActive) {
            containerBar.classList.toggle('active-bar');
            arrow[i].style.transform = 'rotate(90deg)';
        }
    });
}


var myElemento = document.querySelectorAll('.section-curse-slider-h2');
var sliderAll = document.querySelectorAll('.slider-img')


    // Ejecute when the mouse enter to the element 
    for (let i = 0; i < 6; i++){
        myElemento[0].addEventListener('mouseenter', function() {
        sliderAll[i].style.filter = 'blur(4px) brightness(0.6)';

    });
    
    myElemento[0].addEventListener('mouseleave', function() {
        // Ejecute when the mouse go out the element 
        sliderAll[i].style.filter = 'blur(0px) brightness(1)';
    });
    }




//--------page movements, apart of services movements---------
document.addEventListener("DOMContentLoaded", function() {
    var testimony1 = document.getElementById("container-testimonial-1");
    var testimony2 = document.getElementById("container-testimonial-2");
    var testimony3 = document.getElementById("container-testimonial-3");
    var questionBar = document.querySelectorAll('.bar');

    var windowHeight = window.innerHeight;

    function checkVisibility(){
                                        
            var boundingTestimony1 = testimony1.getBoundingClientRect();
            
            if (boundingTestimony1.top >= 0 && boundingTestimony1.top <= windowHeight - 200){
                testimony1.style.transform = 'rotate(0deg)';
                testimony1.style.opacity  = '1';
            }

            var boundingTestimony2 = testimony2.getBoundingClientRect();
            
            if (boundingTestimony2.top >= 0 && boundingTestimony2.top <= windowHeight - 200){
                testimony2.style.opacity  = '1';
            }

            var boundingTestimony3 = testimony3.getBoundingClientRect();
            
            if (boundingTestimony3.top >= 0 && boundingTestimony3.top <= windowHeight - 200){
                testimony3.style.transform = 'rotate(0deg)';
                testimony3.style.opacity  = '1';
            }
        
                                        
            for (let i = 0; i < questionBar.length; i++){
                var boundingQuestBar = questionBar[i].getBoundingClientRect();
                
                if (boundingQuestBar.top >= 0 && boundingQuestBar.top <= windowHeight){
                    questionBar[i].style.transform = 'translate(0)';
                    questionBar[i].style.opacity  = '1';
                    questionBar[i].style.filter = 'blur(0)'
                }
            }
        
        
        }


    

    
    window.addEventListener('scroll', checkVisibility);
    window.addEventListener('resize', function() {
        windowHeight = window.innerHeight;
        windowWidth = window.innerWidth;
        checkVisibility();
     }); // verify the visibility when the user change the window size
    checkVisibility();

});

//---------------------------------------------------------




//-------------------------------start-button--------------------------

$(document).ready(function(){
    var goToServiceVar = $("#button-start-click-a");  //Declaramos variable ir_a y le decimos que su valor es la clase .desplazar

    goToServiceVar.click(function(event){   //cuando se haga click a ir_a, se ejecutará la funcion con evento 
        event.preventDefault();    //previene configuraciones default

        $("body, html").animate({   //.animate es de jquery
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

    setInterval(nextSlide, 3000); // Cambia la imagen cada 3 segundos

    showSlide(currentIndex); // Muestra la primera imagen al cargar la página
});

//--------------------fin coverrrrrrrr-----------------------------





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
     }); // Vuelve a verificar la visibilidad al cambiar el tamaño de la ventana
    checkVisibility();

});

//click info service
document.querySelectorAll('.service-content-inter-text').forEach(function(element){
    element.addEventListener("click", function (event){
        var text = element.querySelector('.service-content-inter-text-p');
        var h1 = element.querySelector('.service-content-inter-text-h1');

    if (getComputedStyle(text).display === "none"){
            h1.style.opacity = "0";
            setTimeout(function (){
                h1.style.display = "none";
                text.style.display = "flex";

                setTimeout(function (){  
                    text.style.opacity = "1";
                }, 100);

            }, 500);
        }else{
            text.style.opacity = "0";
            setTimeout(function (){
                h1.style.display = "block";
                text.style.display = "none";

                setTimeout(function (){  
                    h1.style.opacity = "1";
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
    var posicionDeseada = 500;   
    var h1_0 = document.getElementById("service-content-inter-text-h1-id0");
    var text_0 = document.getElementById("service-content-inter-text-p-id0");

    if ((posicionDeseada < scrollVertical) && cursorService.style.display !== 'none'){
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
let contador = 1;
let width = sliderIndividual[0].clientWidth;
let intervalo = 3000;
let reverse = false;

window.addEventListener("resize", function(){
    width = sliderIndividual[0].clientWidth;
});

setInterval(function(){
    slides();
}, intervalo);

function slides(){

    if (contador < 6 && !reverse){
        slider.style.transform = "translate(" + (-width * contador)+"px)";
        slider.style.transition = "transform 1.5s ease"
        contador++;
        
    }else{
        reverse = true
        
    }

    if (contador > 0 && reverse){
        contador--;
        slider.style.transform = "translate(" + (-width * contador)+"px)";
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
        

        // Oculta todos los contenedores de barra antes de mostrar el actual
        const allContainerBars = document.querySelectorAll('.container-bar');
        allContainerBars.forEach(container => {
            container.classList.remove('active-bar');
        });
        arrow.forEach(arrows => {
            arrows.style.transform = 'rotate(0)';
        });

        // Si el contenedor actual no está activo, muéstralo; de lo contrario, ocúltalo
        
        if (!isActive) {
            containerBar.classList.toggle('active-bar');
            arrow[i].style.transform = 'rotate(90deg)';
        }
    });
}


var miElemento = document.querySelectorAll('.section-curse-slider-h1');
var sliderAll = document.querySelectorAll('.slider-img')


    // Se ejecuta cuando el mouse entra en el elemento
    for (let i = 0; i < 6; i++){
    miElemento[0].addEventListener('mouseenter', function() {
        sliderAll[i].style.filter = 'blur(4px) brightness(0.6)';

    });
    
    miElemento[0].addEventListener('mouseleave', function() {
        // Se ejecuta cuando el mouse sale del elemento
        sliderAll[i].style.filter = 'blur(0px) brightness(1)';
    });
    }




//--------movimientos de pagina aparte de la de servicios---------
document.addEventListener("DOMContentLoaded", function() {
    var testimonio1 = document.getElementById("container-testimonial-1");
    var testimonio2 = document.getElementById("container-testimonial-2");
    var testimonio3 = document.getElementById("container-testimonial-3");
    var barPreguntas = document.querySelectorAll('.bar');
    var barPreguntas1 = document.querySelectorAll('.bar-1');
    var barPreguntas2 = document.querySelectorAll('.bar-2');

    var windowHeight = window.innerHeight;
    var windowWidth = window.innerWidth;

    function checkVisibility(){
                                        //testimonios
            var boundingTestimonio1 = testimonio1.getBoundingClientRect();
            
            if (boundingTestimonio1.top >= 0 && boundingTestimonio1.top <= windowHeight - 200){
                testimonio1.style.transform = 'rotate(0deg)';
                testimonio1.style.opacity  = '1';
            }

            var boundingTestimonio2 = testimonio2.getBoundingClientRect();
            
            if (boundingTestimonio2.top >= 0 && boundingTestimonio2.top <= windowHeight - 200){
                testimonio2.style.opacity  = '1';
            }

            var boundingTestimonio3 = testimonio3.getBoundingClientRect();
            
            if (boundingTestimonio3.top >= 0 && boundingTestimonio3.top <= windowHeight - 200){
                testimonio3.style.transform = 'rotate(0deg)';
                testimonio3.style.opacity  = '1';
            }
        
                                        //preguntas frecuentes
            for (let i = 0; i < barPreguntas.length; i++){
                var boundingBarPreg = barPreguntas[i].getBoundingClientRect();
                
                if (boundingBarPreg.top >= 0 && boundingBarPreg.top <= windowHeight){
                    barPreguntas[i].style.transform = 'translate(0)';
                    barPreguntas[i].style.opacity  = '1';
                    barPreguntas[i].style.filter = 'blur(0)'
                }
            }
        
        
        }


    

    
    window.addEventListener('scroll', checkVisibility);
    window.addEventListener('resize', function() {
        windowHeight = window.innerHeight;
        windowWidth = window.innerWidth;
        checkVisibility();
     }); // Vuelve a verificar la visibilidad al cambiar el tamaño de la ventana
    checkVisibility();

});

//---------------------------------------------------------







/*
//---------------------------frequent questions-----------------------
document.querySelectorAll('.bar').forEach(container_visible => {
    container_visible.addEventListener('click', () =>{
        const content = container_visible.querySelector('.container-bar');
        
        const arrowInactive = container_visible.querySelector('.inactive');
        const arrowActive = container_visible.querySelector('.active');

        // Verificar si otro contenido está desplegado
        const otherContents = document.querySelectorAll('.container-visible');
        otherContents.forEach(otherContent => {
            if (otherContent !== content) {
                otherContent.classList.remove('container-visible');
                otherContent.style.maxHeight = 0;
            }
        });

        // Alternar la visibilidad del contenido actual
        content.classList.toggle('container-visible');
        if (content.classList.contains('container-visible')) {
            content.style.maxHeight = content.scrollHeight + "px";
        } else {
            content.style.maxHeight = 0;
        }

        // Alternar las clases de las flechas
        arrowInactive.classList.toggle('inactive-click');
        arrowActive.classList.toggle('active-click');
    });
});

*/


/*

for( let i = 1; i <= 7; i++){
    let img = document.getElementById("slider-img-" + i);
    let img_last = document.getElementById("slider-img-" + (i-1));
    setTimeout(function() {
        
        img.style.display = "flex";
        img_last.style.display = "none";

        if (i === 6){
            i = 1;
        }

    },i * 2000); // Ajusta el tiempo según la duración de la animación
    

 
}*/

/*
//----------------------------Service button-------------------------//
document.getElementById("service-but").addEventListener("click", showServices);

function showServices(){
    document.getElementById("service-content-id").classList.toggle('service-content-active');
}

document.getElementById("service-menu-option").addEventListener("click", showServicesMenu);

function showServicesMenu(){
    if (!document.getElementById("service-content-id").classList.contains('service-content-active')){
        document.getElementById("service-content-id").classList.toggle('service-content-active');
    }else{}
}
*/
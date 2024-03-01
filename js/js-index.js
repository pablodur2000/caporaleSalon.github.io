
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
    buttonStart.style.transform = 'translate(0)';
    buttonStart.style.filter = 'blur(0)';

    setTimeout( function() {
        buttonStart.style.animation = 'jump 0.5s infinite alternate';
    }, 2000);
});
//-------------------------------------------------------------------------

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

//---------------------------smooth service scroll--------------------//

$(document).ready(function(){
    var ir_a = $(".desplazar");  //Declaramos variable ir_a y le decimos que su valor es la clase .desplazar

    ir_a.click(function(event){   //cuando se haga click a ir_a, se ejecutará la funcion con evento 
        event.preventDefault();    //previene configuraciones default

        $("body, html").animate({   //.animate es de jquery
            scrollTop: $(this.hash).offset().top  // 
        },800);

    })
});

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

for (let i = 0; i < elements.length; i++) {
    elements[i].addEventListener('click', () => {
        const containerBar = elements[i].querySelector('.container-bar');
        const isActive = containerBar.classList.contains('active-bar');

        // Oculta todos los contenedores de barra antes de mostrar el actual
        const allContainerBars = document.querySelectorAll('.container-bar');
        allContainerBars.forEach(container => {
           
            container.classList.remove('active-bar');
            
        });

        // Si el contenedor actual no está activo, muéstralo; de lo contrario, ocúltalo
        
        if (!isActive) {
            containerBar.classList.toggle('active-bar');
            
        }
    });
}







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
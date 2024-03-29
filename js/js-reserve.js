var smallWidth;


document.addEventListener("DOMContentLoaded", function() {
    setTimeout(function() {
        if (window.innerWidth <= 530){
            button.style.transform = 'translateX(-50%)';
            content.style.transform = 'translateX(-50%)';
        }else{
            button.style.transform = 'translateX(0px)';
            content.style.transform = 'translateX(0px)';
        }
        button.style.filter = 'blur(0px)';
    },1000); // Ajusta el tiempo según la duración de la animación
});




//-----------------------how reserve-------------------------

let button = document.getElementById("how-reserve-container");
let content = document.getElementById("how-reserve-content");
let actives = false;
let all = document.getElementById("all");

button.onclick = function (){
    
    if (actives == false){
        all.style.filter = 'grayscale() blur(4px)';
        if (window.innerWidth <= 530){
            content.style.height = '70vh';
        }else{
            content.style.height = '600px';
        }
        
        button.style.borderTop = '0';
        content.style.border = '4px solid rgb(182, 182, 182)';
        button.style.borderRadius = '0 0 10px 10px'
        content.style.overflowY = 'auto';
        actives = true;
    }else{
        all.style.filter = 'none';
        content.style.height = '0';
        button.style.borderTop = '4px solid rgb(182, 182, 182)';
        content.style.border = '0';
        button.style.borderRadius = '10px'
        actives = false;
    }
    
}


//-------------------------how reserve animate-------------------------
window.addEventListener('scroll', function() {
    var scrollVertical = window.scrollY;


    if (scrollVertical >=  200){
        hideReserve();
    }else{
        showReserve();
    }

});

document.getElementById("icon-menu").addEventListener("click", ocultarHowReserve);
document.getElementById("icon-menu-active").addEventListener("click", mostrarHowReserve);

function mostrarHowReserve(){
    var scrollVertical = window.scrollY;
    if (scrollVertical <= 200){
        showReserve()
    }else{
        hideReserve();
    }
}

function ocultarHowReserve(){
        hideReserve();
}


function hideReserve(){
    content.style.transform = 'translateX(600px)';
    content.style.height = '0';
    content.style.border = '0';
    content.style.opacity = '0';
    button.style.transform = 'translateX(400px)';
    button.style.borderTop = '4px solid rgb(182, 182, 182)';
    button.style.borderRadius = '10px';
    button.style.filter = 'blur(10px)';
    all.style.filter = 'none';
    actives = false;
}

function showReserve(){
    button.style.filter = 'blur(0px)';
    content.style.opacity = '1';
    if (window.innerWidth <= 530){
        button.style.transform = 'translateX(-50%)';
        content.style.transform = 'translateX(-50%)';
    }else{
        button.style.transform = 'translateX(0px)';
        content.style.transform = 'translateX(0px)';
    }
}

//-----------------------------slider---------------------

let items = document.querySelectorAll('.slider .item');
let active = 0;
function loadShow(){
    items[active].style.transform = `none`;
    items[active].style.zIndex = 1;
    items[active].style.filter = 'none';
    items[active].style.opacity = 1;
    // show after
    let stt = 0;
    for(var i = active + 1; i < items.length; i ++){
        stt++;
        items[i].style.transform = `translateX(${180*stt}px) scale(${0.8 - 0.2*stt}) perspective(16px) rotateY(-1deg)`;
        items[i].style.zIndex = -stt;
        items[i].style.filter = 'blur(5px)';
        items[i].style.opacity = stt > 2 ? 0 : 0.6;
    }
     stt = 0;
    for(var i = (active - 1); i >= 0; i --){
        stt++;
        items[i].style.transform = `translateX(${-180*stt}px) scale(${0.8 - 0.2*stt}) perspective(16px) rotateY(1deg)`;
        items[i].style.zIndex = -stt;
        items[i].style.filter = 'blur(5px)';
        items[i].style.opacity = stt > 2 ? 0 : 0.6;
    }
}
loadShow();
let next = document.getElementById('next');
let prev = document.getElementById('prev');
next.onclick = function(){
   active = active + 1 < items.length ?  active + 1 : active;
   loadShow();
}
prev.onclick = function(){
    active = active - 1 >= 0 ? active -1 : active;
    loadShow();
}




var smallWidth;
let buttonsContainer = document.querySelector('.bottom-buttons');
let button = document.querySelectorAll('.button');

document.addEventListener("DOMContentLoaded", function() {
    setTimeout(function() {
        if (window.innerWidth <= 530){
            buttonsContainer.style.opacity = '1';
        }else{
            buttonsContainer.style.opacity = '1';
        }
       
    },1000);
});



/*
//-----------------------how reserve-------------------------

let all = document.getElementById("all");
let content = document.getElementById("how-reserve-content");
let actives = false;
button[1].onclick = function (){
    
    if (actives == false){
        all.style.filter = 'grayscale() blur(4px)';
        if (window.innerWidth <= 530){
            content.style.height = '77vh';
        }else{
            content.style.height = '600px';
        }
        
        button[1].style.borderTop = '0';
        button[1].style.borderRadius = '0 0 10px 10px'
        button[1].style.height = '75px';
        content.style.border = '4px solid rgb(182, 182, 182)';
        content.style.overflowY = 'auto';
        actives = true;
    }else{
        all.style.filter = 'none';
        content.style.height = '0';
        content.style.border = '0';
        button[1].style.border = '4px solid rgb(182, 182, 182)';
        button[1].style.borderRadius = '10px'
        button[1].style.height = '60px';
        actives = false;
    }
    
}


//-----------------------view prices-------------------------

let paragraphPrices = document.getElementById("view-prices-h2");
document.addEventListener("DOMContentLoaded", function() {
    function check(){
        if (window.innerWidth <= 450){
            paragraphPrices.innerHTML = "Precios";
        }else{
            paragraphPrices.innerHTML = "Ver precios";
        }
    }

    window.addEventListener('resize', check);
    check();
});
//-------------------------how reserve animate-------------------------
window.addEventListener('scroll', function() {
    var scrollVertical = window.scrollY;


    if (scrollVertical >= 200){
        hideReserve();
        hideReserveContent();
        setTimeout(function() {           
            button[0].style.transform = 'translateX(-500px)';
            button[1].style.transform = 'translateX(500px)';
        },700); 
    }else{
        showReserveContent();
        setTimeout(function() {           
            button[0].style.transform = 'translateX(0)';
            button[1].style.transform = 'translateX(0)';
        },700); 
    }

});

//_-----------------------------_________-----__

document.getElementById("icon-menu").addEventListener("click", ocultarHowReserve);
document.getElementById("icon-menu-active").addEventListener("click", mostrarHowReserve);

function mostrarHowReserve(){
    var scrollVertical = window.scrollY;
    if (scrollVertical <= 200){
        showReserveMenu();
    }else{
        hideReserveMenu();
        hideReserveContent();
    }
}

function ocultarHowReserve(){
    hideReserveMenu();
    hideReserveContent();
}


function hideReserveContent(){
    content.style.transform = 'translateX(600px)';
    content.style.height = '0';
    content.style.border = '0';
    button[1].style.border = '4px solid rgb(182, 182, 182)';
    button[1].style.borderRadius = '10px'
    button[1].style.height = '60px';
    all.style.filter = 'none';
    actives = false;
}

function hideReserve(){
    buttonsContainer.style.backgroundColor = 'rgb(15, 15, 15, 0)';
    actives = false;
}


function showReserveContent(){
    content.style.transform = 'translateX(0)'
    buttonsContainer.style.backgroundColor = '#ffffff73';
}

function hideReserveMenu(){
        var scrollVertical = window.scrollY;
    if (scrollVertical <= 200){
        buttonsContainer.style.transform = 'translateX(-300px)';
        buttonsContainer.style.filter = 'blur(5px)';
    }else{
    }

}

function showReserveMenu(){
    content.style.transform = 'translateX(0)'
    buttonsContainer.style.paddingLeft = '3%';
    buttonsContainer.style.transform = 'translateX(0)';
    buttonsContainer.style.filter = 'blur(0)';
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



*/
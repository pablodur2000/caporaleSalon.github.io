document.addEventListener("DOMContentLoaded", function() {
if (window.location.pathname.includes("reserve.html")){
    document.getElementById("reserve-menu-id").style.display = 'none';
}
});
//--------------------------------Menu-----------------------------
document.getElementById("icon-menu").addEventListener("click", mostrarMenu);
document.getElementById("icon-menu-active").addEventListener("click", mostrarMenu);


var scrollVertical = 0;

function mostrarMenu(){
    document.getElementById("show-menu").classList.toggle('show-lateral');
    document.getElementById("icon-menu").classList.toggle('icon-menu-off');
    document.getElementById("icon-menu-active").classList.toggle('icon-menu-active-on');
    
    var all = document.getElementById("all");   //obtiene el elemento id de all
    all.classList.toggle("all-active");         //cambia a all-active cuando se presiona el boton
    if (!all.classList.contains("all-active")) { //si all no contiene all-active
        
            all.classList.add("all-inactive");   //si contiene all-active, 
              //añado all.inactive
        setTimeout(function() {
            all.classList.remove("all-inactive");   //si contiene all-active, 
        },500); // Ajusta el tiempo según la duración de la animación
    }
    
    var reserve = document.getElementById("reserve-menu-id");
    reserve.classList.toggle("reserve-menu-off");
    
    

    var social = document.getElementById("icons-social-media");
    if (social.classList.contains('social-media-container-off' && !scrollVertical >= 800)){
        social.classList.remove("social-media-container-off");
    }else if (!social.classList.contains('social-media-container-off') && scrollVertical >= 800) {
        social.classList.add("social-media-container-off");
    } else{
        social.classList.remove("social-media-container-off");
    }


};

document.getElementById("icons-social-media").style.display = "none";  //icons.social-media inicia con display none
//-------------------------heeader-off-------------------------
window.addEventListener('scroll', function() {
    scrollVertical = window.scrollY;
    
    var posicionDeseada; // Cambia este valor por la posición en la que deseas que ocurra la acción

    if (window.location.pathname.includes("curse.html")){  //window.location.pathname == obtener la url actual
        posicionDeseada = 100;
    }else if (window.location.pathname.includes("reserve.html")){
        posicionDeseada = 200;

    }else{
        posicionDeseada = 800;
    }

    var alturaPagina = document.body.scrollHeight;           // Altura total de la página
    var alturaViewport = (window.innerHeight + 400);              // Altura del viewport
    var alturaLogo = (window.innerHeight + 500);

    var posicionOcultarRedes = alturaPagina - alturaViewport;
    var moveLogo = alturaPagina - alturaLogo;

    if (scrollVertical >= posicionDeseada) {
        document.getElementById("header").classList.add('header-off');   
        document.getElementById("show-menu").classList.add('show-lateral-margin');
        document.getElementById("icons-social-media").classList.add('icons-social-media-active');
        document.getElementById("icons-social-media").classList.remove('icons-social-media-inactive');    
        document.getElementById("icons-social-media").style.display = "flex";
    }else {
        document.getElementById("icons-social-media").classList.add('icons-social-media-inactive');
        document.getElementById("header").classList.remove('header-off');
        document.getElementById("show-menu").classList.remove('show-lateral-margin');
        document.getElementById("icons-social-media").classList.remove('icons-social-media-active');
    }

    if (scrollVertical >= posicionOcultarRedes){
        document.getElementById("icons-social-media").classList.add('icons-social-media-inactive'); 
        document.getElementById("icons-social-media").classList.remove('icons-social-media-active');
    }


    const leftLogo = document.querySelector(".logo-footer-left");
    const rightLogo = document.querySelector(".logo-footer-right");

    if (scrollVertical >= moveLogo){
        leftLogo.classList.add('logo-footer-active', 'logo-footer-left-moveIn');
        rightLogo.classList.add('logo-footer-active', 'logo-footer-right-moveIn')
        leftLogo.classList.remove('logo-footer-left-moveOut');
        rightLogo.classList.remove('logo-footer-right-moveOut');
    }else {
        leftLogo.classList.remove('logo-footer-active', 'logo-footer-left-moveIn')
        rightLogo.classList.remove('logo-footer-active', 'logo-footer-right-moveIn');
        rightLogo.classList.add('logo-footer-right-moveOut'); 
        leftLogo.classList.add('logo-footer-left-moveOut');
    }
    

});


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
//--------------------------------Menu-----------------------------
document.getElementById("icon-menu").addEventListener("click", mostrarMenu);
document.getElementById("icon-menu-active").addEventListener("click", mostrarMenu);

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
};


//-------------------------heeader-off-------------------------
window.addEventListener('scroll', function() {
    var scrollVertical = window.scrollY;
    var posicionDeseada = 800; // Cambia este valor por la posición en la que deseas que ocurra la acción

    if (scrollVertical >= posicionDeseada) {
        document.getElementById("header").classList.add('header-off');
        document.getElementById("show-menu").classList.add('show-lateral-margin');
    }else{
        document.getElementById("header").classList.remove('header-off');
        document.getElementById("show-menu").classList.remove('show-lateral-margin');
        }
});

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
//---------------------------smooth service scroll--------------------//

$(document).ready(function(){
    var ir_a = $(".desplazar");  //Declaramos variable ir_a y le decimos que su valor es la clase .desplazar

    ir_a.click(function(event){   //cuando se haga click a ir_a, se ejecutará la funcion con evento 
        event.preventDefault();    //previene configuraciones default

        $("body, html").animate({   //.animate es de jquery
            scrollTop: $(this.hash).offset().top,  // 
        },800);

    })

    

});

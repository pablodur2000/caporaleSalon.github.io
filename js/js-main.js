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




//----------------------------Service button-------------------------//
document.getElementById("service-button").addEventListener("click", showServices);

function showServices(){
    document.getElementById("service-content-id").classList.toggle('service-content-active');
}
//---------------------------smooth service scroll--------------------//

document.getElementById("service-link").addEventListener("click", function(event) {
    event.preventDefault(); // Evita el comportamiento predeterminado del enlace

    // Obtén el elemento del contenido del servicio
    var serviceContent = document.getElementById("service-content-id");
    
    // Calcula la posición del elemento con respecto a la parte superior del documento
    var offsetTop = serviceContent.getBoundingClientRect().top + window.pageYOffset;
    
    // Calcula la diferencia entre la posición actual de desplazamiento y la posición del elemento
    var offset = offsetTop - window.pageYOffset;
    
    // Duración de la animación en milisegundos
    var duration = 500; // 0.5 segundos

    // Tiempo inicial de la animación
    var startTime = null;

    // Función para realizar el desplazamiento suave
    function scrollToElement(timestamp) {
        // Si es la primera vez que se ejecuta la función, registra el tiempo de inicio
        if (!startTime) startTime = timestamp;

        // Calcula el tiempo transcurrido desde el inicio de la animación
        var elapsed = timestamp - startTime;

        // Calcula el progreso de la animación (un valor entre 0 y 1)
        var progress = elapsed / duration;

        // Realiza el desplazamiento suave hacia el elemento multiplicando la diferencia de posición por el progreso
        window.scrollTo(0, window.pageYOffset + offset * progress);

        // Si la animación no ha terminado, solicita el siguiente cuadro de animación
        if (elapsed < duration) {
            window.requestAnimationFrame(scrollToElement);
        }
    }

    // Inicia la animación de desplazamiento suave solicitando el primer cuadro de animación
    window.requestAnimationFrame(scrollToElement);
});

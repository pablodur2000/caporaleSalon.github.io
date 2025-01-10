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
    
    var all = document.getElementById("all");   
    all.classList.toggle("all-active");         //change to all-active when the user press the button
    if (!all.classList.contains("all-active")) { //if all don't content all-active
        
            all.classList.add("all-inactive");  
              //añado all.inactive
        setTimeout(function() {
            all.classList.remove("all-inactive");   
        },500); // Adjust the time according to animation
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

document.getElementById("icons-social-media").style.display = "none";  //icons-social-media, initially display none
//-------------------------heeader-off-------------------------
window.addEventListener('scroll', function() {
    scrollVertical = window.scrollY;
    
    var wantedPosition; // change this value depends of the position that you want activate the anuimation

    if (window.location.pathname.includes("curse.html")){  //window.location.pathname == get actual url 
        wantedPosition = 100;
    }else if (window.location.pathname.includes("reserve.html")){
        wantedPosition = 200;

    }else{
        wantedPosition = 800;
    }

    var pageHeight = document.body.scrollHeight;           // total height of the page 
    var viewportHeight = (window.innerHeight + 400);              // total height of the viewport
    var logoHeight = (window.innerHeight + 500);

    var hideRedPosition = pageHeight - viewportHeight;
    var moveLogo = pageHeight - logoHeight;

    if (scrollVertical >= wantedPosition) {
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

    if (scrollVertical >= hideRedPosition){
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
    var ir_a = $(".desplazar");  

    ir_a.click(function(event){   
        
        event.preventDefault();    

        $("body, html").animate({   
            scrollTop: $(this.hash).offset().top  // 
        },800);

        mostrarMenu();

    })
});


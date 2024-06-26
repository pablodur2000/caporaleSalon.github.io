

//------------------------prices-------------------------

var h2Prices = document.querySelectorAll('.h2-prices');
var pPrices = document.querySelectorAll('.p-prices');
var circles = document.querySelectorAll('.curse-container-bottom-prices-top-circle');
var circleActive = document.querySelectorAll('.curse-container-bottom-prices-top-circle-active');

for (let i = 0; i < h2Prices.length; i++){

    h2Prices[i].addEventListener('click', function () {
        
        circles.forEach(circle => {
            circle.style.backgroundColor = 'white';
        });

        circleActive.forEach(circleA => {
            circleA.style.opacity = '0';
        });

        pPrices.forEach(p => {
            p.style.padding = '0';
            p.style.maxHeight = '0';
            p.style.opacity = '0';
        });

        pPrices[i].style.opacity = '1';
        pPrices[i].style.padding = '10px 0 30px 15px';
        pPrices[i].style.maxHeight = '300px';

        circles[i].style.backgroundColor = 'yellow';

        circleActive[i].style.opacity = '1';


    });

}


//-----------End Prices------------

//---------------------volume on---------------------

document.addEventListener("DOMContentLoaded", function() {
    var botton = document.querySelectorAll('.curse-content-info-top-testimony-volumeOn');
    var video = document.getElementById("curse-content-info-top-testimony-video");
    var buttonMute = document.querySelectorAll('.fa-volume-xmark');
    var mute = true;

    botton[0].addEventListener('click', function() {
        if (mute == true){
            video.muted = false;
            botton[0].style.top = '10%';
            botton[0].style.backgroundColor = 'black';
            buttonMute[0].style.color = 'white';
            buttonMute[0].style.opacity = '1';
            video.style.filter = 'brightness(1) blur(0px)';
            mute = false;
        }else{
            video.muted = true;
            botton[0].style.top = '50%';
            botton[0].style.backgroundColor = 'white';
            buttonMute[0].style.color = 'white';
            buttonMute[0].style.opacity = '0';
            video.style.filter = 'brightness(0.3) blur(1px)';
            mute = true;
        }
        

    });

});



//-------------------Movimientos página-----------------

document.addEventListener("DOMContentLoaded", function() {
    var titleCurse = document.querySelectorAll('.title-curse');
    var imgCover = document.getElementById('img-cover');
    var containersTopIndividual = document.querySelectorAll('.curse-container-top-info-individual');
    var containerTopInfo = document.querySelectorAll('.curse-container-top-info');
    var contentIndividual = document.querySelectorAll('.curse-container-medium-inter-individual');
    var contentIndividualP = document.querySelectorAll('.curse-container-medium-inter-individual-p');
    var imgPrices = document.querySelectorAll('.curse-container-bottom-prices-img');
    var wppPrices = document.querySelectorAll('.curse-container-bottom-prices-bottom-wpp-container');


    var windowHeight = window.innerHeight;
    var windowWidth = window.innerWidth;

    function checkVisibility(){


        var boundingTitleCurse = titleCurse[0].getBoundingClientRect();

        if (boundingTitleCurse.top >= 0 && boundingTitleCurse.top <= windowHeight){
            titleCurse[0].style.opacity = '1';
            imgCover.style.filter = 'none'
        }        


        for (let i = 0; i < containersTopIndividual.length; i++){

            var boundingcontainersTopIndividual = containersTopIndividual[i].getBoundingClientRect();
            var medida;
            if (windowWidth < 1200){
                medida = 0;
            }else{
                medida = 70;
            }

            if (boundingcontainersTopIndividual.top >= 0 && boundingcontainersTopIndividual.top <= windowHeight - medida){
                containerTopInfo[0].style.backdropFilter = 'blur(4px)';
                containersTopIndividual[i].style.opacity = '1';
                containersTopIndividual[i].style.transform = 'translateY(0)';
            }
        }

        for (let i = 0; i < contentIndividual.length; i++){

            var boundingcontentIndividual = contentIndividual[i].getBoundingClientRect();
            

            if (boundingcontentIndividual.top >= 0 && boundingcontentIndividual.top <= windowHeight - 200){
                contentIndividualP[i].style.opacity = '1';

                setTimeout(function (){  
                    contentIndividual[i].style.backgroundColor = 'rgba(142, 142, 142)';
                }, 300);
            }
        }

        var boundingImgPrices = imgPrices[0].getBoundingClientRect();
            
        if (boundingImgPrices.top >= 0 && boundingImgPrices.top <= windowHeight - 250){
            imgPrices[0].style.filter = 'contrast(1.2)';

            setTimeout(function (){  
                wppPrices[0].style.opacity = '1';
            }, 1200);
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























/*

document.addEventListener("DOMContentLoaded", function() {
    var textProxDate = document.getElementById("curse-content-info-top-div-imgStart-small-h1")
    var textSides = document.querySelectorAll('.curse-content-info-top-div-imgStart-large-text');
    var borderImg1 = document.querySelectorAll('.curse-content-info-top-div-imgStart-large-img1');
    var borderImg2 = document.querySelectorAll('.curse-content-info-top-div-imgStart-large-img2');
    var syllabus = document.getElementById("curse-content-info-top-div-syllabus");
    var matricle = document.querySelectorAll('.curse-content-info-bottom-div-matricle-horizontal');
    var matricleText = document.querySelectorAll('.curse-content-info-bottom-div-matricle-horizontal-text');
    var matricleDiv = document.getElementById("curse-content-info-bottom-div-matricle");
    var videoTesti = document.getElementById("curse-content-info-top-testimony-video");
    var botton = document.querySelectorAll('.curse-content-info-top-testimony-volumeOn');


    var windowHeight = window.innerHeight;
    var windowWidth = window.innerWidth;
 
    function checkVisibility(){
        
        textProxDate.style.opacity = '1';

        var boundingVideo = videoTesti.getBoundingClientRect();

        if (boundingVideo.top >= 0 && boundingVideo.top <= windowHeight - 300){
            videoTesti.style.opacity = '1';
        }

        setTimeout(function (){  

            botton[0].style.opacity = '1';

            textSides[0].style.height = '200px';
            textSides[1].style.height = '200px';

            borderImg1[0].style.borderRadius = '0px 0px 20px 20px';
            borderImg2[0].style.borderRadius = '20px 20px 0px 0px';

            var boundingSyllabus = syllabus.getBoundingClientRect();
            
            if (boundingSyllabus.top >= 0 && boundingSyllabus.top <= windowHeight - 100){
                syllabus.style.opacity = '1';
                syllabus.style.height = '350px';
            }

            setTimeout(function (){  
                textSides[0].style.opacity = '1';
                textSides[1].style.opacity = '1';
            }, 1200);

        }, 500);


        setTimeout(function (){  
            matricleDiv.style.display = 'block';
            var boundingMatricle = matricle[0].getBoundingClientRect();
           
            if (windowWidth >= 1750){
                if (boundingMatricle.top >= 0 && boundingMatricle.top <= windowHeight - 300){
                    matricle[0].style.width = '50%';
                }
            }else{
                if (boundingMatricle.top >= 0 && boundingMatricle.top <= windowHeight - 300){
                    matricle[0].style.height = '60%';
                }
            }
            
            if (boundingMatricle.top >= 0 && boundingMatricle.top <= windowHeight - 300){
                setTimeout(function (){  
                    matricleText[0].style.opacity = '1';
                }, 1200);
            }


        }, 100);



        /*
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
/*

//---------------------volume on---------------------

document.addEventListener("DOMContentLoaded", function() {
    var botton = document.querySelectorAll('.curse-content-info-top-testimony-volumeOn');
    var video = document.getElementById("curse-content-info-top-testimony-video");

    botton[0].addEventListener('click', function() {
        video.muted = false;
        botton[0].style.display = 'none';
        video.style.filter = 'brightness(1) blur(0px)';
    });

});

*/

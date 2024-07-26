

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



//-------------------page movements-----------------

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
     });
    checkVisibility();

});







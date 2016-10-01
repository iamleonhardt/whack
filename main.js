var bgColor = '#736357';
var defaultImage = 'mole.png';
var whackedImage = 'whack.png';

var hit = new Audio();
hit.src = "sounds/hit1.wav";

function playHitSound(){
    hit.play();
}

$('document').ready(function(){

    $('.mole').animate({'top': '10%'}, 2000);


    $('.mole').click(function(){
        $(this).css({'background-image': 'url(images/'+ whackedImage + ')'});
        $(this).stop().animate({'top': '102%'}, 1000);
        playHitSound();
    });

    $('.mole').css({'background-color': bgColor, 'background-image': 'url(images/'+ defaultImage +')'});

});
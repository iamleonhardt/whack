var bgColor = '#736357';
var defaultImage = 'mole.png';
var whackedImage = 'whack.png';
var score = 0;


var hit = new Audio();
hit.src = "sounds/hit1.wav";

var miss = new Audio();
miss.src = "sounds/swish_light_01.wav";

function playHitSound(){
    hit.play();
}
function playMissSound(){
    miss.play();
}

$('document').ready(function(){


    // $('.gameContainer1').append('<div class="startButton">Start Game</div>').click(function(){
    //     $('.startButton').remove();
    //     start();
    // });

    function gameOver(){
        $('.mole').stop().animate({'top': '102%'}, 1000);
        $('.score').html('Score: ' + score);
        $('.score').append('<div class="tryAgain">Game Over | Try Again</div>');
        $('.tryAgain').click(function(){
            start();
            $('.tryAgain').remove;
        })
    }

      function start() {
        score = 0;
        $('.score').html('Score: ' + score );
        $('.mole').animate({'top': '10%'}, 2500, function () {
            gameOver();
        });
    }

    $('.mole').click(function(){
        $(this).css({'background-image': 'url(images/'+ whackedImage + ')'});
        score = score + 1;
        $('.score').html('Score: ' + score );
        playHitSound();
        $(this).stop().animate({'top': '102%'}, 1000, function(){
            $(this).css({'background-image': 'url(images/'+ defaultImage + ')'});
            $(this).animate({'top': '10%'}, 2500, function () {
                gameOver();
            });
        });

    });

    $('.gameContainer1').click(function(){
        playMissSound();
    });

    $('.mole').css({'background-color': bgColor, 'background-image': 'url(images/'+ defaultImage +')'});

    start();

});
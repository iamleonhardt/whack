var bgColor = '#736357';
var defaultImage = 'mole.png';
var whackedImage = 'whack.png';
var score = 0;
var min = 1500;
var max = 5000;
var hit = new Audio();
var miss = new Audio();


function playHitSound(){
    randomHitNum = Math.floor(Math.random() * 3 + 1);
    hit.src = "sounds/hit0" + randomHitNum + ".wav";
    hit.play();
}

function playMissSound(){
    randomSwishNum = Math.floor(Math.random() * 4 + 1);
    miss.src = "sounds/swish"+ randomSwishNum + ".wav";
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
            speed = Math.floor(Math.random() * (max - min) + min);
            console.log('speed is : ', speed);
            $(this).animate({'top': '10%'}, speed, function () {
                gameOver();
            });
        });

    });

    $('.gameContainer1').click(function(){
        playMissSound();
        console.log('randomSwishNum is : ', randomSwishNum, 'and miss.src :  ', miss.src);

    });

    $('.mole').css({'background-color': bgColor, 'background-image': 'url(images/'+ defaultImage +')'});

    start();

});
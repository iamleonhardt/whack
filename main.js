var randNum = 1;
var bgColor = '#d6d6d5';
var bgColorHit = '#ef4055';
var defaultImage = 'face' + randNum + '.png';
var whackedImage = 'hit' + randNum + '.png';
var highScore = 0;
var highScoreName = '';
var score = 0;
var min = 600;
var max = 4000;
var hit = new Audio();
var miss = new Audio();


function randomize(){
    randNum = Math.floor(Math.random() * 3 + 1);
}

function playHitSound() {
    randomize();
    hit.src = "sounds/hit0" + randNum + ".wav";
    console.log('randNum is : ', randNum, 'and hit.src is : ', hit.src);
    hit.play();
}

function playMissSound() {
    randomize();
    miss.src = "sounds/swish" + randNum + ".wav";
    miss.play();
}

$('document').ready(function () {

    // $('.gameContainer1').append('<div class="startButton">Start Game</div>').click(function(){
    //     $('.startButton').remove();
    //     start();
    // });

    function gameOver() {
        $('.mole').stop().animate({'right': '100%'}, 1000);
        // $('.score').html('Score: ' + score);
        if (score >= highScore) {
            highScore = score;
            $('.highScore').html('High Score: ' + highScore);
            console.log('score is : ', score, 'highScore is : ', highScore);
            $('.highScoreName').html('<div class="congrats">Congratulations! You have the high Score! <br>Please enter your name: </div><input id="highScoreName"><div class="enterButton">Enter</div>');
            $('.enterButton').click(function () {
                highScoreName = $('#highScoreName').val();
                console.log('highScoreName is : ', highScoreName);
                $('.highScoreName').html('Player: ' + highScoreName)
            });
        }


        $('.score').append('<div class="tryAgain">Game Over | Try Again</div>');
        $('.tryAgain').click(function () {
            start();
            $('.tryAgain').remove;
        })
    }



    function start() {
        score = 0;
        $('.score').html('Score: ' + score);
        $('.mole').animate({'right': '10%'}, 2500, function () {
            gameOver();
        });
    }

    $('.mole').hover(function () {
        $(this).css({'background-image': 'url(images/hit' + randNum + '.png)'});
        $(this).css({'background-color': bgColorHit});

        score = score + 1;
        $('.score').html('Score: ' + score);
        playHitSound();
        $(this).stop().animate({'right': '102%'}, 1000, function () {
            randomize();
            $(this).css({'background-image': 'url(images/face' + randNum + '.png'});
            $(this).css({'background-color': bgColor});

            speed = Math.floor(Math.random() * (max - min) + min);
            console.log('speed is : ', speed);
            $(this).animate({'right': '10%'}, speed, function () {
                gameOver();
            });
        });

    });

    $('.gameContainer1').click(function () {
        playMissSound();
        console.log('randomSwishNum is : ', randomSwishNum, 'and miss.src :  ', miss.src);

    });
    randomize();
    $('.mole').css({'background-color': bgColor, 'background-image': 'url(images/' + defaultImage + ')'});

    start();

})
;

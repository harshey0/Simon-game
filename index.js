
var colors=["red","blue","green","yellow"];

var game=[];
var user=[];
var level=1;

function startover()
{
    level=1;
    game=[];
    $("h1").text("level "+level);
    nextSequence();
}

function playSound(rcolor){
    var audio = new Audio("sounds/" + rcolor + ".mp3");
    audio.play();
}


function pressed(rcolor){
    $("#"+rcolor).addClass("pressed");
setTimeout(function(){$("#"+rcolor).removeClass("pressed")},100);

}

function checkanswer(l)
{

if(game[l]===user[l])
    {
    
if (game.length===user.length)
{setTimeout(function () {
    {nextSequence();}
  }, 1000);}}
  else
  {
    var audio = new Audio("sounds/wrong.mp3");
    audio.play();
    $("body").addClass("game-over");
    setTimeout(function(){
        $("body").removeClass("game-over")},200);
        $("h1").text("Game Over, Press Any Key to Restart");
        $(document).one('keydown',startover);
  }
  
}


function nextSequence()
{
    user=[];
    $("h1").text("level "+level);
    var rand= Math.floor(Math.random()*4);
    var rcolor=colors[rand];
    game.push(rcolor);
var jq="#"+rcolor;
level++;

$(jq).fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100);
playSound(rcolor);
pressed(rcolor);

}

$(".btn").click(function(){
    var co=$(this).attr("id");
    user.push(co);
    playSound(co);
    pressed(co);
    checkanswer(user.length-1);
});

$(document).one('keydown',nextSequence);
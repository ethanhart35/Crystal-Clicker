$( document ).ready(function() {
    console.log( "ready!" );




//global variables
var wins = 0;
var losses = 0;
var target = 0;
var blue = 0;
var purple = 0;
var yellow = 0;
var red = 0;
var score = 0;

generate();

function generate(){
    target = Math.floor(Math.random() * (+120 - +19)+ +19);
    blue = Math.floor(Math.random() * (+1 - +12)+ +12);
    purple = Math.floor(Math.random() * (+1 - +12)+ +12);
    yellow = Math.floor(Math.random() * (+1 - +12)+ +12);
    red = Math.floor(Math.random() * (+1 - +12)+ +12);
}

//display target number
$("#randomNumber").html(target);
console.log(target);
console.log(blue);
console.log(yellow);
console.log(purple);
console.log(red);

//when crystal is clicked score is shown at bottom
$("#blue").on("click", function() {
    $("#score").html(score+=blue);
    if (score==target){
        wins++
        $("#wins").html("Wins:" + wins)
    }
    if(score>target){
        losses++
        $("#losses").html("Losses:" + losses)
    }
});
$("#yellow").on("click", function() {
    $("#score").html(score+=yellow);
    if (score==target){
        wins++
        $("#wins").html("Wins:" + wins);
    }
    if(score>target){
        losses++
        $("#losses").html("Losses:" + losses);
    }
});
$("#purple").on("click", function() {
    $("#score").html(score+=purple);
    if (score==target){
        wins++
        $("#wins").html("Wins:" + wins);
    }
    if(score>target){
        losses++
        $("#losses").html("Losses:" + losses);
    }
});
$("#red").on("click", function() {
    $("#score").html(score+=red);
    if (score==target){
        wins++
        $("#wins").html("Wins:" + wins);
    }
    if(score>target){
        losses++
        $("#losses").html("Losses:" + losses);
    }
});


















});
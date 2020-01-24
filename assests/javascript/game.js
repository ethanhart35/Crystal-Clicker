$(document).ready(function () {
    console.log("ready!");

    //global variables.
    var wins = 0;
    var losses = 0;
    var target = 0;
    var blue = 0;
    var purple = 0;
    var yellow = 0;
    var red = 0;
    var score = 0;
    var crystal = 0;
    //--------------------------------------------------------------------------------------

    generate();//runs generate function.

    function generate() {
        target = Math.floor(Math.random() * (+120 - +19) + +19);
        blue = Math.floor(Math.random() * (+1 - +12) + +12);
        purple = Math.floor(Math.random() * (+1 - +12) + +12); //generates a random number for the crystals and the target score.
        yellow = Math.floor(Math.random() * (+1 - +12) + +12);
        red = Math.floor(Math.random() * (+1 - +12) + +12);
        //displays target number
        $("#randomNumber").html(target);
        $("#score").html(score = 0);
    }


    //console logs the value of all the crystals and the target number.
    console.log(target);
    console.log(blue);
    console.log(yellow);
    console.log(purple);
    console.log(red);
    //----------------------------------------------------------------------------------------


    // $(".crystal").on("click", function(){
    //     crystal.attr("number", Number);
    //     crystal = $(this).attr("number");
    //     score+=crystal;
    //     $("#score").html(score);
    // });









    $("#blue").on("click", function () { //when blue crystal is clicked the function below is run.
        score += blue; //the value of the blue crystal is added to the score.
        $("#score").html(score);
        if (score == target) {
            wins++
            $("#wins").html("Wins:" + wins)
            generate()
        }
        if (score > target) {
            losses++
            $("#losses").html("Losses:" + losses)
            generate()
        }
    });
    $("#yellow").on("click", function () { //when yellow crystal is clicked the function below is run.
        $("#score").html(score += yellow);
        if (score == target) {
            wins++
            $("#wins").html("Wins:" + wins);
            generate()
        }
        if (score > target) {
            losses++
            $("#losses").html("Losses:" + losses);
            generate()
        }
    });
    $("#purple").on("click", function () { //when purple crystal is clicked the function below is run.
        $("#score").html(score += purple);
        if (score == target) {
            wins++
            $("#wins").html("Wins:" + wins);
            generate()
        }
        if (score > target) {
            losses++
            $("#losses").html("Losses:" + losses);
            generate()
        }
    });
    $("#red").on("click", function () { //when red crystal is clicked the function below is run.
        $("#score").html(score += red);
        if (score == target) {
            wins++
            $("#wins").html("Wins:" + wins);
            generate()
        }
        if (score > target) {
            losses++
            $("#losses").html("Losses:" + losses);
            generate()
        }
});
$("#reset").on("click", function () {
    wins = 0;
    losses = 0;
    target = 0;
    blue = 0;
    purple = 0;
    yellow = 0;
    red = 0;
    score = 0;
    $("#wins").html("Wins:" + wins);
    $("#losses").html("Losses:" + losses);
    generate();
});

















});
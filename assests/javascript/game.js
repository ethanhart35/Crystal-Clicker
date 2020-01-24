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
    function checkScore() {
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
    }

    $(".crystal").on("click", function () {
        if ($(this).attr("id") == "blue") {
            score += blue;
        }
        if ($(this).attr("id") == "yellow") {
            score += yellow;
        }
        if ($(this).attr("id") == "purple") {
            score += purple;
        }
        if ($(this).attr("id") == "red") {
            score += red;
        }
        $("#score").html(score);
        checkScore();
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
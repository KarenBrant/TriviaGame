var questions = ["Calico cats are almost always:", "A group of cats is called a:",
"Which of these is NOT a well known cat myth or saying?", 
"What is a cat doing when it is \"making biscuits\"?",
"Why are cats drawn to ice cream?",
"What is the scientific name for \"Fear of Cats\"?"];
var answers = [["left-pawed", "female", "friendly", "finicky"],
["clowder", "pack", "hoard", "nothing - Cats don't congregate in groups."],
["Cats always land on their feet.", "Cats have nine lives.",
"It's raining cats and dogs.", "Don't throw the cat out with the bath water"],
["Playing with bread dough.", "Training to be a chef.", "Kneading with its paws.",
"Auditing for a Food Network show"],
["Because of the high fat and carbohydrate content", "Because they like sugar",
"Because they like chocolate", "Because it's healthy"],
["Felineophobia", "Get-it-away-ophobia", "Ailurophobia",
"There isn't one because it's not a recognized fear."]];
var correctAns = [2,1,4,3,1,3];

var countQ = 0;
var countA = 0;
var winCount = 0;
var lossCount = 0;
var checkAns;
var step1, step2;


questAns();
function questAns() {
    // countQ=0;
        $(document).ready(function() {
        countA=0;
        for (var i=0; i<questions.length; i++) {
            console.log("here");
            (function (i) {
                setTimeout (function () {
                    console.log("here");
                    countQ++;
                    console.log(questions.length);
                    // console.log("countQ: " + countQ);
                    console.log("countA: " + countA);
                    $("#display-question").text(questions[i]);
                    console.log("questions[i]: " + questions[i]);
                    $("#display-answer1").text(answers[i][countA]);
                    console.log(answers[i][countA]);
                    $("#display-answer2").text(answers[i][countA+1]);
                    console.log(answers[i][countA+1]);
                    $("#display-answer3").text(answers[i][countA+2]);
                    console.log(answers[i][countA+2]);
                    $("#display-answer4").text(answers[i][countA+3]);
                    console.log(answers[i][countA+3]);
                    
                    $("button").unbind("click");
                    $("button").on("click", function() {
                        checkAns = $(this).attr("data-value");
                        correctGuess(checkAns,i, winCount,lossCount);
                        console.log("checkAns in main: "+ checkAns);
                    });
                    $('#correctAnswers').empty();
                    $('#incorrectAnswers').empty();
                }, 6000*i);
                console.log("countQ: "+countQ);
            if (countQ === 6) {
                finalScreen(winCount,lossCount);
            }
            })(i);
        };
    });
}
    
 
function correctGuess(num,index, wins, losses) {
    console.log ("correctAns before if: " + correctAns[index]);
    console.log ("checkAns before if: " + num)
    if (correctAns[index]==num) {
        console.log("correctAns: " + correctAns[index]);
        console.log("checkAns: " + num); 
        winCount++;
        $('#correctAnswers').text("Congratulations!! Correct answer!!");
    //    var happy = $('<img src="assets/images/Excited.png" alt="Happy cat">');
        setTimeout (function() {
            console.log ("this works");
        }, 2000);
    } else {
        lossCount++;
        var sub = correctAns[index]-1;
        $('#incorrectAnswers').text("Wrong! The correct answer is " + answers[index][sub] + "."); 
        console.log("index + num: "+index + correctAns[index]);
        setTimeout (function() {
            console.log ("timeout");
        }, 2000);
    }
}
function finalScreen(wins, losses) {
    $('#wins').text("Correct Answers: " + wins);
    console.log ("wincount: " + wins);
    console.log ("losscount: "+ losses);
    $('#losses').text("Incorrect Answers: " + losses);
    $('#wins').empty();
    $('#losses').empty();
    // var playAgain = prompt ("Do you want to play again? Type y for yes or n for no.");
    // if (playAgain === 'y') {
    //     questAns();
    // } else if (playAgain === 'n') {
    //     SystemExit(0);
    // } else {
    //     alert ("That letter will be read as a y for yes.");
    //     questAns();
    // }   
}
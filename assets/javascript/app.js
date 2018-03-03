var questions = ["Calico cats are almost always:", "A group of cats is called a:",
"Which of these is NOT a well known cat myth or saying?", 
"What is a cat doing when it is \"making biscuits\"?",
"What is the scientific name for hair loss in cats?",
"What is the scientific name for \"Fear of Cats\"?"];
var answers = [["left-pawed", "female", "friendly", "finicky"],
["clowder", "pack", "hoard", "nothing - Cats don't congregate in groups."],
["Cats always land on their feet.", "Cats have nine lives.",
"It's raining cats and dogs.", "Don't throw the cat out with the bath water"],
["Playing with bread dough.", "Training to be a chef.", "Kneading with its paws.",
"Auditing for a Food Network show"],
["Balding Disorder", "Minoxidil", "Alopecia", "Lymphadenopathy"],
["Felineophobia", "Get-it-away-ophobia", "Ailurophobia",
"There isn't one because it's not a recognized fear."]];
var correctAns = [2,1,4,3,3,3];

var countQ = 0;
var countA = 0;
var winCount = 0;
var checkAns;
// function Q1() {
//     $("#display-question").text(questions[countQ]);
//     for (var i=0; i<answers[i].length; i++) {
//         console.log (answers[i].length);
//         var str = answers[countQ][i];
//         // $("#display-button").html('<button type="button"></button>');
//         $("#display-answer").text(answers[countQ][i]);
//         // $("#display-button").html('<button type="button"></button>');
//         console.log (answers[countQ][i]);
//      };
// }
// Q1();

function otherQs() {
    countQ=0;
    countA=0;
    // window.test = setTimeout(function() {

        for (var i=0; i<questions.length; i++) {
            console.log("here");
            (function (i) {
                setTimeout (function () {
                    console.log("here");
                    countQ++;
                    console.log(questions.length);
                    console.log("countQ: " + countQ);
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
                    checkAns = $("button").data("value");
                    console.log ("checkAns in main: " + checkAns)
                    $("button").on("click", correctGuess(checkAns,i));
                    
                }, 4000*i);
            })(i);
            // checkAns = $("value").on("click", correctGuess());
};
}
otherQs();

function correctGuess(num,index) {
    console.log ("correctAns before if: " + correctAns[index]);
    console.log ("checkAns before if: " + num)
        if (correctAns[index]==num) {
            console.log("correctAns: " + correctAns[index]);
            console.log("checkAns: " + num); 
           winCount++;
           $('correctAnswers').text("The number of correct answers is: " + winCount); 
        }
    // if (i===1 && checkAns===1) {
    //     console.log ("Correct answer on question 2");
    // } else if (i===2 && checkAns===4) {
    //     console.lot ("Correct answer on question 3");
}

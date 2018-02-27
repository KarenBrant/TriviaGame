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

var countQ = 0;
var countA = 0;
function Q1() {
    $("#display-question").text(questions[countQ]);
    // for (var i=0; i<answers[i].length; i++) {
        $("#display-answer1").text(answers[countQ][countA]);
        console.log (answers[countQ][countA]);
        console.log (answers[countQ][countA+1]);
        $("#display-answer2").text(answers[countQ][countA+1]);
        $("#display-answer3").text(answers[countQ][countA+2]);
        $("#display-answer4").text(answers[countQ][countA+3]);
    // });
}
Q1();
function otherQs() {
    countQ=0;
    countA=0;
    // window.test = setInterval(function() {
        for (var i=1; i<questions.length; i++) {
            countQ++;
            console.log(questions.length);
            console.log(countQ);
            console.log(countA);
            var timer = setTimeout(function() {
            $("#display-question").text(questions[i]);
            console.log(questions[i]);
            // for (var i=1; i<answers[i].length; i++) {
            $("#display-answer1").text(answers[i][countA]);
            console.log(answers[i][countA]);
            $("#display-answer2").text(answers[i][countA+1]);
            console.log(answers[i][countA+1]);
            $("#display-answer3").text(answers[i][countA+2]);
            console.log(answers[i][countA+2]);
            $("#display-answer4").text(answers[i][countA+3]);
            console.log(answers[i][countA+3]);
            }, 4000);
            // if (countQ > 6) clearTimeout(timer);
            // }, 4000);
        }
}
otherQs();
// function otherAs() {
//     count=0;
//     window.test = setInterval(function() {
//         answers.forEach (function() {
//             count++;
//             console.log (answers[count][0]);
//             console.log (answers[count][1]);
//             console.log (answers[count][2]);
//             console.log (answers[count][3]);
//             // console.log (answers[count][i]);
//             if (count > 6) clearInterval(window.test);
//             })}, 4000);
// }
// otherAs();
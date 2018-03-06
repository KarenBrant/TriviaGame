// Array of trivia questions
var questions = ["Calico cats are almost always:",
"One of Garfield the cat's favorite food is:",
"Which of these is NOT a well known cat myth or saying?", 
"What is a cat doing when it is \"making biscuits\"?",
"Why are cats drawn to ice cream?",
"What is the scientific name for \"Fear of Cats\"?"];
// Array of trivia answers
var answers = [["left-pawed", "female", "friendly", "finicky"],
["lasagna", "grilled pork tenderloin", "shrimp", "bacon"],
["Cats always land on their feet.", "Cats have nine lives.",
"It's raining cats and dogs.", "Don't throw the cat out with the bath water"],
["Playing with bread dough.", "Training to be a chef", "Kneading with its paws",
"Auditing for a Food Network show"],
["Because of the high fat and carbohydrate content", "Because they like sugar",
"Because they like chocolate", "Because it's healthy"],
["Felineophobia", "Get-it-away-ophobia", "Ailurophobia",
"There isn't one because it's not a recognized fear."]];
// Array of place markers for correct answers
var correctAns = [2,1,4,3,1,3];
// Global variable declaration
var countQ = 0;
var countA = 0;
var winCount = 0;
var lossCount = 0;
var checkAns;
var btnClicked = false;
var myVar;
var ansCount = 0;
var clicked;

// questAns() is the main function
questAns();
function questAns() {
    countA = 0;
    countQ = 0;
    winCount = 0;
    lossCount = 0;
    $('#wins').empty();
    $('#losses').empty();
    $('#totals').empty();

    // Loop through the questions
    for (var i=0; i<questions.length; i++) {
        // Function to make setTimeout work for each iteration
        btnClicked = false;
        (function (i) {
            myVar = setTimeout (function () {
                countQ++;
                console.log(questions.length);
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
                
                // Check to see if buttons are clicked
                $("button").unbind("click");
                $("button").on("click", function() {    
                    btnClicked = true;
                    
                    // Determine which button was clicked
                    checkAns = $(this).attr("data-value");
                    correctGuess(checkAns,i,winCount,lossCount,btnClicked);
                });

                // This doesn't work
                console.log(btnClicked);
                if (!btnClicked && i>0) {
                    lossCount++;
                    console.log ("lossCount: "+lossCount);
                    var sub = correctAns[i]-1;
                    $('#incorrectAnswers').text("Wrong! The correct answer is " + answers[i][sub] + "."); 
                    console.log ("incorrect answer");
                }

                $('#correctAnswers').empty();
                $('#incorrectAnswers').empty();
                console.log ("questions.length: " + questions.length);
                console.log ("Q: " + countQ);
                
                // Check to see if it is time to display the results
                if (countQ == questions.length) {
                    $("button").unbind("click");
                    $("button").on("click", function() {
                        btnClicked=true;

                        // Determine which button was clicked
                        checkAns = $(this).attr("data-value");
                        correctGuess(checkAns,i,winCount,lossCount,btnClicked);                            
                        if (!btnClicked) {
                            lossCount++
                        }
                        finalScreen(winCount, lossCount);
                    });  
                }
                console.log("myVar inside: " + myVar);
            }, 15000*i);
        })(i);
    };
}
    
 
function correctGuess(num,index, wins, losses, btn) {
    console.log ("correctAns before if: " + correctAns[index]);
    console.log ("checkAns before if: " + num)

    // If the correct answer is clicked
    if (correctAns[index] == num) {
        console.log("correctAns: " + correctAns[index]);
        console.log("checkAns: " + num); 
        winCount++;
        $('#correctAnswers').text("Congratulations!! Correct answer!!");
        setTimeout (function() {
            console.log ("correct answer");
        }, 2000);
    } else {

        // If the incorrect answer is clicked
        lossCount++;
        var sub = correctAns[index]-1;
        $('#incorrectAnswers').text("Wrong! The correct answer is " + answers[index][sub] + "."); 
        console.log("index + num: "+index + correctAns[index]);
        setTimeout (function() {
            console.log ("incorrect answer");
        }, 2000);
    }
}

// Function to display final results and to prompt to play again
function finalScreen(wins, losses) {
    $('#totals').text("Totals");
    $('#wins').text("Correct Answers: " + wins);
    console.log ("wincount: " + wins);
    console.log ("losscount: "+ losses);
    $('#losses').text("Incorrect Answers: " + losses);
   
    // Prompt to play again or not
    setTimeout (function() {
        var playAgain = prompt ("Do you want to play again? Type y for yes or n for no.");
        if (playAgain === 'y') {
            questAns();
        } else if (playAgain === 'n') {
        } else {
            alert ("That letter will be read as a y for yes.");
            questAns();
        }   
    }, 2000);
}
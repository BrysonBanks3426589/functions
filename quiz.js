
var questions = [
    "Who is Batman?",
    "What is texas known for?",
    "Who is my favorite brawler in brawl stars? (hint: she's in the same trio as Bo and Leon)"
];


var answers = [
    "Bruce Wayne",
    "Cowboys",
    "Nita"
];


function quiz() {
    var score = 0; 

    
    for (var i = 0; i < questions.length; i++) {
        var guesses = 3; 
        var points = 0; 

        
        while (guesses > 0) 
            var userAnswer = prompt(questions[i]);

            
            if (userAnswer.toLowerCase() === answers[i].toLowerCase()) {
                
                points = guesses;
                alert(`Correct! You earned ${points} points for this question.`);
                break; 
            } else {
                guesses--; 
                if (guesses > 0) {
                    alert(`Incorrect. You have ${guesses} attempt(s) remaining.`);
                } else {
                    alert(`Sorry, the correct answer is: ${answers[i]}.`);
                }
            }
        }

        
        score += points;
    }

    
    return score;
}

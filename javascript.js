//function to start game


var playbtn = document.getElementById('playbtn')
var currentquestion = {};



var questionlist = [
    {
        question: 'Do you like cheese?',
        answer1: 'Kind of',
        answer2: "A little",
        answer3: "Of course",
        answer4: "No",
        correct: "Of course"
    },
    {
        question: 'Do you like my Questions?',
        answer1: 'Kind of',
        answer2: "A little",
        answer3: "Of course",
        answer4: "No",
        correct: "Of course"
    },
    {
        question: 'Do you like Pizza?',
        answer1: 'Kind of',
        answer2: "A little",
        answer3: "Of course",
        answer4: "No",
        correct: "Of course"
    },
    {
        question: 'Do you like Apples?',
        answer1: 'Kind of',
        answer2: "A little",
        answer3: "Of course",
        answer4: "No",
        correct: "Of course"
    },
]



//playbtn.addEventListener('click', start)

//function start() {

//}

console.log(questionlist)
console.log(...questionlist)

//function to go to next question





//function to determine if answer is right


//function for timer
playbtn.addEventListener('click', timer)

function timer() {
    console.log("played")
    var timestart = 90;
    var timer = setInterval(function() {
        document.getElementById('scoretimer').textContent='0'+ timestart;
        timestart--;
        if (timestart < 0) {
            clearInterval(timer);
        }
    }, 1000);
}


//function to see highscores

//function to save highscores
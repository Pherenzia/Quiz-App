//function to start game

var highscoresbtn = document.getElementById('highscoresbtn')
var playbtn = document.getElementById('playbtn')
var questionEl = document.getElementById('question')
var currentquestion = {};
var questionlist = [
    {
        question: 'Do you like cheese?',
        answer: ['Kind of', "A little", "Of course", "No",],
        correct: "Of course"
    },
    {
        question: 'Do you like my Questions?',
        answer: ['Kind of', "A little", "Of course", "No",],
        correct: "Of course"
    },
    {
        question: 'Do you like Pizza?',
        answer: ['Kind of', "A little", "Of course", "No",],
        correct: "Of course"
    },
    {
        question: 'Do you like Apples?',
        answer: ['Kind of', "A little", "Of course", "No",],
        correct: "Of course"
    }
]

var answerbtns = document.getElementById('answerbtns');
var questionidx = 0;

function start() {
    answerbtns.innerHTML = "";
    var question  = questionlist[questionidx].question;
    var answer = questionlist[questionidx].answer;
    // var answer2 = questionlist[questionidx].answer2;
    // var asnwer3 = questionlist[questionidx].answer3;
    // var answer4 = questionlist[quesitonidx].answer4;
    questionEl.textContent = question;
    questionEl.setAttribute('class', 'question')
    answerbtns.appendChild(questionEl);
    
    for (var i = 0; i < answer.length; i++) {
        var answerEl = document.createElement('button');
        answerEl.textContent = answer[i];
        answerEl.setAttribute('class', 'asnwer');
        answerbtns.appendChild(answerEl);
    }
    
    var nextbutton = document.createElement('button');
    nextbutton.setAttribute('class', 'nextbutton');
    nextbutton.textContent = "Next Question";
    answerbtns.appendChild(nextbutton)
}

start();

playbtn.addEventListener('click', start)

answerbtns.addEventListener('click', function(event) {
    if (!event.target.matches('.nextbutton')) {
        return;
    }

    questionidx++;
    if (questionidx < questionlist.length) {
        start();
    } else {
        answerbtns.innerHTML = 
        '<form id="formid"> <textarea id="textareaid">'
        '</textarea> </form>' ;
    }
})






//function to determine if answer is right


//function for timer

playbtn.addEventListener('click' , timer);

function timer(event) {
    console.log("played")
    var timestart = 90;
    var timerr = setInterval(function() {
        document.getElementById('timerscore').textContent = timestart;
        timestart--;
        if (timestart < 0) {
            clearInterval(timerr);
        }
    }, 1000);
}



//function to see highscores

//function to save highscores
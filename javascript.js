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
        '<form id="formid"> <textarea id="textareaid"> </textarea>'
        ' </form>';
    }
})


playbtn.addEventListener('click' , timer);

function timer() {
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

var submitbtn = document.getElementById('submit');

var time = document.getElementById('timerscore');
var initials = document.getElementById('textareaid');

function savescore() {
    var score = {
        time: time.value,
        initials: initials
    };
    localStorage.setItem('score', JSON.stringify(score));
};

var highscores = [];
var highscorequant = document.getElementById('highscorequant');
var timescore = document.getElementById('timescore');

function renderlastscore() {
    timescore.innerHTML = '';
    //highscorequant.textContent = highscores.length;
    
    for (var i = 0; i < highscores.length; i++) {
      var highscore = todos[i];
  
      var li = document.createElement('li');
      li.textContent = highscore;
      li.setAttribute('data-index', i);
      timescore.appendChild(li);
    }
  }

submitbtn.addEventListener('click', function(event) {
    event.preventDefault();
    savescore();
    renderlastscore();
})

//function to see highscores

//function to save highscores
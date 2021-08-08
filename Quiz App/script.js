if(JSON.parse(localStorage.getItem("newQuizData")))
    quizData= JSON.parse(localStorage.getItem("newQuizData"));
else
    quizData = [];

const input_containerEl = document.querySelector(".input-container");
function createQuiz(){
    input_containerEl.style.display ="flex";
}
function finishQuiz(){
    input_containerEl.style.display ="none";
    quizData = JSON.parse(localStorage.getItem("newQuizData"));
    console.log(quizData);
    window.location.reload();
}
var newQuizData =[];
function addEl(){
    const el ={};
    const quesEl = document.getElementById("ques");
    const option_a_text = document.getElementById("option-a");
    const option_b_text = document.getElementById("option-b");
    const option_c_text = document.getElementById("option-c");
    const option_d_text = document.getElementById("option-d");
    const ansEls = document.getElementById("ans");
    if(quesEl.value =="" || option_a_text.value =="" ||option_b_text.value =="" || option_c_text.value =="" ||option_d_text.value ==""){
        alert("Fill Out Empty Values !!");
        return;
        }
    el.ques = quesEl.value;
    el.a = option_a_text.value;
    el.b = option_b_text.value;
    el.c = option_c_text.value;
    el.d = option_d_text.value;
    el.ans = ansEls.value;
    newQuizData.push(el);
    console.log(newQuizData);
    document.forms[0].reset();
    localStorage.setItem('newQuizData',JSON.stringify(newQuizData));

}
const quiz = document.getElementById("quiz");
const questionEl = document.querySelector(".ques");
const a_text = document.getElementById("a");
const b_text = document.getElementById("b");
const c_text = document.getElementById("c");
const d_text = document.getElementById("d");
const answersEls = document.querySelectorAll(".answer");
let currentques =0;
let score =0;

if(quizData.length >0)
    loadQuiz();
else
    createQuiz();
let answer = getSelected();
function loadQuiz(){
    const currentQuestion = quizData[currentques];
    questionEl.innerHTML = currentQuestion.ques;
    a_text.innerHTML = currentQuestion.a;
    b_text.innerHTML = currentQuestion.b;
    c_text.innerHTML = currentQuestion.c;
    d_text.innerHTML = currentQuestion.d;
    currentques++;
}
function getSelected(){
    let answer = undefined;
    answersEls.forEach((answerEl)=>{
        if(answerEl.checked){
            answer= answerEl.id;
        }
    });
    return answer;
}
function deselect(){
    answersEls.forEach((answerEl)=>{
            answerEl.checked =false;
    });
}

function loadmainQuiz(){
    answer = getSelected();
    deselect();
    if(answer){
        if( answer ===quizData[currentques-1].ans)
        score++;
    if(currentques<quizData.length){
        loadQuiz();
    }
    else{
        alert("Finish!! your score is "+ score + " out of "+quizData.length);
        quiz.innerHTML = '<br><div id ="hi"></div><div id ="h1"><h1>You have answered correctly '+score +' out of '+quizData.length+
    '</h1></div><div id ="reload"><button onclick ="location.reload()" id ="reloadbtn">Reload</button></div>';
    }
    }
    else
        alert("Select an Option!!!");
}

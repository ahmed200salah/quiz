const questions = [
    {
        question: "اي امر نستطيع بهي معرفة مكاني؟",
        answers:[
            {Text: "Cd", correct: true},
            {Text: "Dir", correct: false},
            {Text: "del", correct: false},
            {Text: "cmd", correct: false},
        ]
    },
    {
        question: "انشاء ملف نتسخدم اي امر؟",
        answers:[
            {Text: "Cd", correct: false},
            {Text: "Md", correct: true},
            {Text: "Rd", correct: false},
            {Text: "del", correct: false},]
    },
    {
        question: "لحذف فولدر نتسخدم اي امر؟",
        answers:[
            {Text: "Rd", correct: true},
            {Text: "del", correct: false},
            {Text: "Md", correct: false},
            {Text: "Cd", correct: false},
        ]
    },
    {
        question: "؟text انشاء ملف t نسخدم اي امر",
        answers:[
            {Text: "copy con ahmed.txt", correct: true},
            {Text: "copy con ahmed.txxt", correct: false},
            {Text: "copy con ahmed.jpg", correct: false},
            {Text: "copy con ahmed.png", correct: false},
        ]
    },
    {
        question: "لنسخ ملف نستخدم اي امر؟",
        answers:[
            {Text: "copy", correct: true},
            {Text: "move", correct: false},
            {Text: "Cd", correct: false},
            {Text: "dir", correct: false},
        ]
    },
    {
        question: "لحذف صورة او ملف نصي نستخدم اي امر؟",
        answers:[
            {Text: "rd", correct: false},
            {Text: "del", correct: true},
            {Text: "cd", correct: false},
            {Text: "cmd", correct: false},
        ]
    },
    {
        question: "لتحريك ملف او صورة او تكست نتسحدم اي امر؟",
        answers:[
            {Text: "ipconfig", correct: false},
            {Text: "config", correct: false},
            {Text: "move", correct: true},
            {Text: "select", correct: false},
        ]
    },
    {
        question: "للرجوع خطوة للخلف نستخدم اي امر؟",
        answers:[
            {Text: "cd", correct: false},
            {Text: "cd..", correct: true},
            {Text: "cd/..", correct: false},
            {Text: "cd../..", correct: false},
        ]
    },
    {
        question: "لمعرفة محتويات اي ملف نستخدم اي امر؟",
        answers:[
            {Text: "dir", correct: true},
            {Text: "type", correct: false},
            {Text: "sort", correct: false},
            {Text: "move", correct: false},
        ]
    },
    {
        question: "لترتيب اي ملف تكست ابجدي اي امر نستخدم؟",
        answers:[
            {Text: "sort", correct: true},
            {Text: "move", correct: false},
            {Text: "copy", correct: false},
            {Text: "rd", correct: false},
        ]
    },
]

const questionElement = document.getElementById("question");
const answerButton = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");

let currentQuestionIndex = 0;
let score = 0;

function startQuiz(){
    currentQuestionIndex = 0;
    score = 0;
    nextButton.innerHTML = "الي بعدو يوحش🤣";
    showQuestion();
}

function showQuestion(){
    resetState()
    let currentQuestion = questions[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;
    questionElement.innerHTML = questionNo + ". " + currentQuestion.question;

    currentQuestion.answers.forEach(answer => {
        const button = document.createElement("button");
        button.innerHTML = answer.Text;
        button.classList.add("btn");
        answerButton.appendChild(button);
        if(answer.correct){
            button.dataset.correct =answer.correct;
        }
        button.addEventListener("click", selectAnswer)
    })
}

function resetState(){
    nextButton.style.display = "none";
    while(answerButton.firstChild){ 
        answerButton.removeChild(answerButton.firstChild);
    }
}
function selectAnswer(e){{
    const selectedBtn = e.target;
    const isCorrect = selectedBtn.dataset.correct === "true";
    if(isCorrect){
        selectedBtn.classList.add("correct");
        score++;
    }else{
        selectedBtn.classList.add("incorrect")
    }
    Array.from(answerButton.children).forEach(button =>{
        if(button.dataset.correct === "true"){
            button.classList.add("correct");
        }
        button.disabled = true;
    })
    nextButton.style.display = "block";
}}


function showScore(){
    resetState();
    questionElement.innerHTML = `عاش ٍجبت ${score} من ${questions.length}   😳!`;
    nextButton.innerHTML = "🤔من رأيي عيد تاني";
    nextButton.style.display = "block"
}

function handleNextButton(){
    currentQuestionIndex++;
    if(currentQuestionIndex < questions.length){
        showQuestion();
    }else{
        showScore();
    }
}
nextButton.addEventListener("click", ()=>{
    if(currentQuestionIndex < questions.length){
        handleNextButton();
    }else{
        startQuiz();
    }
})

startQuiz();
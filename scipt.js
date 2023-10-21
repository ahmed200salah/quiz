const questions = [
    {
        question: "علم الاقتاصد هو من العلوم؟",
        answers:[
            {Text: "الرياضية", correct: false},
            {Text: "الاجتماعية", correct: true},
            {Text: "الطبيعية", correct: false},
            {Text: "جميع ما سبق", correct: false},
        ]
    },
    {
        question: "اعلم الاقتصاد هو علم يهدف الي",
        answers:[
            {Text: "تلبية حاجات ورغبات الافراد والمجتمع من السلع وخدمات", correct: false},
            {Text: "حل المشكلة الاقتصادية", correct: true},
            {Text: "ادارة الموارد للوصول للرفاهية", correct: false},
            {Text: "جميع ما سبق", correct: false},]
    },
    {
        question: "يمثل كل ما يدور حول سلوك الفرد؟",
        answers:[
            {Text: "الاقتصاد الكلي", correct: true},
            {Text: "الاقتصاد الجزئي", correct: false},
            {Text: "الاقتصاد التقليدي", correct: false},
            {Text: "جميع ما سبق", correct: false},
        ]
    },
    {
        question: "؟يثوم الاقتصاد الكلي بالتركيز علي الوحدات الاقتصادية الكلية مثل",
        answers:[
            {Text: "سلوك المستهلك", correct: true},
            {Text: "البطالة", correct: false},
            {Text: "سلوك المنتج", correct: false},
            {Text: "جميع ما سبق", correct: false},
        ]
    },
    {
        question: "المورد الحر هو",
        answers:[
            {Text: "كل مورد نبذل فية جهد ولا يدفع فية ثمن", correct: true},
            {Text: "كل مورد لا نبذل فية جهد ويدفع فية ثمن", correct: false},
            {Text: "كل كورد نبذل فية جهد ويدفع فية ثمن", correct: false},
            {Text: "كل مورد لا نبذل فية جهد ولا يدفع فية ثمن", correct: false},
        ]
    },
]
let timeLeft = document.querySelector(".time-left");
let countdown;
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
        clearInterval(countdown);
        timerDisplay();
    }
})


const timerDisplay = () =>{
    countdown = setInterval(() => {
            count--;
            timeLeft.innerHTML = `${count}s`;
            if(count == 0){
                clearInterval(countdown);
                displayNext();
            }
    }, 1000);
}
startQuiz();

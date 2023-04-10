const quiz=[
    {
        Question: "Q1: What is the full form of HTML?",
        a: "Hello To My Land",
        b:"Hey Text Markup Language",
        c:"HyperText Markup Language",
        d:"Hyper Markup Language",
        ans:"ans3"
    },

    {
        Question: "Q2: The number of function key in keyboard is?",
        a: "15",
        b:"14",
        c:"10",
        d:"12",
        ans:"ans4"
    },

    {
    Question:"Q3: What is the full form of JS?",
    a:"JavaScript",
    b:"JavaSuper",
    c:"JavaShoes",
    d:"JustScript",
    ans:"ans1"

    },

    {
        Question:"Q4: What is the full form of QR?",
       a:"Quick Response Code",
       b:"Quick Recorder Code",
       c:"Quick Register Code",
       d:"None",
       ans:"ans1"
    },

    
    {
        Question:"Q5: What is the full form of IP?",
       a:"Internet Protocol",
       b:"Including Protocol",
       c:"International protocol",
       d:"None",
       ans:"ans1"
    }
]


const question=document.querySelector(".question");
const option1=document.querySelector("#optn1");
const option2=document.querySelector("#optn2");
const option3=document.querySelector("#optn3");
const option4=document.querySelector("#optn4");
const submit=document.querySelector("#submit");
const answers=document.querySelectorAll(".answer");
const showScore=document.querySelector("#showScore");


let questionCount=0;

let score=0;

var name=prompt("Enter your Name");
const loadQuestion=()=>{

   

const questionList=quiz[questionCount];

    question.innerHTML=questionList.Question;

    option1.innerHTML=questionList.a;
    option2.innerHTML=questionList.b;
    option3.innerHTML=questionList.c;
    option4.innerHTML=questionList.d;
}


loadQuestion();


const getCheckAnswer=()=>{

    let answer;
answers.forEach((curAns) => {
    if(curAns.checked){

        answer=curAns.id;
      
    }

});
return answer;


};
deselectAll=()=>{
answers.forEach((curAns)=> curAns.checked=false);    
}


submit.addEventListener('click',()=>{

    const checkAnswer=getCheckAnswer();

    // console.log(checkAnswer);
if(checkAnswer==quiz[questionCount].ans){

score++;
};

questionCount++;


deselectAll();

if(questionCount<quiz.length){
loadQuestion();
}
else{

    showScore.innerHTML=`
    <h3>${name} your score is ${score}/${quiz.length}.😊✌</h3>
<button class="btn" onclick="location.reload()">Play Again</button>
    
    
    
    
    
    
    
    `;
showScore.classList.remove('scoreArea');


}

})
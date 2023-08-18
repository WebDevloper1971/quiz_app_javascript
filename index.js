const quizdata = [
    {
        question:"Who lead the India's first SLV mission ?",
        a:"C.V Raman",
        b:"APJ Abdul Kalam",
        c:"Jagdish Chandra Bose",
        d:"Ramanujan",
        answer:"b"
    },
    {
        question:"Who is the Father of Atomic Energy in India ?",
        a:"APJ Abdul Kalam",
        b:"Dr. Homi J Bhabha",
        c:"Salim Ali",
        d:"Har Gobind Khurrana",
        answer:"b"
    },
    {
        question:"Mercurous Nitrite was discovered by which Scientist ?",
        a:"Meghnad Saha",
        b:"Jagadish Chandra Bose",
        c:"Prafulla Chandra Ray",
        d:"Prasanta Chandra Mahalanobis",
        answer:"c"
    },
    {
        question:"Who invented Zero ?",
        a:"Albert Einstein",
        b:"Chanakya",
        c:"Brahmagupta",
        d:"Aryabhatta",
        answer:"d"
    },
    {
        question:"Who is known as Father Of Ayurveda ?",
        a:"Patanjali",
        b:"Charak",
        c:"Sushrut",
        d:"none of the above",
        answer:"b"
    },
    {
        question:"Who invented India's first Super Computer?",
        a:"Vijay Pandurang Bhatkar",
        b:"Homi J Bhabha",
        c:"Swapan Kumar Datta",
        d:"Venkatraman Radhakrishnan",
        answer:"a"
    },
    {
        question:"Which Indian physicist known for his work in field of Light Scattering ?",
        a:"APJ Abdul Kalam",
        b:"Birbal Sahani",
        c:"Vikram Sarabhai",
        d:"C.V Raman",
        answer:"d"
    },
    {
        question:"Name of the first satellite launched by India ?",
        a:"Chanakya",
        b:"Brahmagupta",
        c:"Aryabhatta",
        d:"Bhaskara",
        answer:"c"
    },
    {
        question:"Who is the key person behind the India's first satellite launch ?",
        a:"Paramjit Khurana",
        b:"Ashoke Sen",
        c:"Satyendra Nath Bose",
        d:"Vikram Sarabhai",
        answer:"d"
    },
    {
        question:"How would you rate this quiz ?",
        a:"⭐",
        b:"⭐⭐⭐",
        c:"⭐⭐⭐⭐⭐ * ♾️",
        d:"not rate",
        answer:"c"
    }
]



const container = document.getElementById("container");
const score_container = document.getElementById("score");
const total_score = document.getElementById("total_score");

const question = document.getElementById("question"); 

const option_a = document.getElementById("option_a");
const option_b = document.getElementById("option_b");
const option_c = document.getElementById("option_c");
const option_d = document.getElementById("option_d");

const radio_btns = document.querySelectorAll('input[name="answer"]');

const btn = document.getElementById("submit_btn");


let ans = undefined;

let marks = 0;

let checkedy = false;

let count = 0;

function check(){
    radio_btns.forEach((radio_btn)=>{
        if(radio_btn.checked){
            ans = radio_btn.value;
            checkedy = true;
        }
    })

    return checkedy;
}

function score(){
    
    const currentQuestion = quizdata[count]
    if(ans === currentQuestion.answer){
        
        marks += 10;
        // alert(`Score is ${marks}`);
    }
}

function quiz(){
    const currentQuestion = quizdata[count]

    question.innerText = currentQuestion.question;

    option_a.innerText = currentQuestion.a;

    option_b.innerText = currentQuestion.b;

    option_c.innerText = currentQuestion.c;

    option_d.innerText = currentQuestion.d;
}

quiz();



btn.addEventListener("click",()=>{

    check();

    score();

    if(checkedy){

        count ++;

        if(count < quizdata.length){
            quiz();
        }else{

            // alert("You Finished !!")
            // alert(`Your Score is ${marks} Points !!`)
            
            container.style.display = "none";
            score_container.style.display = "flex";
            total_score.innerText = marks;


        }

        
    }
   
   

    radio_btns.forEach((rb)=>{
        rb.checked = false;
    })

    checkedy = false;

    
})



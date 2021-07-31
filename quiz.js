const listOfQuestions=[{
    question:" The average of runs of a cricket player of 10 innings was 32. How many runs must he make in his next innings so as to increase his average of runs by 4?",
    answers:["76","69","60","85"],
    correctIndex:1
 },
 {
     question:"Average of all prime numbers between 30 to 50",
     answers:["37","28","19","93"],
     correctIndex:1
 },
 {
    question:"Ten years ago, P was half of Q's age. If the ratio of their present ages is 3:4, what will be the total of their present ages?",
    answers:["35","2","40","50"],
    correctIndex:3
},
{
    question:"A man's age is 125% of what it was 10 years ago, but 83(1/3)% of what it will be after 10years. What is his present age?",
    answers:["35","2","40","50"],
    correctIndex:2
},
{
    question:"Father is aged three times more than his son Sunil. After 8 years, he would be two and a half times of Sunil's age. After further 8 years, how many times would he be of Sunil's age?",
    answers:["35","2","40","50"],
    correctIndex:1
},
]


window.onload=function(){
    
    show(0);
    document.getElementById("backbutton").style.visibility="hidden";
}


function onSubmit(e){
    e.preventDefault();
    window.location.replace("question.html");

    let name = document.forms["welcomeForm"]["name"].value;
    if(name=="")alert("you are directed to guest login without username" )
    let email = document.forms["welcomeForm"]["email"].value;
    if(name!="")sessionStorage.setItem("name",name);
    else sessionStorage.setItem("name","Guest");
    sessionStorage.setItem("email",email);


}


let count=0;
function next(){
    
    if(yes)score+=10;
    else score+=-5;
  //console.log(score);

    if(count==listOfQuestions.length-1){


       sessionStorage.setItem("score" ,score);
       sessionStorage.setItem("sec", sec);
       sessionStorage.setItem("min", min);
       clearInterval(t);
        location.replace("finalPage.html");

        return;
    }
    document.getElementById("backbutton").style.visibility="visible";
    count++;

    show(count);
   
}


function back(){
    
    if(count>=1){
        count--;
    }
    show(count);
}

function show(count){
    document.getElementById("question").innerHTML="<h2>"+listOfQuestions[count].question +"</h2>";

    //options
    
    document.getElementById("option1").innerHTML="<h4>"+listOfQuestions[count].answers[0]+"</h4>";
    document.getElementById("option2").innerHTML="<h4>"+listOfQuestions[count].answers[1]+"</h4>";
    document.getElementById("option3").innerHTML="<h4>"+listOfQuestions[count].answers[2]+"</h4>";
    document.getElementById("option4").innerHTML="<h4>"+listOfQuestions[count].answers[3]+"</h4>";
    document.getElementById("usernameInHeader").textContent=sessionStorage.getItem("name");
}

let score =0;
let yes = false  ;

document.querySelectorAll('.option').forEach(item => {
    item.addEventListener('click', event => {
       
        
      
      let rightAnsIndex=listOfQuestions[count].correctIndex;
      let rightAns=listOfQuestions[count].answers[rightAnsIndex];
      if(item.textContent == rightAns){
         yes=true;
      }else{
         yes=false;
      }
    });
});






let dt=new Date(new Date().setTime(0));
let ctime=dt.getTime();
let sec = Math.floor((ctime % (100*60))/1000);
let min =0;
let time=0;
var t=setInterval(function(){
    time++;
    if(sec<59){
        sec++;
    }else{
        min++;
        sec=0;
    }
    
    //console.log(sec,min);
    if(min<10 && sec<10 )document.getElementById("timer").innerText= "0"+min+":"+"0"+sec;
    else if(min<10)document.getElementById("timer").innerText= "0"+min+":"+sec;
    else document.getElementById("timer").innerText= min+":"+sec;
   
    

},1000);




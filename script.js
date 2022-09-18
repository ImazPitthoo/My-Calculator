const num1 = document.getElementById("num1");
const num2 = document.getElementById("num2");
const answer = document.getElementById("answer");


const add = document.getElementById("add");
const sub = document.getElementById("sub");
const mul = document.getElementById("mul");
const div = document.getElementById("div");
const clear = document.getElementById("clear");
// const button = document.querySelector(button)

add.addEventListener('click',function(){
    let value1 = parseInt(num1.value);
    let value2 = parseInt(num2.value);

    let sum = value1 + value2;
    answer.innerText = sum;

})

sub.addEventListener('click',function(){
    let value1 = parseInt(num1.value);
    let value2 = parseInt(num2.value);

    let sum = value1 - value2;
    answer.innerText = sum;

})

mul.addEventListener('click',function(){
    let value1 = parseInt(num1.value);
    let value2 = parseInt(num2.value);

    let sum = value1 * value2;
    answer.innerText = sum;

})

div.addEventListener('click',function(){
    let value1 = parseInt(num1.value);
    let value2 = parseInt(num2.value);

    let sum = value1 / value2;
    answer.innerText = sum;

})

clear.addEventListener('click',function(){
    num1.value = " " ;
    num2.value = " " ;

    answer.innerText = ("ANSWER") ;

})


// $(document).ready(function() {
//     https://s3-us-west-2.amazonaws.com/s.cdpn.io/242518/click.mp3
//     var audio  = new Audio('https://s3-us-west-2.amazonaws.com/s.cdpn.io/242518/click.mp3');
//     var audio2 = new Audio('assets//clickUp.mp3');
  
//     $("button").mousedown(function() {
//       audio2.load();
//       audio2.play();
//     });
      
//     $("button").mouseup(function() {
//       audio.load();
//       audio.play();
//     });
//   });
  const audio = new Audio("assets//clickUp.mp3");
  const audio2 = new Audio("assets//click.mp3");
  const buttons = document.querySelectorAll("button");
  
  buttons.forEach(button => {
    button.addEventListener("mousedown", () => {
      audio.play();
    });
    
        button.addEventListener("mouseup", () => {
          audio2.play();
        });
    });


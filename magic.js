const phrase = ['Да', 'Нет', 'Ты ебанулась такие вопросы задавать?', 'Неодобрительное бурчание', 
'У тебя все получится!', 'Вернись к этому вопросу позже',
'Довольно скоро', 'Хорошие перспективы', 'Останешься с голой жопой', 
'Ты действительно думаешь, что я дам ответ на этот вопрос?', 'Оставь уже этот шар и займись делами', 
'Будь су4кой', 'Большой брат следит за тобой'
];

 function shake(){

    let ball= document.getElementById("ball")
    let messageText = document.querySelector(".message")
 
    if(messageText != null){
     messageText.parentNode.removeChild(messageText);
    }
    
    ball.classList.add("shake");
 
    setTimeout(function(){ ball.classList.remove("shake"); }, 1500);
    
    setTimeout(function(){ getFortune(); }, 1500);
 }
 

 function getFortune(){

     let fortune = phrase[Math.floor(Math.random()*phrase.length)];
 
     let parent = document.querySelector(".fortune");
     let newMessage = document.createElement("div");
     newMessage.classList.add("message")
     newMessage.innerHTML = fortune;
     parent.appendChild(newMessage);
    } 
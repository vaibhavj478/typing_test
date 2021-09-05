let msg = document.querySelector('#msg');

console.log(msg);

let mywords=document.querySelector('#mywords');
let btn=document.querySelector('#btn');
let startTime,endTime;

const playGame =()=>{
    let randnum= Math.floor(Math.random()*setOfwords.length);
    console.log(randnum);
    msg.innerText= setOfwords[randnum];
    let date =new Date();
    startTime = date.getTime();
    console.log(`hello ${startTime}`);
    btn.innerText ="Done";

}
const wordCounter=(str)=>{
    let response = str.split(" ").length;
    console.log(response);
    return response;
}

const compareword=(str1,str2)=>{
    let words1=str1.split(" ");
    let words2=str2.split(" ");
    let cnt=0;

  words1.forEach(function (item,index)  {
      if (item == words2[index]) {
          cnt++;
      }
    })
    let errorWords = (words1.length-cnt);

    return(cnt +" correct out of "+ words1.length + " words and the total number of error are "+ errorWords+" .");
}

const endPlay= ()=>{
    let date =new Date();
    endTime = date.getTime();

    let totalTime =((endTime-startTime)/1000);
    console.log(`${totalTime}`);
    totalStr= mywords.value;

    let wordCount = wordCounter(totalStr);

let speed = Math.round((wordCount/totalTime)*60);

let finalMsg =`you typed total at ${speed } words per minutes `;

finalMsg += compareword(msg.innerText,totalStr);
msg.innerText = finalMsg;


};


const setOfwords=["hello, how are you ",
                "this is typing test web app ",
                "hope you get result in your typing speed ",
                "thank you for spend some time here :) "]




btn.addEventListener('click',function(){

        if(this.innerText == "Start"){
            console.log(this);
            mywords.disabled= false;
            playGame();

        }else if (this.innerText == "Done" ) {
            mywords.disabled = true;
            btn.innerText = "Start"
            endPlay();
        }

});

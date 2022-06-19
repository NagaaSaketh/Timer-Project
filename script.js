const start=document.querySelector("#start");
const pause=document.querySelector("#pause");
const reset=document.querySelector("#reset");
const seconds=document.querySelector("#seconds");
const minutes=document.querySelector("#minutes");
const hours=document.querySelector("#hours");

let hrs=00;
let min=00;
let sec=00;
started=false;
function hour(){
    hrs++;
    if(hour===12){
        hrs=0;
    }
    hours.innerText=hrs<10 ? "0"+hrs : hrs;
}
function mint(){
    min++;
    if(min===60){
        min=0;
        hour();
    }
    minutes.innerText=min<10 ? "0"+min : min;
}

function strt(){
    sec++;
    if (sec===60){
        sec=0;
        mint();
    }
    seconds.innerText=sec<10 ? "0"+sec : sec;
    
}
start.addEventListener("click",()=>{
    if(!started){
        timeid=setInterval(strt,1000);
        started=true;
    }
    
})
pause.addEventListener("click",()=>{
    clearInterval(timeid);
    started=false;
})
reset.addEventListener("click",()=>{
    clearInterval(timeid);
    started=false;
    sec=0;
    hrs=0;
    min=0;
    seconds.innerText="00";
    minutes.innerText="00";
    hours.innerText="00";
})
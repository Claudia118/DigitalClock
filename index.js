const hourelm = document.getElementById("hour");
const minuteelm = document.getElementById("minutes");
const secondelm = document.getElementById("seconds");
const ampmelm = document.getElementById("ampm");

//Function get hour, minutes and seconds
function clockUpdate(){
    let h = new Date().getHours();
    let m = new Date().getMinutes();
    let s = new Date().getSeconds();
    let ampm = "AM";

    if(h > 12){
        h = h- 12
        ampm = "PM"
    }

    //conditional statement to add 0 infront of hours,
    // minutes and seconds
    h = h <10 ? "0" + h : h;
    m = m <10 ? "0" + m : m;
    s = s <10 ? "0" + s : s;

    hourelm.innerText = h;
    minuteelm.innerText = m;
    secondelm.innerText = s;
    ampm, (innerText = ampm);

    //Calls function every second
    setTimeout(()=>{
        clockUpdate()
    },1000)
}

//Calling Function
clockUpdate()
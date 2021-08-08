const  daysEl = document.getElementById('days')
const  hoursEl = document.getElementById('hours')
const  minutesEl = document.getElementById('minutes')
const  secondsEl = document.getElementById('seconds')
var  youreventEl = document.getElementById('your-event')
var  event = '1 Jan 2022' ;
function countDown(){
    const eventDate = new Date(event);
    const currentDate = new Date();
    eventDate.setHours(0,0,0,0);
    // currentDate.getTime()
    // console.log(eventDate.getTime());
    const secdiff = (eventDate-currentDate)/1000;
    const days = Math.floor(secdiff/(3600*24));
    const hours = Math.floor(secdiff/3600 %24);
    const minutes = Math.floor(secdiff/60%60);
    const seconds = Math.floor(secdiff%60);
    daysEl.innerHTML = format(days);
    hoursEl.innerHTML= format(hours);
    minutesEl.innerHTML = format(minutes);
    secondsEl.innerHTML = format(seconds);
    
    // console.log(event);

}
function format(data){
    return data<10?'0'+data:data;
}
function changeEvent(){
   let eventnow = document.getElementById('date').value;
   let text =document.getElementById('event-name').value;
   if(eventnow!= "" && text!=""){
    event = eventnow;
    youreventEl.innerHTML = text;
    }
    else
        alert("Enter Missing Values ");
}
countDown();
setInterval(countDown,1000);

window.onload = ()=>{
    if(window.outerHeight < window.outerWidth){
        document.querySelector('.unsupported-res').classList.remove('make-invisible');
        document.querySelector('.unsupported-res p').innerHTML = "Mindium was initially developed for mobile devices alone. We are currently working on the desktop version. For now, please switch to your mobile to view mindium. Thank You";
    }
}
window.addEventListener("orientationchange", function(event) {
    if(event.target.screen.width > event.target.screen.height){
        document.querySelector('.unsupported-res').classList.remove('make-invisible');
        document.querySelector('.unsupported-res p').innerHTML = "Mindium looks best in portrait mode. Please switch to portrait mode on your device. Thank You";
    }
    else{
        document.querySelector('.unsupported-res').classList.add('make-invisible');
    }
});document.querySelector('.container span').addEventListener('click', ()=>{
    window.open('','_self').close();
})
function generateFragments(){
    return Math.floor(Math.random()*10);
}
function generateBookingID(){
    return `${generateFragments()}${generateFragments()}${generateFragments()}${generateFragments()}${generateFragments()}${generateFragments()}-${generateFragments()}${generateFragments()}${generateFragments()}`;
}
let bodyArr = new Array();
new URLSearchParams(window.location.search).forEach((value, key)=>{
    bodyArr.push(value);
})
let body = `Hello, I am ${bodyArr[0]}. I want a free session to check out your services. I am ${bodyArr[2]} years old.
Contact details are: 
Email address = ${bodyArr[1]} 
Phone number = ${bodyArr[3]}`;
// console.log(bodyArr);
const bookingID = generateBookingID();
document.querySelector('.container h3').appendChild(document.createTextNode(`BookingID: ${bookingID}`))
function sendEmail() { 
    Email.send({ 
    Host: "smtp.gmail.com", 
    Username: "theesaanenterprises@gmail.com", 
    Password: "6SBU&Z<<gkdsB6m$", 
    To: 'mindium0121@gmail.com', 
    From: "theesaanenterprises@gmail.com", 
    Subject: `Free Booking ${bookingID}`, 
    Body: body, 
    }) 
    .then(message => { 
        console.log(message);
        document.querySelector('.container p').innerHTML = `<b>Please record your BookingID. </b>Your details have been successfully shared with our team. You should receive a mail within the next 24hrs followed by your free 5 min consultation. You may close this tab now. Thanks for choosing mindium.`;
    }); 
} 
sendEmail();
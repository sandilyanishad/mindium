document.querySelector('.container span').addEventListener('click', ()=>{
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
    Username: "TheesaanEnterprises@gmail.com", 
    Password: "QuEsTiOn13!#", 
    To: 'mindium0121@gmail.com', 
    From: "TheesaanEnterprises@gmail.com", 
    Subject: `Free Booking ${bookingID}`, 
    Body: body, 
    }) 
    .then(function (message) { 
        document.querySelector('.container p').innerHTML = `<b>Please record your BookingID. </b>Your details have been successfully shared with our team. You should receive a mail within the next 24hrs followed by your free 5 min consultation. You may close this tab now. Thanks for choosing mindium.`
    }); 
} 
sendEmail();
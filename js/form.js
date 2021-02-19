document.querySelector('.container span').addEventListener('click', ()=>{
    window.open('','_self').close();
})
function generateFragments(){
    return Math.floor(Math.random()*10);
}
function generateBookingID(){
    return `${generateFragments()}${generateFragments()}${generateFragments()}${generateFragments()}${generateFragments()}${generateFragments()}-${generateFragments()}${generateFragments()}${generateFragments()}`;
}
let body = '';
new URLSearchParams(window.location.search).forEach((value, key)=>{
    body += ` ${key} = ${value} `;
})
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
        alert("Your details were sent successfully to our team, will get in touch soon! You may close this window now by clicking the back button") 
    }); 
} 
sendEmail();
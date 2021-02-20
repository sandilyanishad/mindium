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
});
document.querySelector('.container span').addEventListener('click', ()=>{
    window.open('','_self').close();
})
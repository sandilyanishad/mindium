const mindium = document.querySelector('.mindium');
const tagline = document.querySelector('.tagline');
const exploreBtn = document.querySelector('.explore-btn');
const stylizeWelcomeContainer = document.querySelector('.stylize-welcome');
let menuIconClickCount = 0;
let blogsFinalGlobal = null;
//asynchoronous data fetches
async function getPostOfTheDayContent(){
    const postOfTheDayContentInit = await fetch('./data/post of the day/data.json');
    const postOfTheDayContentFinal = await postOfTheDayContentInit.json();
    document.querySelector('.scroll-box1 img').src = postOfTheDayContentFinal.imgSrc;
    document.querySelector('.scroll-box1 p').appendChild(document.createTextNode(postOfTheDayContentFinal.postContent));
    const blogsInit = await fetch('./data/blogs/data.json');
    const blogsFinal = await blogsInit.json();
    blogsFinalGlobal = blogsFinal;
    blogsFinal.forEach((element, index)=>{
        const tempImg = new Image();
        tempImg.src = element.imgSrc;
        const tempPara = document.createElement('p');
        tempPara.appendChild(document.createTextNode(element.postContent));
        const tempContainer = document.createElement('span');
        tempContainer.setAttribute('class', `blogs-id${index}`);
        tempContainer.appendChild(tempImg);
        tempContainer.appendChild(tempPara);
        document.querySelector('.scroll-box2').appendChild(tempContainer);
        tempContainer.setAttribute('onclick', `blogsClickHandler(this)`);
    });
}
getPostOfTheDayContent();
function blogsClickHandler(obj){
    // document.querySelector('.blogs-viewer-container .blogImg img').src = obj.img.src;
    document.querySelector('.blogs-viewer-container .blogContent p').innerHTML = `<img src = "${blogsFinalGlobal[(obj.classList.value).substring(8,9)].imgSrc}">${blogsFinalGlobal[(obj.classList.value).substring(8,9)].postContent} <br><br> <h2>get products talked about in this blog below.</h2><br><br>`;
    blogsFinalGlobal[(obj.classList.value).substring(8,9)].adsArray.forEach((ad,indexOfAd)=>{
        document.querySelector('.blogs-viewer-container .blogContent p').innerHTML += ad + '<br>';
    });
    document.querySelector('.menu-icon').classList.add('make-invisible');
    document.querySelector('.back-icon').classList.remove('make-invisible');
    document.querySelector('.blogs-viewer-container').classList.toggle('make-invisible');
    t1.fromTo(document.querySelector('.blogs-viewer-container'), 0.2, {opacity:0}, {opacity:1, ease:Power2.easeInOut});
}
document.querySelector('.back-icon').addEventListener('click', ()=>{

    document.querySelector('.blogs-viewer-container').classList.add('make-invisible');
    document.querySelector('.menu-icon').classList.remove('make-invisible');
    document.querySelector('.back-icon').classList.add('make-invisible');
});
const t1 = new TimelineMax();
t1.fromTo(mindium,2 , {x:-500}, {x:0, ease:Power2.easeInOut})
.fromTo(tagline, 2, {x:500}, {x:0,ease:Power2.easeInOut}, "-=2")
.fromTo(exploreBtn, 1, {opacity:0}, {opacity:1, ease:Power2.easeInOut}, "-=0.5")
exploreBtn.addEventListener('click', ()=>{
    t1.fromTo(tagline, 1, {x:0}, {x:500,ease:Power2.easeInOut})
    .fromTo(exploreBtn, 1, {x:0}, {x:-500, ease:Power2.easeInOut}, '-=1')
    .fromTo(stylizeWelcomeContainer, 1 , {y:0}, {y: -25, ease:Power2.easeInOut}, '-=1');   
    setTimeout(() => {
        tagline.classList.add('make-invisible');
        exploreBtn.classList.add('make-invisible');
        document.querySelector('#root').classList.add('align-items-to-start');
        t1.fromTo(document.querySelector('.tagline-extended'), 1, {opacity:0, y:0}, {opacity:1, y:-25, ease:Power2.easeInOut}, "-=0.5")
        document.querySelector('.scroll-box1').classList.remove('make-invisible');
        document.querySelector('.scroll-box2').classList.remove('make-invisible');
        document.querySelector('.scroll-box3').classList.remove('make-invisible');
        document.querySelector('.menu-icon').classList.remove('make-invisible');
        t1.fromTo(document.querySelector('.scroll-box1'), 0.5, {opacity:0}, {opacity:1, ease:Power2.easeInOut})
        t1.fromTo(document.querySelector('.scroll-box2'), 0.5, {opacity:0}, {opacity:1, ease:Power2.easeInOut})
        t1.fromTo(document.querySelector('.scroll-box3'), 0.5, {opacity:0}, {opacity:1, ease:Power2.easeInOut})
    }, 900);     
});
document.querySelector('.menu-icon').addEventListener('click', ()=>{
    if(menuIconClickCount % 2 === 0){
        document.querySelector('.menu-icon img').src = "./images/icons/icons8-squared-menu-96 (2).png";
    }
    else{
        document.querySelector('.menu-icon img').src = "./images/icons/icons8-squared-menu-96 (1).png";
    }
    menuIconClickCount++;
    document.querySelector('.menu').classList.toggle('make-invisible');
    t1.fromTo(document.querySelector('.menu'), 0.2, {opacity:0}, {opacity:1, ease:Power2.easeInOut});
});

const fadeInSlideUp = document.querySelectorAll(".fade-in-slide-up");

document.addEventListener("scroll", ()=>{
    fadeInSlideUp.forEach((fadeInSlideUps)=>{
        let clientHeight = document.documentElement.clientHeight;
        let fadeInSlideUpY = fadeInSlideUps.getBoundingClientRect().y;
        let fadeInSlideUpHeight = fadeInSlideUps.getBoundingClientRect().height;
        console.log(clientHeight > fadeInSlideUpY)
        
        // console.log(clientHeight, fadeInSlideUp)
        if(clientHeight > fadeInSlideUpY + fadeInSlideUpHeight * 2/3){
            fadeInSlideUps.style.animation = "fade-in-slide-up .5s forwards ease";
        }
    })
    
})
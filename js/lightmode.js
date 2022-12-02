let isTrue = false;
function lightmode(){
    lightmodeswitch();
    let dropShadowLight = document.querySelectorAll(".light-drop-shadow");
    let lightBackground = document.querySelectorAll(".light-background");
    let color = document.querySelectorAll(".light-color");
    let lightMode = document.querySelectorAll(".light-mode");
    lightBackground.forEach(e=>{
        e.classList.toggle("light-mode-background");    
    })
    dropShadowLight.forEach(e => {
        e.classList.toggle("light-mode-drop-shadow");    
    });
    color.forEach(e=>{
        e.classList.toggle("light-mode-color");    
    })
    lightMode.forEach(e => {
        e.classList.toggle("light-mode-mode");    
    });
    console.log("WORKING");
}
function lightmodeswitch(num){
    if(!isTrue){
        document.querySelector(".light-mode-switch").textContent = "DARK MODE";
        isTrue = true;
    }else{
        document.querySelector(".light-mode-switch").textContent = "LIGHT MODE";
        isTrue = false;
    }
}
const menuList = 
[
    [
        [{"name":"choco","price":"P50.00"},{"name":"Hot Choco","price":"P75.00"},{"name":"vanilla","price":"P75.00"},{"name":"java chip","price":"P75.00"}],
        [{"name":"choco","price":"P75.00"},{"name":"Hot Choco","price":"P50.00"},{"name":"vanilla","price":"P75.00"},{"name":"Iced White Mocha","price":"P75.00"}],
        [{"name":"choco","price":"P75.00"},{"name":"Hot Choco","price":"P75.00"},{"name":"vanilla","price":"P50.00"},{"name":"Nachos","price":"P75.00"}],
        [{"name":"choco","price":"P75.00"},{"name":"Hot Choco","price":"P75.00"},{"name":"vanilla","price":"P75.00"},{"name":"Fries","price":"P50.00"}]
    ],
    [
        [{"name":"choco","price":"P75.00"},{"name":"Hot Choco","price":"P75.00"},{"name":"vanilla","price":"P75.00"},{"name":"java chip","price":"P75.00"}],
        [{"name":"choco","price":"P75.00"},{"name":"Hot Choco","price":"P75.00"},{"name":"vanilla","price":"P75.00"},{"name":"Iced White Mocha","price":"P75.00"}],
        [{"name":"choco","price":"P75.00"},{"name":"Hot Choco","price":"P75.00"},{"name":"vanilla","price":"P75.00"},{"name":"Nachos","price":"P75.00"}],
        [{"name":"choco","price":"P75.00"},{"name":"Hot Choco","price":"P75.00"},{"name":"vanilla","price":"P75.00"},{"name":"Fries","price":"P75.00"}]
    ]
]
let firstMenuImg = document.getElementsByClassName("first-menu-img");
let secondMenuImg = document.getElementsByClassName("second-menu-img");

let firstMenuText = document.getElementsByClassName("first-menu-text");
let secondMenuText = document.getElementsByClassName("second-menu-text");

let firstPrice = document.getElementsByClassName("price-first");
let secondPrice = document.getElementsByClassName("price-second");



function changeMenu(type, contentNum){
    if(type==0){
        for(let i = 0;i<firstMenuImg.length;i++){
            firstMenuImg.item(i).src="../img/firstmenu/"+(menuList[type][contentNum][i].name).toString()  + ".png";
        }
        for(let i = 0;i<firstMenuText.length;i++){
            firstMenuText.item(i).textContent=menuList[type][contentNum][i].name.charAt(0).toUpperCase() + menuList[type][contentNum][i].name.slice(1);
            firstPrice.item(i).textContent=menuList[type][contentNum][i].price.charAt(0).toUpperCase() + menuList[type][contentNum][i].price.slice(1);
        }
    }else{
        for(let i = 0;i<secondMenuImg.length;i++){
            secondMenuImg.item(i).src="../img/firstmenu/"+(menuList[type][contentNum][i].name).toString() + ".png";
        }
        for(let i = 0;i<secondMenuText.length;i++){
            secondMenuText.item(i).textContent=(menuList[type][contentNum][i].name).toString().charAt(0).toUpperCase() + (menuList[type][contentNum][i].name).toString().slice(1);
            secondPrice.item(i).textContent=menuList[type][contentNum][i].price.charAt(0).toUpperCase() + menuList[type][contentNum][i].price.slice(1);
        }   
    }
}
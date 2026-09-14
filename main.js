const btnModal = document.getElementById("btnModal");
const modal3 = document.getElementById("modal3");
const close3 = document.getElementById("close3");

btnModal.addEventListener("click", () => {
    modal3.style.display = "block";
});

close3.addEventListener("click", () => {
    modal3.style.display = "none";
});



const buynow = document.getElementById("buynow");
const modal1 = document.getElementById("modal1");
const close1 = document.getElementById("close1");

 buynow.addEventListener("click", () => {
    modal1.style.display = "block";
});

close1.addEventListener("click", () => {
    modal1.style.display = "none";
});


const sign = document.getElementById("sign");
const modal2 = document.getElementById("modal2");
const close2 = document.getElementById("close2");

sign.addEventListener("click", () => {
    modal2.style.display = "block";
    modal1.style.display = "none";
});

close2.addEventListener("click", () => {
    modal2.style.display = "none";

});



const next = document.getElementById("next"); 
const modal4 = document.getElementById("modal4"); 
const send = document.getElementById("send"); 
const shopnow = document.getElementById("shopnow"); 
const modal5 = document.getElementById("Modal5"); 
 
send.addEventListener("click", () => { 
    modal4.style.display = "block"; 
}); 
 
next.addEventListener("click", () => { 
    modal4.style.display = "none"; 
    modal5.style.display = "block"; 
}); 
 
shopnow.addEventListener("click", () => { 
    modal5.style.display = "none"; 
});


const burger = document.getElementById("Burger");
const burgerbtn = document.getElementById("burgerbtn");
const close6 = document.getElementById("close6");

burgerbtn.addEventListener("click", () => {
    burger.style.display = "block";
});

close6.addEventListener("click", () => {
    burger.style.display = "none";
});
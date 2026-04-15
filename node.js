//form submit
let email= document.querySelector("#email");
let password=document.querySelector("#password");
let btn=document.querySelector("#btn");
let form=document.querySelector("form");
form.addEventListener("submit",function(dets){
dets.preventDefault(); //not reloaded..
let emailRegex= /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
let passwordRegex=/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
let emailans=emailRegex.test(email.value);
let passwordans=passwordRegex.test(password.value);
// document.querySelector("#email-error").textContent="";
// document.querySelector("#password-error").textContent="";
let isvalid="true";
if(!emailans){
    document.querySelector("#email-error").textContent="email is incorrect";
     document.querySelector("#email-error").style.color="red";
    document.querySelector("#email-error").style.display="initial";
    isvalid="false";
}
 if(!passwordans){
    document.querySelector("#password-error").textContent="password is incorrect";
         document.querySelector("#password-error").style.color="red";
document.querySelector("#password-error").style.display="initial";
isvalid="false";
}
if(isvalid){
    document.querySelector("#result-massage").textContent="everything is correct";
}
});



//downloding
// let progress = document.querySelector(".progressbar");
// let percent = document.querySelector(".percent");
// let secounds = 20;
// let count = 0;
// setInterval(function () {
//     if (count < 100) {
//         count++;
//         progress.style.width = `${count}%`;
//         // percent.textContent=progress.style.width;
//         percent.textContent = `${count}%`;
//     }
//     else {
//         document.querySelector(".head").textContent = "Complated.."
//     }
// }, (secounds * 1000) / 100);



//toggle button
//mode chack 
// let body=document.querySelector("body");
// function setdarkorlight(){
//     if(window.matchMedia('(prefers-color-scheme=dark)').matches){
//     document.body.classList.add("dark");
//     document.body.classList.remove("light");
    
// }
// else{
//     document.body.classList.add("light");
//     document.body.classList.remove("dark");
// }
// }
// let btn=document.querySelector("button");
// btn.addEventListener("click",function(){
//     // container chack karta hai class dark hai ki nahi
//     if(btn.body.classList.contains("dark")){
//    btn.body.classList.remove("dark");
//    btn.body.classList.add("light");

//     }
//     else{
//           btn.body.classList.remove("light");
//    btn.body.classList.add("dark");
//     }
//     })

//  setdarkorlight();
// window.matchMedia('(prefers-color-scheme=dark)').addEventListener("change",function(){
// setdarkorlight();
// })

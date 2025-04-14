// let clicked=false;
// changeText=()=>{
//     if(clicked==false){
//         clicked=true;
//         h3=document.querySelector("h3");
//         h3.innerHTML="I am learning javascript";
//     }
//     else{
//         clicked=false;
//         h3=document.querySelector("h3");
//     h3.innerHTML="I am testing if-else";
//     }

    
// }
//-----------------Assignment 1-----------------
let input=document.querySelector("input");
let h3=document.querySelector("h3");
data=h3.innerText
input.addEventListener("input",()=>{
      let text=input.value;
    h3.innerHTML= data+text;
   // input.value="";
})
//-----------------Assignment 2-----------------
let button0=document.querySelectorAll("button")[0];
button0.addEventListener("mouseover",()=>{
    
    button0.innerText="Mouse Hovered";
    button0.style.backgroundColor="green";
})

button0.addEventListener("mouseout",()=>{
    button0.innerText="Mouse Out";
    button0.style.backgroundColor="red";
})

//-----------------Assignment 3-----------------
let button1=document.querySelectorAll("button")[1];
button1.addEventListener("dblclick",()=>{
    alert("Button was double clicked");
})
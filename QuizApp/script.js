// https://opentdb.com/api_category.php  //get catogory
//https://opentdb.com/api.php?amount=10&category=9 // get quiz

let catagory=document.getElementsByClassName("catagory")[0];
let dropDown=document.querySelector("select");
let catagoryButton=document.querySelector("button");
let questionDiv=document.getElementsByClassName("questions")[0];

let lists=[];



(async ()=>{
    const response= await fetch("https://opentdb.com/api_category.php")
    const data= await response.json()
    lists=data.trivia_categories;
    
    lists.map(list=>{
        
        let option=document.createElement("option");
        option.value=list.id;
        option.innerText=list.name;
        dropDown.appendChild(option);
    });
       
    }

)();

catagoryButton.addEventListener("click",function(){
    let selectedCatagory=dropDown.value;
    console.log(selectedCatagory);
    // getQuiz(selectedCatagory);
   
    questionDiv.style.display = "block";
    catagory.style.display = "none";
})
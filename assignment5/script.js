
const onsubmit=()=>{
    
    // let password=document.getElementById("password").value;
    // console.log(password)
alert("Form submitted successfully!")
};

firstDigit(2345);
function firstDigit(num) 
{
    while(num>10)
    {
        num/=10;
    }
    console.log(num.toFixed(0))
};

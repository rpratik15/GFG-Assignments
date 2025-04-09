
const submit=()=>{
    
    let passwordLen=document.getElementById("password").value.length;
    let userName=document.getElementById("username");
    error=document.getElementById("error-message");
    
    if(userName.value.length==0)
    {
        error.innerText="Please enter the username!!!";
        return;
    }
    if(passwordLen<4 || passwordLen>6)
    {
        error.innerText="Password length should be >4 and <6";
    }
    else
    {
        alert("Form submitted successfully!");
    }

};

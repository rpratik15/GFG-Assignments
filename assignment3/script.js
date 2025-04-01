


const changeBackcolor = () => {
 

    let randomColor = Math.floor(Math.random() * 100);
    
    let item = document.getElementById("item1");

    item.style.backgroundColor = `rgb(14,${randomColor},125)`;
    item.style.color = `rgb(255,${randomColor},125)`;
}

const changeFont=()=>{
    let item = document.getElementById("item2");
    item.style.fontFamily= "Helvetica, sans-serif";
    item.style.fontSize = "30px";
    item.style.fontWeight = "bold";

}


const changeRadious=()=>{
    let item = document.getElementById("item3");
    item.style.border = "1px solid black";
    item.style.borderRadius = "20px";

}

const changePosition=()=>{

    let item = document.getElementById("item4");
    item.style.position = "absolute";
    item.style.top = "300px";
    item.style.left = "100px";
}

const changeCursor=()=>{
    let item = document.getElementById("item5");
    item.style.cursor = "pointer";
    item.style.textDecoration = "underline";
    item.style.color = "blue";
}
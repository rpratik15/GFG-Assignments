


const changeBackcolor = () => {
    let randomColor = Math.floor(Math.random() * 100);
    console.log(randomColor)
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
// let products = [
//     {
//       id: "1",
//       item: "Shirt"
//     },
//     {
//       id: "2",
//       item: "Jeans"
//     },
//     {
//       id: "3",
//       item: "T-shirt"
//     },
//     {
//       id: "4",
//       item: "Denim Jacket"
//     },
//     {
//       id: "5",
//       item: "Casual Shoes"
//     }
//    ];
const el = document.querySelector('.mouse');
let lastMove = 0;

function onMouseMove(e) {
x = e.clientX;
y = e.clientY;
updateMouse(x, y);
lastMove = Date.now();
}

function updateMouse(x, y) {
el.style.transform = `translate(${x}px, ${y}px)`;
}

function render(a) {
if (Date.now() - lastMove > 500) {
const noiseX = (noise.simplex3(2, 0, a * 0.0004) + 1) / 2;
const noiseY = (noise.simplex3(10, 0, a * 0.0004) + 1) / 2;
const x = noiseX * innerWidth;
const y = noiseY * innerHeight;
updateMouse(x, y);
}

requestAnimationFrame(render);
}

window.addEventListener('mousemove', onMouseMove);
requestAnimationFrame(render);
<<<<<<< HEAD
//    let Container = document.getElementById("container");
//    products.map((product) => {
   
//     let productElement = document.createElement("div");
//     productElement.className="product";
//     Container.appendChild(productElement);
//     let paragraph=document.createElement("p");
//     paragraph.innerText="ID :"+product.id;
//     let h3=document.createElement("h3");
//     h3.innerText="Item :"+product.item;
//     let button=document.createElement("button");
//     button.innerText="Remove";
//     productElement.appendChild(paragraph);
//     productElement.appendChild(h3);
//     productElement.appendChild(button);
//     button.addEventListener("click", () => {
//         productElement.remove();
//     });
    
//    });
=======

   let fruits=["Apple","Mango","Papaya","Dragon Fruit","Kiwi"]
   fruits.splice(4,1)
   console.log(fruits)
  //  let Container = document.getElementById("container");
  //  products.map((product) => {
   
  //   let productElement = document.createElement("div");
  //   productElement.className="product";
  //   Container.appendChild(productElement);
  //   let paragraph=document.createElement("p");
  //   paragraph.innerText="ID :"+product.id;
  //   let h3=document.createElement("h3");
  //   h3.innerText="Item :"+product.item;
  //   let button=document.createElement("button");
  //   button.innerText="Remove";
  //   productElement.appendChild(paragraph);
  //   productElement.appendChild(h3);
  //   productElement.appendChild(button);
  //   button.addEventListener("click", () => {
  //       productElement.remove();
  //   });
    
  //  });
>>>>>>> 93963513fe359df2c1c30dcc9b7a1a4d1188bd62

   
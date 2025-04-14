let products = [
    {
      id: "1",
      item: "Shirt"
    },
    {
      id: "2",
      item: "Jeans"
    },
    {
      id: "3",
      item: "T-shirt"
    },
    {
      id: "4",
      item: "Denim Jacket"
    },
    {
      id: "5",
      item: "Casual Shoes"
    }
   ];
   
   let Container = document.getElementById("container");
   products.map((product) => {
   
    let productElement = document.createElement("div");
    productElement.className="product";
    Container.appendChild(productElement);
    let paragraph=document.createElement("p");
    paragraph.innerText="ID :"+product.id;
    let h3=document.createElement("h3");
    h3.innerText="Item :"+product.item;
    let button=document.createElement("button");
    button.innerText="Remove";
    productElement.appendChild(paragraph);
    productElement.appendChild(h3);
    productElement.appendChild(button);
    button.addEventListener("click", () => {
        productElement.remove();
    });
    
   });

   
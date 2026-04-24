// LOGIN PROTECTION
if(!localStorage.getItem("login")){
    window.location.href = "login.html";
}

let cart = 0;

const products = [
{ name:"Laptop", price:50000, img:"public/images/laptop.jpg"},
{ name:"Phone", price:20000, img:"https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?fm=jpg&q=60&w=3000&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cGhvbmV8ZW58MHx8MHx8fDA%3D" },
{ name:"Headphones", price:3000, img:"public/images/headphones.png" },
{ name:"Watch", price:5000, img:"public/images/watch.jpg"},
{ name:"Shoes", price:4000, img:"public/images/watch.jpg" },
{ name:"Chair", price:2000, img:"public/images/chair.jpg" },
{ name:"Table", price:5000, img:"public/images/table.jpg" },
{ name:"Bag", price:2500, img:"public/images/women.jpg" }

];

const container = document.getElementById("productContainer");

// RENDER PRODUCTS
products.forEach(p => {
    let div = document.createElement("div");
    div.className = "card";

    div.innerHTML = `
        <img src="${p.img}">
        <h3>${p.name}</h3>
        <p>₹${p.price}</p>
        <button onclick="addToCart(this)">Add to Cart</button>
    `;

    container.appendChild(div);
});

// ADD TO CART
function addToCart(btn){
    cart++;
    document.getElementById("cartCount").innerText = cart;

    btn.innerText = "✓ Added";
    btn.style.background = "green";

    setTimeout(() => {
        btn.innerText = "Add to Cart";
        btn.style.background = "";
    }, 1000);
}

// LOGOUT
function logout(){
    localStorage.removeItem("login");
    window.location.href = "login.html";
}

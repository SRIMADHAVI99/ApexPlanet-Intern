// LOAD CART
let cart = localStorage.getItem("cart") || 0;
document.getElementById("cart").innerText = cart;

// ADD TO CART
function addCart(item) {
    cart++;
    localStorage.setItem("cart", cart);
    document.getElementById("cart").innerText = cart;
    alert(item + " added to cart!");
}

// DARK MODE
function toggleMode() {
    document.body.classList.toggle("dark");
}

// FILTER
function filterItems(category) {
    let items = document.querySelectorAll(".card");

    items.forEach(item => {
        item.style.display =
            category === "all" || item.dataset.category === category
            ? "block"
            : "none";
    });
}

// SEARCH
document.getElementById("search").addEventListener("keyup", function () {
    let value = this.value.toLowerCase();
    let items = document.querySelectorAll(".card");

    items.forEach(item => {
        let name = item.dataset.name;
        item.style.display = name.includes(value) ? "block" : "none";
    });
});

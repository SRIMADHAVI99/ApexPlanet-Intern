// ===== TODO (Local Storage) =====
let tasks = JSON.parse(localStorage.getItem("tasks")) || [];

function showTasks() {
    let list = document.getElementById("taskList");
    let empty = document.getElementById("emptyMsg");

    list.innerHTML = "";

    if (tasks.length === 0) {
        empty.style.display = "block";
    } else {
        empty.style.display = "none";
    }

    tasks.forEach((task, index) => {
        let li = document.createElement("li");
        li.innerText = task;

        li.onclick = function () {
            tasks.splice(index, 1);
            localStorage.setItem("tasks", JSON.stringify(tasks));
            showTasks();
        };

        list.appendChild(li);
    });
}

function addTask() {
    let input = document.getElementById("taskInput");
    let value = input.value.trim();

    if (value === "") return;

    tasks.push(value);
    localStorage.setItem("tasks", JSON.stringify(tasks));
    input.value = "";
    showTasks();
}

showTasks();


// ===== FILTER =====
function filterItems(category) {
    let items = document.querySelectorAll(".product-card");

    items.forEach(item => {
        if (category === "all" || item.dataset.category === category) {
            item.style.display = "block";
        } else {
            item.style.display = "none";
        }
    });
}


// ===== SORT =====
function sortItems(type) {
    let container = document.getElementById("productContainer");
    let items = Array.from(container.children);

    items.sort((a, b) => {
        let priceA = Number(a.dataset.price);
        let priceB = Number(b.dataset.price);

        return type === "low" ? priceA - priceB : priceB - priceA;
    });

    container.innerHTML = "";
    items.forEach(item => container.appendChild(item));
}


// ===== ACTIVE BUTTON =====
function setActive(btn) {
    document.querySelectorAll(".filters button").forEach(b => b.classList.remove("active"));
    btn.classList.add("active");
}


// ===== CONTACT MESSAGE =====
document.getElementById("sendBtn").onclick = function () {
    document.getElementById("msg").innerText = "Message sent!";
};

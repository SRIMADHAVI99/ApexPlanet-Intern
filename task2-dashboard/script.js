// FORM VALIDATION
function validateForm() {
    let name = document.getElementById("name").value.trim();
    let email = document.getElementById("email").value.trim();
    let msg = document.getElementById("message").value.trim();
    let error = document.getElementById("error");

    if (name === "" || email === "" || msg === "") {
        error.innerText = "⚠ Please fill all fields";
        error.style.color = "red";
        return;
    }

    if (!email.includes("@") || !email.includes(".")) {
        error.innerText = "⚠ Enter valid email";
        error.style.color = "red";
        return;
    }

    error.innerText = "✅ Message sent!";
    error.style.color = "green";
}


// TODO LIST
function addTask() {
    let input = document.getElementById("taskInput");
    let task = input.value.trim();

    if (task === "") return;

    let li = document.createElement("li");
    li.innerText = task;

    let btn = document.createElement("button");
    btn.innerText = "🗑";
    btn.className = "delete";

    btn.onclick = function () {
        li.remove();
    };

    li.appendChild(btn);
    document.getElementById("taskList").appendChild(li);

    input.value = "";
}

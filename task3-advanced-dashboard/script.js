// QUESTIONS
let questions = [
    {
        q: "What is HTML?",
        options: ["Programming Language", "Markup Language", "Database"],
        answer: "Markup Language"
    },
    {
        q: "Which is used for styling?",
        options: ["HTML", "CSS", "Python"],
        answer: "CSS"
    },
    {
        q: "Which is used for logic?",
        options: ["JavaScript", "CSS", "HTML"],
        answer: "JavaScript"
    },
    {
        q: "Which tag is used for headings?",
        options: ["<p>", "<h1>", "<div>"],
        answer: "<h1>"
    },
    {
        q: "Which property changes text color?",
        options: ["background", "color", "font"],
        answer: "color"
    }
];

let index = 0;
let score = 0;
let answered = false;

// LOAD QUESTION
function loadQuestion() {
    let q = questions[index];
    document.getElementById("question").innerText = q.q;

    let optionsDiv = document.getElementById("options");
    optionsDiv.innerHTML = "";

    answered = false;

    q.options.forEach(opt => {
        let btn = document.createElement("button");
        btn.innerText = opt;

        btn.onclick = function () {
            if (answered) return;

            answered = true;

            let allBtns = document.querySelectorAll("#options button");
            allBtns.forEach(b => b.classList.remove("selected"));

            btn.classList.add("selected");

            if (opt === q.answer) {
                score++;
            }
        };

        optionsDiv.appendChild(btn);
    });
}

// NEXT QUESTION
function nextQuestion() {
    index++;

    if (index < questions.length) {
        loadQuestion();
    } else {
        document.getElementById("question").innerText = "🎉 Quiz Finished!";
        document.getElementById("options").innerHTML = "";
        document.getElementById("score").innerText = "Your Score: " + score;
    }
}

// LOAD FIRST QUESTION
loadQuestion();


// JOKE API
function getJoke() {
    document.getElementById("joke").innerText = "Loading...";

    fetch("https://official-joke-api.appspot.com/random_joke")
        .then(res => res.json())
        .then(data => {
            document.getElementById("joke").innerText =
                data.setup + " 😂 " + data.punchline;
        })
        .catch(() => {
            document.getElementById("joke").innerText = "Failed to load joke";
        });
}

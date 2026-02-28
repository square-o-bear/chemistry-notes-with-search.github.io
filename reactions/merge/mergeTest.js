
var varients1 = [
    { task: "4Al + 3O₂ → ?", answer: "Al2O3" },
    { task: "2Mg + O₂ → ?", answer: "2MgO" },
    { task: "4P + 5O₂ → ?", answer: "2P2O5" },
    { task: "2H₂ + O₂ → ?", answer: "2H2O" },
    { task: "2Cu + O₂ → ?", answer: "2CuO" },
    { task: "S + O₂ → ?", answer: "SO2" },
    { task: "C + O₂ → ?", answer: "CO2" },
    { task: "N₂ + O₂ → ?", answer: "2NO" },
    { task: "2Ca + O₂ → ?", answer: "2CaO" },
    { task: "4Na + O₂ → ?", answer: "2Na2O" }
];

var varients2 = [
    { task: "? + O₂ → 2MgO", answer: "2Mg" },
    { task: "4? + 3O₂ → 2Al₂O₃", answer: "Al" },
    { task: "2Cu + ? → 2CuO", answer: "O2" },
    { task: "? + H₂ → 2H₂O", answer: "O2" },
    { task: "3Fe + ? → Fe₃O₄", answer: "2O2" },
    { task: "2Zn + O₂ → ?", answer: "2ZnO" },
    { task: "4K + ? → 2K₂O", answer: "O2" },
    { task: "? + 3O₂ → 2P₂O₅", answer: "4P" },
    { task: "2Hg + O₂ → ?", answer: "2HgO" },
    { task: "2Ni + ? → 2NiO", answer: "O2" }
];

let correctAnswers = ["", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", ""];

for (let i = 0; i < 10; ++i) {
    let task1n = Math.min(Math.floor(Math.random() * varients1.length), Math.max(0, varients1.length-1));
    correctAnswers[i] = varients1[task1n].answer;
    document.getElementById(`q${i+1}t`).innerHTML = `${varients1[task1n].task} → <input type="text" id="q${i+1}" placeholder="например: 2P2O5">`
    varients1.splice(task1n, 1);
}

for (let i = 0; i < 10; ++i) {
    let task2n = Math.min(Math.floor(Math.random() * varients2.length), Math.max(0, varients2.length-1));
    correctAnswers[i+10] = varients2[task2n].answer;
    document.getElementById(`q${i+11}t`).innerHTML = `${varients2[task2n].task} → <input type="text" id="q${i+11}" placeholder="например: 2HgO">`
    varients2.splice(task2n, 1);
}

function checkAnswers() {
    let correctCount = 0;
    for (let i = 1; i <= 20; ++i) {
        const input = document.getElementById(`q${i}`);
        const answer = input.value.trim().replace(/\s+/g, '');
        input.classList.remove("correct", "incorrect");

        if (answer == correctAnswers[i-1]) {
            input.classList.add("correct");
            correctCount++;
        } else {
            input.classList.add("incorrect");
            console.log(answer, correctAnswers[i-1])
        }
    }

    const resultMessage = document.getElementById("result-message");
    resultMessage.textContent = `Правильно: ${correctCount} из 20`;

    if (correctCount >= 17) {
        resultMessage.className = "result-message result-correct";
        resultMessage.textContent += " - Отлично!";
    } else if (correctCount >= 12) {
        resultMessage.className = "result-message result-correct";
        resultMessage.textContent += " - Хорошо!";
    } else {
        resultMessage.className = "result-message result-incorrect";
        resultMessage.textContent += " - Повтори тему и попробуй снова!";
    }
}

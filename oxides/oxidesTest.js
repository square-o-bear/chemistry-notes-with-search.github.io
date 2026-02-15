
// Задания
let varients1 = [
    { task: "Кальций (Ca)", answer: "CaO" },
    { task: "Сера (S)", answer: "SO₂" },
    { task: "Алюминий (Al)", answer: "Al₂O₃" },
    { task: "Магний (Mg)", answer: "MgO" },
    { task: "Углерод (C)", answer: "CO₂" },
    { task: "Калий (K)", answer: "K₂O" },
    { task: "Барий (Ba)", answer: "BaO" },
    { task: "Литий (Li)", answer: "Li₂O" },
    { task: "Железо(II) (Fe)", answer: "FeO" },
    { task: "Медь(II) (Cu)", answer: "CuO" },
    { task: "Цинк (Zn)", answer: "ZnO" },
    { task: "Натрий (Na)", answer: "Na₂O" },
    { task: "Фосфор (P)", answer: "P₂O₅" },
    { task: "Хлор (Cl)", answer: "Cl₂O₇" },
    { task: "Азот (N)", answer: "N₂O₅" },
    { task: "Хром(III) (Cr)", answer: "Cr₂O₃" },
    { task: "Марганец(VII) (Mn)", answer: "Mn₂O₇" },
    { task: "Свинец(IV) (Pb)", answer: "PbO₂" },
    { task: "Кремний (Si)", answer: "SiO₂" },
    { task: "Бериллий (Be)", answer: "BeO" },
    { task: "Никель(II) (Ni)", answer: "NiO" },
    { task: "Мышьяк(V) (As)", answer: "As₂O₅" }
];
let varients2 = [
    { task: "CO₂ → C", answer: "IV" },
    { task: "Fe₂O₃ → Fe", answer: "III" },
    { task: "SO₃ → S", answer: "VI" },
    { task: "P₂O₅ → P", answer: "V" },
    { task: "Na₂O → Na", answer: "I" },
    { task: "Al₂O₃ → Al", answer: "III" },
    { task: "CuO → Cu", answer: "II" },
    { task: "ZnO → Zn", answer: "II" },
    { task: "MgO → Mg", answer: "II" },
    { task: "BaO → Ba", answer: "II" },
    { task: "N₂O₅ → N", answer: "V" },
    { task: "Cl₂O₇ → Cl", answer: "VII" },
    { task: "Mn₂O₇ → Mn", answer: "VII" },
    { task: "Cr₂O₃ → Cr", answer: "III" },
    { task: "PbO₂ → Pb", answer: "IV" },
    { task: "SO₂ → S", answer: "IV" },
    { task: "Li₂O → Li", answer: "I" },
    { task: "K₂O → K", answer: "I" },
    { task: "NO → N", answer: "II" },
    { task: "SiO₂ → Si", answer: "IV" },
    { task: "NiO → Ni", answer: "II" },
    { task: "As₂O₅ → As", answer: "V" }
];
let varients3 = [
    { task: "Оксид серы(VI)", answer: "SO₃" },
    { task: "Оксид азота(V)", answer: "N₂O₅" },
    { task: "Оксид меди(II)", answer: "CuO" },
    { task: "Оксид фосфора(III)", answer: "P₂O₃" },
    { task: "Оксид хлора(VII)", answer: "Cl₂O₇" },
    { task: "Оксид кальция", answer: "CaO" },
    { task: "Оксид алюминия", answer: "Al₂O₃" },
    { task: "Оксид магния", answer: "MgO" },
    { task: "Оксид углерода(IV)", answer: "CO₂" },
    { task: "Оксид натрия", answer: "Na₂O" },
    { task: "Оксид бария", answer: "BaO" },
    { task: "Оксид лития", answer: "Li₂O" },
    { task: "Оксид железа(III)", answer: "Fe₂O₃" },
    { task: "Оксид цинка", answer: "ZnO" },
    { task: "Оксид калия", answer: "K₂O" },
    { task: "Оксид марганца(VII)", answer: "Mn₂O₇" },
    { task: "Оксид хрома(III)", answer: "Cr₂O₃" },
    { task: "Оксид свинца(IV)", answer: "PbO₂" },
    { task: "Оксид кремния(IV)", answer: "SiO₂" },
    { task: "Оксид бериллия", answer: "BeO" },
    { task: "Оксид олова(IV)", answer: "SnO₂" },
    { task: "Оксид никеля(II)", answer: "NiO" },
    { task: "Оксид мышьяка(V)", answer: "As₂O₅" }
];

let correctAnswers = ["", "", "", "", "", "", "", "", "", "", "", "", "", "", ""];

// добавление их на сайт
for (let i = 0; i < 5; ++i) {
    let task1n = Math.min(Math.floor(Math.random() * varients1.length), Math.max(0, varients1.length-1));
    correctAnswers[i] = varients1[task1n].answer;
    document.getElementById(`q${i+1}t`).innerHTML = `${varients1[task1n].task} → <input type="text" id="q${i+1}" placeholder="например: Al2O3">`
    //varients1[task1n].task + " → ";
    varients1.splice(task1n, 1);
}

for (let i = 0; i < 5; ++i) {
    let task2n = Math.min(Math.floor(Math.random() * varients2.length), Math.max(0, varients2.length-1));
    correctAnswers[i+5] = varients2[task2n].answer;
    document.getElementById(`q${i+6}t`).innerHTML = `${varients2[task2n].task} → <input type="text" id="q${i+6}" placeholder="например: 2">`
    //varients1[task1n].task + " → ";
    varients2.splice(task2n, 1);
}

for (let i = 0; i < 5; ++i) {
    let task3n = Math.min(Math.floor(Math.random() * varients3.length), Math.max(0, varients3.length-1));
    correctAnswers[i+10] = varients3[task3n].answer;
    document.getElementById(`q${i+11}t`).innerHTML = `${varients3[task3n].task} → <input type="text" id="q${i+11}" placeholder="например: N2O5">`
    //varients1[task1n].task + " → ";
    varients3.splice(task3n, 1);
}

// Проверка
function checkAnswers() {
    let correctCount = 0;
    for (let i = 1; i <= 15; ++i) {
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
    resultMessage.textContent = `Правильно: ${correctCount} из 15`;

    if (correctCount >= 13) {
        resultMessage.className = "result-message result-correct";
        resultMessage.textContent += " — Отлично!";
    } else if (correctCount >= 9) {
        resultMessage.className = "result-message result-correct";
        resultMessage.textContent += " — Хорошо!";
    } else {
        resultMessage.className = "result-message result-incorrect";
        resultMessage.textContent += " — Повтори тему и попробуй снова!";
    }
}


let varients1 = [
    { task: "Кальций (Ca)", answer: "CaO" },
    { task: "Сера (S)", answer: "SO2" },
    { task: "Алюминий (Al)", answer: "Al2O3" },
    { task: "Магний (Mg)", answer: "MgO" },
    { task: "Углерод (C)", answer: "CO2" },
    { task: "Калий (K)", answer: "K2O" },
    { task: "Барий (Ba)", answer: "BaO" },
    { task: "Литий (Li)", answer: "Li2O" },
    { task: "Железо(II) (Fe)", answer: "FeO" },
    { task: "Медь(II) (Cu)", answer: "CuO" },
    { task: "Цинк (Zn)", answer: "ZnO" },
    { task: "Натрий (Na)", answer: "Na2O" },
    { task: "Фосфор (P)", answer: "P2O5" },
    { task: "Хлор (Cl)", answer: "Cl2O7" },
    { task: "Азот (N)", answer: "N2O5" },
    { task: "Хром(III) (Cr)", answer: "Cr2O3" },
    { task: "Марганец(VII) (Mn)", answer: "Mn2O7" },
    { task: "Свинец(IV) (Pb)", answer: "PbO2" },
    { task: "Кремний (Si)", answer: "SiO2" },
    { task: "Бериллий (Be)", answer: "BeO" },
    { task: "Никель(II) (Ni)", answer: "NiO" },
    { task: "Мышьяк(V) (As)", answer: "As2O5" }
];
let varients2 = [
    { task: "CO2 → C", answer: "4" },
    { task: "Fe2O3 → Fe", answer: "3" },
    { task: "SO3 → S", answer: "6" },
    { task: "P2O5 → P", answer: "5" },
    { task: "Na2O → Na", answer: "1" },
    { task: "Al2O3 → Al", answer: "3" },
    { task: "CuO → Cu", answer: "2" },
    { task: "ZnO → Zn", answer: "2" },
    { task: "MgO → Mg", answer: "2" },
    { task: "BaO → Ba", answer: "2" },
    { task: "N2O5 → N", answer: "5" },
    { task: "Cl2O7 → Cl", answer: "7" },
    { task: "Mn2O7 → Mn", answer: "7" },
    { task: "Cr2O3 → Cr", answer: "3" },
    { task: "PbO2 → Pb", answer: "4" },
    { task: "SO2 → S", answer: "4" },
    { task: "Li2O → Li", answer: "1" },
    { task: "K2O → K", answer: "1" },
    { task: "NO → N", answer: "2" },
    { task: "SiO2 → Si", answer: "4" },
    { task: "NiO → Ni", answer: "2" },
    { task: "As2O5 → As", answer: "5" }
];
let varients3 = [
    { task: "Оксид серы(VI)", answer: "SO3" },
    { task: "Оксид азота(V)", answer: "N2O5" },
    { task: "Оксид меди(II)", answer: "CuO" },
    { task: "Оксид фосфора(III)", answer: "P2O3" },
    { task: "Оксид хлора(VII)", answer: "Cl2O7" },
    { task: "Оксид кальция", answer: "CaO" },
    { task: "Оксид алюминия", answer: "Al2O3" },
    { task: "Оксид магния", answer: "MgO" },
    { task: "Оксид углерода(IV)", answer: "CO2" },
    { task: "Оксид натрия", answer: "Na2O" },
    { task: "Оксид бария", answer: "BaO" },
    { task: "Оксид лития", answer: "Li2O" },
    { task: "Оксид железа(III)", answer: "Fe2O3" },
    { task: "Оксид цинка", answer: "ZnO" },
    { task: "Оксид калия", answer: "K2O" },
    { task: "Оксид марганца(VII)", answer: "Mn2O7" },
    { task: "Оксид хрома(III)", answer: "Cr2O3" },
    { task: "Оксид свинца(IV)", answer: "PbO2" },
    { task: "Оксид кремния(IV)", answer: "SiO2" },
    { task: "Оксид бериллия", answer: "BeO" },
    { task: "Оксид олова(IV)", answer: "SnO2" },
    { task: "Оксид никеля(II)", answer: "NiO" },
    { task: "Оксид мышьяка(V)", answer: "As2O5" }
];

let correctAnswers = ["", "", "", "", "", "", "", "", "", "", "", "", "", "", ""];

for (let i = 0; i < 5; ++i) {
    let task1n = Math.min(Math.floor(Math.random() * varients1.length), Math.max(0, varients1.length-1));
    correctAnswers[i] = varients1[task1n].answer;
    document.getElementById(`q${i+1}t`).innerHTML = `${varients1[task1n].task} → <input type="text" id="q${i+1}" placeholder="например: Al2O3">`
    varients1.splice(task1n, 1);
}

for (let i = 0; i < 5; ++i) {
    let task2n = Math.min(Math.floor(Math.random() * varients2.length), Math.max(0, varients2.length-1));
    correctAnswers[i+5] = varients2[task2n].answer;
    document.getElementById(`q${i+6}t`).innerHTML = `${varients2[task2n].task} → <input type="text" id="q${i+6}" placeholder="например: 2">`
    varients2.splice(task2n, 1);
}

for (let i = 0; i < 5; ++i) {
    let task3n = Math.min(Math.floor(Math.random() * varients3.length), Math.max(0, varients3.length-1));
    correctAnswers[i+10] = varients3[task3n].answer;
    document.getElementById(`q${i+11}t`).innerHTML = `${varients3[task3n].task} → <input type="text" id="q${i+11}" placeholder="например: N2O5">`
    varients3.splice(task3n, 1);
}

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
        resultMessage.textContent += " - Отлично!";
    } else if (correctCount >= 9) {
        resultMessage.className = "result-message result-correct";
        resultMessage.textContent += " - Хорошо!";
    } else {
        resultMessage.className = "result-message result-incorrect";
        resultMessage.textContent += " - Повтори тему и попробуй снова!";
    }
}

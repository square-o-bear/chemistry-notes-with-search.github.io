// Задания про гидроксиды

let varients1 = [
    { task: "Кальций (Ca)", answer: "Ca(OH)2" },
    { task: "Алюминий (Al)", answer: "Al(OH)3" },
    { task: "Магний (Mg)", answer: "Mg(OH)2" },
    { task: "Калий (K)", answer: "KOH" },
    { task: "Натрий (Na)", answer: "NaOH" },
    { task: "Барий (Ba)", answer: "Ba(OH)2" },
    { task: "Литий (Li)", answer: "LiOH" },
    { task: "Железо(II) (Fe)", answer: "Fe(OH)2" },
    { task: "Железо(III) (Fe)", answer: "Fe(OH)3" },
    { task: "Медь(II) (Cu)", answer: "Cu(OH)2" },
    { task: "Цинк (Zn)", answer: "Zn(OH)2" },
    { task: "Хром(III) (Cr)", answer: "Cr(OH)3" },
    { task: "Никель(II) (Ni)", answer: "Ni(OH)2" },
    { task: "Марганец(II) (Mn)", answer: "Mn(OH)2" },
    { task: "Свинец(II) (Pb)", answer: "Pb(OH)2" },
    { task: "Олово(II) (Sn)", answer: "Sn(OH)2" },
    { task: "Бериллий (Be)", answer: "Be(OH)2" },
    { task: "Мышьяк(III) (As)", answer: "As(OH)2" }
];

let varients2 = [
    { task: "KOH → K", answer: "1" },
    { task: "Ca(OH)₂ → Ca", answer: "2" },
    { task: "Al(OH)₃ → Al", answer: "3" },
    { task: "NaOH → Na", answer: "1" },
    { task: "Ba(OH)₂ → Ba", answer: "2" },
    { task: "Mg(OH)₂ → Mg", answer: "2" },
    { task: "Fe(OH)₂ → Fe", answer: "2" },
    { task: "Fe(OH)₃ → Fe", answer: "3" },
    { task: "Cu(OH)₂ → Cu", answer: "2" },
    { task: "Zn(OH)₂ → Zn", answer: "2" },
    { task: "LiOH → Li", answer: "1" },
    { task: "Cr(OH)₃ → Cr", answer: "3" },
    { task: "Ni(OH)₂ → Ni", answer: "2" },
    { task: "Mn(OH)₂ → Mn", answer: "2" },
    { task: "Pb(OH)₂ → Pb", answer: "2" },
    { task: "Sn(OH)₂ → Sn", answer: "2" },
    { task: "Be(OH)₂ → Be", answer: "2" },
    { task: "As(OH)₃ → As", answer: "3" }
];

let varients3 = [
    { task: "Гидроксид калия", answer: "KOH" },
    { task: "Гидроксид натрия", answer: "NaOH" },
    { task: "Гидроксид кальция", answer: "Ca(OH)2" },
    { task: "Гидроксид бария", answer: "Ba(OH)2" },
    { task: "Гидроксид магния", answer: "Mg(OH)2" },
    { task: "Гидроксид алюминия", answer: "Al(OH)2" },
    { task: "Гидроксид железа(II)", answer: "Fe(OH)2" },
    { task: "Гидроксид железа(III)", answer: "Fe(OH)3" },
    { task: "Гидроксид меди(II)", answer: "Cu(OH)2" },
    { task: "Гидроксид цинка", answer: "Zn(OH)2" },
    { task: "Гидроксид лития", answer: "LiOH" },
    { task: "Гидроксид хрома(III)", answer: "Cr(OH)3" },
    { task: "Гидроксид никеля(II)", answer: "Ni(OH)2" },
    { task: "Гидроксид марганца(II)", answer: "Mn(OH)2" },
    { task: "Гидроксид свинца(II)", answer: "Pb(OH)2" },
    { task: "Гидроксид олова(II)", answer: "Sn(OH)2" },
    { task: "Гидроксид бериллия", answer: "Be(OH)2" },
    { task: "Гидроксид мышьяка(III)", answer: "As(OH)3" }
];

let correctAnswers = ["", "", "", "", "", "", "", "", "", "", "", "", "", "", ""];

for (let i = 0; i < 5; ++i) {
    let task1n = Math.min(Math.floor(Math.random() * varients1.length), Math.max(0, varients1.length-1));
    correctAnswers[i] = varients1[task1n].answer;
    document.getElementById(`q${i+1}t`).innerHTML = `${varients1[task1n].task} → <input type="text" id="q${i+1}" placeholder="например: Mg(OH)2">`
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
    document.getElementById(`q${i+11}t`).innerHTML = `${varients3[task3n].task} → <input type="text" id="q${i+11}" placeholder="например: Cu(OH)2">`
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

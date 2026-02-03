const selectMetal = document.getElementById("metal-select");
const selectNonmetal = document.getElementById("nonmetal-select");
const reactionResult = document.getElementById("reaction-result");
const compoundResult = document.getElementById("compound-result");
const explanation = document.getElementById("explanation");

const downcase = ['₀', '₁', '₂', '₃', '₄', '₅', '₆', '₇', '₈', '₉'];
// === КАТИОНЫ (металлы и NH₄⁺) ===
const metals = {
    Na:  { valence: 1, name: "Натрий" },
    K:   { valence: 1, name: "Калий" },
    Li:  { valence: 1, name: "Литий" },
    Rb:  { valence: 1, name: "Рубидий" },
    Cs:  { valence: 1, name: "Цезий" },
    Ca:  { valence: 2, name: "Кальций" },
    Sr:  { valence: 2, name: "Стронций" },
    Ba:  { valence: 2, name: "Барий" },
    Mg:  { valence: 2, name: "Магний" },
    Zn:  { valence: 2, name: "Цинк" },
    Fe:  { valence: 2, name: "Железо(II)" },
    Fe3: { valence: 3, name: "Железо(III)" },
    Cu:  { valence: 2, name: "Медь(II)" },
    Ag:  { valence: 1, name: "Серебро" },
    Al:  { valence: 3, name: "Алюминий" },
    Pb:  { valence: 2, name: "Свинец(II)" },
    Sn:  { valence: 2, name: "Олово(II)" },
    Hg:  { valence: 2, name: "Ртуть(II)" },
    Ni:  { valence: 2, name: "Никель" },
    Co:  { valence: 2, name: "Кобальт" }
};

// === АНИОНЫ (кислотные остатки) ===
const nonmetals = {
    Cl:  { valence: 1, name: "хлорид",     formula: "Cl₂",    root: "Cl", multi: false},
    Br:  { valence: 1, name: "бромид",     formula: "Br₂",    root: "Br", multi: false},
    I:   { valence: 1, name: "иодид",      formula: "I₂",     root: "I", multi: false},
    OH:  { valence: 1, name: "гидроксид",  formula: "H₂O",    root: "OH", multi: false},
    S:   { valence: 2, name: "сульфид",    formula: "S",      root: "S", multi: false},
    SO4: { valence: 2, name: "сульфат",    formula: "SO₃",    root: "SO₄", multi: true},
    CO3: { valence: 2, name: "карбонат",   formula: "CO₂",    root: "CO₃", multi: true},
    SiO3: { valence: 2, name: "силикат",   formula: "SiO₂",   root: "SiO₃", multi: true},
    PO4: { valence: 3, name: "фосфат",     formula: "P₄O₁₀", root: "PO₄", multi: true},
    O:   { valence: 2, name: "оксид",      formula: "O₂",     root: "O" , multi: false}
};

for (const metal in metals) {
    const newOption = document.createElement("option");
    newOption.value = metal; // Set the value attribute
    if (metal != "Fe3")
        newOption.text = `${metals[metal].name} (${metal})`; // Set the visible text
    else 
        newOption.text = `Железо(III) (Fe³)`; // Set the visible text
    selectMetal.add(newOption)
}

for (const nonmetal in nonmetals) {
    const newOption = document.createElement("option");
    newOption.value = nonmetal; // Set the value attribute
    newOption.text = `${nonmetals[nonmetal].name} (${nonmetal})`; // Set the visible text
    selectNonmetal.add(newOption)
}

function gcd(a, b) {
    if (a == 0) return b;
    if (b == 0) return a;
    return gcd(b, a%b);
}

function updateReaction() {
    const gcdValence = gcd(metals[selectMetal.value].valence, nonmetals[selectNonmetal.value].valence)
    const metalCount = metals[selectMetal.value].valence / gcdValence;
    const nonmetalCount = nonmetals[selectNonmetal.value].valence / gcdValence;
    let formula = '';

    if (!nonmetals[selectNonmetal.value].multi || nonmetalCount == 1)
        formula =
        `${(selectMetal.value == "Fe3") ? ("Fe³") : (selectMetal.value)}${(metalCount > 1) ? metalCount : ''}${selectNonmetal.value}${(nonmetalCount > 1) ? nonmetalCount : ''}`
    else
        formula =
        `${(selectMetal.value == "Fe3") ? ("Fe³") : (selectMetal.value)}${(metalCount > 1) ? metalCount : ''}(${selectNonmetal.value})${nonmetalCount}`

    for (let i = 0; i < formula.length; ++i) {
        if ('0' <= formula[i] && formula[i] <= '9') {
            console.log(formula[i], downcase[formula[i]-'0'])
            formula = formula.slice(0, i) + downcase[formula[i]-'0'] + formula.slice(i + 1);
        }
    }

    reactionResult.textContent = formula;
}

selectMetal.addEventListener("change", updateReaction);
selectNonmetal.addEventListener("change", updateReaction);

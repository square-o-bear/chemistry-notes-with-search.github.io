const elements = [
    { // Индекс 0 оставлен пустым
        name: "НЕ ПРАВИЛЬНЫЙ ВВОД",
        symbol: "!"
    },
    {
        name: "Водород",
        symbol: "H",
        mass: 1,
        minNeutrons: 0,
        maxNeutrons: 2
    },
    {
        name: "Гелий",
        symbol: "He",
        mass: 4,
        minNeutrons: 1,
        maxNeutrons: 2
    },
    {
        name: "Литий",
        symbol: "Li",
        mass: 7,
        minNeutrons: 3,
        maxNeutrons: 4
    },
    {
        name: "Бериллий",
        symbol: "Be",
        mass: 9,
        minNeutrons: 5,
        maxNeutrons: 5
    },
    {
        name: "Бор",
        symbol: "B",
        mass: 11,
        minNeutrons: 5,
        maxNeutrons: 8
    },
    {
        name: "Углерод",
        symbol: "C",
        mass: 12,
        minNeutrons: 6,
        maxNeutrons: 8
    },
    {
        name: "Азот",
        symbol: "N",
        mass: 14,
        minNeutrons: 7,
        maxNeutrons: 9
    },
    {
        name: "Кислород",
        symbol: "O",
        mass: 16,
        minNeutrons: 8,
        maxNeutrons: 10
    },
    {
        name: "Фтор",
        symbol: "F",
        mass: 19,
        minNeutrons: 9,
        maxNeutrons: 11
    },
    {
        name: "Неон",
        symbol: "Ne",
        mass: 20,
        minNeutrons: 10,
        maxNeutrons: 12
    },
    {
        name: "Натрий",
        symbol: "Na",
        mass: 23,
        minNeutrons: 12,
        maxNeutrons: 14
    },
    {
        name: "Магний",
        symbol: "Mg",
        mass: 24,
        minNeutrons: 12,
        maxNeutrons: 16
    },
    {
        name: "Алюминий",
        symbol: "Al",
        mass: 27,
        minNeutrons: 14,
        maxNeutrons: 16
    },
    {
        name: "Кремний",
        symbol: "Si",
        mass: 28,
        minNeutrons: 14,
        maxNeutrons: 18
    },
    {
        name: "Фосфор",
        symbol: "P",
        mass: 31,
        minNeutrons: 16,
        maxNeutrons: 18
    },
    {
        name: "Сера",
        symbol: "S",
        mass: 32,
        minNeutrons: 16,
        maxNeutrons: 20
    },
    {
        name: "Хлор",
        symbol: "Cl",
        mass: 35,
        minNeutrons: 18,
        maxNeutrons: 20
    },
    {
        name: "Аргон",
        symbol: "Ar",
        mass: 40,
        minNeutrons: 22,
        maxNeutrons: 24
    },
    {
        name: "Калий",
        symbol: "K",
        mass: 39,
        minNeutrons: 20,
        maxNeutrons: 22
    },
    {
        name: "Кальций",
        symbol: "Ca",
        mass: 40,
        minNeutrons: 20,
        maxNeutrons: 28
    },
    {
        name: "Скандий",
        symbol: "Sc",
        mass: 45,
        minNeutrons: 24,
        maxNeutrons: 26
    },
    {
        name: "Титан",
        symbol: "Ti",
        mass: 48,
        minNeutrons: 26,
        maxNeutrons: 30
    },
    {
        name: "Ванадий",
        symbol: "V",
        mass: 51,
        minNeutrons: 28,
        maxNeutrons: 30
    },
    {
        name: "Хром",
        symbol: "Cr",
        mass: 52,
        minNeutrons: 28,
        maxNeutrons: 32
    },
    {
        name: "Марганец",
        symbol: "Mn",
        mass: 55,
        minNeutrons: 30,
        maxNeutrons: 32
    },
    {
        name: "Железо",
        symbol: "Fe",
        mass: 56,
        minNeutrons: 30,
        maxNeutrons: 34
    },
    {
        name: "Кобальт",
        symbol: "Co",
        mass: 59,
        minNeutrons: 32,
        maxNeutrons: 34
    },
    {
        name: "Никель",
        symbol: "Ni",
        mass: 58,
        minNeutrons: 30,
        maxNeutrons: 36
    },
    {
        name: "Медь",
        symbol: "Cu",
        mass: 64,
        minNeutrons: 35,
        maxNeutrons: 37
    },
    {
        name: "Цинк",
        symbol: "Zn",
        mass: 65,
        minNeutrons: 35,
        maxNeutrons: 41
    },
    {
        name: "Галлий",
        symbol: "Ga",
        mass: 70,
        minNeutrons: 41,
        maxNeutrons: 43
    },
    {
        name: "Германий",
        symbol: "Ge",
        mass: 72,
        minNeutrons: 42,
        maxNeutrons: 46
    },
    {
        name: "Мышьяк",
        symbol: "As",
        mass: 75,
        minNeutrons: 42,
        maxNeutrons: 46
    },
    {
        name: "Селен",
        symbol: "Se",
        mass: 79,
        minNeutrons: 45,
        maxNeutrons: 49
    },
    {
        name: "Бром",
        symbol: "Br",
        mass: 80,
        minNeutrons: 45,
        maxNeutrons: 47
    },
    {
        name: "Криптон",
        symbol: "Kr",
        mass: 84,
        minNeutrons: 48,
        maxNeutrons: 50
    },
    {
        name: "Рубидий",
        symbol: "Rb",
        mass: 85,
        minNeutrons: 48,
        maxNeutrons: 50
    },
    {
        name: "Стронций",
        symbol: "Sr",
        mass: 88,
        minNeutrons: 50,
        maxNeutrons: 52
    },
    {
        name: "Иттрий",
        symbol: "Y",
        mass: 89,
        minNeutrons: 50,
        maxNeutrons: 52
    },
    {
        name: "Цирконий",
        symbol: "Zr",
        mass: 91,
        minNeutrons: 51,
        maxNeutrons: 57
    },
    {
        name: "Ниобий",
        symbol: "Nb",
        mass: 93,
        minNeutrons: 52,
        maxNeutrons: 54
    },
    {
        name: "Молибден",
        symbol: "Mo",
        mass: 96,
        minNeutrons: 52,
        maxNeutrons: 58
    },
    {
        name: "Технеций",
        symbol: "Tc",
        mass: 98,
        minNeutrons: 53,
        maxNeutrons: 55
    },
    {
        name: "Рутений",
        symbol: "Ru",
        mass: 101,
        minNeutrons: 56,
        maxNeutrons: 58
    },
    {
        name: "Родий",
        symbol: "Rh",
        mass: 103,
        minNeutrons: 58,
        maxNeutrons: 60
    },
    {
        name: "Палладий",
        symbol: "Pd",
        mass: 106,
        minNeutrons: 58,
        maxNeutrons: 64
    },
    {
        name: "Серебро",
        symbol: "Ag",
        mass: 108,
        minNeutrons: 61,
        maxNeutrons: 63
    },
    {
        name: "Цинк",
        symbol: "Cd",
        mass: 112,
        minNeutrons: 64,
        maxNeutrons: 68
    },
    {
        name: "Индий",
        symbol: "In",
        mass: 115,
        minNeutrons: 66,
        maxNeutrons: 68
    },
    {
        name: "Олово",
        symbol: "Sn",
        mass: 119,
        minNeutrons: 69,
        maxNeutrons: 75
    },
    {
        name: "Сурьма",
        symbol: "Sb",
        mass: 122,
        minNeutrons: 71,
        maxNeutrons: 75
    },
    {
        name: "Теллур",
        symbol: "Te",
        mass: 128,
        minNeutrons: 76,
        maxNeutrons: 82
    },
    {
        name: "Иод",
        symbol: "I",
        mass: 127,
        minNeutrons: 74,
        maxNeutrons: 76
    },
    {
        name: "Ксенон",
        symbol: "Xe",
        mass: 131,
        minNeutrons: 75,
        maxNeutrons: 81
    }
];

// масса протона 1,00728 а. е. м 
// масса электрона 5,486*10в минус 4ой степени а. е. м
// масса нейтронна 1,008 а.е.м

const kvarkMass = [1.00728, 5.486*10^4, 1.008]

// element
const elementBox = document.getElementById("element-box");
const elementName = document.getElementById("element-name");
const elementSymbol = document.getElementById("element-symbol");
const atomicNumber = document.getElementById("atomic-number");
const atomMass = document.getElementById("atom-mass");

// input + calculate button
const calculateButton = document.getElementById("calculate-button");
const protonsInput = document.getElementById("protons-input");
const neutronsInput = document.getElementById("neutrons-input");
const electronsInput = document.getElementById("electrons-input");

function calculateAtom() {
    const kvarkCount = [parseInt(protonsInput.value), parseInt(neutronsInput.value), parseInt(electronsInput.value)]
    let canExist = true;

    if (kvarkCount[0] < 1 || kvarkCount[1] < 0 || kvarkCount[2] < 1 || kvarkCount[0] != kvarkCount[2]) canExist = false;
    else if (elements[kvarkCount[0]].maxNeutrons < kvarkCount[1] || kvarkCount[1] < elements[kvarkCount[0]].minNeutrons) canExist = false;

    if (canExist) {
        atomicNumber.textContent = kvarkCount[0]
        elementName.textContent = elements[kvarkCount[0]].name;
        elementSymbol.textContent = elements[kvarkCount[0]].symbol;
        atomMass.textContent = [kvarkCount[0]*kvarkMass[0], kvarkCount[1]*kvarkMass[1], kvarkCount[2]*kvarkMass[2]].reduce((accumulator, currentValue) => accumulator + currentValue, 0).toFixed(3) + " а.е.м";
        elementBox.style.backgroundColor="#333"
    } else {
        atomMass.textContent = -1
        atomicNumber.textContent = -1
        elementName.textContent = elements[0].name;
        elementSymbol.textContent = elements[0].symbol;
        elementBox.style.backgroundColor="#b00"
    }
}


calculateButton.addEventListener("click", calculateAtom)
calculateAtom();

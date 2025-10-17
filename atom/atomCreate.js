
function add() {
    if (count+1 > 118) return;

    count++;
    let levelObj = {}
    let sublayersElectron = "";
    let remainingElectrons = count;
    let lastLayer = "";
    const previousLayer = layer
    layer = 0;
    for (const { level, maxElectrons } of sublayersMax) {
        if (remainingElectrons <= 0) break;

        const electronsHere = Math.min(remainingElectrons, maxElectrons);
        levelObj[level] = electronsHere
        lastLayer = parseInt(level[0]);
        remainingElectrons -= electronsHere;
    }
    for (const level of sublayers) {
        if (levelObj[level] === undefined) break;
        layer=parseInt(level[0]);
        sublayersElectron += `${level}${superscriptMap[levelObj[level]]} `
    }
    const angle = Math.random() * 361;

    atomNumber.textContent = `Номер ${count}`
    atomElectrons.textContent = sublayersElectron
    elementSymbol.textContent = elementSymbols[count-1];
    elementName.textContent = elementNames[count-1];
    atomMass.textContent = `${elementMasses[count-1]} а.е.м`;
    infoBut.href = `elements/${elementSymbols[count-1]}.html`;


    let electronOrbitLength = layer*3+2;
    let newOrbit = null;
    if (previousLayer != layer) {
        newOrbit = document.createElement('div');
        newOrbit.style.height = `calc(${electronOrbitLength*2}*min(1vh, 1vw))`
        newOrbit.style.width = `calc(${electronOrbitLength*2}*min(1vh, 1vw))`
        newOrbit.classList.add("orbit");
        atom.appendChild(newOrbit)
    }
    
    const newElectron = document.createElement('div');
    newElectron.classList.add("electron");
    newElectron.id = count;
    //newElectron.style.transform = `translate(calc(${Math.cos(angle)*layer - 2.5}*min(1vh, 1vw))), calc(${Math.cos(angle)*layer - 2.5}*min(1vh, 1vw)))`;\

    atom.appendChild(newElectron)
    electroms.push({
        "el": newElectron,
        "orbit": newOrbit,
        length: electronOrbitLength,
        speed: 0.01, //Math.random() * 0.015 + 0.005, 
        angle: angle
    })
}

function minus() {
    if (count > 0) {
        count--;

        if (count == 0) {
            atomNumber.textContent = "";
            atomMass.textContent = "1,007276 (1) а.е.м";
            atomElectrons.textContent = "";
            elementSymbol.textContent = "+";
            elementName.textContent = "Протон";
            infoBut.href = "";
        }
        else {
            let remainingElectrons = count;
            let sublayersElectron = "";
            let levelObj = {}
            for (const { level, maxElectrons } of sublayersMax) {
                if (remainingElectrons <= 0) break;

                const electronsHere = Math.min(remainingElectrons, maxElectrons);
                levelObj[level] = electronsHere
                remainingElectrons -= electronsHere;
            }
            for (const level of sublayers) {
                if (levelObj[level] === undefined) break;
                layer++;
                sublayersElectron += `${level}${superscriptMap[levelObj[level]]} `
            }
            atomElectrons.textContent = sublayersElectron;

            infoBut.href = `elements/${elementSymbols[count-1]}.html`;
            atomNumber.textContent = `Номер ${count}`
            elementSymbol.textContent = `${elementSymbols[count-1]}`;
            elementName.textContent = elementNames[count-1];
            atomMass.textContent = `${elementMasses[count-1]} а.е.м`;     
        }


        const obj = electroms.pop();
        obj.el.remove();
        if (obj.orbit !== null) {
            obj.orbit.remove();
            layer--;
        }
    }
}

const atom = document.getElementById("atom");
const atomNumber = document.getElementById("atom-number")
const atomMass = document.getElementById("atom-mass")
const atomElectrons = document.getElementById("atom-electrons")
const elementSymbol = document.getElementById("element-symbol")
const elementName = document.getElementById("element-name")

const plusBut = document.getElementById("plus")
const minusBut = document.getElementById("minus")
const infoBut = document.getElementById("info")

let count = 0
let layer = 0
const electroms = [];
const sublayers = ["1s", "2s", "2p", "3s", "3p", "3d", "4s", "4p", "4f", "4d", "5d", "5s", "5p", "5f", "6s", "6p", "6d", "7s", "7p"];
const sublayersMax = [
    { level: "1s", maxElectrons: 2 },
    { level: "2s", maxElectrons: 2 },
    { level: "2p", maxElectrons: 6 },
    { level: "3s", maxElectrons: 2 },
    { level: "3p", maxElectrons: 6 },
    { level: "4s", maxElectrons: 2 },
    { level: "3d", maxElectrons: 10 },
    { level: "4p", maxElectrons: 6 },
    { level: "5s", maxElectrons: 2 },
    { level: "4d", maxElectrons: 10 },
    { level: "5p", maxElectrons: 6 },
    { level: "6s", maxElectrons: 2 },
    { level: "4f", maxElectrons: 14 },
    { level: "5d", maxElectrons: 10 },
    { level: "6p", maxElectrons: 6 },
    { level: "7s", maxElectrons: 2 },
    { level: "5f", maxElectrons: 14 },
    { level: "6d", maxElectrons: 10 },
    { level: "7p", maxElectrons: 6 }
  ];

const superscriptMap = ["⁰", "¹", "²", "³", "⁴", "⁵", "⁶", "⁷", "⁸", "⁹", "¹⁰", "¹ⁱ", "¹²", "¹³", "¹⁴", "¹⁵", "¹⁶", "¹⁷", "¹⁸", "¹⁹"];
const elementSymbols = ["H", "He", "Li", "Be", "B", "C", "N", "O", "F", "Ne", "Na", "Mg", "Al", "Si", "P", "S", "Cl", "Ar", "K", "Ca", "Sc", "Ti", "V", "Cr", "Mn", "Fe", "Co", "Ni", "Cu", "Zn", "Ga", "Ge", "As", "Se", "Br", "Kr", "Rb", "Sr", "Y", "Zr", "Nb", "Mo", "Tc", "Ru", "Rh", "Pd", "Ag", "Cd", "In", "Sn", "Sb", "Te", "I", "Xe", "Cs", "Ba", "La", "Ce", "Pr", "Nd", "Pm", "Sm", "Eu", "Gd", "Tb", "Dy", "Ho", "Er", "Tm", "Yb", "Lu", "Hf", "Ta", "W", "Re", "Os", "Ir", "Pt", "Au", "Hg", "Tl", "Pb", "Bi", "Po", "At", "Rn", "Fr", "Ra", "Ac", "Th", "Pa", "U", "Np", "Pu", "Am", "Cm", "Bk", "Cf", "Es", "Fm", "Md", "No", "Lr", "Rf", "Db", "Sg", "Bh", "Hs", "Mt", "Ds", "Rg", "Cn", "Nh", "Fl", "Mc", "Lv", "Ts", "Og"]
const elementNames = ["Водород", "Гелий", "Литий", "Бериллий", "Бор", "Углерод", "Азот", "Кислород", "Фтор", "Неон", "Натрий", "Магний", "Алюминий", "Кремний", "Фосфор", "Сера", "Хлор", "Аргон", "Калий", "Кальций", "Скандий", "Титан", "Ванадий", "Хром", "Марганец", "Железо", "Кобальт", "Никель", "Медь", "Цинк", "Галлий", "Германий", "Мышьяк", "Селен", "Бром", "Криптон", "Рубидий", "Стронций", "Иттрий", "Цирконий", "Ниобий", "Молибден", "Технеций", "Рутений", "Родий", "Палладий", "Серебро", "Кадмий", "Индий", "Олово", "Сурьма", "Теллур", "Иод", "Ксенон", "Цезий", "Барий", "Лантан", "Церий", "Празеодим", "Неодим", "Прометий", "Самарий", "Европий", "Гадолиний", "Тербий", "Диспрозий", "Гольмий", "Эрбий", "Тулий", "Иттербий", "Лютеций", "Гафний", "Тантал", "Вольфрам", "Рений", "Осмий", "Иридий", "Платина", "Золото", "Ртуть", "Таллий", "Свинец", "Висмут", "Полоний", "Астат", "Радон", "Франций", "Радий", "Актиний", "Торий", "Протактиний", "Уран", "Нептуний", "Плутоний", "Америций", "Кюрий", "Берклий", "Калифорний", "Эйнштейний", "Фермий", "Менделевий", "Нобелий", "Лоуренсий", "Резерфордий", "Дубний", "Сиборгий", "Борий", "Хассий", "Мейтнерий", "Дармштадтий", "Рентгений", "Коперниций", "Нихоний", "Флеровий", "Московий", "Ливерморий", "Теннессин", "Оганессон"]
const elementMasses = ["1.00784 (1)","4.002602 (4)","6.941 (7)","9.012182 (9)","10.811 (11)","12.0107 (12)","14.0067 (14)","15.999 (16)","18.9984032 (19)","20.1797 (20)","22.98976928 (23)","24.305 (24)","26.9815386 (27)","28.0855 (28)","30.973762 (31)","32.065 (32)","35.453 (35)","39.948 (40)","39.0983 (39)","40.078 (40)","44.955912 (45)","47.867 (48)","50.9415 (51)","51.9961 (52)","54.938045 (55)","55.845 (56)","58.933195 (59)","58.6934 (59)","63.546 (64)","65.409 (65)","69.723 (70)","72.64 (73)","74.9216 (75)","78.96 (79)","79.904 (80)","83.798 (84)","85.4678 (85)","87.62 (88)","138.90547 (139)","140.116 (140)","140.90766 (141)","144.24 (144)","145.0 (145)","150.36 (150)","151.964 (152)","157.25 (157)","162.50 (163)","164.93032 (165)","167.259 (167)","173.04 (173)","174.9668 (175)","178.49 (178)","180.94788 (181)","183.84 (184)","186.207 (186)","190.23 (190)","192.217 (192)","195.084 (195)","196.966569 (197)","200.592 (201)","204.3833 (204)","207.2 (207)","208.9804 (209)","209.0 (209)","222.0 (222)","223.0 (223)","226.0 (226)","227.0 (227)","231.0 (231)","238.03 (238)","243.0 (243)","244.0 (244)","247.0 (247)","251.0 (251)","252.0 (252)","257.0 (257)","258.0 (258)","259.0 (259)","262.0 (262)","264.0 (264)","269.0 (269)","272.0 (272)","277.0 (277)","284.0 (284)","289.0 (289)","294.0 (294)","290.0 (290)","294.0 (294)","315.0 (315)","232.03806 (232)","231.03588 (231)","238.02891 (238)","237.0 (237)","244.0 (244)","243.0 (243)","247.0 (247)","247.0 (247)","251.0 (251)","252.0 (252)","257.0 (257)","258.0 (258)","259.0 (259)","262.0 (262)","261.0 (261)","262.0 (262)","266.0 (266)","264.0 (264)","269.0 (269)","272.0 (272)","270.0 (270)","277.0 (277)","278.0 (278)","285.0 (285)","284.0 (284)","289.0 (289)","290.0 (290)","294.0 (294)","294.0 (294)"];

let randomCountOfElectrons = 1+Math.floor(118 * Math.random())
for (let i = 0; i < randomCountOfElectrons; ++i) {
    add();
}

function spin() {
    electroms.forEach(element => {
        element.el.style.transform = `translate(calc(${Math.cos(element.angle)*element.length - 0.75}*min(1vh, 1vw)), calc(${Math.sin(element.angle)*element.length - 0.75}*min(1vh, 1vw)))`;
        element.angle += element.speed;
    });
}


plusBut.addEventListener('click', add)
minusBut.addEventListener('click', minus)

setInterval(spin, 1);

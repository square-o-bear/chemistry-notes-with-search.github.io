const search_input = document.getElementById("search-input")
const search_button = document.getElementById("search-button")
const search_results = document.getElementById("search-results")
const pages_to_search = {
    // INDEX
    "https://square-o-bear.github.io/chemistry-notes-with-search.github.io/index.html": [
        {"what": "Главное", "tear": 100},
        {"what": "хими", "tear": 100}
    ],

    // ATOM
    "https://square-o-bear.github.io/chemistry-notes-with-search.github.io/atom/atom.html": [
        {"what": "Атом", "tear": 100},
        {"what": "малекул", "tear": 50}
    ],
    // ELEMENTS
    "https://square-o-bear.github.io/chemistry-notes-with-search.github.io/atom/elements/H.html": [
        { "what": "Водород", "tear": 100 },
        { "what": "H", "tear": 100 }
    ],
    "https://square-o-bear.github.io/chemistry-notes-with-search.github.io/atom/elements/He.html": [
        { "what": "Гелий", "tear": 100 },
        { "what": "He", "tear": 100 }
    ],
    "https://square-o-bear.github.io/chemistry-notes-with-search.github.io/atom/elements/Li.html": [
        { "what": "Литий", "tear": 100 },
        { "what": "Li", "tear": 100 }
    ],
    "https://square-o-bear.github.io/chemistry-notes-with-search.github.io/atom/elements/Be.html": [
        { "what": "Бериллий", "tear": 100 },
        { "what": "Be", "tear": 100 }
    ],
    "https://square-o-bear.github.io/chemistry-notes-with-search.github.io/atom/elements/B.html": [
        { "what": "Бор", "tear": 100 },
        { "what": "B", "tear": 100 }
    ],
    "https://square-o-bear.github.io/chemistry-notes-with-search.github.io/atom/elements/C.html": [
        { "what": "Углерод", "tear": 100 },
        { "what": "C", "tear": 100 }
    ],
    "https://square-o-bear.github.io/chemistry-notes-with-search.github.io/atom/elements/N.html": [
        { "what": "Азот", "tear": 100 },
        { "what": "N", "tear": 100 }
    ],
    "https://square-o-bear.github.io/chemistry-notes-with-search.github.io/atom/elements/O.html": [
        { "what": "Кислород", "tear": 100 },
        { "what": "O", "tear": 100 }
    ],
    "https://square-o-bear.github.io/chemistry-notes-with-search.github.io/atom/elements/F.html": [
        { "what": "Фтор", "tear": 100 },
        { "what": "F", "tear": 100 }
    ],
    "https://square-o-bear.github.io/chemistry-notes-with-search.github.io/atom/elements/Ne.html": [
        { "what": "Неон", "tear": 100 },
        { "what": "Ne", "tear": 100 }
    ],
    "https://square-o-bear.github.io/chemistry-notes-with-search.github.io/atom/elements/Na.html": [
        { "what": "Натрий", "tear": 100 },
        { "what": "Na", "tear": 100 }
    ],
    "https://square-o-bear.github.io/chemistry-notes-with-search.github.io/atom/elements/Mg.html": [
        { "what": "Магния", "tear": 100 },
        { "what": "Mg", "tear": 100 }
    ],
    "https://square-o-bear.github.io/chemistry-notes-with-search.github.io/atom/elements/Al.html": [
        { "what": "Алюминий", "tear": 100 },
        { "what": "Al", "tear": 100 }
    ],
    "https://square-o-bear.github.io/chemistry-notes-with-search.github.io/atom/elements/Si.html": [
        { "what": "Кремний", "tear": 100 },
        { "what": "Силициум", "tear": 100 },
        { "what": "Si", "tear": 100 }
    ],
    "https://square-o-bear.github.io/chemistry-notes-with-search.github.io/atom/elements/P.html": [
        { "what": "Фосфор", "tear": 100 },
        { "what": "P", "tear": 100 }
    ],
    "https://square-o-bear.github.io/chemistry-notes-with-search.github.io/atom/elements/S.html": [
        { "what": "Сера", "tear": 100 },
        { "what": "S", "tear": 100 }
    ],
    "https://square-o-bear.github.io/chemistry-notes-with-search.github.io/atom/elements/Cl.html": [
        { "what": "Хлор", "tear": 100 },
        { "what": "Cl", "tear": 100 }
    ],
    "https://square-o-bear.github.io/chemistry-notes-with-search.github.io/atom/elements/Ar.html": [
        { "what": "Аргон", "tear": 100 },
        { "what": "Ar", "tear": 100 }
    ],
    "https://square-o-bear.github.io/chemistry-notes-with-search.github.io/atom/elements/K.html": [
        { "what": "Калий", "tear": 100 },
        { "what": "K", "tear": 100 }
    ],
    "https://square-o-bear.github.io/chemistry-notes-with-search.github.io/atom/elements/Ca.html": [
        { "what": "Кальций", "tear": 100 },
        { "what": "Ca", "tear": 100 }
    ],
    "https://square-o-bear.github.io/chemistry-notes-with-search.github.io/atom/elements/Sc.html": [
        { "what": "Скандий", "tear": 100 },
        { "what": "Sc", "tear": 100 }
    ],
    "https://square-o-bear.github.io/chemistry-notes-with-search.github.io/atom/elements/Ti.html": [
        { "what": "Титан", "tear": 100 },
        { "what": "Ti", "tear": 100 }
    ],
    "https://square-o-bear.github.io/chemistry-notes-with-search.github.io/atom/elements/V.html": [
        { "what": "Вандий", "tear": 100 },
        { "what": "V", "tear": 100 }
    ],
    "https://square-o-bear.github.io/chemistry-notes-with-search.github.io/atom/elements/Cr.html": [
        { "what": "Хром", "tear": 100 },
        { "what": "Cr", "tear": 100 }
    ],
    "https://square-o-bear.github.io/chemistry-notes-with-search.github.io/atom/elements/Mn.html": [
        { "what": "Марганец", "tear": 100 },
        { "what": "Mn", "tear": 100 }
    ],
    "https://square-o-bear.github.io/chemistry-notes-with-search.github.io/atom/elements/Fe.html": [
        { "what": "Железо", "tear": 100 },
        { "what": "Fe", "tear": 100 }
    ],
    "https://square-o-bear.github.io/chemistry-notes-with-search.github.io/atom/elements/Co.html": [
        { "what": "Кобальт", "tear": 100 },
        { "what": "Co", "tear": 100 }
    ],
    "https://square-o-bear.github.io/chemistry-notes-with-search.github.io/atom/elements/Ni.html": [
        { "what": "Никель", "tear": 100 },
        { "what": "Ni", "tear": 100 }
    ],
    "https://square-o-bear.github.io/chemistry-notes-with-search.github.io/atom/elements/Cu.html": [
        { "what": "Медь", "tear": 100 },
        { "what": "Cu", "tear": 100 }
    ],
    "https://square-o-bear.github.io/chemistry-notes-with-search.github.io/atom/elements/Zn.html": [
        { "what": "Цинк", "tear": 100 },
        { "what": "Zn", "tear": 100 }
    ],
    "https://square-o-bear.github.io/chemistry-notes-with-search.github.io/atom/elements/Ga.html": [
        { "what": "Галий", "tear": 100 },
        { "what": "Ga", "tear": 100 }
    ],
    "https://square-o-bear.github.io/chemistry-notes-with-search.github.io/atom/elements/Ge.html": [
        { "what": "Германий", "tear": 100 },
        { "what": "Ge", "tear": 100 }
    ],
    "https://square-o-bear.github.io/chemistry-notes-with-search.github.io/atom/elements/As.html": [
        { "what": "Мышьяк", "tear": 100 },
        { "what": "As", "tear": 100 }
    ],
    "https://square-o-bear.github.io/chemistry-notes-with-search.github.io/atom/elements/Se.html": [
        { "what": "Селен", "tear": 100 },
        { "what": "Se", "tear": 100 }
    ],
    "https://square-o-bear.github.io/chemistry-notes-with-search.github.io/atom/elements/Br.html": [
        { "what": "Бром", "tear": 100 },
        { "what": "Br", "tear": 100 }
    ],
    "https://square-o-bear.github.io/chemistry-notes-with-search.github.io/atom/elements/Kr.html": [
        { "what": "Криптон", "tear": 100 },
        { "what": "Kr", "tear": 100 }
    ],
    // 6-ой период и лантаноиды
    "https://square-o-bear.github.io/chemistry-notes-with-search.github.io/atom/elements/La.html": [
        { "what": "Лантан", "tear": 100 },
        { "what": "La", "tear": 100 }
    ],
    "https://square-o-bear.github.io/chemistry-notes-with-search.github.io/atom/elements/Ce.html": [
        { "what": "Церий", "tear": 100 },
        { "what": "Ce", "tear": 100 }
    ],
    "https://square-o-bear.github.io/chemistry-notes-with-search.github.io/atom/elements/Pr.html": [
        { "what": "Празеодим", "tear": 100 },
        { "what": "Pr", "tear": 100 }
    ],
    "https://square-o-bear.github.io/chemistry-notes-with-search.github.io/atom/elements/Nd.html": [
        { "what": "Неодим", "tear": 100 },
        { "what": "Nd", "tear": 100 }
    ],
    "https://square-o-bear.github.io/chemistry-notes-with-search.github.io/atom/elements/Pm.html": [
        { "what": "Прометий", "tear": 100 },
        { "what": "Pm", "tear": 100 }
    ],
    "https://square-o-bear.github.io/chemistry-notes-with-search.github.io/atom/elements/Sm.html": [
        { "what": "Самарий", "tear": 100 },
        { "what": "Sm", "tear": 100 }
    ],
    "https://square-o-bear.github.io/chemistry-notes-with-search.github.io/atom/elements/Eu.html": [
        { "what": "Европий", "tear": 100 },
        { "what": "Eu", "tear": 100 }
    ],
    "https://square-o-bear.github.io/chemistry-notes-with-search.github.io/atom/elements/Gd.html": [
        { "what": "Гадолиний", "tear": 100 },
        { "what": "Gd", "tear": 100 }
    ],
    "https://square-o-bear.github.io/chemistry-notes-with-search.github.io/atom/elements/Tb.html": [
        { "what": "Тербий", "tear": 100 },
        { "what": "Tb", "tear": 100 }
    ],
    "https://square-o-bear.github.io/chemistry-notes-with-search.github.io/atom/elements/Dy.html": [
        { "what": "Диспрозий", "tear": 100 },
        { "what": "Dy", "tear": 100 }
    ],
    "https://square-o-bear.github.io/chemistry-notes-with-search.github.io/atom/elements/Ho.html": [
        { "what": "Гольмий", "tear": 100 },
        { "what": "Ho", "tear": 100 }
    ],
    "https://square-o-bear.github.io/chemistry-notes-with-search.github.io/atom/elements/Er.html": [
        { "what": "Эрбий", "tear": 100 },
        { "what": "Er", "tear": 100 }
    ],
    "https://square-o-bear.github.io/chemistry-notes-with-search.github.io/atom/elements/Tm.html": [
        { "what": "Тулий", "tear": 100 },
        { "what": "Tm", "tear": 100 }
    ],
    "https://square-o-bear.github.io/chemistry-notes-with-search.github.io/atom/elements/Yb.html": [
        { "what": "Иттербий", "tear": 100 },
        { "what": "Yb", "tear": 100 }
    ],
    "https://square-o-bear.github.io/chemistry-notes-with-search.github.io/atom/elements/Lu.html": [
        { "what": "Лютеций", "tear": 100 },
        { "what": "Lu", "tear": 100 }
    ],
    "https://square-o-bear.github.io/chemistry-notes-with-search.github.io/atom/elements/Hf.html": [
        { "what": "Гафний", "tear": 100 },
        { "what": "Hf", "tear": 100 }
    ],
    "https://square-o-bear.github.io/chemistry-notes-with-search.github.io/atom/elements/Ta.html": [
        { "what": "Тантал", "tear": 100 },
        { "what": "Ta", "tear": 100 }
    ],
    "https://square-o-bear.github.io/chemistry-notes-with-search.github.io/atom/elements/W.html": [
        { "what": "Вольфрам", "tear": 100 },
        { "what": "W", "tear": 100 }
    ],
    "https://square-o-bear.github.io/chemistry-notes-with-search.github.io/atom/elements/Re.html": [
        { "what": "Рений", "tear": 100 },
        { "what": "Re", "tear": 100 }
    ],
    "https://square-o-bear.github.io/chemistry-notes-with-search.github.io/atom/elements/Os.html": [
        { "what": "Осмий", "tear": 100 },
        { "what": "Os", "tear": 100 }
    ],
    "https://square-o-bear.github.io/chemistry-notes-with-search.github.io/atom/elements/Ir.html": [
        { "what": "Иридий", "tear": 100 },
        { "what": "Ir", "tear": 100 }
    ],
    "https://square-o-bear.github.io/chemistry-notes-with-search.github.io/atom/elements/Pt.html": [
        { "what": "Платина", "tear": 100 },
        { "what": "Pt", "tear": 100 }
    ],
    "https://square-o-bear.github.io/chemistry-notes-with-search.github.io/atom/elements/Au.html": [
        { "what": "Золото", "tear": 100 },
        { "what": "Au", "tear": 100 }
    ],
    "https://square-o-bear.github.io/chemistry-notes-with-search.github.io/atom/elements/Hg.html": [
        { "what": "Ртуть", "tear": 100 },
        { "what": "Hg", "tear": 100 }
    ],
    "https://square-o-bear.github.io/chemistry-notes-with-search.github.io/atom/elements/Tl.html": [
        { "what": "Таллий", "tear": 100 },
        { "what": "Tl", "tear": 100 }
    ],
    "https://square-o-bear.github.io/chemistry-notes-with-search.github.io/atom/elements/Pb.html": [
        { "what": "Свинец", "tear": 100 },
        { "what": "Pb", "tear": 100 }
    ],
    "https://square-o-bear.github.io/chemistry-notes-with-search.github.io/atom/elements/Bi.html": [
        { "what": "Висмут", "tear": 100 },
        { "what": "Bi", "tear": 100 }
    ],
    "https://square-o-bear.github.io/chemistry-notes-with-search.github.io/atom/elements/Po.html": [
        { "what": "Полоний", "tear": 100 },
        { "what": "Po", "tear": 100 }
    ],
    "https://square-o-bear.github.io/chemistry-notes-with-search.github.io/atom/elements/At.html": [
        { "what": "Астат", "tear": 100 },
        { "what": "At", "tear": 100 }
    ],
    "https://square-o-bear.github.io/chemistry-notes-with-search.github.io/atom/elements/Rn.html": [
        { "what": "Радон", "tear": 100 },
        { "what": "Rn", "tear": 100 }
    ],

    // MOLECULES
    "https://square-o-bear.github.io/chemistry-notes-with-search.github.io/molecules/molecules.html": [
        {"what": "Малекула", "tear": 100},
        {"what": "молекула", "tear": 100},
        {"what": "атом", "tear": 50}
    ],
    // PERSONAL
    "https://square-o-bear.github.io/chemistry-notes-with-search.github.io/periodic/periodic.html": [
        {"what": "Переодическая система", "tear": 100},
        {"what": "Менделеев", "tear": 70}
    ],
    // REACTIONS
    "https://square-o-bear.github.io/chemistry-notes-with-search.github.io/reactions/reactions.html": [
        {"what": "Реакции", "tear": 0},
        {"what": "реакци", "tear": 100}
    ]
}

function comparison(key, input) {
    const minLength = Math.min(key.length, input.length);
    const maxLength = Math.max(key.length, input.length);
    let score = 0;
    for (let i = 0; i < minLength; ++i) {
        if (key[i] === input[i])
            score++;
        else 
            score--;
    }

    //if(score > 0) console.log(key, input, Math.max(score, 0)/maxLength)

    return Math.max(score, 0)/maxLength //*2/(Math.max(key.length, input.length)+minLength);
}

console.log(comparison("как", "какое-то"));

async function finder() {
    if (search_input.value.trim() == "") {
        search_results.innerHTML = "";
        return;
    }
    const request = search_input.value.toLowerCase().split(" ").map(el => el.toLowerCase());
    let search_result = [];

    if (!request) return;
    search_results.innerHTML = "<p id='please-wait-result'>Подождите идёт поиск...</p>";

    for (let page_index = 0; page_index < Object.values(pages_to_search).length; ++page_index) {
        let crut = 0;
        let allKeysWords = Object.values(pages_to_search)[page_index].map(el => el.what.toLowerCase());

        for (let keyWordIndex = 0; keyWordIndex < allKeysWords.length; ++keyWordIndex) {
            for (let requestWordIndex = 0; requestWordIndex < request.length; ++requestWordIndex) {
                crut += Object.values(pages_to_search)[page_index][keyWordIndex].tear * comparison(allKeysWords[keyWordIndex], request[requestWordIndex]);
            }
        }

        if (crut >= 10) {
            search_result.push({
                what: Object.values(pages_to_search)[page_index][0].what,
                tear: crut,
                link: Object.keys(pages_to_search)[page_index]
            });
        }
    }

    search_result.sort((a, b) => (a.tear < b.tear)).map(el => {
        const link = document.createElement("a");
        search_results.appendChild(link);
        search_results.appendChild(document.createElement("br"));
        link.href = el.link; // Ссылка на найденную страницу
        link.textContent = el.what;
    })

    if (search_results.children.length === 1) {
        search_results.innerHTML = "";
        const noResults = document.createElement("div");
        noResults.className = "no-find-results";
        noResults.textContent = "Ничего не найдено"; 
        
        search_results.appendChild(noResults);
    } else {
        document.getElementById("please-wait-result").remove()
    }
}

search_button.addEventListener("click", finder)
search_input.addEventListener("keydown", function(event) {
    if (event.key === "Enter") {
        finder();
    }
});
// Some tegs
const pagesNav = document.getElementsByClassName('right-section')[0];
const search_input = document.getElementById("search-input")
const search_button = document.getElementById("search-button")
const search_results = document.getElementById("search-results")

// Set values
const recomend = ['index.html', 'ai/ai.html', 'laboratory/laboratory.html', 'atom/atom.html', 'molecules/molecules.html', 'periodic/periodic.html', 'reactions/reactions.html', 'oxides/oxides.html', 'hydroxides/hydroxides.html']
let localpage = window.location.href.split('https://square-o-bear.github.io/chemistry-notes-with-search.github.io/').join('');
let lastVisited = [];

if (localpage != window.location.href) {
    lastVisited = JSON.parse(localStorage.getItem('last'));
    if (localStorage.getItem('last') === null) {
        lastVisited = [];
    }
    lastVisited = lastVisited.filter((page) => page !== localpage).filter((page) => !(recomend.includes(page)));
    if (!(localpage in recomend)) lastVisited.unshift(localpage);
    lastVisited.slice(0, 11);
    localStorage.setItem('last', JSON.stringify(lastVisited));
}
else {
    console.warn('strange URL. Not started at "https://square-o-bear.github.io/chemistry-notes-with-search.github.io/"');
}


// search keys for page
const pages_to_nav = {
    // INDEX
    "https://square-o-bear.github.io/chemistry-notes-with-search.github.io/index.html": [
        {"what": "Главное", "tear": 0},
        {"what": "главн", "tear": 100},
        {"what": "хими", "tear": 100}
    ],

    // ATOM
    "https://square-o-bear.github.io/chemistry-notes-with-search.github.io/atom/atom.html": [
        {"what": "Атом", "tear": 100},
        {"what": "малекул", "tear": 50}
    ],

    // ELEMENTS — 2–4 периоды (уже были)
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
        { "what": "Магний", "tear": 100 },
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
        { "what": "Ванадий", "tear": 100 },
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
    "https://square-o-bear.github.io/chemistry-notes-with-search.github.io/atom/elements/Rb.html": [
        { "what": "Рубидий", "tear": 100 },
        { "what": "Rb", "tear": 100 }
    ],
    "https://square-o-bear.github.io/chemistry-notes-with-search.github.io/atom/elements/Sr.html": [
        { "what": "Стронций", "tear": 100 },
        { "what": "Sr", "tear": 100 }
    ],
    "https://square-o-bear.github.io/chemistry-notes-with-search.github.io/atom/elements/Y.html": [
        { "what": "Иттрий", "tear": 100 },
        { "what": "Y", "tear": 100 }
    ],
    "https://square-o-bear.github.io/chemistry-notes-with-search.github.io/atom/elements/Zr.html": [
        { "what": "Цирконий", "tear": 100 },
        { "what": "Zr", "tear": 100 }
    ],
    "https://square-o-bear.github.io/chemistry-notes-with-search.github.io/atom/elements/Nb.html": [
        { "what": "Ниобий", "tear": 100 },
        { "what": "Nb", "tear": 100 }
    ],
    "https://square-o-bear.github.io/chemistry-notes-with-search.github.io/atom/elements/Mo.html": [
        { "what": "Молибден", "tear": 100 },
        { "what": "Mo", "tear": 100 }
    ],
    "https://square-o-bear.github.io/chemistry-notes-with-search.github.io/atom/elements/Tc.html": [
        { "what": "Технеций", "tear": 100 },
        { "what": "Tc", "tear": 100 }
    ],
    "https://square-o-bear.github.io/chemistry-notes-with-search.github.io/atom/elements/Ru.html": [
        { "what": "Рутений", "tear": 100 },
        { "what": "Ru", "tear": 100 }
    ],
    "https://square-o-bear.github.io/chemistry-notes-with-search.github.io/atom/elements/Rh.html": [
        { "what": "Родий", "tear": 100 },
        { "what": "Rh", "tear": 100 }
    ],
    "https://square-o-bear.github.io/chemistry-notes-with-search.github.io/atom/elements/Pd.html": [
        { "what": "Палладий", "tear": 100 },
        { "what": "Pd", "tear": 100 }
    ],
    "https://square-o-bear.github.io/chemistry-notes-with-search.github.io/atom/elements/Ag.html": [
        { "what": "Серебро", "tear": 100 },
        { "what": "Ag", "tear": 100 }
    ],
    "https://square-o-bear.github.io/chemistry-notes-with-search.github.io/atom/elements/Cd.html": [
        { "what": "Кадмий", "tear": 100 },
        { "what": "Cd", "tear": 100 }
    ],
    "https://square-o-bear.github.io/chemistry-notes-with-search.github.io/atom/elements/In.html": [
        { "what": "Индий", "tear": 100 },
        { "what": "In", "tear": 100 }
    ],
    "https://square-o-bear.github.io/chemistry-notes-with-search.github.io/atom/elements/Sn.html": [
        { "what": "Олово", "tear": 100 },
        { "what": "Sn", "tear": 100 }
    ],
    "https://square-o-bear.github.io/chemistry-notes-with-search.github.io/atom/elements/Sb.html": [
        { "what": "Сурьма", "tear": 100 },
        { "what": "Sb", "tear": 100 }
    ],
    "https://square-o-bear.github.io/chemistry-notes-with-search.github.io/atom/elements/Te.html": [
        { "what": "Теллур", "tear": 100 },
        { "what": "Te", "tear": 100 }
    ],
    "https://square-o-bear.github.io/chemistry-notes-with-search.github.io/atom/elements/I.html": [
        { "what": "Йод", "tear": 100 },
        { "what": "I", "tear": 100 }
    ],
    "https://square-o-bear.github.io/chemistry-notes-with-search.github.io/atom/elements/Xe.html": [
        { "what": "Ксенон", "tear": 100 },
        { "what": "Xe", "tear": 100 }
    ],

    // MOLECULES
    "https://square-o-bear.github.io/chemistry-notes-with-search.github.io/molecules/molecules.html": [
        {"what": "Молекула", "tear": 100},
        {"what": "молекула", "tear": 100},
        {"what": "атом", "tear": 50}
    ],

    // PERIODIC TABLE
    "https://square-o-bear.github.io/chemistry-notes-with-search.github.io/periodic/periodic.html": [
        {"what": "Периодическая система", "tear": 100},
        {"what": "Менделеев", "tear": 70}
    ],

    // REACTIONS
    "https://square-o-bear.github.io/chemistry-notes-with-search.github.io/reactions/reactions.html": [
        {"what": "Реакции", "tear": 0},
        {"what": "реакци", "tear": 100},
        {"what": "слияни", "tear": 90}
    ],

    // OXIDES
    "https://square-o-bear.github.io/chemistry-notes-with-search.github.io/oxides/oxides.html": [
        {"what": "Оксиды", "tear": 0},
        {"what": "оксид", "tear": 100},
        {"what": "амфотерные", "tear": 50},
        {"what": "O", "tear": 10}
    ],

    // HYDROXIDES
    "https://square-o-bear.github.io/chemistry-notes-with-search.github.io/hydroxides/hydroxides.html": [
        {"what": "Гидроксиды", "tear": 0},
        {"what": "гидроксид", "tear": 100},
        {"what": "амфотерные", "tear": 50},
        {"what": "OH", "tear": 10}
    ],

    // AI
    "https://square-o-bear.github.io/chemistry-notes-with-search.github.io/ai/ai.html": [
        {"what": "ИИ Ассистент", "tear": 0},
        {"what": "ии", "tear": 100},
        {"what": "ai", "tear": 100},
        {"what": "ассистент", "tear": 100}
    ],

    // LABORATORY
    "https://square-o-bear.github.io/chemistry-notes-with-search.github.io/laboratory/laboratory.html": [
        {"what": "Химическая лаборатория", "tear": 0},
        {"what": "лаборатори", "tear": 100},
        {"what": "ai", "tear": 100},
        {"what": "химич", "tear": 100}
    ]
};


// functions to find
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

    return Math.max(score, 0)/maxLength //*2/(Math.max(key.length, input.length)+minLength);
}

async function finder() {
    if (search_input.value.trim() == "") {
        search_results.innerHTML = "";
        return;
    }
    const request = search_input.value.toLowerCase().split(" ").map(el => el.toLowerCase());
    let search_result = [];

    if (!request) return;
    search_results.innerHTML = "<p id='please-wait-result'>Подождите идёт поиск...</p>";

    for (let page_index = 0; page_index < Object.values(pages_to_nav).length; ++page_index) {
        let crut = 0;
        let allKeysWords = Object.values(pages_to_nav)[page_index].map(el => el.what.toLowerCase());

        for (let keyWordIndex = 0; keyWordIndex < allKeysWords.length; ++keyWordIndex) {
            for (let requestWordIndex = 0; requestWordIndex < request.length; ++requestWordIndex) {
                crut += Object.values(pages_to_nav)[page_index][keyWordIndex].tear * comparison(allKeysWords[keyWordIndex], request[requestWordIndex]);
            }
        }

        if (crut >= 10) {
            search_result.push({
                what: Object.values(pages_to_nav)[page_index][0].what,
                tear: crut,
                link: Object.keys(pages_to_nav)[page_index]
            });
        }
    }

    search_result.sort((a, b) => (a.tear < b.tear)).map(el => {
        const link = document.createElement("a");
        search_results.appendChild(link);
        search_results.appendChild(document.createElement("br"));
        link.href = el.link; // Ссылка на найденную страницу
        link.textContent = el.what;
        link.style.transition = 'none';
        link.style.opacity = '0';
        link.style.height = 'auto'; // Чтобы анимация высоты работала
        link.style.overflow = 'hidden';
        setTimeout(() => {
            link.style.transition = '';
            link.style.opacity = '1';
        }, 0);
    })

    if (search_results.children.length === 1) {
        search_results.innerHTML = "";
        const noResults = document.createElement("div");
        noResults.className = "no-find-results";
        noResults.textContent = "Ничего не найдено"; 
        noResults.style.transition = 'none';
        noResults.style.opacity = '0';
        noResults.style.height = 'auto'; // Чтобы анимация высоты работала
        noResults.style.overflow = 'hidden';
        setTimeout(() => {
            noResults.style.transition = '';
            noResults.style.opacity = '1';
        }, 0);
        
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

// Добавление рекомендаций
let pageNavHTML =
`<div class="pages-nav">
    <button id='themeChange'>☀️&nbsp&nbsp&nbsp/&nbsp&nbsp&nbsp🌙</button>
    <h3>Рекоминдуем</h3>
    <ul class="pages-list">
 `

recomend.forEach((page) => {pageNavHTML += `<li><a href="https://square-o-bear.github.io/chemistry-notes-with-search.github.io/${page}">${pages_to_nav[`https://square-o-bear.github.io/chemistry-notes-with-search.github.io/${page}`][0].what}</a></li>`})
if (lastVisited.filter((page) => page !== localpage).length > 0) {
    pageNavHTML += `<br><h3>Последние</h3>`
    lastVisited.forEach((page) => {
        if (page !== localpage && Object.keys(pages_to_nav).includes(`https://square-o-bear.github.io/chemistry-notes-with-search.github.io/${page}`)) pageNavHTML += `<li><a href="https://square-o-bear.github.io/chemistry-notes-with-search.github.io/${page}">${pages_to_nav[`https://square-o-bear.github.io/chemistry-notes-with-search.github.io/${page}`][0].what}</a></li>`
    })
}
pageNavHTML += `</ul></div>`
// theme changer / Рекоминдации / Последние просмотренные
pagesNav.innerHTML = pageNavHTML

const themeChanger = document.getElementById('themeChange')
if (localStorage.getItem('theme') === 'dark') {
    document.documentElement.setAttribute('theme', 'dark');
}
const allTag = document.querySelectorAll('*');
allTag.forEach((element) => {
    element.style.transition = 'noone';
});

setTimeout(() => {allTag.forEach((element) => element.style.transition = 'all 0.3s ease');}, 0);

themeChanger.addEventListener("click", () => {
    let newTheme = (document.documentElement.getAttribute('theme') === 'dark' ? 'light' : 'dark');
    document.documentElement.setAttribute('theme', newTheme);
    localStorage.setItem('theme', newTheme);
})

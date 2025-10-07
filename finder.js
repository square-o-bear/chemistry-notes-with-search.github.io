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
    "https://square-o-bear.github.io/chemistry-notes-with-search.github.io/elements/H.html": [
        { "what": "Водород", "tear": 100 },
        { "what": "H", "tear": 100 }
    ],
    "https://square-o-bear.github.io/chemistry-notes-with-search.github.io/elements/He.html": [
        { "what": "Гелий", "tear": 100 },
        { "what": "He", "tear": 100 }
    ],
    "https://square-o-bear.github.io/chemistry-notes-with-search.github.io/elements/Li.html": [
        { "what": "Литий", "tear": 100 },
        { "what": "Li", "tear": 100 }
    ],
    "https://square-o-bear.github.io/chemistry-notes-with-search.github.io/elements/Be.html": [
        { "what": "Бериллий", "tear": 100 },
        { "what": "Be", "tear": 100 }
    ],
    "https://square-o-bear.github.io/chemistry-notes-with-search.github.io/elements/B.html": [
        { "what": "Бор", "tear": 100 },
        { "what": "B", "tear": 100 }
    ],
    "https://square-o-bear.github.io/chemistry-notes-with-search.github.io/elements/C.html": [
        { "what": "Углерод", "tear": 100 },
        { "what": "C", "tear": 100 }
    ],

// MOLECULES
    "https://square-o-bear.github.io/chemistry-notes-with-search.github.io/molecules.html": [
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
                if (request[requestWordIndex].includes(allKeysWords[keyWordIndex]) || (allKeysWords[keyWordIndex].includes(request[requestWordIndex]) && request[requestWordIndex].length > 3)) {
                    crut += Object.values(pages_to_search)[page_index][keyWordIndex].tear;
                }
            }
        }

        if (crut > 0) {
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
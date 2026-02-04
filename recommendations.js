const pagesNav = document.getElementsByClassName('right-section')[0];

pagesNav.innerHTML =
`<div class="pages-nav">
    <button id='themeChange'>☀️ / 🌙</button>
    <h3>Рекоминдуем</h3>
    <ul class="pages-list">
        <li><a href="https://square-o-bear.github.io/chemistry-notes-with-search.github.io/index.html">Главная</a></li>
        <li><a href="https://square-o-bear.github.io/chemistry-notes-with-search.github.io/atom/atom.html">Атом</a></li>
        <li><a href="https://square-o-bear.github.io/chemistry-notes-with-search.github.io/molecules/molecules.html">Молекулы</a></li>
        <li><a href="https://square-o-bear.github.io/chemistry-notes-with-search.github.io/periodic/periodic.html">Периодическая система</a></li>
        <li><a href="https://square-o-bear.github.io/chemistry-notes-with-search.github.io/reactions/reactions.html">Химические реакции</a></li>
        <li><a href="https://square-o-bear.github.io/chemistry-notes-with-search.github.io/oxides/oxides.html">Оксиды</a></li>
    </ul>
</div>`

const themeChanger = document.getElementById('themeChange')
if (localStorage.getItem('theme') === 'dark') {
    document.documentElement.setAttribute('theme', 'dark');
}
const allTag = document.querySelectorAll('*');
console.log(allTag)
allTag.forEach((element) => {
    element.style.transition = 'noone';
});

setTimeout(() => {
    allTag.forEach((element) => {
        element.style.transition = 'all 0.3s ease'
        console.log(element)
    });
}, 0);

themeChanger.addEventListener("click", (e) => {
    let newTheme = (document.documentElement.getAttribute('theme') === 'dark' ? 'light' : 'dark')
    document.documentElement.setAttribute('theme', newTheme);
    localStorage.setItem('theme', newTheme);
})
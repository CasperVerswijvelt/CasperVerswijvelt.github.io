document.getElementById("year").innerHTML = new Date().getFullYear();
const themePref = localStorage.getItem('theme');
if (themePref) toggleDarkMode(themePref === 'dark');

function toggleDarkMode(force) {

    const theme = typeof force === 'boolean'
        ? force
            ? "dark"
            : "light"
        : document.documentElement.getAttribute('data-theme') !== 'light'
            ? 'light'
            : 'dark'

    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
}
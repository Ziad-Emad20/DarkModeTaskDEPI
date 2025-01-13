// ? Active item
let btnContainer = document.getElementById('item-active');
let btns = document.getElementsByClassName('btn');

for (let i = 0; i < btns.length; i++){
    btns[i].addEventListener('click', function(){
        let current = document.getElementsByClassName('active');
        current[0].className = current[0].className.replace(' active', '');
        this.className += " active";
    });
}
// ? Dark mode
let darkMode = localStorage.getItem('darkMode');
const changeMode = document.getElementById('changeMode');
const enableDarkMode = () => {
    document.body.classList.add('dark-mode');
    localStorage.setItem('darkMode', 'active');
}
const disableDarkMode = () => {
    document.body.classList.remove('dark-mode');
    localStorage.setItem('darkMode', null);
}
if (darkMode === "active") enableDarkMode();
changeMode.addEventListener('click', () => {
    darkMode = localStorage.getItem('darkMode');
    darkMode !== "active" ? enableDarkMode() : disableDarkMode();
});
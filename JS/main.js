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
//? Fixed nav scrolling
window.addEventListener('scroll', () => {
    if (window.scrollY > 300) {
        let toDark = document.body.classList.contains("dark-mode");
        let color = toDark ? "black" : "white";
        btnContainer.style.cssText = `position: fixed; top: 0; background-color: ${color};`;
    } else {
        btnContainer.style.cssText = 'position: relative;';
    }
})
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
// ? Arrow to home
let arrow = document.getElementById('toUp');
window.addEventListener('scroll', () => {
    if (window.scrollY > 300) {
        arrow.style.cssText = 'transform: translateY(0);';
    } else {
        arrow.style.cssText = 'transform: translateY(250%);';
    }
});



console.log(document.body.classList.contains("dark-mode"));

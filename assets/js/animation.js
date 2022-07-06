const splash = document.querySelector('.splash');

// event listener
document.addEventListener('DOMContentLoaded', ()=> {
    setTimeout(() => {
        splash.classList.add('display-none');
    }, 2500);
})
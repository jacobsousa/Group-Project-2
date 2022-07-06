const flashLogo = document.querySelector('.flash-logo');

// event listener for fade in
document.addEventListener('DOMContentLoaded', () => {
    setInterval(() => {
        flashLogo.classList.add('display-none')
    }, 2650)
})
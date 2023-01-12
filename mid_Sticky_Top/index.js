const btnSwitch = document.querySelector('#switch');

btnSwitch.addEventListener('click', () => {
    document.body.classList.toggle('darkMode');
    document.querySelector('.navbar').classList.toggle('darkMode');
    document.querySelector('footer').classList.toggle('darkMode');
});

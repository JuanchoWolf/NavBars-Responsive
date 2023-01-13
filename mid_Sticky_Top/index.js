/* Switch Theme*/
const btnSwitch = document.querySelector('#switch');

btnSwitch.addEventListener('click', () => {
    document.body.classList.toggle('darkMode');
});
/**/

/* Menu Bar */
const menu = document.getElementById('menu');
const indicador = document.getElementById('indicador');
const seccion = document.querySelectorAll('.seccion');

let tamagno_Indicador = menu.querySelector('a').offsetWidth;
indicador.style.width = tamagno_Indicador + 'px';
/**/
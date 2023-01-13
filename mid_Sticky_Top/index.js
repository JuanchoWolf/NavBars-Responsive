// Switch Theme
const btnSwitch = document.querySelector('#switch');

btnSwitch.addEventListener('click', () => {
    document.body.classList.toggle('darkMode');
});
//

// Menu Bar
const menu = document.getElementById('menu');
const indicador = document.getElementById('indicador');
const secciones = document.querySelectorAll('.seccion');

let tamagno_Indicador = menu.querySelector('a').offsetWidth;
indicador.style.width = tamagno_Indicador + 'px';

let indexSeccionActiva;

// Observer
const observer = new IntersectionObserver((entradas, observer) => {
    entradas.forEach(entrada => {
        if(entrada.isIntersecting){
            // get active index
            indexSeccionActiva = [...secciones].indexOf(entrada.target);

            // move indicador
            indicador.style.transform = `translateX(${tamagno_Indicador * indexSeccionActiva}px)`;
        }
    });
}, {
    rootMargin: '-48px 0px 0px 0px',
    threshold: 0.55 // how much visible content do you need to change
});

// observer for upcontent
observer.observe(document.getElementById('top__index'))
//

// Observer for each section
secciones.forEach(seccion => observer.observe(seccion));
//

const onResize = () => {
    // calculate the new size of the window
    tamagno_Indicador = menu.querySelector('a').offsetWidth;

    // change width
    indicador.style.width = `${tamagno_Indicador}px`;

    // move indicador
    indicador.style.transform = `translateX(${tamagno_Indicador * indexSeccionActiva}px)`;
}
window.addEventListener('resize', onResize);
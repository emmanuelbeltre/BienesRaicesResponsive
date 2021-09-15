document.addEventListener('DOMContentLoaded', function() {

    eventListeners();
    darkMode();
});

function darkMode() {

    //Este nos indica si la preferencia dle usuario en el navegador es el darkmode
    const prefiereDarkMode = window.matchMedia('(prefers-color-scheme: dark)');

    //Este código nos dará el valor de verdad, osea un true o un falso 
    // console.log(prefiereDarkMode.matches);

    if (prefiereDarkMode.matches) {
        document.body.classList.add('dark-mode')
    } else {
        document.body.classList.remove('dark-mode')
    }

    prefiereDarkMode.addEventListener('change', function() {
        if (prefiereDarkMode.matches) {
            document.body.classList.add('dark-mode')
        } else {
            document.body.classList.remove('dark-mode')
        }
    });




    const botonDarkMode = document.querySelector('.dark-mode-boton');
    botonDarkMode.addEventListener('click', function() {

        document.body.classList.toggle('dark-mode');
    });
}

function eventListeners() {
    const mobileMenu = document.querySelector('.mobile-menu');

    mobileMenu.addEventListener('click', navegacionResponsive);
}

function navegacionResponsive() {
    const navegacion = document.querySelector('.navegacion');
    if (navegacion.classList.contains('mostrar')) {
        navegacion.classList.remove('mostrar');
    } else {
        navegacion.classList.add('mostrar');
    }
    //Este codigo de .toggle hace exactamente lo mismo que hace el codicional de arriba, solo que más corto
    //navegacion.classList.toggle('mostrar');
}
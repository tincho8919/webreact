


import Navegador from "../componentes/Navegador";


const ham = document.querySelector('.ham');
const enlaces = document.querySelector('.enlaces-menu');


ham.addEventListener('click', () => {
    enlaces.classList.toggle('activado');
});


export default Navegador;
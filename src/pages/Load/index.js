import Logo from '../../img/logoEric.png';

export default function Load() {

    let valor = 0;

    var contador = setInterval(function Processa() {
        if (valor++ < 2) {
        
        } else {
            window.location.assign('/home');
            clearInterval(contador)
        }


    }, 1000)

    return (
        <img src={Logo} className='logo' />
    )
}
import Linkedin from '../../assets/images/Linkedin.png';
import Instagram from '../../assets/images/Instagram.png';
import Facebook from '../../assets/images/Facebook.png';
import Whatsapp from '../../assets/images/Whatsapp.png';
import github from '../../assets/images/github.png';


const Contact = () => {
    return(
        <div className ='Contact' id='contact'>

            <div className='DatosPersonales'>
                <p>Dirección: Belisario Roldan 835 - CP:5019 - Córdoba, Argentina</p>
                <p>Teléfono: +54 9 351 200-0597</p>
                Email:  <a href='mailto:paex94@gmail.com'>paex94@gmail.com</a>

            </div>
            <div className='Redes'>
                <p>Puedes encontrarme en:</p>
                <div className='ImagenesRedes'>
                        <a href='https://www.linkedin.com/in/pablo-medina-03389a18a/' rel="noreferrer" target="_blank"><img src={Linkedin} alt= 'Linkedin' title='Linkedin' /></a>
                        <a href='https://www.instagram.com/pablo_med_/' rel="noreferrer" target="_blank"><img src={Instagram} alt= 'Instagram' title='Instagram' /></a>
                        <a href='https://www.facebook.com/Pablo.Medina1407/' rel="noreferrer" target="_blank"><img src={Facebook} alt= 'Facebook' title='Facebook' /></a>
                        <a href='https://wa.me/5493512000597?text=Hola%20Pablo%20' rel="noreferrer" target="_blank"><img src={Whatsapp} alt= 'Whatsapp' title='Whatsapp' /></a>
                        <a href='https://github.com/Pablo351' rel="noreferrer" target="_blank"><img src={github} alt= 'github' title='github' /></a>
                        

                </div>

            </div>

        </div>
    )
}


export default Contact;
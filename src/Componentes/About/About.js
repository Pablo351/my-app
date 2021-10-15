import myPhoto from '../../assets/images/myPhoto.jpg';

const About = () => {
    return (
        <div class="col-lg-4" id='about'>
            <img src={myPhoto} className="rounded-circle" alt="Pablo Medina"/>   
            <h2><b>Medina, Pablo Exequiel</b></h2>
            <div className='descrption'>
                <p>¡Hola! Gracias por visitar mi página. Voy a contarte un poco sobre mi. Me llamo Pablo, tengo 26 años, vivo en Córdoba Capital, Argentina. Soy Analista en Informática/Sistemas, actualmente me encuentro cusando el 4° año de la carrera de Licenciatura en Informática, impartida por la Universidad Empresarial Siglo XXI. Además cuento con un nivel intermedio de conocimiento en Inglés. Me destaco por ser una persona muy proactiva, responsable, con capacidad de coworking, con interes constante en el aprendizaje y desarrollo profesional.</p>
                <p></p>
                <p></p>
            </div>
        
      </div>
    )
}

export default About;
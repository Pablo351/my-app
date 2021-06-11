import myPhoto from '../../assets/images/myPhoto.jpg';

const About = () => {
    return (
        <div class="col-lg-4" id='about'>
            <img src={myPhoto} className="rounded-circle" alt="Pablo Medina"/>   
            <h2><b>Medina Pablo Exequiel</b></h2>
            <div className='descrption'>
                <p>¡Hola! Gracias por visitar mi pagina. Voy a contarte un poco sobre mi. Mi nombre es Medina Pablo Exequiel, tengo 26 años, vivo en Córdoba Capital, Argentina. Soy Analista en Informática/Sistemas, continúo con mis estudios en la carrera de Licenciatura en Informática, impartida por la Universidad Empresarial Siglo XXI. Actualmente me encuentro cursando el 4° año de la carrera. Poseo conocimientos nivel intermedio en Ingles. Soy una persona muy proactiva, responsable con capacidad de coworking, interesado por aprender de una forma constante y desarrollarme profesionalmente.</p>
                <p></p>
                <p></p>
            </div>
        
      </div>
    )
}

export default About;
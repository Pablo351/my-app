import myPhoto from '../../assets/images/myPhoto.jpg';

const About = () => {
    return (
        <div class="col-lg-4" id='about'>
            <img src={myPhoto} className="rounded-circle" alt="Pablo Medina"/>   
            <h2><b>Medina, Pablo Exequiel</b></h2>
            <div className='descrption'>
                <p>¡Hola! Gracias por visitar mi página. Voy a contarte un poco sobre mi. Me llamo Pablo, tengo 28 años, vivo en Córdoba Capital, Argentina.   Soy estudiante universitario de la carrera de Licenciatura en informática en la Universidad Siglo XXI. Tengo hasta tercer año aprobado y me encuentro en el desarrollo de la tesis para obtener el título intermedio de Analista en Sistemas para luego poder continuar con mis estudios.</p>
                <p>Actualmente me desempeño como Analista Desarrollador en GeneXus, Estoy ejerciendo profesionalmente en la industria del desarrollo de Software desde hace más de un año. He realizado varios cursos, aprendiendo diferentes tecnologías y me continuo formando por fuera de la universidad y del ámbito laboral.</p>
                <p>Me destaco por ser una persona muy proactiva, responsable, con capacidad de coworking, con interes constante en el aprendizaje y desarrollo profesional.</p>
                <p>Haciendo click <a href="https://drive.google.com/file/d/1SwoMZs8-iYNYQeHemZpCYYKjnVmj0zoB/view?usp=sharing" rel="noreferrer" target="_blank">AQUI</a> podras ver mi CV</p>
            </div>
        
      </div>
    )
}

export default About;
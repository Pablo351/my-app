import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import Image1 from '../../assets/images/FullSlide.jpg';
import Image2 from '../../assets/images/AnalistaSlide.jpg';
import Image3 from '../../assets/images/GenexusSlide.jpg';


const Home = () =>{
    return(
            <Carousel id='Inicio' className='carrusel'>

                <Carousel.Item className='item'>
                    <img className="imagenSlider" src={Image1} alt="First slide" />
                    <Carousel.Caption className='Contenido'>
                        <h2>Web <br></br>Full stack<br></br>Developer</h2> 
                        <p>Curso Realizado en Mundos E - Certificacion UNC</p>   
                    </Carousel.Caption>
                </Carousel.Item>

                <Carousel.Item className='item'>
                    <img className="imagenSlider" src={Image2} alt="Second slide" />
                    <Carousel.Caption className='Contenido'>
                        <h2>Analista en <br></br>  Informatica</h2>
                        <p>Titulo intermedio obtenido en UES 21. <br></br> Carrera de grado en curso: "Licenciatura en Informatica"</p>
                    </Carousel.Caption>
                </Carousel.Item>

                <Carousel.Item className='item'>
                    <img className="imagenSlider" src={Image3} alt="Third slide" />
                    <Carousel.Caption className='Contenido'>
                        <h2>Genexus Developer</h2>
                        <p>Actualmente desarrolllando en Tekhne. Desarrollo del software para APROSS</p>
                        <a href="http://www.tekhne.com.ar/" rel="noreferrer" target="_blank">TEKHNE SA</a>
                    </Carousel.Caption>
                </Carousel.Item>

            </Carousel>


    )
    
}

export default Home;
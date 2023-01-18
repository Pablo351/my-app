import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import Image1 from '../../assets/images/FullSlide.jpg';
import Image2 from '../../assets/images/AnalistaSlide.jpg';
import Image3 from '../../assets/images/GenexusSlide.jpg';
import NodeJSCert from '../../assets/images/slider002.jpg';



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
                    <img className="imagenSlider" src={NodeJSCert} alt="Second slide" />
                    <Carousel.Caption className='Contenido'>
                        <h2>NodeJs <br></br>BackEnd Developer</h2> 
                        <p>Certificacion brindada por la Empresa Incluit</p>
                        <a href="https://incluit.com/" rel="noreferrer" target="_blank">IncluIT</a>   
                    </Carousel.Caption>
                </Carousel.Item>

                <Carousel.Item className='item'>
                    <img className="imagenSlider" src={Image2} alt="Third slide" />
                    <Carousel.Caption className='Contenido'>
                        <h2>Licenciatura en <br></br>  Informática</h2>
                        <p>Estudiante universitario en UES 21. <br></br> En Curso. Tercer Año completo </p>
                    </Carousel.Caption>
                </Carousel.Item>

                <Carousel.Item className='item'>
                    <img className="imagenSlider" src={Image3} alt="Fourth slide" />
                    <Carousel.Caption className='Contenido'>
                        <h2>Genexus Developer</h2>
                        <p>Actualmente desarrolllando en Confluencia FTO. En GxEvo3, Gx17 Con Java y .NET</p>
                        <a href="https://www.confluenciafto.com.ar/" rel="noreferrer" target="_blank">CONFLU</a>
                    </Carousel.Caption>
                </Carousel.Item>

            </Carousel>


    )
    
}

export default Home;
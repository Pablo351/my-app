import Logo from '../../assets/images/IconoHeader.png'

const Header = () => {
    return (

        <header className= 'header' id='Header'>
            <div className="container-fluid">
                
                <a href="#Inicio" className="logo">
                    <img src={Logo} alt="INICIO"/>
                </a>
                <nav className="navbar">                   
                        <li>                      
                            <a href="#about">Sobre Mi</a>
                        
                            <a href="#skills">Skills</a>
                        
                            <a href="#contact">Contact</a>
                        </li>
                    
                </nav>
            </div>

        </header>
        

    )
}

export default Header;
import HTML from '../../assets/images/HTML.png';
import JAVA from '../../assets/images/JAVA.png';
import JS from '../../assets/images/JS.png';
import PHP from '../../assets/images/PHP.png';
import Bootstrap from '../../assets/images/Bootstrap.png';
import Laravel from '../../assets/images/LARAVEL.png';
import CSS from '../../assets/images/CSS.png';
import SASS from '../../assets/images/SASS.png';
import REACT from '../../assets/images/REACT.png';
import SQL from '../../assets/images/SQL.png';
import GENEXUS from '../../assets/images/GENEXUS.jpg';
import NODEJS from '../../assets/images/9035101_logo_nodejs_icon.png'

const Skills = () =>{
    return(
        <div className='skills' id='skills'>
            <h5>Poseo conocimientos en:</h5>
            <div className='imagenesSkills'>
                <img src={HTML} alt= 'HTML' title='HTML' className='img grow'/>
                <img src={CSS}alt= 'CSS' title='CSS' className='img grow'/>
                <img src={NODEJS} alt= 'NODEJS' title='NODEJS' className='img grow'/>
                <img src={JS}alt= 'JS' title='Java Script' className='img grow'/>
                <img src={JAVA}alt= 'JAVA' title='JAVA' className='img grow'/>
                <img src={PHP}alt= 'PHP' title='PHP' className='img grow'/>
                <img src={Bootstrap}alt= 'Bootstrap' title='Bootstrap' className='img grow'/>
                <img src={Laravel}alt= 'Laravel' title='Laravel' className='img grow'/>           
                <img src={SASS}alt= 'SASS' title='SASS' className='img grow'/>
                <img src={REACT}alt= 'REACT' title='REACT' className='img grow'/>
                <img src={SQL}alt= 'SQL' title='SQL PL/SQL' className='img grow'/>
                <img src={GENEXUS}alt= 'GENEXUS' title='GENEXUS' className='img grow'/>

            </div>

        </div>
    )
}

export default Skills;
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

const Skills = () =>{
    return(
        <div className='skills' id='skills'>
            <h5>Poseo conocimientos en:</h5>
            <div className='imagenesSkills'>
                <img src={HTML} alt= 'HTML' title='HTML' />
                <img src={JAVA}alt= 'JAVA' title='JAVA'/>
                <img src={PHP}alt= 'PHP' title='PHP'/>
                <img src={JS}alt= 'JS' title='Java Script'/>
                <img src={Bootstrap}alt= 'Bootstrap' title='Bootstrap'/>
                <img src={Laravel}alt= 'Laravel' title='Laravel'/>
                <img src={CSS}alt= 'CSS' title='CSS'/>
                <img src={SASS}alt= 'SASS' title='SASS'/>
                <img src={REACT}alt= 'REACT' title='REACT'/>
                <img src={SQL}alt= 'SQL' title='SQL PL/SQL'/>
                <img src={GENEXUS}alt= 'GENEXUS' title='GENEXUS'/>

            </div>

        </div>
    )
}

export default Skills;
import { Education } from '../../components/education/education'
import './style.css'
import udemy from '../../img/udemy.jpeg'
import ifal from '../../img/ifal.jpeg'

export const Formacao=()=>{
    return(
        <div>
            
            <Education  
            img={ifal}
            escola='Ifal - Instituto Federal de Alagoas'
            descricao='Maceió al - Sistemas de informação 
            Fev de 2020 - Atual'

            />
           
            <div className='formacao'>
            <Education
            img={udemy}
            escola='Udemy - cursos online'
            descricao='Inglês  - Intermediário/B1 - 50 horas, Fev de 2020 - Dez de 2020'
                
                />
                
             <Education
            img={udemy}
            escola='udemy - Cursos online'
            descricao='Nodejs avançado - Javascript, Css, Html, Vuejs, Node, mongodb, mysql - 260 horas, Fev de 2020 - Dez de 2020'
            />

             <Education
            title='Desenvolvimento web'
            udemy img={udemy}
            escola='udemy - Cursos online'
            descricao=' Php, Mysql, bootstrap, WordPress, html e css -  80 horas, Jan de 2021 - Jun de 2021'
            />
             <Education
            title='Javascript do básico ao avançado'
            img={udemy}
            escola='udemy - Cursos online'
            descricao=' Javascript, Css, Html, React, Node, mongodb -260 horas, Fev de 2020 - Dez de 2020'
            />
            </div>
        {/*<h3>Cursos</h3>
        <p><strong>Php, Mysql, Linux, Vue.js, WordPress </strong>- udemy  - 80 horas, Jan de 2021 - Jun de 2021
</p>
        <p><strong> Api rest</strong> - dio  - 40 horas, jun de 2022 - out de 2022
    </p>*/}

        </div>
    )
}
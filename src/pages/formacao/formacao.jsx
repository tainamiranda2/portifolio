import { Education } from '../../components/education/education'
import './style.css'
export const Formacao=()=>{
    return(
        <div>
            <h2>Formação</h2>
            <Education
            title='Educação'
            descricao='Maceió al - Sistemas de informação 
            Fev de 2020 - Atual
            Período -  Noturno (6°)'
            escola='Ifal'
            />
        <Education
        title='Idioma'
escola='Inglês'
descricao='udemy - Intermediário/B1 - 50 horas, Fev de 2020 - Dez de 2020'
     
     />
<Education
title='Cursos'
escola='udemy'
descricao=' Javascript, Css, Html, React, Node, mongodb -260 horas, Fev de 2020 - Dez de 2020'

/>
        {/*<h3>Cursos</h3>
        <p><strong>Php, Mysql, Linux, Vue.js, WordPress </strong>- udemy  - 80 horas, Jan de 2021 - Jun de 2021
</p>
        <p><strong> Api rest</strong> - dio  - 40 horas, jun de 2022 - out de 2022
    </p>*/}

        </div>
    )
}
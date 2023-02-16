import { Barra } from "../../components/barra/barra"

export const Home=()=>{
    return(
        <div>
            <h2>Tainá Miranda, <strong>Desenvolvedora Júnior</strong></h2>
<small>Site em contrução; Em breve novos projetos, informações e correções de bugs serão adicionados.</small>
<div className="barra">
<Barra end="/paga1" text="Projetos próprios conclúidos"/>


<Barra end="/paga3" text="Testes técnicos concluídos"/>

<Barra end="/paga4" text="Projetos de curso/faculdade concluídos"/>
</div>

        <article className="homeLi">
<section className="section-home">
    <h3>Hardskills</h3> 
 <li><strong>Linguagem de programação:</strong> JavaScript, Typescript, php
</li>
<li><strong>Contrução de interface: Biblioteca: </strong> vue.js ,React.js (styled-components, bootstrap, Sass)
</li>
<li><strong>Versionamento de código: </strong>Github
</li>
<li><strong>Design de interface:</strong> Figma
</li>
<li><strong>Consulta de api: </strong>axios, fetch
</li>
<li><strong>Teste de api: </strong>Postman
</li>
<li><strong>Banco de dados:</strong> Mysql, mongoDB, Postgree 
</li>
<li><strong>Sistemas operacional: </strong>Linux</li>
<li><strong>Conhecimento em:</strong> Padrões de projeto, metodologia Scrum 
</li>
</section>
<section className="section-home">
<h3>Softskill</h3>
<li> Pró-atividade,organização e foco no resultado</li>
<li>Bom relacionamento interpessoal 
</li>
<li>Trabalho em equipe
</li>
<li>Criatividade</li>

</section>
        </article>


        </div>
    )
}
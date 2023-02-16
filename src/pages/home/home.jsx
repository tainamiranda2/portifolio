import { Barra } from "../../components/barra/barra"

export const Home=()=>{
    return(
        <div>
            <h2>Tainá Miranda <strong>Desenvolvedora Júnior</strong></h2>



        <article className="homeLi">
<section className="section-home">
    <h3>Hardskills</h3> 
 <li>Linguagem de programação: JavaScript, Typescript, php
</li>
<li>Biblioteca: React.js (styled-components, bootstrap, Sass)
</li>
<li>Versionamento de código: Github
</li>
<li>Design de interface: Figma
</li>
<li>Consulta de api: Rest
</li>
<li>Teste de api: Postman
</li>
<li>Banco de dados: Mysql, mongoDB
</li>
<li>Sistemas operacional: Linux</li>
<li>Conhecimento em: Padrões de projeto, metodologia Scrum 
</li>
</section>
<section className="section-home">
<h3>Softskill</h3>
<li>Pró-atividade,organização e foco no resultado</li>
<li>Bom relacionamento interpessoal 
</li>
<li>Trabalho em equipe
</li>
<li>Criatividade</li>

</section>
        </article>



    <h3>Acesse as paǵinas com os conteúdos em questão ...</h3>
<div className="barra">
<Barra end="/paga1" text="Projetos próprios conclúidos"/>

<Barra end="/paga2" text="Projetos próprios em andamento ..."/>

<Barra end="/paga3" text="Testes técnicos concluídos"/>

<Barra end="/paga4" text="Projetos de curso/faculdade concluídos"/>
</div>
        </div>
    )
}
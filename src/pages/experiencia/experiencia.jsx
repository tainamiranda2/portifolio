import { Expor } from '../../components/exporCard/expor'
import './style.css'
export const Experiencia=()=>{
    return(
        <div>
               <Expor
  title='JCM,  Belo Hozonte - Al - Contrato, Full Stack developer JR'
  img={'/'}
  periodo='Abril, de 2023 - Atual'
  nomeAtividade="Atividades"
  descricao='Manutenção em um sistema legado, resolução de bugs e implementação de melhorias.'
  linguagem='github, mysql, php, cakephp, bootstrap, javascript, html, css, docker'

  />
              <Expor
  title='Semec,  Maceio - Al - Estágio, Full Stack developer'
  img={'/'}
  periodo='Agosto, de 2022 - Nov, 2022 (4 meses)'
  nomeAtividade="Atividades"
  descricao='Desenvolvimento de projetos com responsabilidade de front, backend, e banco de dados '
  linguagem='git, github, mysql, php, javascript, html, css, postman,react.js, docker, vue.js'

  />


<Expor
title="Desenvolve,  Maceio - Al - Estágio, front-end developer"
periodo='Dez, de 2021 a Mar, 2022 (4 meses) '
nomeAtividade='Atividades'
descricao=' Criação de layouts, manutenção do site e resolução de mal funcionamento na aplicação, desenvolvimento de páginas e funções para a aplicação '
linguagem='typescript, javascript, react.js, hmtl, css'

/>
  
        </div>
    )
}
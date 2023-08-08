import { Expor } from '../../components/exporCard/expor'
import './style.css'
export const Experiencia=()=>{
    return(
        <div>
               <Expor
  title='JCM Advogados Associados, Belo Hozonte/MG - Contrato, Full Stack developer jr'
  img={'/'}
  periodo='Abril, de 2023 - Atual'
  nomeAtividade="Atividades"
  descricao='Manutenção em um sistema legado com arquitetura mvc, resolução de bugs apresentados no sistema no sistema, implementação e sugestão de melhorias na aplicação. Implemetação de consumo de api externa na aplicação. Implementação de scrips shell para automatizar atividades da aplicação. Migração entre tabelas de banco de dados.'
  linguagem='github, mysql, php, cakephp, bootstrap, javascript, html, css, docker'
    site={"https://jcm.adv.br/"} 
    Desc="Sociedade de advogados que presta serviços de advogacia e consultoria jurídica com atuação dedicada aos segmentos da indústria, comércio, entidades fechadas de previdência complementar, sociedades cooperativas, operadoras de planos de saúde, dentre outras.  "
  />
              <Expor
  title='Semec,  Maceio - Al - Estágio, Full Stack developer'
  img={'/'}
  periodo='Agosto, de 2022 - Nov, 2022 (4 meses)'
  nomeAtividade="Atividades"
  descricao='Desenvolvimento de projetos para para melhorar projetos existentes e colocação em proejtos em anadamentos área com responsabilidade de front, backend, e banco de dados. '
  linguagem='git, github, mysql, php, javascript, html, css, postman,react.js, docker, vue.js'
Desc=" Secretaria Municipal de Educação"
site={"https://maceio.al.gov.br/secretarias-e-orgaos/semed"}
  />


<Expor
title="Desenvolve,  Maceio/Al - Estágio, front-end developer"
periodo='Dez, de 2021 a Mar, 2022 (4 meses) '
nomeAtividade='Atividades'
descricao='Criação de layouts no figma para a impletamenção, manutenção nas funcionalidades existentes, resolução de mal funcionamento no sistema, funções e páginas novas para a aplicação.'
linguagem='typescript, javascript, react.js, hmtl, figma ,css, chakiraUI'

/>
  
        </div>
    )
}
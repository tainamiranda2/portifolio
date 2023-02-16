import { Card } from "../../components/card/card"

import moto  from "../../img/img5.png"
import cafe from "../../img/img6.png"
import sports from "../../img/img12.png"
export const Page3=()=>{
    return(
        <div>
            <h2>Testes técnicos conclúidos</h2>
            <Card
                src={sports}
                alt={"Imagem do site"}
                descricao="Objetivo: construir uma aplicação que cadastra-se jogadores e times"
                tecnologias="html, css, react, prisma, postgre, javascript"
               repositorio={'https://github.com/tainamiranda2/e-sports/'}
               /> 
            <Card
                src={moto}
                alt={"Imagem do site"}
                descricao="Objetivo: construir um crud"
                tecnologias="html, css, php, mysql, javascript"
                endereco="https://crud-user-php.000webhostapp.com/moto-evolue/"
                /> 
                  <Card
                src={cafe}
                alt={"Imagem do site"}
                descricao="Objetivo: consumir uma api"
                tecnologias="html, css, react, tailwind css"
              repositorio={'https://github.com/tainamiranda2/coffee'}
              /> 
        </div>
    )
}
import { Card } from "../../components/card/card"

import moto  from "../../img/img5.png"
import cafe from "../../img/img6.png"

export const Page3=()=>{
    return(
        <div>
            <h2>Testes técnicos conclúidos</h2>
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
                tecnologias="html, css, "
                endereco="https://tainamiranda2.github.io/chale-hotel/"
                /> 
        </div>
    )
}
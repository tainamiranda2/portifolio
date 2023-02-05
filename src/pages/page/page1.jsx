import { Card } from "../../components/card/card"
import tecblog from '../../img/img1.png'
import chale from '../../img/img2.png'
import financas from '../../img/img3.png'
import noticias from '../../img/img4.png'

export const Page1=()=>{
    return(
        <div>
            <h2>Projetos própios conclúidos</h2>
            <div>
                <Card
                src={tecblog}
                alt={"Imagem do site"}
                descricao="site de um blog"
                tecnologias="html, css"
                endereco="https://tainamiranda2.github.io/tecblog/"
                />
                  <Card
                src={chale}
                alt={"Imagem do site"}
                descricao="site de uma chale"
                tecnologias="html, css"
                endereco="https://tainamiranda2.github.io/chale-hotel/"
                />
                  <Card
                src={financas}
                alt={"Imagem do site"}
                descricao="site sobre financas"
                tecnologias="html, css"
                endereco="https://tainamiranda2.github.io/projeto-financas/"
                />
                  <Card
                src={noticias}
                alt={"Imagem do site"}
                descricao="site "
                tecnologias="html, css"
                endereco="https://tainamiranda2.github.io/projeto-noticias-cidade/"
                />
                
            </div>
        </div>
    )
}
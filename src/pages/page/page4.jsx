import { Card } from "../../components/card/card"

import tecblog from '../../img/img1.png'
import chale from '../../img/img2.png'
import financas from '../../img/img3.png'
import noticias from '../../img/img4.png'
import blog from '../../img/img7.png'
import jogo from '../../img/img9.png'
import jogo2 from '../../img/img10.png'
import devlink from '../../img/img11.png'

export const Page4=()=>{
    return(
        <div>
            <h2>Projetos em faculdade e cursos</h2>
           
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
                <p>Projetos mais avançados</p>
                  <Card
                src={blog}
                alt={"Imagem do site"}
                descricao="Blog com gerenciarmento de informações, conecão com banco de dados firebase"
                tecnologias="html, css, react, react-routes, firebase"
                endereco="https://tainamiranda2.github.io/projeto-noticias-cidade/"
                />
                  <Card
                src={jogo}
                alt={"Imagem do site"}
                descricao="Jogo de adinhar cartas"
                tecnologias="html, css, javascript, canvas"
                endereco="https://tainamiranda2.github.io/projeto-noticias-cidade/"
                />
                  <Card
                src={jogo2}
                alt={"Imagem do site"}
                descricao="Um jogo de adinhar palavras com pontuação"
                tecnologias="html, css, react, javascript"
                endereco="https://tainamiranda2.github.io/projeto-noticias-cidade/"
                />
                   <Card
                src={devlink}
                alt={"Imagem do site"}
                descricao="Um site com gerencaimento de informações com conexão com bano  de dados firebase"
                tecnologias="html, css, react, javascript"
                endereco="https://tainamiranda2.github.io/projeto-noticias-cidade/"
                />
            </div>
        </div>
    )
}
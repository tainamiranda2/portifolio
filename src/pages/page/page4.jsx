import { Card } from "../../components/card/card"
import tecnoblog  from "../../img/img1.png"

export const Page4=()=>{
    return(
        <div>
            <h2>Testes técnicos em andamentos</h2>
            <div>
            <Card
                img={"/"}
                alt={"Imagem do site"}
                descricao="site do moseu"
                tecnologias="html, css"
                endereco="https://github.com/tainamiranda2/tecblog"
                /> 
                    <Card
                img={"/"}
                alt={"Imagem do site"}
                descricao="site chale hotel"
                tecnologias="html, css"
                endereco="https://tainamiranda2.github.io/site-de-vendas"
                /> 
                 <Card
                img={"/"}
                alt={"Imagem do site"}
                descricao="site noticias da cidade"
                tecnologias="html, css"
                endereco="https://github.com/tainamiranda2/tecblog"
                />  
                <Card
                img={"/"}
                alt={"Imagem do site"}
                descricao="site e vendas"
                tecnologias="html, css"
                endereco="https://tainamiranda2.github.io/site-de-vendas/"
                />
                 <Card
                src={tecnoblog}
                alt={"Imagem do site"}
                descricao="site tecnoblog"
                tecnologias="html, css"
                endereco="https://github.com/tainamiranda2/tecblog"
                />
            </div>
        </div>
    )
}
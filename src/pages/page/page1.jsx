import { Card } from "../../components/card/card"
import eventos from '../../img/img8.png'
export const Page1=()=>{
    function goBack() {
        window.history.back()
    }
    return(
        <div>
          {/*  <button className="Voltar" onclick={goBack}>Voltar</button>*/} 
            <h2>Projetos própios conclúidos</h2>
            <p>Em breve mais projeto serão adicionados</p>
            <div>
               
            <Card
                src={eventos}
                alt={"Imagem do site"}
                descricao="site de um blog"
                tecnologias="html, css, react, nodejs"
                endereco="https://pub-fiction-react.vercel.app/"
                />
            </div>
        </div>
    )
}
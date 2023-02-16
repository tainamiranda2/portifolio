import { Card } from "../../components/card/card"
import eventos from '../../img/img8.png'
import viajens from '../../img/img13.png'

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
                descricao="Sistema de gerenciamento de eventos"
                tecnologias="html, css, react, nodejs"
                endereco="https://pub-fiction-react.vercel.app/"
                />
                 <Card
                src={viajens}
                alt={"Imagem do site"}
                descricao="sistema de gerenciamento de viajens"
                tecnologias="html, css, react, react-routes, nodejs"
                endereco="http://crud-react-roan.vercel.app/"
                />
            </div>
        </div>
    )
}
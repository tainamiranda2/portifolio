import { Barra } from "../../components/barra/barra"

export const Home=()=>{
    return(
        <div>
            <h2>Tainá Miranda <strong>Desenvolvedora Júnior</strong></h2>
<p>Projeto em construção ...</p>
<Barra end="/paga1" text="Projetos próprios conclúidos"/>

<Barra end="/paga2" text="Projetos próprios em andamento ..."/>

<Barra end="/paga3" text="Testes técnicos concluídos"/>

<Barra end="/paga4" text="Projetos de curso/faculdade concluídos"/>

        </div>
    )
}
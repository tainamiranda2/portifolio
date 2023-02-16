import './style.css'
export const Card=({src, alt,tecnologias,descricao,repositorio, endereco})=>{
    return(
        <div className="Card">
            <img src={src} alt={alt}/>

            <p><strong>Descrição</strong>  - {descricao}</p>
            <br/>
        <p><strong>Tecnologias utilizadas</strong>  - {tecnologias}</p>
         
        <br/>  <a href={endereco}> {endereco}</a>
       <br/>
           <a href={repositorio}> {repositorio}</a>

        </div>
    )
}
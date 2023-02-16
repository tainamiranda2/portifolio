import './style.css'
export const Card=({src, alt,tecnologias,descricao, endereco})=>{
    return(
        <div className="Card">
            <img src={src} alt={alt}/>

            <p><strong>Descrição</strong>  - {descricao}</p>
        <p><strong>Tecnologias utilizadas</strong>  - {tecnologias}</p>
           <a href={endereco}>Link do site - {endereco}</a>
        </div>
    )
}
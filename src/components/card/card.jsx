import './style.css'
export const Card=({src, alt,tecnologias,descricao, endereco})=>{
    return(
        <div className="Card">
            <img src={src} alt={alt}/>

            <p>{descricao}</p>
        <p>{tecnologias}</p>
            <a href={endereco}>{endereco}</a>
        </div>
    )
}
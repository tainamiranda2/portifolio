import './style.css'
export const Card=({image, descricao, endereco})=>{
    return(
        <div className="Card">
            <img src={image}/>

            <p>{descricao}</p>
        
            <a href={"endereco"}>{endereco}</a>
        </div>
    )
}
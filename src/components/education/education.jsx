import './style.css'

export const Education=({title, escola,descricao})=>{
return(
    <div className='education'>
        <h3>{title}</h3>
        <p><strong>{escola}</strong> - {descricao}</p>
    </div>
)
}
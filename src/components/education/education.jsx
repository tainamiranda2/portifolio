import './style.css'

export const Education=({alt,
     item1,   item2,   item3,descricao,img, detalhes})=>{
return(
    
    <div className='education'>
        
        <img src={img} alt={alt}/>
<div className='education-info'>
        <h3> {descricao}</h3>
        <p>{detalhes}</p>
        {/**  <ul>
            <li>{item1}</li>
            <li>{item2}</li>
            <li>{item3}</li>

         </ul>
        */}
        </div>
    
    </div>
)
}
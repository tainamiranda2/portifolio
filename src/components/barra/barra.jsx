import { Link } from 'react-router-dom'
import './style.css'
export const Barra=({text, end})=>{

    return(
        <div className='Barra'>
            <Link to={end}>{text}</Link>
         
        </div>
    )
}
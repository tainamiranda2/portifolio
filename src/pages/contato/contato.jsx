import './style.css'
export const Contato =()=>{
    return(
        <div>
        <h2>Formulário de contato</h2>
        <form>
            <input type="text" 
            placeholder="Seu nome"
            required
            />

            <input type="email" 
            placeholder="Seu email"
            required/>

            <input type="number" 
            placeholder="Seu número"
            required/>
            <textarea placeholder="Deixe uma mensagem para mim ">

            </textarea>
            <button>Enviar</button>
        </form>
        </div>
    )
}
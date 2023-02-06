import { useState } from 'react'
import emailjs  from '@emailjs/browser';
import './style.css'

export const Contato =()=>{
    const [name, setName]=useState('');
    const [email, setEmail]=useState('');
    const [message, setMessage]=useState('');

    function sendEmail(e){
        e.preventDefault();
       
        //alert("Enviado")
        const templateParans={
            from_name:name,
            message:message,
            email:email
        }
        emailjs.send(
            "service_vb8xmas",
        "template_kljhymf",
        templateParans,
        "glWQe-fJXDyJQSXqn"
        ).then((response)=>{
            console.log("email enviado",response.status)
        setName('')
        setEmail('')
        setMessage('')
        }, (err)=>{
            console.log(err)
        })
   
    }

    return(
        <div>
        <h2>Formulário de contato</h2>
        <form onSubmit={sendEmail}>
            <input type="text" 
            placeholder="Seu nome"
            onChange={(e)=>setName(e.target.value)}
          value={name}
            required
            />

            <input type="email" 
            placeholder="Seu email"
            onChange={(e)=>setEmail(e.target.value)}
            value={email}
            required
       />

        {/*    <input type="number" 
            placeholder="Seu número"
    required/>*/}
            <textarea
             placeholder="Deixe uma mensagem para mim "
            onChange={(e)=>setMessage(e.target.value)}
          value={message}
          required
/>
            <button>Enviar</button>
        </form>
        </div>
    )
}
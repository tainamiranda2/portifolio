import './style.css'
export const Expor=({
    src, linguagem,Desc,
    periodo, title,
     nomeAtividade,
     descricao,site})=>{
    return(
        <div className='sec'>
            <h3>{title}</h3>
            <main>
                <img src={src}/>
                <strong>{periodo}</strong>
                <p className="info"><strong>{nomeAtividade}</strong> {descricao}</p>
                <section  className='homeLi'>
<li>{linguagem}</li>
                </section>
                <a className='link-site' href={site}>{site}</a> 
                 <p className='desc-empresa'>Sobre a empresa: {Desc}</p>
            </main>
        </div>
    )
}
import dadosDisciplinasTecnicas from "../dados/dadosDisciplinasTecnicas";
function DiciplinasTecnicas(){
    return(
      <section className='disciplinas'>
      <header className='headerdisciplinas'>
        <h1>Disciplinas Tecnicas</h1>
      </header>
      <div className='contentDisciplinas'>
      {
        dadosDisciplinasTecnicas.map(
            (item,index) => (
                <article key={index}>
                    <img src={item.link_imagem}
                    alt={item.nome}
                    title={item.nome} />
                   <h2>{item.nome} . {item.sigla}</h2>
                </article>
            )
        )
     }
     </div>
      </section>
    )
}

export default DiciplinasTecnicas;
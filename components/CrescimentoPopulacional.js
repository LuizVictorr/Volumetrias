import React, { useState } from "react";

const CrescimentoPopulacional = () => {
    const [PopulaçãoInicial, setPopulaçãoInicial] = useState('');
    const [PopulaçãoFinal, setPopulaçãoFinal] = useState('');
    const [Tempo, setTempo] = useState('');
    const [Resultado, setResultado] = useState('');

    const populaçãoInicial = (e) => {
        setPopulaçãoInicial(parseFloat(e.target.value))
    }

    const populaçãoFinal = (e) => {
        setPopulaçãoFinal(parseFloat(e.target.value))
    }

    const tempo = (e) => {
        setTempo(parseFloat(e.target.value))
    }

    const resultado = () => {
        setResultado((PopulaçãoFinal - PopulaçãoInicial)/Tempo)
    }
    
    return (
        <div>
            <div>
                <label>Tamanho da População Inicial:</label>
                <input type="number" value={PopulaçãoInicial} onChange={populaçãoInicial}/>
            </div>
            <div>
                <label>Tamanho da População Inicial:</label>
                <input type="number" value={PopulaçãoFinal} onChange={populaçãoFinal}/>
            </div>
            <div>
                <label>Tamanho da População Inicial:</label>
                <input type="number" value={Tempo} onChange={tempo}/>
            </div>
            
            <button onClick={resultado}>calcular</button>

            <p>{Resultado}</p>
        </div>
    )
}

export default CrescimentoPopulacional;
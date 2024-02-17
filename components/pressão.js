import React, { useState } from "react";

const Pressão = () => {
    const [Volume, setVolume] = useState('');
    const [NumeroMols, setNumeroMols] = useState('');
    const [Temperatura, setTemperatura] = useState('');
    const ConstanteGases = 8.14
    const [Força, setForça] = useState('');
    const [Area, setArea] = useState('');
    const [Pressao, setPressao] = useState('');
    const [Gases, setGases] = useState(true);

    const volume = (e) => {
        setVolume(e.target.value)
    }

    const numeroMols = (e) => {
        setNumeroMols(e.target.value)
    }

    const temperatura = (e) => {
        setTemperatura(e.target.value)
    }

    const força = (e) => {
        setForça(e.target.value)
    }

    const area = (e) => {
        setArea(e.target.value)
    }

    const P = () => {
        const p = (Gases === true) ? (NumeroMols * ConstanteGases * Temperatura) / Volume : Força / Area
        setPressao(p) 
    }

    return (
        <div>
            
            <input
            type="radio"
            checked={Gases}
            onChange={() => setGases(true)}
            />
            <label htmlFor="mostrar">Gases</label>

            <input
            type="radio"
            checked={!Gases}
            onChange={() => setGases(false)}
            />
            <label htmlFor="esconder">Força</label>

            {Gases ?
                <div>
                    <div>
                        <label>Volume</label>
                        <input type="number" value={Volume} onChange={volume}/>
                    </div>
                    <div>
                        <label>Número de Mols</label>
                        <input type="number" value={NumeroMols} onChange={numeroMols}/>
                    <div>
                    </div>
                        <label>Temperatura</label>
                    <input type="number" value={Temperatura} onChange={temperatura}/>
                    </div>
                </div>
            
            : (
                <div>
                    <div>
                        <label>Força</label>
                        <input type="number" value={Força} onChange={força}/>
                    </div>
                    <div>
                        <label>Área</label>
                        <input type="number" value={Area} onChange={area}/>
                    </div> 
                </div>
            )}
            <button onClick={P}>Resultado</button>
            <p>{Pressao}</p>
        </div>
    )
}

export default Pressão;
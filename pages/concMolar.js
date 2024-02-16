import React, { useState } from "react";

const ConcentraçãoMolar = () => {
    const [Massa, setMassa] = useState('');
    const [Volume, setVolume] = useState('');
    const [MassaMolecular, setMassaMolecular] = useState('');
    const [NumeroMols, setNumeroMols] = useState('');
    const [TemMols, setTemMols] = useState(true);
    const [Molar, setMolar] = useState('');

    const volume = (e) => {
        setVolume(e.target.value)
    }

    const massa = (e) => {
        setMassa(e.target.value)
    }

    const massaMolecular = (e) => {
        setMassaMolecular(e.target.value)
    }

    const numeroMols = (e) => {
        setNumeroMols(e.target.value)
    }

    const molar = () => {
        const WithNumeroMols = NumeroMols/Volume
        const WithoutNumeroMols = Massa/(MassaMolecular*Volume)

        setMolar(TemMols ? WithNumeroMols : WithoutNumeroMols)
    }

    return (    
    <div>
        <input
            type="radio"
            checked={TemMols}
            onChange={() => setTemMols(true)}
        />
        <label htmlFor="mostrar">Tenho Número de Mols</label>

        <input
            type="radio"
            checked={!TemMols}
            onChange={() => setTemMols(false)}
        />
        <label htmlFor="esconder">Não tenho o número de Mols</label>

        {TemMols ? 
            <div>
                <label>Números de Mols</label>
                <input value={NumeroMols} onChange={numeroMols} />
            </div>

        : 
        (
            <div>
                <label>Massa</label>
                <input value={Massa} onChange={massa} />
                <label>Massa Molecular</label>
                <input value={MassaMolecular} onChange={massaMolecular} />
            </div>
        )}

        <div>
            <label>Volume</label>
            <input value={Volume} onChange={volume}/>
        </div>

        <div>
            <button onClick={molar}>Resultado</button>
            <p>{Molar}</p>
        </div>
      
    </div>
    )
}

export default ConcentraçãoMolar;
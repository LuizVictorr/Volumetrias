import React, { useState } from "react";

const ConcentraçãoMolar = () => {
    const [Massa, setMassa] = useState('');
    const [Volume, setVolume] = useState('');
    const [MassaMolecular, setMassaMolecular] = useState('');
    const [NumeroMols, setNumeroMols] = useState('');
    const [TemMols, setTemMols] = useState(true); 
    const [Molar, setMolar] = useState('');

    // Unidades
    const [UMassa, setUMassa] = useState('g');
    const [UVolume, setUVolume] = useState('L');
    const [UMassaMolecular, setUMassaMolecular] = useState('g/mol');
    const [UNumeroMols, setUNumeroMols] = useState('mol');
    const [UMolar, setUMolar] = useState('mol/L');

    const volume = (e) => {
        setVolume(e.target.value)
    }

    const uvolume = (e) => {
        setUVolume(e.target.value)
    }

    const massa = (e) => {
        setMassa(e.target.value)
    }

    const umassa = (e) => {
        setUMassa(e.target.value)
    }

    const massaMolecular = (e) => {
        setMassaMolecular(e.target.value)
    }

    const umassaMolecular = (e) => {
        setUMassaMolecular(e.target.value)
    }

    const numeroMols = (e) => {
        setNumeroMols(e.target.value)
    }

    const unumeroMols = (e) => {
        setUNumeroMols(e.target.value)
    }

    const umolar = (e) => {
        setUMolar(e.target.value)
    }

    const molar = () => {
        const WithNumeroMols = NumeroMols/Volume
        const WithoutNumeroMols = Massa/(MassaMolecular*Volume)

        setMolar(TemMols ? WithNumeroMols : WithoutNumeroMols)

        const CM =
        (UMolar === 'mol/L' && UNumeroMols === 'mol' && UVolume === 'L' && TemMols === true) ||
        (UMolar === 'mol/L' && UNumeroMols === 'kmol' && UVolume === 'm3' && TemMols === true) ||
        (UMolar === 'kmol/m3' && UNumeroMols === 'mol' && UVolume === 'L' && TemMols === true) ||
        (UMolar === 'kmol/m3' && UNumeroMols === 'kmol' && UVolume === 'm3' && TemMols === true) ||
        (UMolar === 'mol/L' && Massa === 'g' && UVolume === 'L' && MassaMolecular === 'g/mol' && TemMols === false) ||
        (UMolar === 'mol/L' && Massa === 'g' && UVolume === 'L' && MassaMolecular === 'kg/kmol' && TemMols === false) ||
        (UMolar === 'mol/L' && Massa === 'kg' && UVolume === 'm3' && MassaMolecular === 'g/mol' && TemMols === false) ||
        (UMolar === 'mol/L' && Massa === 'kg' && UVolume === 'm3' && MassaMolecular === 'kg/kmol' && TemMols === false) ||
        (UMolar === 'mol/L' && Massa === 'mg' && UVolume === 'mL' && MassaMolecular === 'g/mol' && TemMols === false) ||
        (UMolar === 'mol/L' && Massa === 'mg' && UVolume === 'mL' && MassaMolecular === 'kg/kmol' && TemMols === false) ||
        (UMolar === 'kmol/m3' && Massa === 'g' && UVolume === 'L' && MassaMolecular === 'g/mol' && TemMols === false) ||
        (UMolar === 'kmol/m3' && Massa === 'g' && UVolume === 'L' && MassaMolecular === 'kg/kmol' && TemMols === false) ||
        (UMolar === 'kmol/m3' && Massa === 'kg' && UVolume === 'm3' && MassaMolecular === 'g/mol' && TemMols === false) ||
        (UMolar === 'kmol/m3' && Massa === 'kg' && UVolume === 'm3' && MassaMolecular === 'kg/kmol' && TemMols === false) ||
        (UMolar === 'kmol/m3' && Massa === 'mg' && UVolume === 'mL' && MassaMolecular === 'g/mol' && TemMols === false) ||
        (UMolar === 'kmol/m3' && Massa === 'mg' && UVolume === 'mL' && MassaMolecular === 'kg/kmol' && TemMols === false)
          ? NumeroMols/Volume
          : (UMolar === 'mol/L' && UNumeroMols === 'kmol' && UVolume === 'L' && TemMols === true) || 
            (UMolar === 'mol/L' && UNumeroMols === 'mol' && UVolume === 'mL' && TemMols === true) ||
            (UMolar === 'kmol/m3' && UNumeroMols === 'mol' && UVolume === 'mL' && TemMols === true) ||
            (UMolar === 'kmol/m3' && UNumeroMols === 'kmol' && UVolume === 'L' && TemMols === true) ||
            (UMolar === 'mol/L' && Massa === 'g' && UVolume === 'mL' && MassaMolecular === 'g/mol' && TemMols === false) ||
            (UMolar === 'mol/L' && Massa === 'g' && UVolume === 'mL' && MassaMolecular === 'kg/kmol' && TemMols === false) ||
            (UMolar === 'mol/L' && Massa === 'g' && UVolume === 'm3' && MassaMolecular === 'kg/kmol' && TemMols === false) ||
            (UMolar === 'mol/L' && Massa === 'kg' && UVolume === 'L' && MassaMolecular === 'g/mol' && TemMols === false) ||
            (UMolar === 'mol/L' && Massa === 'kg' && UVolume === 'L' && MassaMolecular === 'kg/kmol' && TemMols === false) ||
            (UMolar === 'kmol/m3' && Massa === 'g' && UVolume === 'mL' && MassaMolecular === 'g/mol' && TemMols === false) ||
            (UMolar === 'kmol/m3' && Massa === 'g' && UVolume === 'mL' && MassaMolecular === 'kg/kmol' && TemMols === false) ||
            (UMolar === 'kmol/m3' && Massa === 'kg' && UVolume === 'L' && MassaMolecular === 'g/mol' && TemMols === false) ||
            (UMolar === 'kmol/m3' && Massa === 'kg' && UVolume === 'L' && MassaMolecular === 'kg/kmol' && TemMols === false)
          ? (1000 * NumeroMols)/Volume
          : (UMolar === 'mol/L' && UNumeroMols === 'mol' && UVolume === 'm3' && TemMols === true) ||
            (UMolar === 'kmol/m3' && UNumeroMols === 'mol' && UVolume === 'm3' && TemMols === true) ||
            (UMolar === 'mol/L' && Massa === 'g' && UVolume === 'm3' && MassaMolecular === 'g/mol' && TemMols === false) ||
            (UMolar === 'mol/L' && Massa === 'mg' && UVolume === 'L' && MassaMolecular === 'g/mol' && TemMols === false) ||
            (UMolar === 'mol/L' && Massa === 'mg' && UVolume === 'L' && MassaMolecular === 'kg/kmol' && TemMols === false) ||
            (UMolar === 'kmol/m3' && Massa === 'g' && UVolume === 'm3' && MassaMolecular === 'g/mol' && TemMols === false) ||
            (UMolar === 'kmol/m3' && Massa === 'g' && UVolume === 'm3' && MassaMolecular === 'kg/kmol' && TemMols === false) ||
            (UMolar === 'kmol/m3' && Massa === 'mg' && UVolume === 'L' && MassaMolecular === 'g/mol' && TemMols === false) ||
            (UMolar === 'kmol/m3' && Massa === 'mg' && UVolume === 'L' && MassaMolecular === 'kg/kmol' && TemMols === false)
          ? NumeroMols/(1000 * Volume)
          : (UMolar === 'mol/L' && UNumeroMols === 'kmol' && UVolume === 'mL' && TemMols === true) ||
            (UMolar === 'kmol/m3' && UNumeroMols === 'kmol' && UVolume === 'mL' && TemMols === true) ||
            (UMolar === 'mol/L' && Massa === 'kg' && UVolume === 'mL' && MassaMolecular === 'g/mol' && TemMols === false) ||
            (UMolar === 'mol/L' && Massa === 'kg' && UVolume === 'mL' && MassaMolecular === 'kg/kmol' && TemMols === false) ||
            (UMolar === 'kmol/m3' && Massa === 'kg' && UVolume === 'mL' && MassaMolecular === 'g/mol' && TemMols === false) ||
            (UMolar === 'kmol/m3' && Massa === 'kg' && UVolume === 'mL' && MassaMolecular === 'kg/kmol' && TemMols === false)
          ? (1000 * 1000 *  NumeroMols)/(Volume)
          : (UMolar === 'mol/L' && Massa === 'mg' && UVolume === 'm3' && MassaMolecular === 'g/mol' && TemMols === false) ||
            (UMolar === 'mol/L' && Massa === 'mg' && UVolume === 'm3' && MassaMolecular === 'kg/kmol' && TemMols === false) ||
            (UMolar === 'mol/L' && Massa === 'mg' && UVolume === 'm3' && MassaMolecular === 'g/mol' && TemMols === false) ||
            (UMolar === 'mol/L' && Massa === 'mg' && UVolume === 'm3' && MassaMolecular === 'kg/kmol' && TemMols === false)
          ? NumeroMols/(1000 * 1000 * Volume)
          : 'Selecione uma opção.';

          setMolar(CM)
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
                    <select id="numero de mols"value={UNumeroMols} onChange={unumeroMols}>
                        <option value="mol">mol</option>
                        <option value="kmol">kmol</option>
                    </select>
            </div>

        : 
        (
            <div>
                <div>
                    <label>Massa</label>
                    <input value={Massa} onChange={massa} />
                    <select id="massa" value={UMassa} onChange={umassa}>
                        <option value="g">g</option>
                        <option value="kg">kg</option>
                        <option value="mg">mg</option>
                    </select>
                </div>
                <label>Massa Molecular</label>
                <input value={MassaMolecular} onChange={massaMolecular} />
                    <select id="massa molecular" value={UMassaMolecular} onChange={umassaMolecular}>
                        <option value="g/mol">g/mol</option>
                        <option value="kg/kmol">kg/kmol</option>
                    </select>
            </div>
        )}

        <div>
            <label>Volume</label>
            <input value={Volume} onChange={volume}/>
                <select id="volume" value={UVolume} onChange={uvolume}>
                    <option value="L">L</option>
                    <option value="mL">mL</option>
                    <option value="m3">m³</option>
                </select>
        </div>

        <div>
            <button onClick={molar}>Resultado</button>
            <input value={Molar}/>
                <select id="resultado" value={UMolar} onChange={umolar}>
                    <option value="mol/L">mol/L</option>
                    <option value="kmol/m3">kmol/m³</option>
                    <option value="mg/L">mg/L</option>
                </select>
        </div>

    </div>
    )
}

export default ConcentraçãoMolar;
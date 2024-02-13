import React, { useState } from "react";

const Volumetria = () => {
  
  const [mols, setMols] = useState('')
  const [volumeGasto, setVolumeGasto] =  useState('');
  const [volumeSolução, setVolumeSolução] = useState('');
  const [resultado, setResultado] = useState('');

  const handleChangeMols = (e) => {
    setMols(e.target.value);
  };

  const handleChangeVolumeGasto = (e) => {
    setVolumeGasto(e.target.value);
  };

  const handleChangeVolumeSolução = (e) => {
    setVolumeSolução(e.target.value);
  }

  const volumetriaNeutralização = () => {
    const vn = (mols * volumeGasto) / volumeSolução
    setResultado(vn)
  }

  return (
    <div>
      <div>
        <label>Número de Mols</label>
        <input type="number" value={mols} onChange={handleChangeMols}/>
      </div>
      <div>
        <label>Volume Gasto</label>
      <input type="number" value={volumeGasto} onChange={handleChangeVolumeGasto}/>
      </div>
      <div>
        <label>Volume da Solução</label>
      <input type="number" value={volumeSolução} onChange={handleChangeVolumeSolução}/>
      </div>
      <button onClick={volumetriaNeutralização}>Calcular</button>
      <p>{resultado} Mol/L</p>
    </div>
  );
};

export default Volumetria;

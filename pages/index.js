import React, { useState } from "react";

const Volumetria = () => {

  const [mols, setMols] = useState('')
  const [volumeGasto, setVolumeGasto] =  useState('');
  const [volumeSolução, setVolumeSolução] = useState('');
  const [resultado, setResultado] = useState('');
  const [numInputs, setNumInputs] = useState('');
  const [inputsValues, setInputsValues] = useState([]);

  const handleChangeNumInputs = (e) => {
    setNumInputs(parseInt(e.target.value));
  };

  const handleGenerateInputs = () => {
    // Verifica se o número é menor ou igual a zero ou se ele não é inteiro, caso seja true retorna zero
    if (numInputs <= 0 || !Number.isInteger(numInputs)) {
      return null;
    }
  
    // Gera um array com a quantidade de numImpunts, onde cada index representa 1 input criado pela tag html
    const newInputs = Array.from({ length: numInputs }, (_, index) => (
      <div>
        <label>Proporção {index + 1}</label>
        <input key={index} type="text" />
        :
        <input key={index} type="text" />
      </div>
    ));
    return newInputs;
  };

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

      
      <div>
        <label>Número de Reações</label>
        <input type="number" value={numInputs} onChange={handleChangeNumInputs}/>  
      </div>
      
      {numInputs > 0 && (
        <div>
          {handleGenerateInputs()}
        </div>
      )}

    </div>
  );
};

export default Volumetria;

import React, { useState } from "react";

const Volumetria = () => {

  const [mols, setMols] = useState('')
  const [volumeGasto, setVolumeGasto] =  useState('');
  const [volumeSolução, setVolumeSolução] = useState('');
  const [numInputs, setNumInputs] = useState('');
  const [InputValuesLeft, setInputValuesLeft] = useState([]);
  const [InputValuesRight, setInputValuesRight] = useState([]);
  const [volumetriaResultado, setVolumetriaResultado] = useState('');

  const handleChangeMols = (e) => {
    setMols(e.target.value);
  };

  const handleChangeVolumeGasto = (e) => {
    setVolumeGasto(e.target.value);
  };

  const handleChangeVolumeSolução = (e) => {
    setVolumeSolução(e.target.value);
  };

  // Coleta a quantidade de inputs que vão ser inseridos posteriormente
  const handleChangeNumInputs = (e) => {
    setNumInputs(parseInt(e.target.value));
  };

  // Coleta as informações do array de input da esquerda
  const handleInputChangeLeft = (index, e) => {
      const newInputValuesLeft = [...InputValuesLeft];
      newInputValuesLeft[index] = e.target.value;
      setInputValuesLeft(newInputValuesLeft);
  };

  // Coleta as informações do array de input da direita
  const handleInputChangeRight = (index, e) => {
      const newInputValuesRight = [...InputValuesRight];
      newInputValuesRight[index] = e.target.value;
      setInputValuesRight(newInputValuesRight);
  };

  //Gera os inputs no formato []:[]
  const handleGenerateInputs = () => {
      if (numInputs <= 0 || !Number.isInteger(numInputs)) {
          return null;
      }

      const newInputs = Array.from({ length: numInputs }, (_, index) => (
          <div key={index}>
              <label>Proporção {index + 1}</label>
              <input type="text" onChange={(e) => handleInputChangeLeft(index, e)} />
              :
              <input type="text" onChange={(e) => handleInputChangeRight(index, e)} />
          </div>
      ));
      return newInputs;
  };

  // Multiplica os valores do array de input da esquerda
  const multiplyValuesLeft = () => {
      const valuesLeft = InputValuesLeft.map(value1 => parseFloat(value1));
      const resultLeft = valuesLeft.reduce((accumulator, currentValue) => accumulator * currentValue, 1);
      return resultLeft;
  };

  // Multiplica os valores do array de input da direita
  const multiplyValuesRight = () => {
      const valuesRight = InputValuesRight.map(value2 => parseFloat(value2));
      const resultRight = valuesRight.reduce((accumulator, currentValue) => accumulator * currentValue, 1);
      return resultRight;
  };

  // Faz o cálculo da volumetria
  const volumetriaNeutralizacao = () => {
    const resultLeft = multiplyValuesLeft();
    const resultRight = multiplyValuesRight();
    const vn = (mols * volumeGasto * resultRight) / (volumeSolução * resultLeft);
    setVolumetriaResultado(vn.toFixed(4));
    return vn;
  };

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
      <div>
          <label>Número de Reações</label>
            <input type="number" value={numInputs} onChange={handleChangeNumInputs} />
          </div>

          {numInputs > 0 && (
            <div>
              {handleGenerateInputs()}
            </div>
          )}

          <button onClick={volumetriaNeutralizacao}>Calcular</button>

          {volumetriaResultado !== null && (
            <div>
              Resultado final: {volumetriaResultado}
            </div>
          )}
    </div>
  );
};

export default Volumetria;

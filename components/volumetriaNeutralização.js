import React, { useState } from "react";

const VolumetriaNeutralizacao = () => {

  const [mols, setMols] = useState('')
  const [volumeGasto, setVolumeGasto] =  useState('');
  const [volumeSolução, setVolumeSolução] = useState('');
  const [numInputs, setNumInputs] = useState('');
  const [InputValuesLeft, setInputValuesLeft] = useState([]);
  const [InputValuesRight, setInputValuesRight] = useState([]);
  const [MassaMolecular, setMassaMolecular] = useState('');
  const [MassaImpura, setMassaImpura] = useState('');
  const [volumetriaResultado, setVolumetriaResultado] = useState('');
  const [Massa, setMassa] = useState('');
  const [Pureza, setPureza] = useState('');

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

  const handleChangeMassaMolecular = (e) => {
    setMassaMolecular(e.target.value)
  }

  const handleChangeMassaImpura = (e) => {
    setMassaImpura(e.target.value)
  }

  // Faz o cálculo da volumetria
  const volumetriaNeutralizacao = () => {
    const resultLeft = multiplyValuesLeft();
    const resultRight = multiplyValuesRight();
    const vn = (mols * volumeGasto * resultRight) / (volumeSolução * resultLeft);
    setVolumetriaResultado(vn);
    return vn;
  };

  const massa = () => {
    const resultLeft = multiplyValuesLeft();
    const resultRight = multiplyValuesRight();
    const MVN = (mols * volumeGasto * resultRight) / (volumeSolução * resultLeft) * MassaMolecular * 1000
    setMassa(MVN)
  };

  const pureza = () => {
    const resultLeft = multiplyValuesLeft();
    const resultRight = multiplyValuesRight();
    const PVN = ((mols * volumeGasto * resultRight) / (volumeSolução * resultLeft) * MassaMolecular * 1000) * 100 / MassaImpura
    setPureza(PVN)
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

      <div>
        <label>Massa Molecular</label>
        <input type="number" value={MassaMolecular} onChange={handleChangeMassaMolecular}/>
      </div>

      <div>
        <label> Massa Impura </label>
        <input type="number" value={MassaImpura} onChange={handleChangeMassaImpura}/>
      </div>

          <button onClick={volumetriaNeutralizacao}>Mol/L</button>

          {volumetriaResultado !== null && (
            <div>
              Resultado final: {volumetriaResultado}
            </div>
          )}

          <button onClick={massa}>mg/L</button>

          {Massa !== null && (
            <div>
              Resultado final: {Massa}
            </div>
          )}

          <button onClick={pureza}>Pureza</button>

          {Pureza !== null && (
            <div>
              Resultado final: {Pureza}
            </div>
          )}
    </div>
  );
};

export default VolumetriaNeutralizacao;

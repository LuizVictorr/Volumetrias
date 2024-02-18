import React, { useState } from "react";

const Baskara = () => {
    const [A, setA] = useState('');
    const [B, setB] = useState('');
    const [C, setC] = useState('');
    const [Resultado, setResultado] = useState('');

    const a = (e) => {
        setA(parseFloat(e.target.value))
    }

    const b = (e) => {
        setB(parseFloat(e.target.value))
    }

    const c = (e) => {
        setC(parseFloat(e.target.value))
    }

    const resultado = () => {
        const x1 = ((-B) + Math.sqrt(Math.pow(B, 2) - (4 * A * C)))/(2 * A)
        const x2 = ((-B) - Math.sqrt(Math.pow(B, 2) - (4 * A * C)))/(2 * A)
        setResultado(`o resultado de x1 = ${x1} e o de x2 = ${x2}`)
    }

    return (
        <div>
            <div>
                <label>a:</label>
                <input type="number" value={A} onChange={a}/>
            </div>
            <div>
                <label>b:</label>
                <input type="number" value={B} onChange={b}/>
            </div>
            <div>
                <label>c:</label>
                <input type="number" value={C} onChange={c}/>
            </div>

            <button onClick={resultado}>Calcular</button>

            <p>{Resultado}</p>
        </div>
    )
}

export default Baskara;
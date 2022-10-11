import { useState } from 'react'
import './index.scss'

export default function Salario () {
    
    const[salario, setSalario] = useState(0)
    const[bonus, setBonus] = useState(0)
    const[desconto, setDesconto] = useState(0)
    const [vl, setVl] = useState(0)
    let valor=0

    function CalcularSalario() {

        valor = salario*(1+bonus/100)-desconto
        setVl(valor.toFixed(2))

    }

    return(
        <div>
            <label>Salario bruto</label>
            <input onChange={e=> setSalario(e.target.value)}/>
            <label>Bônus salarial</label>
            <input onChange={e=> setBonus(e.target.value)}/>
            <label>Descon salarial</label>
            <input onChange={e=> setDesconto(e.target.value)}/>
            <label>Salario líquido</label>
            <p>{vl}</p>
            <button onClick={CalcularSalario}>Calcaular</button>
        </div>
    )
}


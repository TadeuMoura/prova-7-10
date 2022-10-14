import { useState } from 'react'
import './index.scss'

export default function Ingresso() {

    const[qtdinteira, setQtdinteira] = useState(0)
    const[qtdmeia, setQtdmeia] = useState (0)
    const[nacional, setNacional] = useState(false)
    const[quarta, setQuarta] = useState (false)
    const[total, setTotal] = useState(0)

    function ValorIngresso () {
        let calculinho = 0

        if(nacional===true){
            calculinho = qtdinteira*5+qtdmeia*5
            setTotal(calculinho.toFixed(2))
        }

        else if(quarta===true){
            calculinho = qtdinteira*14.25+qtdmeia*14.25
            setTotal(calculinho.toFixed(2))
        }

        else
        calculinho = qtdinteira*28.50+qtdmeia*14.25
        setTotal(calculinho.toFixed(2))

    }

    return(
        <div>
            <label>Quantidade de Inteiras</label>
            <input onChange={e=> setQtdinteira (e.target.value)}/>
            <label>Quantidade de Meias</label>
            <input onChange={e=> setQtdmeia (e.target.value)}/>
            <label>Filme nacional?</label>
            <input type='checkbox'  onChange={e=> setNacional (e.target.checked)}/>
            <label>Hoje é quarta</label>
            <input type='checkbox' onChange={e=> setQuarta (e.target.checked)}/>
            <p>{total}</p>
            <button onClick={ValorIngresso}>CALCULAR</button>
        </div>
    )
}
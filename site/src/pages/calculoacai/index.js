import { useState } from "react"
import './index.css'

export default function CalcularAcai(){

  const[qtdpeq, setQtdpeq] = useState(0)
  const[qtdmed, setQtdmed] = useState(0)
  const[qtdgra, setQtdgra] = useState(0)
  const[desc, setDesc] = useState(0)
  var[total, setTotal] = useState(0)

  function Calcular (){
  let total1=(qtdpeq*13.50+qtdmed*15+qtdgra*17.50)*(1-(desc/100))
  setTotal(total1)
  }

  return(
    <div>
      <div>Açaí Pequeno<input type={'number'} value={qtdpeq} onChange={e=> setQtdpeq(e.target.value)}/></div>
      <div>Açaí Médio<input type={'number'} value={qtdmed} onChange={e=> setQtdmed(e.target.value)}/></div>
      <div>Açaí Grande<input type={'number'} value={qtdgra} onChange={e=> setQtdgra(e.target.value)}/></div>
      <div>Total do desconto<input type={'number'} value={desc} onChange={e=> setDesc(e.target.value)}/></div>
      <div><h1>Valor total</h1><p>{total}</p></div>
      <button onClick={Calcular}>Calcular</button>
    </div>
  )
}
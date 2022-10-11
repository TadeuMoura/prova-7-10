import { useState } from "react"
import './index.css'

export default function CalcularAcai(){

  const[qtdpeq, setQtdpeq] = useState(0)
  const[qtdmed, setQtdmed] = useState(0)
  const[qtdgra, setQtdgra] = useState(0)
  const[desc, setDesc] = useState(0)
  const[total, setTotal] = useState(0)

    function Calcular (){
    if(qtdpeq<0 || qtdmed<0 || qtdgra<0 || desc<0)
    alert("Evite o uso de valores negativos")
    
    else{
    let total1=(qtdpeq*13.50+qtdmed*15+qtdgra*17.50)*(1-(desc/100))
    setTotal(total1.toFixed(2))
    }}

    

  return(
    <div className="Principal-acai">
      <div className="Caixa-acai">
      <div className="label-input"><h2>Açaí Pequeno</h2><input className="input-acai" type={'number'} value={qtdpeq} onChange={e=> setQtdpeq(e.target.value)}/></div>
      <div className="label-input"><h2>Açaí Médio</h2><input className="input-acai" type={'number'} value={qtdmed} onChange={e=> setQtdmed(e.target.value)}/></div>
      <div className="label-input"><h2>Açaí Grande</h2><input className="input-acai" type={'number'} value={qtdgra} onChange={e=> setQtdgra(e.target.value)}/></div>
      <div className="label-input"><h2>Total do desconto</h2><input className="input-acai" type={'number'} value={desc} onChange={e=> setDesc(e.target.value)}/></div>
      <div className='button-e-valor'>
        <button className="calcular-acai" onClick={Calcular}>Calcular</button>
        <div className="valor-acai"><h1>Valor total:</h1><h1>{total}</h1></div>
      </div>
      </div>
    </div>
  )
}


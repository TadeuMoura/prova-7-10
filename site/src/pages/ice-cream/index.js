import { useState } from "react";
import './index.scss'


export default function Sorvete() {
    
    const[peso, setPeso] = useState(0);
    var[total, setTotal] = useState(0);
    let valor=0

    function CalculandoSorvete () {
        if(peso<=0)
        setTotal("Peso inválido")

        valor=(peso*0.035)
        setTotal(valor.toFixed(2))

        if(peso>=1000){
        valor=(peso*0.03)
        setTotal(valor.toFixed(2))
        }

    }

    return(
        <div className="Principal-sorvete">
            <div>
                <h1>Insira um peso</h1><input type={'number'} value={peso} onChange={e=> setPeso(e.target.value)}/>
                <h1>Total da Compra: <h1>{total}</h1></h1>
                <button onClick={CalculandoSorvete}>CALCULAR</button>
            </div>
        </div>
    )
}
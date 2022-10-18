import './index.scss'
import { useState } from "react";


export default function Quadradin() {

    const [altura, setAltura] = useState(0)
    const [largura, setLargura] = useState(0)
    const [resul, setResul] = useState([])
    let valor=[]
    
    function Contador () {
        for( let u=0; u < altura; u++){
        for(let i=0; i < largura; i++){
            valor.push("*   ")
        }
        valor.split("")
    }

    setResul(valor)


        
}


return(
    <div>
        <input placeholder='altura' onChange={e=> setAltura(e.target.value)}/>
        <input placeholder='largura' onChange={e=> setLargura(e.target.value)}/>
        <button onClick={Contador}>Conte</button>
        <div  className='diladin'>
            <p>{resul}</p>
        </div>
    </div>
)
}
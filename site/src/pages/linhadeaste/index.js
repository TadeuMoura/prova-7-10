import './index.scss'
import { useState } from "react";


export default function DeAste() {

    const [ate, setAte] = useState(0)
    const [resul, setResul] = useState([])
    let valor=[]
    
    function Contador () {
        
        for(let i=0; i<ate; i++){
            valor.push("* ")
        }

        setResul(valor)

        
}


return(
    <div>
        <input placeholder='fim' onChange={e=> setAte(e.target.value)}/>
        <button onClick={Contador}>Conte</button>
        <div  className='diladin'>
            <p>{resul}</p>
        </div>
    </div>
)
}
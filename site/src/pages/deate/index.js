import './index.scss'
import { useState } from "react";


export default function DeAte() {

    const [de, setDe] = useState(0)
    const [ate, setAte] = useState(0)
    const [resul, setResul] = useState([])
    let valor=[]
    
    function Contador () {
        
        for(let i=de; i<=ate; i++){
            valor.push(<p className='looonglooooooooooong'>{i}</p>)
        }

        setResul(valor)

        
}


return(
    <div>
        <input placeholder='inicio' onChange={e=> setDe(e.target.value)}/>
        <input placeholder='fim' onChange={e=> setAte(e.target.value)}/>
        <button onClick={Contador}>Conte</button>
        <p>{resul}</p>
    </div>
)
}
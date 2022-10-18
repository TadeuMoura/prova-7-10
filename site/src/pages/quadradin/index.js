import './index.scss'
import { useState } from "react";


export default function Quadradin() {

    const [altura, setAltura] = useState(0)
    const [largura, setLargura] = useState(0)
    const [resul, setResul] = useState([])
    
    const [resul1, setResul1] = useState([])
    const [resul2, setResul2] = useState([])
    const [resul3, setResul3] = useState([])
    const [resul4, setResul4] = useState([])
    
    let valor=[]
    let dor = []
    let bro=[]
    let calor=[]
    let lol=[]
    
    function Contador () {
        for( let u=0; u < altura; u++){
        
        for(let i=0; i < largura; i++){
            valor.push("* ")
            dor.push("■ ")
            calor.push("● ")
            bro.push(<img className="foto-do-carinha-que-moro-logo-ali" src='/robert.png' alt='Robert'/>)
            lol.push(<img className="foto-do-carinha-que-moro-logo-ali" src='/tadeuhmmmmmmmmmmmm.png' alt='Robert'/>)
        }

    valor.push(<br/>)
    dor.push(<br/>)
    bro.push(<br/>)
    calor.push(<br/>)
    lol.push(<br/>)
    }

    setResul(valor)
    setResul1(dor)
    setResul2(bro)
    setResul3(calor)
    setResul4(lol)
}


return(
    <div>
        <input placeholder='altura' onChange={e=> setAltura(e.target.value)}/>
        <input placeholder='largura' onChange={e=> setLargura(e.target.value)}/>
        <button onClick={Contador}>Conte</button>
        <div  className='diladin'>
            <p>{resul}</p>
            <p>{resul1}</p>
            <p>{resul2}</p>
            <p>{resul3}</p>
            <p>{resul4}</p>
        </div>
    </div>
)
}
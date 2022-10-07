import { useState } from 'react';
import './index.css'

export default function Signo () {

    const [dia, setDia] = useState(0)
    const [mes, setMes] = useState(0)
    const [resul, setResul] = useState('false')

    function BuscarSigno () {
        let msg ='false'

        if((dia>=23 && dia<=30 && mes==='setembro') || 
           (dia>=1 && dia<=22 && mes==='outubro')){
            msg='true'
            setResul=msg
        }

        else
        msg='false'
        setResul=msg

    }

    return(
        <div>
            <input type={'text'} onChange={e=> setDia (e.target.value)}/>
            <input value={mes} onChange={e=>setMes (e.target.value)}/>
            <button onClick={BuscarSigno}>BUSCAR</button>
            <p>{msg}</p>
        </div>
    )
}
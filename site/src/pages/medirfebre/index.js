import { useState } from 'react'
import './index.scss'

export default function Febre () {

    const [temperatura, setTemperatura] = useState(0)
    const [resposta, setResposta] = useState("")
    let msg=""

    function MedirTemperatura () {
        if(temperatura<30){
        msg="Acho que você não está vivo"
        setResposta(msg)
        }

        else if (temperatura>=30 && temperatura <36){
        msg="Você está hipotérmico"
        setResposta(msg)
        }

        else if (temperatura>=36 && temperatura<37.6){
            msg="Você está normal"
            setResposta(msg)
        }

        else if (temperatura>=37.6 && temperatura<39.6){
            msg="Você está com febre"
            setResposta(msg)
        }

        else if (temperatura>=39.6 && temperatura<41){
            msg="Você está com febre alta"
            setResposta(msg)
        }

        else if (temperatura>=41){
            msg="Você está hipertérmico"
            setResposta(msg)
            }


    }
    return(
        <div>
            <h1>Quanto a sua temperatura define seu estado? Digite-a aqui:</h1>
            <input onChange={evento=> setTemperatura(evento.target.value)}/>
            <button onClick={MedirTemperatura}>MEDIR</button>
            <p>{resposta}</p>
        </div>
    )
}
import { useState } from 'react';
import './index.css'

export default function Signo () {

    const [dia, setDia] = useState('')
    const [mes, setMes] = useState('')
    var [resul, setResul] = useState('Você é de libra? Descubra agora mesmo digitando sua data de nascimento.')

    function BuscarSigno () {
        

        if((dia>=23 && dia<=30 && (mes==='setembro')) || 
           (dia>=1 && dia<=22 && (mes==='outubro'))){
            setResul('PARABÉÉÉÉÉNS, VOCÊ É UM LIBRIANO :D')
        }

        else if(dia==="" || mes===""){
            setResul("Por favor, digites uma data")
        }

        else{
        setResul('Pooooooooooooxa que peninha,você não é de libra, na próxima você consegue ;D')
        }

    }

    return(
        <div>
            <input type={'text'} onChange={e=> setDia (e.target.value)}/>
            <input value={mes} onChange={e=>setMes (e.target.value)}/>
            <button onClick={BuscarSigno}>BUSCAR</button>
            <p>{resul}</p>
        </div>
    )
}
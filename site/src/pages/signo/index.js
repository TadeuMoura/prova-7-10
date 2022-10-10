import { useState } from 'react';
import './index.scss'

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
        <div className='principal-signo'>
            <div className='digitar-signo'>
                <div className='data'>
                    <label>Dia</label>
                    <input className='input-signo' type={'text'} onChange={e=> setDia (e.target.value)}/>
                </div>
                <div className='data'>
                    <label>Mês</label>
                    <input value={mes} onChange={e=>setMes (e.target.value)}/>
                </div>
                <button onClick={BuscarSigno}>BUSCAR</button>
                <p>{resul}</p>
                
            </div>
        </div>
    )
}
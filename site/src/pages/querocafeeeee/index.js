import { useState } from 'react'
import './index.scss'

export default function Cafe() {

    const [estudantes, setEstudantes] =useState(0)
    const [litros, setLitros] =useState(0)
    const [capacidade, setCapacidade] =useState(0)
    const [resul ,setResul] =useState(0)

    
    

    function CalcularCafe() {
        let cadatoma = estudantes*litros/1000
        let qntcafe = 0
        let cafe=0

        while(cafe<=4){
        qntcafe=capacidade 
        cafe=cafe+2
        }

    setResul(qntcafe)
    console.log(qntcafe)
    }

    

    return(
        <div className='div-principal-cafe'>
            <label>Quantos estudantes?</label>
            <input onChange={e=> setEstudantes(e.target.value)}/>
            <label>Qual a capacidade do bule?</label>
            <input onChange={e=> setCapacidade(e.target.value)}/>
            <label>Quanto cada um bebe?</label>
            <input onChange={e=> setLitros(e.target.value)}/>
            <button onClick={CalcularCafe}>CALCULAR CAFÉ</button>
            <h1>{resul}</h1>
        </div>
    )
}
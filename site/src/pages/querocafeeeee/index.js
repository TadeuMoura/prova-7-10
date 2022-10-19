import { useState } from 'react'
import './index.scss'

export default function Cafe() {

    const [estudantes, setEstudantes] =useState(0)
    const [litros, setLitros] =useState(0)
    const [capacidade, setCapacidade] =useState(0)
    const [resul ,setResul] =useState(0)

    function CalcularCafe() {

         let aluninhos = (estudantes*litros)/1000
        
         for (let cafe=capacidade; cafe<=aluninhos; cafe+capacidade){
            let cafecafe = cafe
       

        setResul(cafecafe) }
        
    }


    return(
        <div className='div-principal-cafe'>
            <label>Quantos estudantes?</label>
            <input onChange={e=> setEstudantes(e.target.value)}/>
            <label>Quanto cada um bebe?</label>
            <input onChange={e=> setLitros(e.target.value)}/>
            <label>Quanto de capacidade?</label>
            <input onChange={e=> setCapacidade(e.target.value)}/>
            <button onClick={CalcularCafe}>CALCULAR CAFÉ</button>
            <h1>{resul}</h1>
        </div>
    )
}
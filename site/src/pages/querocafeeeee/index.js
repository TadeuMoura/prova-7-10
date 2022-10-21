import { useState } from 'react'
import './index.scss'

export default function Cafe() {

    const [estudantes, setEstudantes] =useState(0)
    const [litros, setLitros] =useState(0)
    const [capacidade, setCapacidade] =useState(0)
    const [resul ,setResul] =useState(0)

    
    

    function CalcularCafe() {

        let aluninhos = (estudantes * litros)/1000;


        if (aluninhos <= capacidade)
        setResul (capacidade)

        else {
           for (let cafe = capacidade; cafe <= aluninhos; cafe +=capacidade) {
               let trasformador = cafe;
               let reposta = trasformador + capacidade ;
               let reposta2 = trasformador + (capacidade -1)
                  setResul(reposta)
                  if (capacidade === 1){
                   setResul(reposta2)
                  }
        }

        }


   }
    

    return(
        <div className='div-principal-cafe'>
            <label>Quantos estudantes?</label>
            <input type={"number"} onChange={e=> setEstudantes(Number(e.target.value))}/>
            <label>Qual a capacidade do bule?</label>
            <input type={"number"} onChange={e=> setCapacidade(Number(e.target.value))}/>
            <label>Quanto cada um bebe?</label>
            <input type={"number"} onChange={e=> setLitros(Number(e.target.value))}/>
            <button onClick={CalcularCafe}>CALCULAR CAFÉ</button>
            <h1>{resul}</h1>
        </div>
    )
}
//import { useState } from "react";

import { useState, useEffect } from "react"

  //export default function Garage() {
    // const cars = ['a','b','c','d','e'];
    //const [add,setAdd] = useState(JSON.parse(localStorage.getItem('yourTasks')) || []);
    //const newTask = (name) => {
        //setTasks([...tasks, { id: Math.random(), nameTask: name, done: false }]);
     // }
      
    //function Car(props) {
    //return <li>I am a { props.brand } </li>;
//}
  

    //return (
    //   <>
    //       <h1>Who lives in my garage?</h1>
    //       <ul>
    //       {cars.map((car) => <div><Car brand={car} /><input type="text" onChange={e=>setAdd(e.target.value)}/>{add}</div>)} 
    //     </ul>
      //</>
    //);
  //}

  export default function MediaAluno() {
    const [aluno,setAluno] = useState(0)
    

    function contarAlunos () {
        for (let i = 0; i < aluno; i++ ){
            qtdalunos.push(i+1)
            console.log(qtdalunos)
        }
    }

   let qtdalunos = []
    

    return(
        <div>
            <input type='text' onChange={e=>setAluno(e.target.value)}/>
            
            <button onClick={contarAlunos}>  teste</button>
            {qtdalunos.map((alunos) => <h1>{alunos}</h1>)}
        </div>
    )
  }
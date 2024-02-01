import {data} from "./data/data" //importando o array que fizemos

import { useState } from 'react'

import ImcCalc from './components/ImcCalc'
import Imctable from "./components/Imctable"


import './App.css'


function App() {
  const calcImc = (e, height, weight) => {
    e.preventDefault();

    

    if(!weight || !height) return;

    const weightFloat = +weight.replace(",",".") //trocando as virgulas pelos pontos
    const heightFloat = +height.replace(",",".")

    const imcResult = (weightFloat / (heightFloat * heightFloat)).toFixed(1);

    setImc(imcResult)

    //para identificar a classe deles
    data.forEach((item) => {
      if(imcResult >= item.min && imcResult <= item.max) {
        setInfo(item.info)
        setInfoClass(item.infoClass)
      }
    });

    if(!info) return;

  }

  const resetCalc =(e) => {
    e.preventDefault();

    setImc("")
    setInfo("")
    setInfoClass("")
  }

  const [imc, setImc] = useState("")
  const [info, setInfo] = useState("")
  const [infoClass, setInfoClass] = useState("")

  return (
    <div className="container">
      {!imc ? ( //se não houver nd preenchido mostra a calculador se não mostra os resultados
        <ImcCalc calcImc={calcImc}/>
      ) : (
        <Imctable 
        data={data} 
        imc={imc} 
        info={info} 
        infoClass={infoClass}
        resetCalc={resetCalc}
        /*passando todo o arquivo data.js via props pro imctable*//>
      )}
    </div>
  )
}

export default App

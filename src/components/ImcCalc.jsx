import { useState } from "react"

import Button from "./Button"

import "./ImcCalc.css"

const ImcCalc = ({calcImc}) => {

    const [height, setHeight] = useState("")
    const [weight, setWeight] = useState("")

    const clearForm = (e) => {
        e.prevenrDefault();//isso é pra não executar o submit do formulário
        setWeight("")
        setHeight("")
    }

    const validDigits = (text) => {
        return text.replace(/[^0-9,]/g, "")//estudar esta tag para filtragens de forms
    }

    const handleHeightChange = (e) => { //filtragem para receber só numeros e virgulas
        const updatedValue = validDigits(e.target.value)
        setHeight(updatedValue)
    }

    const handleWeightChange = (e) => { //filtragem para receber só numeros e virgulas
        const updatedValue = validDigits(e.target.value)
        setWeight(updatedValue)
    }

  return (
    <div id="calc-container">
        <h2>Calculadora de IMC</h2>
        <form id="imc-form">
            <div className="form-inputs">
                <div className="form-control">
                    <label htmlFor="height">Height:</label>
                    <input 
                    type="text" 
                    name="height" 
                    id="height" 
                    placeholder="Exemplo 1,75"
                    onChange={(e) => handleHeightChange(e)}
                    value={height}
                    />
                </div>

                <div className="form-control">
                    <label htmlFor="weight">Weight:</label>
                    <input 
                    type="text" 
                    name="weight" 
                    id="weight" 
                    placeholder="Exemplo 70.5"
                    onChange={(e) => handleWeightChange(e)}
                    value={weight}
                    />
                </div>
            </div>

            <div className="action-control">
                <Button id="calc-btn" text="Calculate" action={(e) => calcImc(e, height, weight)}/>
                <Button action={clearForm} id="clear-btn" text="Clear"/>
                
            </div>
        </form>
    </div>

  )
}

export default ImcCalc
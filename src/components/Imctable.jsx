import React from 'react'
import Button from './Button'
import "./Imctable.css"

const Imctable = ({data, imc, info, infoClass, resetCalc}) => {
  return (
    <div id="result-container">
        <p id="imc-number">Your Imc: <span className={infoClass}>{imc}</span></p>
        <p id="imc-info">Current situation: <span className={infoClass}>{info}</span></p>
        <h3>Check classifications</h3>
        <div id="imc-table">
            <div className="table-header">
                <h4>IMC</h4>
                <h4>Classification</h4>
                <h4>Obesity</h4>
            </div>
            {data.map((item) => (
                <div className="table-data" key={item.info}>
                    <p>{item.classification}</p>
                    <p>{item.info}</p>
                    <p>{item.obesity}</p>
                </div>
                
            ))}
        </div>
        <Button action={resetCalc} id="back-btn" text="Back"/>
    </div>
  )
}

export default Imctable
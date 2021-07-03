import React, { useState } from 'react';
import inputStyles from "./input.module.css";

const InputField = (props) => {
    return (
        <div className={inputStyles.container}>
                <p className={inputStyles.label}>{props.displayName}</p>
                <input type="text" id={props.idName} className={inputStyles.input} onChange={props.handleInputChange} />
        </div>
    )
}

export default InputField;
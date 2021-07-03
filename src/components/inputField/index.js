import React, { useState } from 'react';
import inputStyles from "./input.module.css";

// Nothing is stored here. Once again, we're using props to pass in functions that will change our currValue in Splash
const InputField = (props) => {
    return (
        <div className={inputStyles.container}>
                <p className={inputStyles.label}>{props.displayName}</p>
                <input type="text" id={props.idName} className={inputStyles.input} onChange={props.handleInputChange} />
        </div>
    )
}

export default InputField;
import React, { useState } from 'react';

const InputField = (props) => {
    return (
        <div>
            <label>
                {props.displayName}
                <input type="text" id={props.idName} onChange={props.handleInputChange} />
            </label>
        </div>
    )
}

export default InputField;
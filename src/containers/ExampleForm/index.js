import React, { useState } from 'react';
import InputField from '../../components/inputField';
import formStyles from "./form.module.css";

const ExampleForm = (props) => {
    // const [currForm, setCurrForm] = useState({ fName: "", lName: "", email: ""});

    const handleInputChange = (e) => {
        //alert(e.target.id); returns id of field changed 
        //alert(e.target.value); returns current value
        let { id, value } = e.target;

        props.setCurrValues(prevState => ({
            ...prevState,
            [id]: value
        }));
    }

    

    return(
        <div className={formStyles.container}>
            <div className={formStyles.form}>
                <InputField idName="fName" displayName="First Name:" handleInputChange={handleInputChange} />
                <InputField idName="lName" displayName="Last Name:" handleInputChange={handleInputChange} />
                <InputField idName="somethingElse" displayName="Something Else Probably:" handleInputChange={handleInputChange} />
            </div>
            <button className={formStyles.btn} onClick={props.handleSubmit}>Submit</button>
        </div>
    )
}

export default ExampleForm;
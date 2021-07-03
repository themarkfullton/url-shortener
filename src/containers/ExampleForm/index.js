import React from 'react';
import InputField from '../../components/inputField';
import formStyles from "./form.module.css";


// You'll notice that ExampleForm exclusively uses props.
// Since we passed in the setCurrValues, we're able to set the values of currValue from here.
const ExampleForm = (props) => {
    // This function is actually passed into the InputField component. It runs every time the value of the InputField is changed
    // You'll notice we're taking the id and value. This is because the id of the InputField component is set to the key of 
    // currValue. This way we don't have to make a handleInputChange for each InputField.
    const handleInputChange = (e) => {
        let { id, value } = e.target;

        // We use the id of the InputField to determine the key we want to change the value of.
        props.setCurrValues(prevState => ({
            ...prevState,
            [id]: value
        }));
    }

    
    // You'll notice that (despite the name), we're not actually using a form tag. This is because the onClick will call handleSubmit,
    //  which uses the currValue which is already in the Splash component.
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
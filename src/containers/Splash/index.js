import React, {useState} from 'react';
import ExampleForm from '../ExampleForm';
import splashStyle from "./splash.module.css";

const Splash = () => {
    const [currValues, setCurrValues] = useState({ fName: "", lName: "", somethingElse: ""});
    const [formSubmitted, setFormSubmitted] = useState(false);

    const handleSubmit = () => {
        setFormSubmitted(true);
    }

    return formSubmitted ? (
        <div>
            <h1>Values Submitted</h1>
            <div className={splashStyle.container}>
            <h3>{Object.entries(currValues).map((x, idx) => {
                return <p key={idx}><span className={splashStyle.bold}>{x[0]}:</span> {x[1]}</p>
            })}</h3>
            </div>
        </div>
    ) : (
        <div>
            <h1>Example Form</h1>
            <ExampleForm setCurrValues={setCurrValues} handleSubmit={handleSubmit} />
        </div>
    )
}

export default Splash;
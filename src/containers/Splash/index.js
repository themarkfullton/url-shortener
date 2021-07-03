import React, {useState} from 'react';
import ExampleForm from '../ExampleForm';

const Splash = () => {
    const [currValues, setCurrValues] = useState({ fName: "", lName: "", email: ""});
    const [formSubmitted, setFormSubmitted] = useState(false);

    const handleSubmit = () => {
        setFormSubmitted(true);
    }

    return formSubmitted ? (
        <div>
            <h1>Values Submitted</h1>
            <h3>{Object.entries(currValues).map((x, idx) => {
                return <p key={idx}>{x[0]}: {x[1]}</p>
            })}</h3>
        </div>
    ) : (
        <div>
            <h1>Splash Page</h1>
            <ExampleForm setCurrValues={setCurrValues} handleSubmit={handleSubmit} />
        </div>
    )
}

export default Splash;
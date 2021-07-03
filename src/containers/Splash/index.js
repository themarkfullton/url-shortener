import React, {useState} from 'react';
import ExampleForm from '../ExampleForm';
import splashStyle from "./splash.module.css";

// Note: The form values are stored here via hook.
//       They're stored in an object / dictionary and are updated via an onChange
//       function declared in the Example Form component. You'll notice that we're
//       passing our setCurrValues into the Form as a prop for the Form to use.

//       You'll also notice we're storing whether the form has been submitted or not.
//       And we're using the ternary operator (?) to return a different display depending
//       on whether the form has been submitted.

//       The ExampleForm toggles the handleSubmit function which sets formSubmitted to true.
//       You can also set currValues to update in a similar way.

const Splash = () => {
    const [currValues, setCurrValues] = useState({ fName: "", lName: "", somethingElse: ""});
    const [formSubmitted, setFormSubmitted] = useState(false);

    const handleSubmit = () => {
        setFormSubmitted(true);
    }

    // Remember, the ternary operator will return the option to the left of the colon if formSubmitted is true
    //   and will return the option to the right otherwise. 
    return formSubmitted ? (
        <div>
            <h1>Values Submitted</h1>
            <div className={splashStyle.container}>
            <h3>{Object.entries(currValues).map(([key, value], idx) => {
                return <p key={idx}><span className={splashStyle.bold}>{key}:</span> {value}</p>
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
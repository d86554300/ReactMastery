import React, {useState} from "react";

const Form = () => {
    const [userName, setUserName] = useState('');
    // not visible by default.
    const [isVibisle, setIsVisible] = useState(false);
    const [buttonValue, setButtonValue] = useState('Show Form');

    const handleUserNameChange = (event) => {
        const inputValue = event.target.value;
        setUserName(inputValue);
    };

    const toggleVisibility = (event) => {
        setIsVisible(!isVibisle);
        setButtonValue(isVibisle ? 'Show Form' : 'Hide Form');
    };

    return (
        <div>
            <p> FORM COMPONENT </p>
            <button onClick={toggleVisibility}>{buttonValue}</button>
            {
                isVibisle &&
                <div>
                    <input type="text" value={userName} onChange={handleUserNameChange} placeholder="Enter Your Name" />
                    {userName && <p>Hello, {userName}!</p>}
                </div>
            }
        </div>
    )
};

export default Form;
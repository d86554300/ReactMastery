import React, {useRef} from "react";

const FormEmail = () => {
    const emailRef = useRef(null);
    const passwordRef = useRef(null);
    
    const submitForm = (event) => {
        emailRef.current.value = '';
        passwordRef.current.value = '';
    };

    return (
        <div>
            <p> EMAIL FORM COMPONENT </p>
            <form onSubmit={submitForm}>
                <input type="email" 
                        ref={emailRef}
                        placeholder="Enter Your Email" />
                
                <input type="password"
                        ref={passwordRef}
                        placeholder="Enter Your Passwords"/>
                <button>Submit</button>
            </form>
        </div>
        )
};

export default FormEmail;



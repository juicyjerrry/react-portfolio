import React, { useState } from 'react';

const styles = {
    button: {
        color: "white",
    }
};

function Contact() {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    const handleInputChange = (e) => {
        const { name, value } = e.target;

        return name === 'firstName' ? setFirstName(value) : setLastName(value);
        
    };

    const handleFormSubmit = (e) => {
        e.preventDefault();

        alert(`Hello ${firstName} ${lastName}`);
        setFirstName('');
        setLastName('');
    };

    const onBlur = (e) => {
        e.preventDefault();
        const { name, value } = e.target;
        if (value.length < 1 ) {
            alert('All fields are required')
        }else{
            if(name === 'firstName'){
                setFirstName(value)
            }else if(name === 'lastName'){
                setLastName(value)
            }else if(name === 'email'){
                setEmail(value)
            }else{
                setMessage(value)
            }
        }
    }

    const ValidateEmail = (e) => {
        const { name, value } = e.target;
        var validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
      
        if (!value.match(validRegex)) {
            alert("Invalid email address!")
        
        } 
      
      }

    return (
        <div>
            <p>
                Hello {firstName} {lastName}
            </p>
            <form className="form">
                <input
                    name="firstName"
                    defaultValue={firstName}
                    onBlur={onBlur}
                    type="name"
                    placeholder="First Name"
                />
                 <input
    
                    name="lastName"
                    defaultValue={''}

                    onBlur={onBlur}
                    type="text"
                    placeholder="Last Name"
                />
                <input
              
                    name="email"
                    defaultValue={''}

                    onBlur={ValidateEmail}
                    type="text"
                    placeholder="email"
                />
                <input
                   
                    name="message"
                    defaultValue={''}

                    onBlur={onBlur}
                    type="text"
                    placeholder="message"
                /> 
                <button style={styles.button} type="button" onClick={handleFormSubmit}>
                    Submit
                </button>
            </form>
        </div>
    );
}

export default Contact;
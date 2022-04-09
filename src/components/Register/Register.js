import React from 'react';

const Register = () => {
    return (
        <div>
            <h3>Register Now</h3>
            <input type="text" placeholder='Your Name' />
            <br />
            <input type="email" placeholder='Your Email' />
            <br />
            <input type="password" placeholder='Password' />
            <br />
            <input type="submit" value="Register" />
        </div>
    );
};

export default Register;
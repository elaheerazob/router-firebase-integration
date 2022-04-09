import { getAuth } from "firebase/auth";
import React from "react";
import app from "../../firebase.init";
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';

const auth = getAuth(app);
const Login = () => {
    const [signInWithGoogle,user] = useSignInWithGoogle(auth);
  return (
    <div>
      <h3>Register Now</h3>
      <div>
          <button onClick={() => signInWithGoogle()}>Google signin</button>
      </div>
      <input type="email" placeholder="Your Email" />
      <br />
      <input type="password" placeholder="Password" />
      <br />
      <input type="submit" value="Login" />
    </div>
  );
};

export default Login;

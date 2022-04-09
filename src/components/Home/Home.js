import { getAuth } from 'firebase/auth';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import app from '../../firebase.init';
const auth =getAuth(app);
const Home = () => {
    const [user] =useAuthState(auth);
    return (
        <div>
            <h1>Home</h1>
            <p>Curren User Name: {user ? user.displayName : 'NoBody'}</p>
        </div>
    );
};

export default Home;
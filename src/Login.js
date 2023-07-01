import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import firebase from './firebase';

const Login = () => {
  const navigate = useNavigate();

  const handleGoogleSignIn = () => {
    const provider = new firebase.auth.GoogleAuthProvider();
    firebase.auth().signInWithRedirect(provider);
  };

  useEffect(() => {
    // Check if the page was redirected from the Google sign-in
    firebase.auth().getRedirectResult().then((result) => {
      if (result.user) {
        // User is signed in
        console.log(result.user);
        navigate('/home');
      }
    }).catch((error) => {
      // Handle error
      console.error(error);
    });
  }, [navigate]);

  return (
    <div className="login-container">
      <h1 className="login-title">Login Screen for Emergency Services</h1>
      <img
        className="login-image"
        src="https://cdn-icons-png.flaticon.com/512/5509/5509636.png"
        alt="Emergency Services"
      />
      <button className="login-button" onClick={handleGoogleSignIn}>
        Sign in with Google
      </button>
    </div>
  );
};

export default Login;

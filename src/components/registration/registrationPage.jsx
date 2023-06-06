import * as firebase from 'firebase/app'
import  * as database from 'firebase/database';
import { useState } from 'react';

// Initialize Firebase with your configuration
const firebaseConfig = {
  // Your Firebase configuration details
};

firebase.initializeApp(firebaseConfig);
//const database = firebase.database();

const RegistrationPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleRegistration = (e) => {
    e.preventDefault();

    // Register the user in the database
    database.ref('users').push({
      email: email,
      password: password,
    });

    // Clear the form after registration
    setEmail('');
    setPassword('');
  };

  return (
    <div>
      <h2>Registration Page</h2>
      <form onSubmit={handleRegistration}>
        <label>Email:</label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <br />
        <label>Password:</label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <br />
        <button type="submit">Register</button>
      </form>
    </div>
  );
};

export default RegistrationPage;

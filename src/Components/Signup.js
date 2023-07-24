import React, { useState } from 'react';
import { Button, TextField } from '@mui/material';
const Signup = () => {
    // Define state variables for the form fields
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
  
    // Handle form submission
    const handleSubmit = (e) => {
      e.preventDefault();
  
      // Perform signup logic or API call here
      console.log('Signup form submitted');
      console.log('Name:', name);
      console.log('Email:', email);
      console.log('Password:', password);
      
      // Reset form fields
      setName('');
      setEmail('');
      setPassword('');
    };
  
    return (
      <div>
        <h2>Signup</h2>
        <form onSubmit={handleSubmit}>
          <TextField
            label="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
          <br />
          <TextField
            label="Email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <br />
          <TextField
            label="Password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <br />
          <Button type="submit" variant="contained" color="primary">
            Signup
          </Button>
        </form>
      </div>
    );
  };
  
  export default Signup;
  
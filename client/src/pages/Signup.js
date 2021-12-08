import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useMutation } from '@apollo/client';
import Auth from '../utils/auth';
import { ADD_USER } from '../utils/mutations';
import './signup.css';
import { Button, Card } from '@material-ui/core';
import TextField from '@material-ui/core/TextField';
import { FormGroup } from '@material-ui/core';

function Signup(props) {
  const [formState, setFormState] = useState({ email: '', password: '' });
  const [addUser] = useMutation(ADD_USER);

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    const mutationResponse = await addUser({
      variables: {
        email: formState.email,
        password: formState.password,
        firstName: formState.firstName,
        lastName: formState.lastName,
        street: formState.street,
        city: formState.city,
        state: formState.state,
        zip: formState.zip
      },
    });
    const token = mutationResponse.data.addUser.token;
    Auth.login(token);
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormState({
      ...formState,
      [name]: value,
    });
  };

  return (
    <div className="container my-1 signupBg">
      <Link to="/login">Go to Login</Link>

      <Card className="cards">
      <h2>Signup</h2>

      <form onSubmit={handleFormSubmit}>
        <div className="flex-row space-between my-2">
          <label htmlFor="firstName">First Name:</label>
          <TextField
            placeholder="First"
            name="firstName"
            type="firstName"
            id="firstName"
            onChange={handleChange}
          />
        </div>
        <div className="flex-row space-between my-2">
          <label htmlFor="lastName">Last Name:</label>
          <TextField
            placeholder="Last"
            name="lastName"
            type="lastName"
            id="lastName"
            onChange={handleChange}
          />
        </div>
        <div className="flex-row space-between my-2">
          <label htmlFor="email">Email:</label>
          <TextField
            placeholder="youremail@test.com"
            name="email"
            type="email"
            id="email"
            onChange={handleChange}
          />
        </div>
        <div className="flex-row space-between my-2">
          <label htmlFor="pwd">Password:</label>
          <TextField
            placeholder="******"
            name="password"
            type="password"
            id="pwd"
            onChange={handleChange}
          />
        </div>
        <div className="flex-row space-between my-2">
          <label htmlFor="address">Address:</label>
          <input
            name={"address"}
            type={"address"}
            placeholder={"Address"}
            onChange={handleChange}
          />
          <input
            name={"city"}
            type={"city"}
            placeholder={"City"}
            onChange={handleChange}
          />
          <input
            name={"state"}
            type={"state"}
            placeholder={"State"}
            onChange={handleChange}
          />
          <input
            name={"zip"}
            type={"zip"}
            placeholder={"zip"}
            onChange={handleChange}
          />
        </div>

        <div className="flex-row flex-end">
          <button type="submit">Submit</button>
          
        </div>
      </form>
      <Link to='/signupSeller'>
      <button style= {{marginTop: '5px'}}type="button">Create Seller Account</button>
      </Link>
      </Card>
    </div>
  );
}

export default Signup;

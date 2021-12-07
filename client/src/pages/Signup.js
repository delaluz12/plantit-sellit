import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useMutation } from '@apollo/client';
import Auth from '../utils/auth';
import { ADD_USER } from '../utils/mutations';
import './signup.css';
import { Button } from '@material-ui/core';
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
    <div className="container my-1 signupStage signupBg">
      <Link to="/login">Go to Login</Link>

      <div className="row">
      <div className="col__2">
        <div className="contact__box">
          <div className="contact__meta">

      {/* <Card className="cards"> */}
      <div className="signupTitle">
      <h1 className="signup__text">SIGN UP</h1>
      </div>

      <form onSubmit={handleFormSubmit}>
        <div className="flex-row space-between my-2">
          <label htmlFor="firstName">First Name:</label>
          <TextField
          size="small"
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
          size="small"
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
          size="small"
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
          size="small"
            placeholder="******"
            name="password"
            type="password"
            id="pwd"
            onChange={handleChange}
          />
        </div>
        <div className="flex-column my-2">
          <label htmlFor="address">Address:</label>
          {/* <div className="mx-2"> */}
          <TextField
          size="small"
          fullWidth="true"
            name={"address"}
            type={"address"}
            placeholder={"Address"}
            onChange={handleChange}
          />
          {/* </div> */}
          <div className="mx-1">
          <TextField
            name={"city"}
            type={"city"}
            placeholder={"City"}
            onChange={handleChange}
          />
           </div>
          <div className="mx-1">
          <TextField
            name={"state"}
            type={"state"}
            placeholder={"State"}
            onChange={handleChange}
          />
           </div>
          <div className="mx-1">
          <TextField
            name={"zip"}
            type={"zip"}
            placeholder={"zip"}
            onChange={handleChange}
          />
          </div>
        </div>

        <div className="flex-row signupBtn">
          <Button type="submit">Submit</Button>
        </div>
      </form>
      {/* </Card> */}
      </div>
      </div>
      </div>
      </div>
    </div>
  );
}

export default Signup;

import React, { useState } from 'react';
import { useMutation } from '@apollo/client';
import { Link } from 'react-router-dom';
import { LOGIN } from '../utils/mutations';
import Auth from '../utils/auth';
import './login.css';
import { Button, Card, CardContent, Typography } from '@material-ui/core';
import { TextField } from '@material-ui/core';

function Login(props) {
  const [formState, setFormState] = useState({ email: '', password: '' });
  const [login, { error }] = useMutation(LOGIN);

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    try {
      const mutationResponse = await login({
        variables: { email: formState.email, password: formState.password },
      });
      const token = mutationResponse.data.login.token;
      Auth.login(token);
    } catch (e) {
      console.log(e);
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormState({
      ...formState,
      [name]: value,
    });
  };

  return (
    <div className="container loginStage loginBg">
      <div className="row">
      <Link to="/signup">Go to Signup</Link>
      <div className="col__2">
        <div className="contact__box">
          <div className="contact__meta">

      <Card className="cards">
      <div className="loginTitle">
      <h1 className="login__text">Login</h1>
      </div>
     
        <CardContent>
      <form onSubmit={handleFormSubmit}>
        <div className="flex-row space-between my-2">
          <label htmlFor="email">Email address:</label>
          <TextField
            placeholder="email@test.com"
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
        {error ? (
          <div>
            <p className="error-text">The provided credentials are incorrect</p>
          </div>
        ) : null}
        <div className="flex-row loginBtn">
          <Button type="submit">Submit</Button>
        </div>
      </form>
      </CardContent>
      </Card>

      </div>
      </div>
      </div>
      </div>
    </div>
  );
}

export default Login;

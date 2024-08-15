// src/components/Login.jsx

import './Login.css'; // Arquivo de estilo para a página de login
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState('');
  const [pass, setPass] = useState('');
  const [error, setError] = useState('');
  const [msg, setMsg] = useState('');

  const handleInputChange = (e, type) => {
    switch (type) {
      case 'user':
        setError('');
        setUser(e.target.value);
        break;
      case 'pass':
        setError('');
        setPass(e.target.value);
        break;
      default:
        break;
    }
  };

  const loginSubmit = () => {
    if (user !== '' && pass !== '') {
      const url = 'http://localhost/devtest/reactjs/login.php';
      const headers = {
        Accept: 'application/json',
        'Content-type': 'application/json',
      };
      const data = {
        user: user,
        pass: pass,
      };
      fetch(url, {
        method: 'POST',
        headers: headers,
        body: JSON.stringify(data),
      })
        .then((response) => response.json())
        .then((response) => {
          if (
            response[0].result === 'Invalid username!' ||
            response[0].result === 'Invalid password!'
          ) {
            setError(response[0].result);
          } else {
            setMsg(response[0].result);
            setTimeout(() => {
              localStorage.setItem('login', 'true');
              localStorage.setItem('user', user);
              navigate('/dashboard');
            }, 5000);
          }
        })
        .catch((err) => {
          setError('An error occurred');
          console.error(err);
        });
    } else {
      setError('All fields are required!');
    }
  };

  return (
    <div className="login-container">
      <div className="login-card">
        <div className="login-image">
          <img src="...src/assets/fotos/login.jpg" alt="login form" />
        </div>
        <div className="login-form">
          <h2 className="login-title">Sign into your account</h2>
          <div className="login-message">
            {error && <div className="login-error">{error}</div>}
            {msg && <div className="login-success">{msg}</div>}
          </div>
          <input
            type="text"
            className="login-input"
            placeholder="User Name"
            value={user}
            onChange={(e) => handleInputChange(e, 'user')}
          />
          <input
            type="password"
            className="login-input"
            placeholder="Password"
            value={pass}
            onChange={(e) => handleInputChange(e, 'pass')}
          />
          <button className="login-button" onClick={loginSubmit}>
            Login
          </button>
          <div className="login-links">
            <a href="#!" className="login-link">
              Forgot password?
            </a>
            <p className="login-register">
              Sem conta? Faça o L{' '}
              <a href="#!" className="login-link">
                Register here
              </a>
            </p>
            <a href="#!" className="login-link">
              Terms of use.
            </a>
            <a href="#!" className="login-link">
              Privacy policy
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;

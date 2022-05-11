import React from 'react';
import { Card, Col, Container, Row } from 'react-bootstrap';

const FormContainer = ({ children }) => {
  return (
    <div className='card'>
      <div className='text-center intro'>
        <img src='https://i.imgur.com/uNiv4bD.png' width={160} />
        <span className='d-block account'>Don't have account yet?</span>
        <span className='contact'>
          Contact us at{' '}
          <a href className='mail'>
            contact@bbbootstrap.com
          </a>{' '}
          and <br /> we will take care of everything
        </span>
      </div>
      <div className='mt-4 text-center'>
        <h4>Log In.</h4>
        <span>Login with your admin credentials</span>
        <div className='mt-3 inputbox'>
          <input
            type='text'
            className='form-control'
            name
            placeholder='Email'
          />
          <i className='fa fa-user' />
        </div>
        <div className='inputbox'>
          <input
            type='text'
            className='form-control'
            name
            placeholder='Password'
          />
          <i className='fa fa-lock' />
        </div>
      </div>
      <div className='d-flex justify-content-between'>
        <div className='form-check'>
          <input
            className='form-check-input'
            type='checkbox'
            defaultValue
            id='flexCheckDefault'
          />
          <label className='form-check-label' htmlFor='flexCheckDefault'>
            Keep me Logged in
          </label>
        </div>
        <div>
          <a href='#' className='forgot'>
            Forgot Password?
          </a>
        </div>
      </div>
      <div className='mt-2'>
        <button className='btn btn-primary btn-block'>Log In</button>
      </div>
    </div>
  );
};

export default FormContainer;

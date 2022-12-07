import React from 'react'
import './SignIn.css'
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
function SignIn() {
  return (
      <div className='page' style={{ height: '100vh', backgroundColor: '#DCDCDE' }}>
          <div className='formContainer'>
              <div style={{ backgroundColor: '#267DFF' }}>


                  <div className='loginInto'>
                      <h5 style={{ padding: 10, fontSize: 20, color: '#FAFFF4' }}>Welcome to Clockify</h5>
                      <div style={{ marginTop: -5, marginLeft: '3.5%' }} className='line'></div>
                      <p>Monitor trainees attendance and create report for every trainee</p>
                  </div>

              </div>
              <div style={{ backgroundColor: ' #FCFCFC' }}>
                  <div className='loginFormContainer'>
                      <h5 style={{ padding: 10, fontSize: 20, color: '#606060', textAlign: 'center' }}>Sign in</h5>
                      <div style={{ marginTop: -5, marginLeft: '3.5%', marginRight: 'auto', marginLeft: 'auto' }} className='signInLine'></div>
                      <div className='form' style={{ marginTop: '6%', padding: 30 }}>

                          <input placeholder='enter user name..' style={{ borderTop: 'none', borderLeft: 'none', borderRight: 'none', borderBottomWidth: 1, outline: 'none', padding: 10, width: '90%', }} />
                          <input placeholder='enter password..' style={{ marginTop: '20%', borderTop: 'none', borderLeft: 'none', borderRight: 'none', borderBottomWidth: 1, outline: 'none', padding: 10, width: '90%', }} />

                          <div style={{ textAlign: 'center' }}>
                              <button style={{ marginTop: '10%', width: '60%', height: 30, borderRadius: 15, border: 'none', background: '#267DFF', color: 'white' }}><Link to = "/landing" className='homee'>Login</Link></button>
                          </div>


                      </div>
                  </div>
              </div>

          </div>

      </div>
  )
}

export default SignIn


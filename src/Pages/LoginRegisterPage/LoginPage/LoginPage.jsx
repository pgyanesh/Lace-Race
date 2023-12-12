import React from 'react'
import Navbar from '../../../Components/Navbar/Navbar'
import './LoginPage.css'

const LoginPage = () => {
  return (
    <div>
      <Navbar/>
      <div className="loginPage">
        <div className="login-section">
            <h4 className='login-head'>SIGN IN/JOIN</h4>
            <p className='login-head'>SIGN IN</p>
            <div className="login-placeholders">
                <input className='placeholders' type='email' placeholder='EMAIL'/>
                <input className='placeholders' type='password' placeholder='PASSWORD'/>
                <p className='login-forgotPassword'>FORGOT PASSWORD</p>
                <button className='login-submitButton'>SUBMIT</button>
            </div>
        </div>
      </div>
    </div>
  )
}

export default LoginPage

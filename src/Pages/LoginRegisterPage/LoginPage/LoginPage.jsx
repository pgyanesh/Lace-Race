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
                <a href='/' className='login-forgotPassword'>FORGOT PASSWORD</a>
                <button className='login-submitButton'>SUBMIT</button>
            </div>
        </div>
        <div className="register-section">
          <div className="login-section">
            <p className='login-head'>JOIN</p>
            <div className="register-placeholders">
            <input className='placeholders2' type='text' placeholder='FIRST NAME'/>
            <input className='placeholders2' type='text' placeholder='LAST NAME'/>
            </div>
            <div className="login-placeholders">
                <input className='placeholders' type='email' placeholder='EMAIL ADDRESS'/>
                <input className='placeholders' type='password' placeholder='PASSWORD'/>
              <div className="date-section">
                <input className='datePlaceholders' type='date' htmlFor='myDate' placeholder='PASSWORD'/>
                <input className='datePlaceholders' type='tel' placeholder='MOBILE NUMBER' pattern='[0-9]{3}[0-9]{3}[0-9]{4}'/>
              </div>
                <input type='checkbox'id='myCheckbox'/><label htmlFor='myCheckbox' className='remember-me-text'>Remember me</label>
                <button className='login-submitButton'>SUBMIT</button>
            </div>
        </div>

        </div>
      </div>
    </div>
  )
}

export default LoginPage

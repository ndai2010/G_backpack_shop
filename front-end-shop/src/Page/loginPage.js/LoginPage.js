import React, { Component } from 'react'
import "./LoginPage.scss"
import SignUp from './SignUp'

import logoFb from '../../asset/imageIcon/facebook.png'
import logoGg from '../../asset/imageIcon/google.png'
import logoTw from '../../asset/imageIcon/twitter.png'
import imgSignup from '../../asset/imageIcon/signup-img.png'
class LoginPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            fieldInput: true,
            isShowPass: false,
            isOpenformSignUp: true
        }
    }
    fieldInput = () => {
        this.setState({
            fieldInput: !this.state.fieldInput
        })
    }
    showPassword = () => {
        this.setState({
            isShowPass: !this.state.isShowPass
        })
    }
    isOpen = () => {
        this.setState({
            isOpenformSignUp: !this.state.isOpenformSignUp
        })
    }
    render() {
        console.log(this.state.isOpenformSignUp);
        return (
            <div className='login-page'>
                <div className={`form-container sign-in-form ${this.state.isOpenformSignUp ? 'show' : 'hide'}`}
                // style={{ visibility: this.state.isOpenformSignUp ? 'visible' : 'hidden' }}
                >
                    <div className='form-box sign-in-box'>
                        <h2>Login</h2>
                        <form action=''>
                            <div className='field'>
                                <i className="fa-solid fa-at"></i>
                                <input type="email" placeholder='Email ID' required></input>
                            </div>
                            <div className='field'>
                                <i className="fa-solid fa-lock"></i>
                                <input
                                    type={this.state.isShowPass ? 'text' : 'password'}
                                    placeholder='password'
                                    required
                                >
                                </input>
                                <div className='eye-btn' onClick={() => this.showPassword()}>
                                    <i className={this.state.isShowPass ? 'fa-solid fa-eye' : 'fa-solid fa-eye-slash'}></i>
                                </div>
                            </div>
                            <div className='fogot-link'>
                                <a href='/'>Forgot password?</a>
                            </div>
                            <input className='submit-btn' value='login' type="submit"></input>
                        </form>
                        <div className='login-options'>
                            <p className='text'>Or, login with...</p>
                            <div className='other-logins'>
                                <a href='/'><img src={logoFb} alt=''></img></a>
                                <a href='/'><img src={logoGg} alt=''></img></a>
                                <a href='/'><img src={logoTw} alt=''></img></a>
                            </div>
                        </div>
                    </div>
                    <div className='imgBox sign-in-imgBox'>
                        <div className='sliding-link'>
                            <p>Don't have an account?</p>
                            <span className='sign-up-btn' onClick={() => this.isOpen()}>Sign up</span>
                        </div>
                        <img src={imgSignup} alt=''></img>
                    </div>
                </div>
                <SignUp
                    isOpen={this.isOpen}
                    isShow={this.state.isOpenformSignUp}
                />
            </div >
        )
    }

}
export default LoginPage

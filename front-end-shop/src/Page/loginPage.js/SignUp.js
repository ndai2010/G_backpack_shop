import React, { Component } from 'react'
import logoFb from '../../asset/imageIcon/facebook.png'
import logoGg from '../../asset/imageIcon/google.png'
import logoTw from '../../asset/imageIcon/twitter.png'
import imgSignin from '../../asset/imageIcon/signin-img.png'
export default class SignUp extends Component {
    constructor(props) {
        super(props);
        this.state = {
            fieldInput: true,
            isShowPass: false,
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
        this.props.isOpen()
    }
    render() {
        console.log(this.props);
        return (
            <div className={`form-container sign-up-form ${this.props.isShow ? 'hide' : 'show'}`}
            // style={{ visibility: this.props.isShow ? 'hidden' : 'visible' }}
            >
                <div className='imgBox sign-up-imgBox'>
                    <div className='sliding-link'>
                        <p>Already a member?</p>
                        <span className='sign-up-btn' onClick={() => this.isOpen()}>Sign in</span>
                    </div>
                    <img src={imgSignin} alt=''></img>
                </div>
                <div className='form-box sign-up-box'>
                    <h2>Sign up</h2>
                    <form action=''>
                        <div className='field'>
                            <i className="fa-solid fa-at"></i>
                            <input type="email" placeholder='Email ID' required></input>
                        </div>
                        <div className='field'>
                            <i class="fa-solid fa-user"></i>
                            <input type="text" placeholder='Fist name' required></input>
                        </div>
                        <div className='field'>
                            <i class="fa-solid fa-user"></i>
                            <input type="text" placeholder='last name' required></input>
                        </div>
                        <div className='field'>
                            <i className="fa-solid fa-lock"></i>
                            <input
                                type='password'
                                placeholder='password'
                                required
                            >
                            </input>
                        </div>
                        <div className='field'>
                            <i className="uil uil-lock-access"></i>
                            <input type="password" placeholder='confirm password' required></input>
                        </div>
                        <input className='submit-btn' value='Sign up' type="submit"></input>
                    </form>
                    <div className='login-options'>
                        <p className='text'>Or, sign up with...</p>
                        <div className='other-logins'>
                            <a href='/'><img src={logoFb} alt=''></img></a>
                            <a href='/'><img src={logoGg} alt=''></img></a>
                            <a href='/'><img src={logoTw} alt=''></img></a>
                        </div>
                    </div>
                </div>
            </div>
        )
    } n
}

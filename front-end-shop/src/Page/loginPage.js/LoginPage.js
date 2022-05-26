import React, { Component } from 'react'
import "./LoginPage.scss"
import { UserLogin } from '../../redux/actions/LoginAction'

//icon-image
import logoFb from '../../asset/imageIcon/facebook.png'
import logoGg from '../../asset/imageIcon/google.png'
import logoTw from '../../asset/imageIcon/twitter.png'
import imgSignup from '../../asset/imageIcon/signup-img.png'

//library
import { Link } from 'react-router-dom'
import { connect } from "react-redux";

class LoginPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            fieldInput: true,
            isShowPass: false,
            isOpenformSignUp: true,

            email: '',
            password: '',
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
    onChangeInput = (event, id) => {
        let coppyState = { ...this.state }
        coppyState[id] = event.target.value
        this.setState({
            ...coppyState
        })
    }
    handleLogin = () => {
        try {
            this.props.UserLogin(this.state.email, this.state.password);
            console.log(this.props.login);

        } catch (e) {
            console.log(e);
        }
    }

    async componentDidMount() {
    }
    render() {
        return (
            <div className='login-page'>
                <div className='form-container sign-in-form'>
                    <div className='form-box sign-in-box'>
                        <h2>Login</h2>
                        <form>
                            <div className='field'>
                                <i className="fa-solid fa-at"></i>
                                <input
                                    type="email"
                                    placeholder='Email'
                                    required
                                    value={this.state.email}
                                    onChange={(event) => this.onChangeInput(event, 'email')}
                                ></input>
                            </div>
                            <div className='field'>
                                <i className="fa-solid fa-lock"></i>
                                <input
                                    type={this.state.isShowPass ? 'text' : 'password'}
                                    placeholder='password'
                                    required
                                    value={this.state.password}
                                    onChange={(event) => this.onChangeInput(event, 'password')}
                                >
                                </input>
                                <div className='eye-btn' onClick={() => this.showPassword()}>
                                    <i className={this.state.isShowPass ? 'fa-solid fa-eye' : 'fa-solid fa-eye-slash'}></i>
                                </div>
                            </div>
                            <div className='forgot-link'>
                                <a href='/'>Forgot password?</a>
                            </div>
                            {/* <Link to={}> */}
                            <div className='submit-btn' onClick={() => this.handleLogin()}>Login</div>
                            {/* </Link> */}
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
                            <Link to={'/register'}>
                                <span className='sign-up-btn' onClick={() => this.isOpen()}>Sign up</span>
                            </Link>
                        </div>
                        <img src={imgSignup} alt=''></img>
                    </div>
                </div>
            </div >
        )
    }

}

const mapStateToProps = (state) => {
    return {
        login: state.login,
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        UserLogin: (email, password) => dispatch(UserLogin(email, password)),
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(LoginPage)

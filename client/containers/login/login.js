import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Joi from 'joi';
import { updateUserProfile } from '../../actions/userProfile';
import { locationType } from '../../types/index';
import { loginSchema, extractErrorMessage } from '../../services/validation';
import { authLogin, authSignup } from '../../services/rest';
import './login.scss';
import '../../styles/_components.scss';
import githubImage from '../../static/assets/githubimage.png';

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      isEmailError: false,
      isPasswordError: false,
      login: true,
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.validateInput = this.validateInput.bind(this);
    this.validateForm = this.validateForm.bind(this);
    this.clearForm = this.clearForm.bind(this);
  }

  componentWillMount() {
    const { location } = this.props;
    if (location.pathname === '/login') {
      this.setState({ login: true });
    } else {
      this.setState({ login: false });
    }
  }

  shouldLetUserSendRequest() {
    const {
      isEmailError, isPasswordError, email, password,
    } = this.state;
    return !isEmailError && !isPasswordError && email.length && password.length;
  }

  validateForm() {
    const { email, password } = this.state;
    this.validateInput(email, 'email', 'isEmailError');
    this.validateInput(password, 'password', 'isPasswordError');
  }


  validateInput(input, field, errorField) {
    const result = Joi.validate({ [field]: input }, loginSchema);
    if (result.error) {
      const errorMessage = extractErrorMessage(result.error.message);
      this.setState({ [errorField]: errorMessage });
    } else {
      this.setState({ [errorField]: false });
    }
  }

  handleChange(event) {
    const { name, value } = event.target;
    this.setState({ [name]: value, apiError: false });
  }

  clearForm() {
    this.setState({ email: '', password: '' });
  }

  async handleSubmit(event) {
    event.preventDefault();
    const {
      email, password, login,
    } = this.state;
    const { dispatch } = this.props;
    const loginConfig = {
      successCB: updateUserProfile,
      message: 'user succesfully logged in',
      data: { email, password },
      dispatch,
    };
    const sendUserInfo = login ?
      authLogin.bind(null, loginConfig) :
      authSignup.bind(null, { email, password }, dispatch, 'succesful signup');

    await this.validateForm();

    try {
      if (this.shouldLetUserSendRequest()) {
        await sendUserInfo();
        this.clearForm();
      }
    } catch (error) {
      if (login) {
        this.setState({ apiError: 'incorrect email/password combination' });
      } else {
        this.setState({ apiError: 'email exists already' });
      }
      this.clearForm();
    }
  }

  render() {
    const {
      isEmailError, isPasswordError, login, apiError, email, password,
    } = this.state;
    const { location } = this.props;
    return (
      <div className="login-wrapper">
        <header className="login-wrapper-header">Job Search</header>
        <form className="login-form" onSubmit={this.handleSubmit}>
          <h3 className="login-form-header">{ location.pathname === '/login' ? 'Welcome Back' : 'Sign up with us!' }</h3>
          <button type="submit" className="default-button login-form-github">
            <img src={githubImage} />
            {login ? 'Login with GitHub' : 'Signup with Github' }
          </button>
          <div className="login-form-or">
            <hr />
              or
            <hr />
          </div>
          <label className="login-form-email">Email Address</label>
          <input
            name="email"
            type="email"
            onChange={this.handleChange}
            onBlur={() => this.validateInput(email, 'email', 'isEmailError')}
            value={email}
            className={ isEmailError ? 'error-input' : '' }
            required
          />
          { isEmailError &&
          <div className="invalid-form-error">
            { 'must provide email address' }
          </div>
          }
          { apiError &&
          <div className="invalid-form-error">
            { apiError }
          </div>
          }
          <label>Password:</label>
          <input
            name="password"
            type="password"
            onChange={this.handleChange}
            onBlur={() => this.validateInput(password, 'password', 'isPasswordError')}
            value={password}
            className={ isPasswordError ? 'error-input' : '' }
            required
          />
          { isPasswordError &&
          <div className="invalid-form-error">
            must provide password (alphanumeric combinations only)
          </div>
          }
          <button
            type="submit"
            onClick={this.handleSubmit}
            className="default-button login-form-sign-in"
          > { login ? 'Log In' : 'Register' }</button>
        </form>
      </div>
    );
  }
}

Login.propTypes = {
  location: locationType,
  updateUserProfile: PropTypes.func,
};

const mapStateToProps = state => ({
  user: state.userProfile,
  network: state.network,
});


export default connect(mapStateToProps)(Login);


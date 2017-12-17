import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { updateUserProfile } from '../../actions/userProfile';
import { locationType } from '../../types/index';
import { emailRegex, passwordRegex } from '../../services/validation';
import { authLogin, authSignup } from '../../services/rest';
import './login.scss';
import '../../styles/_components.scss';

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
    this.validateEmail = this.validateEmail.bind(this);
    this.validatePassword = this.validatePassword.bind(this);
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

  validateEmail() {
    const { email } = this.state;
    if (!emailRegex.test(email) || !email.length) {
      this.setState({ isEmailError: true });
    } else {
      this.setState({ isEmailError: false });
    }
  }

  validatePassword() {
    const { password } = this.state;
    if (!passwordRegex.test(password) || !password.length) {
      this.setState({ isPasswordError: true });
    } else {
      this.setState({ isPasswordError: false });
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
    const { updateUserProfile } = this.props;
    const grabUserInfo = login ? authLogin : authSignup;
    await this.validateEmail();
    await this.validatePassword();
    try {
      if (this.shouldLetUserSendRequest()) {
        const user = await grabUserInfo({ email, password });
        updateUserProfile(user);
      }
    } catch (error) {
      if (login) {
        this.setState({ apiError: 'incorrect email/password combination' });
      } else {
        this.setState({ apiError: 'email exists already' });
      }
    }
    this.clearForm();
  }

  render() {
    const {
      isEmailError, isPasswordError, login, apiError,
    } = this.state;
    const { location } = this.props;

    return (
      <div className="login-wrapper">
        <form className="login-form" onSubmit={this.handleSubmit}>
          <h3 className="login-form-header">{ location.pathname === '/login' ? 'Welcome Back' : 'Sign up with us!' }</h3>
          <button type="submit" className="default-button login-form-github">
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
            onBlur={this.validateEmail}
            value={this.state.email}
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
            onBlur={this.validatePassword}
            value={this.state.password}
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
  updateUserProfile: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  user: state.userProfile,
});


export default connect(mapStateToProps, { updateUserProfile })(Login);


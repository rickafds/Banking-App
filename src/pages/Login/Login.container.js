import React, { PureComponent } from 'react';
import { Formik } from 'formik';
import { connect } from 'react-redux';
import { bool, func, oneOfType, object } from 'prop-types';
import LoginScreen from './Login';
import LoginSchema from './Login.schema';
import { login } from '../../store/ducks/auth';

const initialValues = {
  cpf: '',
  password: '',
};

class LoginContainer extends PureComponent {
  render() {
    const { Login, request, error, navigation } = this.props;
    const Forgot = () => navigation.navigate('ForgotPassword');
    return (
      <Formik
        initialValues={{ ...initialValues }}
        validationSchema={LoginSchema}
        setSubmitting={request}
        onSubmit={values => {
          Login(values.cpf, values.password);
        }}
      >
        {props => (
          <LoginScreen
            {...props}
            request={request}
            error={error}
            forgot={Forgot}
          />
        )}
      </Formik>
    );
  }
}

LoginContainer.propTypes = {
  Login: func.isRequired,
  request: bool.isRequired,
  navigation: oneOfType([func, object]).isRequired,
  error: bool,
};

LoginContainer.defaultProps = { error: false };

const mapStateToProps = state => ({
  request: state.auth.IsLoginRequest,
  error: state.auth.IsLoginFailed,
});

const mapDispatchToProps = { Login: login };

// eslint-disable-next-line prettier/prettier
export default connect(mapStateToProps, mapDispatchToProps)(LoginContainer);

import React, {Component} from 'react';
import LoginScreen from './Login';
import {Formik} from 'formik';
import {connect} from 'react-redux';
import LoginSchema from './Login.schema';
import {login} from '../../store/ducks/auth';
import {persistor} from '~/store';

const initialValues = {
  cpf: '',
  password: '',
};

class LoginContainer extends Component {
  componentDidMount() {
    persistor.purge();
  }
  render() {
    const {Login, request, error} = this.props;
    return (
      <Formik
        initialValues={{...initialValues}}
        validationSchema={LoginSchema}
        setSubmitting={request}
        onSubmit={values => {
          Login(values.cpf, values.password);
        }}>
        {props => <LoginScreen {...props} request={request} error={error} />}
      </Formik>
    );
  }
}

const mapStateToProps = state => ({
  request: state.auth.IsLoginRequest,
  error: state.auth.IsLoginFailed,
});

const mapDispatchToProps = {
  Login: login,
};

export default connect(mapStateToProps, mapDispatchToProps)(LoginContainer);

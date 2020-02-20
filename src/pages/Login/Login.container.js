import React, {Component} from 'react';
import LoginScreen from './Login';
import {Formik} from 'formik';
import {connect} from 'react-redux';
import LoginSchema from './Login.schema';
import {login} from '../../store/ducks/auth';

const initialValues = {
  cpf: '',
  password: '',
};

class LoginContainer extends Component {
  render() {
    const {Login} = this.props;
    return (
      <Formik
        initialValues={{...initialValues}}
        validationSchema={LoginSchema}
        onSubmit={values => {
          Login(values.cpf, values.password);
        }}>
        {props => <LoginScreen {...props} />}
      </Formik>
    );
  }
}

const mapDispatchToProps = {
  Login: login,
};

export default connect(null, mapDispatchToProps)(LoginContainer);

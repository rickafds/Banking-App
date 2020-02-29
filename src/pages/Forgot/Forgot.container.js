import { Form } from '@common';
import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import Forgot from './Forgot';
import ForgotSchema from './Forgot.schema';
import { forgot } from '../../store/ducks/forgot';

const initialValues = {
  email: '',
};

class ForgotContainer extends PureComponent {
  render() {
    const { ForgotRequest, loading } = this.props;
    return (
      <Form
        initialValues={{ ...initialValues }}
        validationSchema={ForgotSchema}
        onSubmit={values => {
          ForgotRequest(values.email);
        }}
      >
        {props => <Forgot {...props} loading={loading} />}
      </Form>
    );
  }
}

const mapStateToProps = state => ({
  loading: state.forgot.isForgotRequest,
});

const mapDispatchToProps = {
  ForgotRequest: forgot,
};
export default connect(mapStateToProps, mapDispatchToProps)(ForgotContainer);

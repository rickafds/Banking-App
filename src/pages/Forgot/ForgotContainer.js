import { Form } from '@common';

import React, { Component } from 'react';
import Forgot from './Forgot';

const initialValues = {
  email: '',
};

export default class ForgotContainer extends Component {
  render() {
    return (
      <Form
        initialValues={{ ...initialValues }}
        onSubmit={values => {
          console.log(values);
        }}
      >
        {props => <Forgot {...props} />}
      </Form>
    );
  }
}

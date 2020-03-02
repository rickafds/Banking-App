import React, { PureComponent } from 'react';
import { Form } from '@common';
import Validation from './ForgotUpdate.schema';

import ForgotUpdate from './ForgotUpdate';

const initialValues = {
  password: '',
  confirm_password: '',
  code: '',
};

export default class ForgotUpdateContainer extends PureComponent {
  constructor() {
    super();
    this.state = {
      next: false,
    };
  }

  render() {
    const handleNext = () => {
      this.setState({ next: true });
    };
    const { next } = this.state;
    return (
      <Form
        initialValues={{ ...initialValues }}
        validationSchema={Validation}
        onSubmit={values => console.log(values)}
      >
        {props => <ForgotUpdate {...props} next={handleNext} valid={next} />}
      </Form>
    );
  }
}

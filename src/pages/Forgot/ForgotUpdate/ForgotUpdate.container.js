import React, { PureComponent } from 'react';
import { Form } from '@common';

import ForgotUpdate from './ForgotUpdate';

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
      <Form>{props => <ForgotUpdate next={handleNext} valid={next} />}</Form>
    );
  }
}

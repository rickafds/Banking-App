import React from 'react';

import { Button, ButtonLabel } from './Button.styles';

const ButtonDefault = props => (
  <Button {...props}>
    <ButtonLabel>{props.label}</ButtonLabel>
  </Button>
);

export default ButtonDefault;

import React from 'react';
import { ActivityIndicator } from 'react-native';
import { white } from '../../utils/colors';

import { Button, ButtonLabel } from './Button.styles';

const ButtonDefault = props => (
  <Button {...props}>
    {props.loading ? (
      <ActivityIndicator size="small" color={white} />
    ) : (
      <ButtonLabel>{props.label}</ButtonLabel>
    )}
  </Button>
);

export default ButtonDefault;

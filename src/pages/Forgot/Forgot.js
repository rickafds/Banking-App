import React from 'react';
import { string, func, arrayOf } from 'prop-types';
import svgExample from '../../image/adventure_.svg';

import {
  Container,
  Title,
  Imagem,
  SubTitle,
  InputText,
  ButtonDefault,
} from './Forgot.styles';

const Forgot = ({ values, handleSubmit, handleChange }) => (
  <Container>
    <Title>Esqueceu a senha?</Title>
    <Imagem width="200" height="200" source={svgExample} />
    <SubTitle>Insira o endereço de e-mail associado à sua conta</SubTitle>
    <InputText
      placeholder="Insira o endereço de e-mail"
      value={values.email}
      onChangeText={handleChange('email')}
    />
    <ButtonDefault label="ALTERAR" onPress={handleSubmit} />
  </Container>
);

Forgot.propTypes = {
  values: arrayOf({
    email: string.isRequired,
  }).isRequired,
  handleSubmit: func.isRequired,
  handleChange: func.isRequired,
};
export default Forgot;

import React from 'react';
import { string, func, arrayOf, bool, objectOf } from 'prop-types';

import {
  Container,
  Title,
  SubTitle,
  InputText,
  ButtonDefault,
  Imagem,
  Wrapper,
} from './Forgot.styles';

const Forgot = ({
  values,
  handleSubmit,
  handleChange,
  handleBlur,
  loading,
  errors,
}) => (
  <Container>
    <Title>Esqueceu a senha?</Title>
    <Wrapper>
      <Imagem width="200" height="200" />
    </Wrapper>
    <SubTitle>Insira o endereço de e-mail associado à sua conta</SubTitle>
    <InputText
      id="email"
      name="email"
      placeholder="Insira o endereço de e-mail"
      value={values.email}
      onChangeText={handleChange('email')}
      onBlur={handleBlur('email')}
      error={errors.email}
    />
    <ButtonDefault label="ALTERAR" loading={loading} onPress={handleSubmit} />
  </Container>
);

Forgot.propTypes = {
  values: arrayOf({
    email: string.isRequired,
  }).isRequired,
  handleSubmit: func.isRequired,
  handleChange: func.isRequired,
  handleBlur: func.isRequired,
  loading: bool.isRequired,
  errors: objectOf({
    email: string.isRequired,
  }).isRequired,
};
export default Forgot;

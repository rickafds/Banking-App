import React from 'react';
import {ActivityIndicator} from 'react-native';
import {white} from '../../utils/colors';

import {
  Container,
  TopContainer,
  MiddleContainer,
  Label,
  Input,
  Button,
  ButtonLabel,
  RopateContainer,
  LabelForgot,
  Logo,
} from './Login.styles';

import LogoBank from '../../image/logo.png';

const Login = ({
  values,
  handleChange,
  handleSubmit,
  handleBlur,
  errors,
  request,
  error,
}) => {
  return (
    <Container>
      <TopContainer>
        <Logo source={LogoBank} />
      </TopContainer>
      <MiddleContainer>
        <Label>Usuário</Label>
        <Input
          id="cpf"
          name="cpf"
          placeholder="Digite o seu CPF"
          value={values.cpf}
          onChangeText={handleChange('cpf')}
          onBlur={handleBlur('cpf')}
          editable={request ? false : true}
          error={errors.cpf || error}
        />

        <Label>Senha</Label>
        <Input
          name="password"
          placeholder="Digite a sua senha"
          value={values.password}
          onChangeText={handleChange('password')}
          onBlur={handleBlur('password')}
          maxLength={15}
          editable={request ? false : true}
          error={errors.password || error}
          secureTextEntry
        />

        <Button onPress={handleSubmit}>
          {request ? (
            <ActivityIndicator size="small" color={white} />
          ) : (
            <ButtonLabel>Entrar</ButtonLabel>
          )}
        </Button>
      </MiddleContainer>
      <RopateContainer>
        <LabelForgot>Esqueceu a sua senha?</LabelForgot>
      </RopateContainer>
    </Container>
  );
};

export default Login;

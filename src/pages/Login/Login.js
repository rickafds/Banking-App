import React from 'react';

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
} from './styles';

import LogoBank from '../../image/logo.png';

const Login = () => {
  return (
    <Container>
      <TopContainer>
        <Logo source={LogoBank} />
      </TopContainer>
      <MiddleContainer>
        <Label>Usuário</Label>
        <Input placeholder="Digite o seu usuário" />
        <Label>Senha</Label>
        <Input placeholder="Digite a sua senha" />

        <Button>
          <ButtonLabel>Entrar</ButtonLabel>
        </Button>
      </MiddleContainer>
      <RopateContainer>
        <LabelForgot>Esqueceu a sua senha?</LabelForgot>
      </RopateContainer>
    </Container>
  );
};

export default Login;

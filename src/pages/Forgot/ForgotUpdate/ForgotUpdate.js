import React from 'react';
import CodeInput from 'react-native-confirmation-code-input';
import { picled } from '../../../utils/colors';

import {
  Container,
  Title,
  Image,
  SubTitle,
  ButtonSend,
  HeaderContainer,
  ImagemContainer,
  ResendLabel,
  Resend,
} from './ForgotUpdate.styles';

const ForgotUpdate = ({ handleSubmit, handleChange, next, valid }) => (
  <Container>
    <HeaderContainer>
      <Title>Verificação</Title>
    </HeaderContainer>
    <ImagemContainer>
      <Image />
    </ImagemContainer>
    {valid ? (
      <SubTitle>teste</SubTitle>
    ) : (
      <>
        <SubTitle>
          Digite o código de verificação que acabamos de enviar para você no seu
          endereço de e-mail
        </SubTitle>
        <CodeInput
          id="code"
          name="code"
          className="border-b"
          codeLength={4}
          space={20}
          size={60}
          inputPosition="center"
          autoFocus={false}
          codeInputStyle={{ fontWeight: '800' }}
          activeColor={picled}
          inactiveColor={picled}
        />
        <ResendLabel>
          Não recebeu o código? <Resend>Reenviar código</Resend>
        </ResendLabel>

        <ButtonSend label="ALTERAR" onPress={next} />
      </>
    )}
  </Container>
);

export default ForgotUpdate;

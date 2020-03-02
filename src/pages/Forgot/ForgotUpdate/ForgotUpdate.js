import React from 'react';
import CodeInput from 'react-native-confirmation-code-input';
import { func, string, objectOf, bool } from 'prop-types';
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
  TextInput,
  BodyContainer,
  TextErro,
} from './ForgotUpdate.styles';

const ForgotUpdate = ({
  handleSubmit,
  handleChange,
  next,
  valid,
  values,
  handleBlur,
  errors,
}) => (
  <Container>
    <HeaderContainer>
      <Title>Verificação</Title>
    </HeaderContainer>
    <ImagemContainer>
      <Image />
    </ImagemContainer>
    {valid ? (
      <>
        <BodyContainer>
          <TextInput
            secureTextEntry
            id="password"
            name="password"
            placeholder="Digite a nova senha"
            value={values.password}
            onChangeText={handleChange('password')}
            onBlur={handleBlur('password')}
            error={errors.password}
          />
          <TextInput
            secureTextEntry
            placeholder="Confirme a sua senha"
            id="confirm_password"
            name="confirm_password"
            value={values.confirm_password}
            onChangeText={handleChange('confirm_password')}
            onBlur={handleBlur('confirm_password')}
            error={errors.confirm_password}
          />
          {errors ? <TextErro>{errors.confirm_password}</TextErro> : null}

          <ButtonSend label="ALTERAR" onPress={handleSubmit} />
        </BodyContainer>
      </>
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
          onCodeChange={values.code}
          onBlur={handleBlur('code')}
          onFulfill={handleChange('code')}
        />
        <ResendLabel>
          Não recebeu o código? <Resend>Reenviar código</Resend>
        </ResendLabel>

        <ButtonSend label="CONTINUAR" onPress={next} />
      </>
    )}
  </Container>
);

ForgotUpdate.propTypes = {
  handleSubmit: func.isRequired,
  handleChange: func.isRequired,
  handleBlur: func.isRequired,
  next: func.isRequired,
  values: objectOf({
    password: string.isRequired,
  }).isRequired,
  errors: objectOf({
    password: string.isRequired,
    confirm_password: string.isRequired,
  }).isRequired,
  valid: bool.isRequired,
};

export default ForgotUpdate;

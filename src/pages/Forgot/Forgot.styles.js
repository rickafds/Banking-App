import styled from 'styled-components/native';
import { isIphoneX } from 'react-native-iphone-x-helper';
import { Input, Button } from '@common';
import ForgotImage from '../../image/adventure';

export const Container = styled.View`
  flex: 1;
  background-color: white;
  display: flex;
`;

export const Title = styled.Text`
  text-align: center;
  margin-top: ${isIphoneX() ? '90px' : '40px'};
  font-size: 16px;
`;

export const Wrapper = styled.View`
  width: 100%;
  align-items: center;
`;

export const Imagem = styled(ForgotImage)`
  display: flex;
  margin-top: 30px;
`;

export const SubTitle = styled.Text`
  text-align: center;
  font-size: 22px;
  margin: 10px 40px 0 40px;
`;

export const InputText = styled(Input)`
  margin: 30px 30px 0 30px;
`;

export const ButtonDefault = styled(Button)`
  margin: 40px;
`;

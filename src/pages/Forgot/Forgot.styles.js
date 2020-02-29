import styled from 'styled-components/native';
import { isIphoneX } from 'react-native-iphone-x-helper';
import SvgUri from 'react-native-svg-uri';
import { Input, Button } from '@common';

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

export const Imagem = styled(SvgUri)`
  display: flex;
  align-items: center;
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

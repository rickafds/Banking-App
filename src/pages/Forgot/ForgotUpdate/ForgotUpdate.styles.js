import styled from 'styled-components/native';
import { isIphoneX } from 'react-native-iphone-x-helper';
import { Button, Input } from '@common';
import { white, malibu, raven } from '../../../utils/colors';
import BussinessMan from '../../../image/businessman';

export const Container = styled.View`
  background-color: ${white};
  flex: 1;
  justify-content: space-between;
`;

export const HeaderContainer = styled.View`
  background-color: ${malibu};
  flex: 1;
`;

export const ImagemContainer = styled.View`
  display: flex;
  align-items: center;
`;

export const Title = styled.Text`
  margin-top: ${isIphoneX() ? '50px' : '20px'};
  text-align: center;
  font-size: 22px;
  color: ${white};
`;

export const Image = styled(BussinessMan)`
  height: 20px;
  width: 20px;
  margin-top: -70px;
`;

export const SubTitle = styled.Text`
  margin: 30px;
  font-size: 20px;
  text-align: center;
  flex: 0.5;
  color: ${raven};
`;

export const ResendLabel = styled.Text`
  text-align: center;
  color: ${raven};
`;

export const Resend = styled.Text`
  color: ${malibu};
`;

export const ButtonSend = styled(Button)`
  margin: 40px;
`;

export const BodyContainer = styled.View`
  flex: 2;
`;

export const TextInput = styled(Input)`
  margin: 30px 50px 10px 50px;
`;

export const TextErro = styled.Text`
  text-align: center;
  margin: 10px;
`;

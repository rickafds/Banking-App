import styled from 'styled-components/native';
import {white, picled, red} from '../../utils/colors';

export const Container = styled.View`
  flex: 1;
  justify-content: space-between;
  width: 100%;
  background: ${white};
`;

export const TopContainer = styled.View`
  flex: 1;
  margin-top: 80px;
  align-items: center;
`;

export const MiddleContainer = styled.View`
  flex: 3;
  margin: 30px;
  justify-content: space-evenly;
`;

export const RopateContainer = styled.View`
  flex: 2;
  justify-content: flex-end;
  margin: 40px;
`;

export const Label = styled.Text`
  font-size: 14px;
`;

export const LabelForgot = styled.Text`
  text-align: center;
  font-size: 12;
`;

export const Input = styled.TextInput`
  border-bottom-width: 1px;
  padding: 20px;
  border-bottom-color: ${({error}) => (error ? red : picled)};
`;

export const Button = styled.TouchableOpacity`
  border: 1px solid;
  border-radius: 5px;
  padding: 12px;
  background: ${picled};
`;

export const ButtonLabel = styled.Text`
  text-align: center;
  color: ${white};
`;

export const Logo = styled.Image`
  height: 100px;
  width: 100px;
`;

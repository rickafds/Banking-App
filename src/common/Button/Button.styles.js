import styled from 'styled-components/native';
import { white, picled, red } from '../../utils/colors';

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

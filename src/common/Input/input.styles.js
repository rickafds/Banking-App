import styled from 'styled-components/native';
import { red, picled } from '../../utils/colors';

export const Input = styled.TextInput`
  border-bottom-width: 1px;
  padding: 20px;
  border-bottom-color: ${({ error }) => (error ? red : picled)};
`;

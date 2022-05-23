import styled from 'styled-components';
import { Colors } from '../Global';

export const InputWrapper = styled.div`
  width: 100%;
  display: flex;
`;

export const Input = styled.input`
  flex-grow: 1;
  border: 1px solid ${Colors.gray};
  border-right: 0;
  border-radius: 4px 0 0 4px;
  padding: 12px;

  &:focus {
    border: 1px solid ${Colors.primary};
    border-right: 0;
    outline: none;
  }
`;

export const Button = styled.button`
  background: ${Colors.primary};
  color: ${Colors.white};
  border: 1px solid ${Colors.primary};
  border-radius: 0 4px 4px 0;
  padding: 12px;
`;

export const Alert = styled.div`
  padding: 12px;
  margin-top: 12px;
  background: ${Colors.red200};
  color: ${Colors.red};
  border-radius: 4px;
`;

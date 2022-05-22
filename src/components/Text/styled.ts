import styled, { css } from 'styled-components';
import { TextType } from './Text';

const getTextTypeStyle = (textType: TextType) => {
  switch (textType) {
    case 'h1':
      return css`
        font-size: 22px;
      `;
    case 'h2':
      return css`
        font-size: 40px;
      `;
    case 'h3':
      return css`
        font-size: 20px;
      `;
    default:
      return css`
        font-size: 16px;
      `;
  }
};

export const TextStyled = styled.p<{ textType?: TextType }>`
  ${({ textType }) => textType && getTextTypeStyle(textType)}
`;

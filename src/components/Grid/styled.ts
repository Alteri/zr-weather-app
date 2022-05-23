import styled from 'styled-components';

export const GridStyled = styled.div<{
  gap?: string;
  templateColumns?: string;
  justifyContent?: string;
}>`
  display: grid;

  ${({ gap }) => gap && `grid-gap: ${gap}px;`}
  ${({ templateColumns }) => templateColumns && `grid-template-columns: ${templateColumns};`}
  ${({ justifyContent }) => justifyContent && `justify-content: ${justifyContent};`}
`;

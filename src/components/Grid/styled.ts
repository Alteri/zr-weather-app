import styled from "styled-components";

export const GridStyled = styled.div<{
  gap?: string;
  templateColumns?: string;
}>`
  display: grid;

  ${({ gap }) => gap && `grid-gap: ${gap}px;`}
  ${({ templateColumns }) =>
    templateColumns && `grid-template-columns: ${templateColumns};`}
`;

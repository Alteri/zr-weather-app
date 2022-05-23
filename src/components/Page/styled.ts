import styled from 'styled-components';
import { Breakpoints } from '../Global';

export const PageStyled = styled.div`
  display: grid;
  grid-gap: 32px;
  padding: 32px 16px;

  @media (min-width: ${Breakpoints.Tablet}) {
    max-width: 1000px;
    margin: auto;
  }
`;

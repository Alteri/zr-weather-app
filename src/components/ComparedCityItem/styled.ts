import styled, { css } from 'styled-components';
import { Grid } from '../Grid';
import { Colors } from '../Global';

export const ComparedCityItemStyled = styled(Grid)<{ tempCompare: string | number }>`
  border-radius: 4px;
  padding: 8px;

  ${({ tempCompare }) =>
    css`
      border: 1px solid ${Colors.gray};

      ${tempCompare < '0' &&
      css`
        border: 1px solid ${Colors.green};
      `}
      ${tempCompare > '0' &&
      css`
        border: 1px solid ${Colors.red};
      `}
    `}
`;

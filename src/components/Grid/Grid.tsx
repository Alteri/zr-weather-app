import React, { ReactNode } from 'react';
import { GridStyled } from './styled';

type GridProps = {
  children: ReactNode;
  gap?: string;
  templateColumns?: string;
};

const Grid = ({ children, gap, templateColumns, ...props }: GridProps) => {
  return (
    <GridStyled gap={gap} templateColumns={templateColumns} {...props}>
      {children}
    </GridStyled>
  );
};

export default Grid;

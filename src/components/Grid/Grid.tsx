import React, { ReactNode } from 'react';
import { GridStyled } from './styled';

type GridProps = {
  children: ReactNode;
  gap?: string;
  templateColumns?: string;
  justifyContent?: string;
};

const Grid = ({ children, gap, templateColumns, justifyContent, ...props }: GridProps) => {
  return (
    <GridStyled
      gap={gap}
      templateColumns={templateColumns}
      justifyContent={justifyContent}
      {...props}
    >
      {children}
    </GridStyled>
  );
};

export default Grid;

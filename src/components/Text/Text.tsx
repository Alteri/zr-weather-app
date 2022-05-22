import React, { ReactNode } from 'react';
import { TextStyled } from './styled';

const textTypes = ['h1', 'h2', 'h3', 'p'] as const;
export type TextType = typeof textTypes[number];

const textTypeToTag = {
  h1: 'h1',
  h2: 'h2',
  h3: 'h3',
  p: 'p',
} as const;

export type TextProps = {
  children: ReactNode;
  textType?: TextType;
};

const Text = ({ children, textType = 'p', ...props }: TextProps) => {
  return (
    <TextStyled as={textTypeToTag[textType]} textType={textType} {...props}>
      {children}
    </TextStyled>
  );
};

export default Text;

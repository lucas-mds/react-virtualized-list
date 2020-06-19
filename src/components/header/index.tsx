import React from 'react';

import { StyledHeader, StyledTitle } from './styles';

interface HeaderProps {
  title: string,
  backgroundColor: string,
}

export default function Header({ title, backgroundColor }: HeaderProps) {
  return (
    <StyledHeader backgroundColor={backgroundColor}>
      <StyledTitle variant="h6">{title}</StyledTitle>
    </StyledHeader>
  )
};

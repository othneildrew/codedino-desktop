import { styled } from '@mui/joy';
import { ReactNode } from 'react';

const Container = styled('div')(({ theme }) => `
  z-index: 9999;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 56px;
  border-bottom: 2px solid ${theme.palette.divider};
  background-color: red;
  opacity: 0.4
`);

export interface AppBarProps {
  children?: ReactNode;
}

export const AppBar = ({ children }: AppBarProps) => {
  const a = '';

  return (
    <Container>{children}</Container>
  );
}
import { styled, Typography } from '@mui/joy';
import { ReactNode } from 'react';
import Image from 'next/image';
import { AppLogoGroup } from '@/layouts/components/AppLogoGroup';
import { AppNavigation } from '@/layouts/components/AppNavigation';
import { AppBar } from '@/layouts/components/AppBar';


const Container = styled('div')`
  display: flex;
  width: 100%;
  height: 100vh;
  //overflow: hidden;
`;

const Aside = styled('aside')(({ theme }) => `
  flex-shrink: 0;
  padding: 20px;
  width: 240px;
  height: auto;
  overflow-y: auto;
  border-right: 2px solid ${theme.palette.divider};
`);

const Main = styled('main')`
  position: relative;
  overflow-y: auto;
  width: 100%;
  height: auto;
`;

export interface DefaultLayoutProps {
  children?: ReactNode
}

export const DefaultLayout = ({ children }) => {
  return (
    <Container>
      <Aside>
        <AppLogoGroup />
        <AppNavigation />
      </Aside>
      {/*<div style={{ width: '100%', border: '1px solid orange' }}>*/}
      {/*  <AppBar />*/}
        <Main>{children}</Main>
      {/*</div>*/}
    </Container>
  )
}
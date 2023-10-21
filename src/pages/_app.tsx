// import '@/styles/globals.css'
import '@fontsource/public-sans'
import type { AppProps } from 'next/app'
import { CssBaseline, CssVarsProvider } from '@mui/joy'
import { defaultTheme } from '@/config/theme';

export default function App({ Component, pageProps }: AppProps) {

  return (
    <CssVarsProvider theme={defaultTheme}>
      <CssBaseline />
      <Component {...pageProps} />
    </CssVarsProvider>
  );
}

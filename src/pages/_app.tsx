// import '@/styles/globals.css'
import '@fontsource/public-sans';
import '@mantine/core/styles.css';
import '@mantine/tiptap/styles.css';
import '@mantine/code-highlight/styles.css';
import type { AppProps } from 'next/app';
import daysjs from 'dayjs';
import customParseFormat from 'dayjs/plugin/customParseFormat';
import { MantineProvider } from '@mantine/core';
import { defaultTheme } from '@/config/theme';
import { WorkspaceProvider } from '@/utils/hoc/WorkspaceProvider';

// Extend dayjs constructor to support custom formats of input strings
daysjs.extend(customParseFormat);

export default function App({ Component, pageProps }: AppProps) {
  return (
    <MantineProvider theme={defaultTheme} defaultColorScheme='dark'>
      <WorkspaceProvider>
        <Component {...pageProps} />
      </WorkspaceProvider>
    </MantineProvider>
  );
}

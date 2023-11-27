// import '@/styles/globals.css'
import '@fontsource/public-sans';
import '@mantine/core/styles.css';
import '@mantine/tiptap/styles.css';
import '@mantine/code-highlight/styles.css';
import { useMemo } from 'react';
import type { AppProps } from 'next/app';
import daysjs from 'dayjs';
import customParseFormat from 'dayjs/plugin/customParseFormat';
import { MantineProvider } from '@mantine/core';
import { defaultTheme } from '@/config/theme';
import { WorkspaceProvider } from '@/utils/hoc/WorkspaceProvider';
import { useLiveQuery } from 'dexie-react-hooks';
import { db, Flag } from '@/config/db';
import DEFAULT_FLAGS from '@/utils/constants/defaultCategories';

// Extend dayjs constructor to support custom formats of input strings
daysjs.extend(customParseFormat);

export default function App({ Component, pageProps }: AppProps) {
  useMemo(() => {
    (() => {
      if (typeof window !== 'undefined') {
        try {
          db.open()
            .then(async () => ({
              workspaces: await db.workspaces.count(),
              flags: await db.flags.count(),
            }))
            .then(async (counts) => {
              // Store records one time if they don't exist
              if (counts.flags === 0) {
                const arr: Flag[] = [
                  {
                    priority: 0,
                    name: 'test',
                    color: 'red',
                  },
                ];

                await db.flags.bulkAdd(DEFAULT_FLAGS);
              }
              // const category = db.categories.toArray();
              // console.log('count:::', category);
              console.log('data:::', { counts });
            })
            .catch((error) => {
              console.error('Error openining database connection', error);
            });
        } catch (err) {
          console.error(err);
        }
      }
    })();
  }, []);

  return (
    <MantineProvider theme={defaultTheme} defaultColorScheme='dark'>
      <WorkspaceProvider>
        <Component {...pageProps} />
      </WorkspaceProvider>
    </MantineProvider>
  );
}

import { ReactNode } from 'react';
import { DefaultLayout } from '@/layouts/DefaultLayout';
import { Grid, ScrollArea, Stack, Card, Text } from '@mantine/core';
import { CodeHighlightTabs } from '@mantine/code-highlight';

const code = '@at-root :not(.rc-table-cell-no-row-hover) #{&} {}';

export default function CodeSnippets() {
  const handleGetFileIcon = (fileName: string): ReactNode => {
    return <div>jls</div>;
  };

  return (
    <DefaultLayout>
      <Grid>
        <Grid.Col span={4}>
          <Stack>
            <Card>
              <Text>Targeting parent CSS element example</Text>
              <Text truncate>
                This snippet allows you to target the parent element from within
                a child element. It's fucking epic!
              </Text>
            </Card>
            <div style={{ border: '1px dashed orange' }} />
            <div style={{ border: '1px dashed orange' }} />
            <div style={{ border: '1px dashed orange' }} />
            <div style={{ border: '1px dashed orange' }} />
          </Stack>
        </Grid.Col>
        <Grid.Col span={8}>
          {/*<ScrollArea.Autosize mah='auto' mx='auto'>*/}
          <CodeHighlightTabs
            code={[{ fileName: 'demo.tsx', code, language: 'tsx' }]}
            copyLabel='Copy snippet'
            getFileIcon={handleGetFileIcon}
          />
          {/*</ScrollArea.Autosize>*/}
        </Grid.Col>
      </Grid>
    </DefaultLayout>
  );
}

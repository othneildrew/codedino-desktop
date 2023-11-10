import Image from 'next/image';
import { Text } from '@mantine/core';
import { Group } from '@mantine/core';

export const AppLogoGroup = () => (
  <Group align='center'>
    <Image src='/logo.png' alt='codedino' width={132} height={32} />
    <Text size='sm' c='dimmed'>
      A community-driven developer toolbox for frontend developers
    </Text>
  </Group>
);

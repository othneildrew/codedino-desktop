import { ReactNode, useState } from 'react';
import Image from 'next/image';
import { AppLogoGroup } from '@/layouts/components/AppLogoGroup';
import { AppNavigation } from '@/layouts/components/AppNavigation';
import { AppBar } from '@/layouts/components/AppBar';
import {
  AppShell,
  Burger,
  Group,
  Modal,
  ScrollArea,
  Skeleton,
  Text,
  Stack,
} from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import { InputBase, Input, Combobox, useCombobox, Button } from '@mantine/core';

export interface DefaultLayoutProps {
  children?: ReactNode;
}

export const DefaultLayout = ({
  children,
  appShellMainRef,
}: DefaultLayoutProps) => {
  const [opened, { toggle }] = useDisclosure();
  const [workspaceModalOpen, { toggle: toggleWorkspaceModal }] =
    useDisclosure(false);
  const [isCreateWorkspace, setIsCreatingWorkspace] = useState(false);

  const workspaces: string[] = [];

  const combobox = useCombobox({
    onDropdownClose: () => combobox.resetSelectedOption(),
  });

  const options = workspaces?.map((item) => (
    <Combobox.Option value={item} key={item}>
      {item}
    </Combobox.Option>
  ));

  const [value, setValue] = useState<string | null>(null);

  const handleNewWorkspaceClick = () => {};

  return (
    <>
      <AppShell
        header={{ height: 60 }}
        navbar={{
          width: 240,
          breakpoint: 'sm',
          collapsed: { mobile: !opened },
        }}
        padding='sm'
      >
        <AppShell.Header>
          <Group h='100%' px='sm' justify='space-between'>
            {/*<Burger opened={opened} onClick={toggle} hiddenFrom='sm' size='sm' />*/}
            <AppLogoGroup />
            <Combobox
              store={combobox}
              onOptionSubmit={(val) => {
                setValue(val);
                combobox.closeDropdown();
              }}
            >
              <Combobox.Target>
                <InputBase
                  component='button'
                  pointer
                  rightSection={<Combobox.Chevron />}
                  onClick={() => combobox.toggleDropdown()}
                  style={{ minWidth: 260 }}
                >
                  {value || (
                    <Input.Placeholder>Select a workspace</Input.Placeholder>
                  )}
                </InputBase>
              </Combobox.Target>

              <Combobox.Dropdown>
                {workspaces.length === 0 ? (
                  <Combobox.Empty>
                    You don't have any workspaces. Workspaces help you organize
                    related projects.
                    <Button my='sm' onClick={() => toggleWorkspaceModal()}>
                      Create workspace
                    </Button>
                  </Combobox.Empty>
                ) : (
                  <>
                    <Combobox.Options mah={200} style={{ overflowY: 'auto' }}>
                      {options}
                    </Combobox.Options>
                    <Combobox.Footer>
                      <Button
                        fullWidth
                        variant='subtle'
                        color='gray'
                        justify='flex-start'
                        onClick={() => toggleWorkspaceModal()}
                      >
                        New workspace
                      </Button>
                    </Combobox.Footer>
                  </>
                )}
              </Combobox.Dropdown>
            </Combobox>
          </Group>
        </AppShell.Header>
        <AppShell.Navbar p='sm'>
          {/*<AppShell.Section>APPS</AppShell.Section>*/}
          <AppShell.Section grow my='sm' component={ScrollArea}>
            <AppNavigation />
          </AppShell.Section>
          <AppShell.Section>
            <Stack gap='xs'>
              <Text size='xs' c='dimmed'>
                Leave Feedback
              </Text>
              <Text size='xs' c='dimmed'>
                About
              </Text>
            </Stack>
          </AppShell.Section>
        </AppShell.Navbar>
        <AppShell.Main ref={appShellMainRef}>{children}</AppShell.Main>
      </AppShell>
      <Modal
        opened={workspaceModalOpen}
        onClose={() => toggleWorkspaceModal()}
        title='Create new workspace'
      >
        <Input placeholder='acme-corp' />
        <Button fullWidth mt='sm' disabled>
          Save
        </Button>
      </Modal>
    </>
  );
};

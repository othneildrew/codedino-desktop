import NextLink from 'next/link';
import { useRouter } from 'next/router';
import {
  BsBookmarksFill,
  BsFileArrowDownFill,
  BsFileEarmarkCodeFill,
  BsFillHouseDoorFill,
  BsGearFill,
  BsReception4,
  BsRecordBtnFill,
  BsSignMergeLeftFill,
  BsTerminalFill,
  BsTrello,
} from 'react-icons/bs';
import { NavLink } from '@mantine/core';

export interface AppRoute {
  label: string;
  path: string;
  Icon?: any;
  disabled?: boolean;
}

export const ROUTES: AppRoute[] = [
  // {
  //   label: 'Project Overview',
  //   path: '/',
  //   Icon: BsFillHouseDoorFill,
  // },
  // {
  //   label: 'PC Monitoring',
  //   path: '/monitor',
  //   Icon: BsReception4,
  // },
  // {
  //   label: 'Pull Requests',
  //   path: '/pull-requests',
  //   Icon: BsSignMergeLeftFill,
  // },
  {
    label: 'Bookmarks',
    path: '/bookmarks',
    Icon: BsBookmarksFill,
  },
  // {
  //   label: 'Console Tools',
  //   path: '/console',
  //   Icon: BsTerminalFill,
  // },
  {
    label: 'Code Snippets',
    path: '/code-snippets',
    Icon: BsFileEarmarkCodeFill,
  },
  {
    label: 'README Templates',
    path: '/readme-templates',
    Icon: BsFileArrowDownFill,
  },
  // {
  //   label: 'Screen Captures',
  //   path: '/screen-captures',
  //   Icon: BsRecordBtnFill,
  // },
  {
    label: 'Todos',
    path: '/todos',
    Icon: BsTrello,
  },
  {
    label: 'Settings',
    path: '/settings',
    Icon: BsGearFill,
  },
];

export const AppNavigation = () => {
  const router = useRouter();
  return (
    <>
      {ROUTES.map(({ label, path, Icon, disabled }) => {
        const active =
          path !== '/'
            ? router.pathname.startsWith(path)
            : router.pathname === path;
        return (
          <NavLink
            key={path}
            href={path}
            component={NextLink}
            label={label}
            leftSection={<Icon size='1rem' />}
            active={active}
            disabled={disabled}
          />
        );
      })}
    </>
  );
};

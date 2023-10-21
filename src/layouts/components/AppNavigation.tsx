import {
  List,
  ListItem,
  ListItemButton,
  ListItemContent,
  ListItemDecorator
} from '@mui/joy';
import { useRouter } from 'next/router';
import { JSX, ReactNode, useEffect } from 'react';
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
  BsTrello
} from 'react-icons/bs';
// import

export interface AppRoute {
  label: string;
  path: string;
  Icon?: ReactNode | JSX.Element;
}

export const ROUTES: AppRoute[] = [
  {
    label: 'Project Overview',
    path: '/',
    Icon: BsFillHouseDoorFill,
  },
  {
    label: 'PC Monitoring',
    path: '/monitor',
    Icon: BsReception4,
  },
  {
    label: 'Pull Requests',
    path: '/pull-requests',
    Icon: BsSignMergeLeftFill,
  },
  {
    label: 'Bookmarks',
    path: '/bookmarks',
    Icon: BsBookmarksFill,
  },
  {
    label: 'Console Tools',
    path: '/console',
    Icon: BsTerminalFill,
  },
  {
    label: 'Code Snippets',
    path: '/code-snippets',
    Icon: BsFileEarmarkCodeFill
  },
  {
    label: 'README Templates',
    path: '/readme',
    Icon: BsFileArrowDownFill,
  },
  {
    label: 'Screen Captures',
    path: '/screen-captures',
    Icon: BsRecordBtnFill,
  },
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

  useEffect(() => {
    console.log('router:::', router);
  }, [router]);

  return (
    <List sx={{ mt: 3 }} aria-label="navigation" size="sm">
      {ROUTES.map(({ label, path, Icon }) => {
        const isSelected = router.pathname === path;
        return (
          <ListItem key={path}>
            <ListItemButton selected={isSelected} variant={isSelected ? 'solid' : 'plain'} onClick={() => router.push(path)}>
              <ListItemDecorator>{Icon && <Icon />}</ListItemDecorator>
              <ListItemContent>{label}</ListItemContent>
            </ListItemButton>
          </ListItem>
        )
      })}
    </List>
  )
}

// color={isSelected ? 'primary' : 'neutral'} selected={true}
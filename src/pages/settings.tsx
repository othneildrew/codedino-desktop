import { DefaultLayout } from '@/layouts/DefaultLayout'
import { Box, Card, Stack, Typography } from '@mui/joy'
import { SettingsTabs } from '@/features/settings/SettingsTabs'

export default function Settings() {
  return (
    <DefaultLayout>
      <Box sx={{ p: 2.5 }} component='div'>
        <Typography sx={{ mb: 2 }} level='h3' component='h1'>
          Settings
        </Typography>

        <SettingsTabs />

        <Box component='div'>
          {/*<Stack direction="row" spacing={2}>*/}
          {/*  <Card sx={{ width: 80, height: 80 }} />*/}
          {/*  <Card sx={{ width: 80, height: 80 }} />*/}
          {/*  <Card sx={{ width: 80, height: 80 }} />*/}
          {/*</Stack>*/}
        </Box>
      </Box>
    </DefaultLayout>
  )
}

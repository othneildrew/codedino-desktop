import Image from 'next/image';
import { Typography } from '@mui/joy';

export const AppLogoGroup = () => (
  <>
    <Image src="/logo.png" alt="codedino" width={132} height={32} />
    <Typography sx={{ mt: 0.625 }} level="body3">A community-driven developer toolbox for frontend developers</Typography>
  </>
)
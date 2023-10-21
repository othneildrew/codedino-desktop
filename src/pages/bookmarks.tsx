import { DefaultLayout } from '@/layouts/DefaultLayout';
import { Box, Button, Card, IconButton, Input, Typography } from '@mui/joy';
import { BsPlus } from 'react-icons/bs';

export default function Bookmarks() {


  return (
    <DefaultLayout>
      <Box sx={{ p: 2.5 }} component="div">
        <Typography level="h3" component="h1">Bookmarks</Typography>

        <Box component="div" sx={{ display: 'flex', justifyContent: 'space-between' }}>
          <Input
            sx={{ mt: 2, width: 400 }}
            placeholder="Filter search bookmark"
            // endDecorator={
            //   <Button
            //     disabled
            //     variant="solid"
            //     color="primary"
            //   >
            //     Add
            //   </Button>
            // }
          />

          <IconButton sx={{ '--IconButton-size': 24 }}>
            <BsPlus color="#ffffff" />
          </IconButton>
        </Box>

        <Box sx={{ mt: 3 }} component="div">
          <Card>
            jklajsdf
          </Card>
        </Box>

      </Box>
    </DefaultLayout>
  );
}
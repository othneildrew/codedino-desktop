import { extendTheme } from '@mui/joy/styles'

export const defaultTheme = extendTheme({
  // mode: 'dark',
  // colorScheme: 'dark',
  components: {
    JoyBox: {
      defaultProps: {
        component: 'div',
      }
    }
  },
})
import { DefaultMantineColor, MantineColorsTuple } from '@mantine/core'

type ExtendedCustomColors = 'dino-green' | DefaultMantineColor

declare module '@mantine/core' {
  export interface MantineThemeColorsOverride {
    colors: Record<ExtendedCustomColors, MantineColorsTuple>
  }
}

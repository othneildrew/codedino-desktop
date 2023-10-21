import { Html, Head, Main, NextScript } from 'next/document'
import { getInitColorSchemeScript } from '@mui/joy/styles'

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body>
        {getInitColorSchemeScript({ defaultMode: 'dark' })}
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}

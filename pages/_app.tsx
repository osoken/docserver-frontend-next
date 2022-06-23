import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { CacheProvider } from '@emotion/react'
import lightTheme from '../styles/theme/lightTheme'
import { ThemeProvider } from '@mui/material'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <CacheProvider value={pageProps.clientSideEmotionCache}>
      <ThemeProvider theme={lightTheme}>
        <Component {...pageProps} />
      </ThemeProvider>
    </CacheProvider>
  )
}

export default MyApp

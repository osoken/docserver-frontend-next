import React from 'react'
import type { AppProps } from 'next/app'
import { CacheProvider } from '@emotion/react'
import lightTheme from '../styles/theme/lightTheme'
import { ThemeProvider, CssBaseline } from '@mui/material'
import createEmotionCache from '../src/createEmotionCache'
import '../styles/globals.css'
import Layout from '../components/layouts/mainLayout'


function MyApp({ Component, pageProps }: AppProps) {
  const clientSideEmotionCache = createEmotionCache()
  const emotionCache = clientSideEmotionCache
  return (
    <CacheProvider value={emotionCache}>
      <ThemeProvider theme={lightTheme}>
        <CssBaseline />
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ThemeProvider>
    </CacheProvider>
  )
}

export default MyApp

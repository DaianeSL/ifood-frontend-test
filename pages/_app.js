import Head from 'next/head'
import { element, func, object, oneOfType } from 'prop-types'
import { ThemeProvider } from 'styled-components'

import { AuthProvider } from '../src/context'
import { APP_NAME, APP_DESC } from '../src/constants/project'

import GlobalStyle from '../src/assets/styles/globalStyles'
import theme from '../src/assets/styles/theme'

import 'react-datepicker/dist/react-datepicker.css'

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <AuthProvider>
        <>
          <Head>
            <title>{APP_NAME}</title>
            <meta name="description" content={APP_DESC} />
          </Head>
          <Component {...pageProps} />
        </>
      </AuthProvider>
    </ThemeProvider>
  )
}

export default MyApp

MyApp.propTypes = {
  Component: oneOfType([element, func]).isRequired,
  pageProps: object,
}

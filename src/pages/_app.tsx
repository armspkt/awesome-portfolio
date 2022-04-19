import React from 'react'
import App from 'next/app'
import Head from 'next/head'
import Error from 'next/error'
import { ErrorBoundary } from 'react-error-boundary'
import { createGlobalStyle } from 'styled-components'
import AtomSpinner from '../components/common/AtomSpinner'
import { ThemeProvider } from '@material-ui/styles'
import CssBaseline from '@material-ui/core/CssBaseline'
import theme from '../theme'
import { AnimatePresence, motion } from 'framer-motion'
import Script from 'next/script'

const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: 'Operator Mono Light';
    src: url('../static/fonts/OperatorMono-Light.otf');
  }

  @font-face {
    font-family: 'Operator Mono Light Italic';
    src: url('../static/fonts/OperatorMono-LightItalic.otf');
  }

  html, body {
    margin: 0;
    padding: 0;
    font-family: Roboto,-apple-system, BlinkMacSystemFont, Avenir Next, Avenir, Helvetica, sans-serif;
    font-display: swap;
  }
`

export default class MyApp extends App {
  state = {
    loading: true,
  }

  componentDidMount() {
    // Remove the server-side injected CSS.
    const jssStyles = document.querySelector('#jss-server-side')
    if (jssStyles && jssStyles.parentNode) {
      jssStyles.parentNode.removeChild(jssStyles)
    }

    requestAnimationFrame(() => {
      this.setState({ loading: false })
    })
  }

  ErrorFallback() {
    return <Error statusCode={0} />
  }

  render() {
    const { props } = this as any
    const { Component, pageProps, router } = props
    const { loading } = this.state

    return (
      <>
        <Head>
          {/* Use minimum-scale=1 to enable GPU rasterization */}
          <meta
            name="viewport"
            content="minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no, viewport-fit=cover"
          />
        </Head>

        {/* Global Site Tag (gtag.js) - Google Analytics */}
        <Script
          strategy="afterInteractive"
          src={`https://www.googletagmanager.com/gtag/js?id=${'G-CK8J4LSY7H'}`}
        />
        <Script
          id="gtag-init"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${'G-CK8J4LSY7H'}', {
              page_path: window.location.pathname,
            });
          `,
          }}
        />

        {/* Google Tag Manager - Global base code */}
        <Script
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
            (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer', '${'GTM-K4HJLGF'}');
          `,
          }}
        />

        <ErrorBoundary FallbackComponent={this.ErrorFallback}>
          <GlobalStyle />
          <AtomSpinner loading={loading} />
          {loading && <Component {...pageProps} />}
          <AnimatePresence>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0, position: 'absolute', width: '100%' }}
              key={router.route}
            >
              <ThemeProvider theme={theme}>
                {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
                <CssBaseline />
                <Component {...pageProps} />
              </ThemeProvider>
            </motion.div>
          </AnimatePresence>
        </ErrorBoundary>
      </>
    )
  }
}

//TODO: _app.tsx make performance down in https://web.dev

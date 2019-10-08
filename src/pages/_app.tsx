import React from 'react'
import App from 'next/app'
import Error from 'next/error'
import ErrorBoundary from 'react-error-boundary'
import { createGlobalStyle } from 'styled-components'
import { Transition, animated } from 'react-spring/renderprops.cjs'
import AtomSpinner from '../components/common/AtomSpinner'
import { ThemeProvider } from '@material-ui/styles'
import CssBaseline from '@material-ui/core/CssBaseline'
import theme from '../theme'

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
    loading: true
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

  render() {
    const { props } = this as any
    const { Component, pageProps, router } = props
    const { loading } = this.state
    const items = [
      {
        id: router.route,
        Component,
        pageProps
      }
    ]

    return (
      <ErrorBoundary FallbackComponent={Error}>
        <GlobalStyle />
        <AtomSpinner loading={loading} />
        {loading && <Component {...pageProps} />}
        <div style={{ position: 'relative' }}>
          <Transition
            native
            unique
            items={items}
            keys={items => items.id}
            initial={{ opacity: 1 }}
            from={{ opacity: 0 }}
            enter={{ opacity: 1 }}
            leave={{
              opacity: 0,
              position: 'absolute'
            }}
          >
            {({ Component, pageProps }) => (styles: any) => (
              <animated.div
                style={{
                  ...styles,
                  width: '100%'
                }}
              >
                <ThemeProvider theme={theme}>
                  {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
                  <CssBaseline />
                  <Component {...pageProps} />
                </ThemeProvider>
              </animated.div>
            )}
          </Transition>
        </div>
      </ErrorBoundary>
    )
  }
}

//TODO: _app.tsx make performance down in https://web.dev

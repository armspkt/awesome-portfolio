import React from 'react'
import App, { Container } from 'next/app'
import Error from 'next/error'
import ErrorBoundary from 'react-error-boundary'
import { Transition, animated } from 'react-spring/renderprops.cjs'
import AtomSpinner from '../components/common/AtomSpinner'
import { ThemeProvider } from '@material-ui/styles'
import CssBaseline from '@material-ui/core/CssBaseline'
import theme from '../theme/theme'

// console.time('timer')

export default class MyApp extends App {
  state = {
    loading: true
  }

  static async getInitialProps({ Component, ctx }) {
    let pageProps = {}

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx)
    }

    return { pageProps }
  }

  componentDidMount() {
    // Remove the server-side injected CSS.
    const jssStyles = document.querySelector('#jss-server-side')
    if (jssStyles && jssStyles.parentNode) {
      jssStyles.parentNode.removeChild(jssStyles)
    }

    setTimeout(() => {
      // console.timeEnd('timer')
      requestAnimationFrame(() => {
        this.setState({ loading: false })
      })
    }, 500)
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
        <Container>
          <AtomSpinner loading={loading} />
          {loading && <Component {...pageProps} />}

          <div style={{ position: 'relative' }}>
            <Transition
              native
              unique
              items={items}
              keys={items => items.id}
              initial={{ opacity: 0 }}
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
        </Container>
      </ErrorBoundary>
    )
  }
}

//TODO: _app.tsx make performance down in https://web.dev

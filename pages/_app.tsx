import React from 'react'
import App, { Container } from 'next/app'
import { Transition, animated } from 'react-spring/renderprops.cjs'
import AtomSpinner from '../components/common/AtomSpinner'
// console.time('timer')

export default class MyApp extends App {
  state = {
    loading: true
  }

  static async getInitialProps({ Component, router, ctx }) {
    let pageProps = {}

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx)
    }

    return { pageProps }
  }

  componentDidMount() {
    // setTimeout(() => {
    //   this.setState({ loading: false })
    //   console.timeEnd('timer')
    // }, 16.667)
    requestAnimationFrame(() => {
      this.setState({ loading: false })
      // console.timeEnd('timer')
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
            {({ Component, pageProps }) => styles => (
              <animated.div
                style={{
                  ...styles,
                  width: '100%'
                }}
              >
                <Component {...pageProps} />
              </animated.div>
            )}
          </Transition>
        </div>
      </Container>
    )
  }
}

import React from 'react'
import App, { Container } from 'next/app'
import { Transition, animated } from 'react-spring'
import AtomSpinner from '../components/common/AtomSpinner'
console.time('timer')

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
    setTimeout(() => {
      this.setState({ loading: false })
      console.timeEnd('timer')
    }, 600)
  }

  render() {
    const { Component, pageProps, router } = this.props
    const { loading } = this.state
    const items = [
      {
        id: router.route,
        Component: Component,
        pageProps: pageProps
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
            leave={{ opacity: 0, position: 'absolute' }}
          >
            {({ Component, pageProps }) => styles => (
              <animated.div style={{ ...styles, width: '100%' }}>
                <Component {...pageProps} />
              </animated.div>
            )}
          </Transition>
        </div>
      </Container>
    )
  }
}

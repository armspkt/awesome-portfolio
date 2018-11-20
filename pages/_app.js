import React from 'react'
import App, { Container } from 'next/app'
import { Transition, animated } from 'react-spring'
import AtomSpinner from '../components/common/AtomSpinner'
console.time('timer')

export default class MyApp extends App {
  state = {
    loading: true
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({ loading: false })
      console.timeEnd('timer')
    }, 800)
  }

  static async getInitialProps({ Component, router, ctx }) {
    let pageProps = {}

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx)
    }

    return { pageProps }
  }

  render() {
    const { Component, pageProps } = this.props
    const { loading } = this.state
    const items = [
      {
        id: this.props.router.route,
        Component: this.props.Component,
        pageProps: this.props.pageProps
      }
    ]

    return (
      <Container>
        <AtomSpinner loading={this.state.loading} />
        {loading && <Component {...pageProps} />}

        {!loading && (
          <Transition
            native
            unique
            items={items}
            keys={items => items.id}
            from={{
              opacity: 0,
              position: 'absolute',
              width: '100%',
              height: '100%'
            }}
            enter={{ opacity: 1 }}
            leave={{ opacity: 0, position: 'absolute' }}
          >
            {({ Component, pageProps }) => styles => (
              <animated.div style={styles}>
                <Component {...pageProps} />
              </animated.div>
            )}
          </Transition>
        )}
      </Container>
    )
  }
}

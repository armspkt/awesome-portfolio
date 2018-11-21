import React from 'react'
import App, { Container } from 'next/app'
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

    return (
      <Container>
        <AtomSpinner loading={loading} />
        <Component {...pageProps} />
      </Container>
    )
  }
}

import React, { Component } from 'react'
import styled from 'styled-components'
import * as polished from 'polished'
import LiveEdit from '../components/common/LiveEdit'

const Container = styled.div`
  margin: 0 auto;
  max-width: 100%;
  width: ${polished.rem(1024)};
  padding: ${polished.rem(20)};
  padding-bottom: ${polished.rem(100)};
  text-align: center;
`

const noInlineExample = `
const Wrapper = ({ children }) => (
  <div style={{
    background: 'papayawhip',
    width: '100%',
    padding: '2rem'
  }}>
    {children}
  </div>
)
const Title = () => (
  <h3 style={{ color: 'palevioletred' }}>
    Hello World!
  </h3>
)
render(
  <Wrapper>
    <Title />
  </Wrapper>
)
`.trim()

class ReactLive extends Component {
  render() {
    return (
      <Container>
        <LiveEdit noInline code={noInlineExample} />
      </Container>
    )
  }
}

export default ReactLive

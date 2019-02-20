import Head from '../components/head'
import Nav from '../components/common/Nav'
import styled from 'styled-components'

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background: linear-gradient(45deg, #fe6b8b 30%, #ff8e53 90%);
  font-size: 5em;
  color: white;
`

export default () => (
  <div>
    <Head title="About" />
    <Nav />
    <Container>About</Container>
  </div>
)

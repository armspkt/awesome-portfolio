import Link from 'next/link'
import Head from '../components/head'
import Nav from '../components/nav'
import styled from 'styled-components'
// import { Parallax, ParallaxLayer } from 'react-spring/dist/addons.cjs.js'

const Container = styled.main`
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  width: 100%;
  height: 100vh;
  background: grey;
  font-size: 10em;
  font-weight: 800;
  color: white;
`

export default () => (
  <div>
    <Head title="Home2" />
    <Nav />
    <Container>
      <Link href="/ ">
        <button>GITHUB</button>
      </Link>
      Home
    </Container>
  </div>
)

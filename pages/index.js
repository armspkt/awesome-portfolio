import Link from 'next/link'
import Head from '../components/head'
import Nav from '../components/nav'
import TypeMessage from '../components/common/Typed'
import styled from 'styled-components'
import media from 'styled-media-query'
import Particles from 'react-particles-js'
import ParticleConfig from '../static/particlesjs-config.json'

// https://github.com/Wufe/react-particles-js
// https://github.com/VincentGarreau/particles.js/

const Title = styled.h1`
  color: red;
  font-size: 50px;
`

const ParticlesStyle = styled(Particles)`
  background-image: url(https://image.ibb.co/hH3sWU/bed_computer_dark_34174.jpg);
  background-size: cover;
  background-repeat: no-repeat;
  background-position: 50% 50%;
  ${media.lessThan('medium')`
    /* screen width is less than 768px (medium) */
    background-position: 47% 50%;
  `};
`

export default () => (
  <div>
    <Head title="Home" />
    <Nav />
    <div>
      <h1>Welcome to Next!</h1>

      <Title>My page</Title>

      <TypeMessage strings={[`I'm developer`, `私は開発者です`]} />
    </div>

    <ParticlesStyle params={ParticleConfig} height="100vh" />
  </div>
)

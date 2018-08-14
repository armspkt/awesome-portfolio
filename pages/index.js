import Link from 'next/link'
import Head from '../components/head'
import Nav from '../components/nav'
import TypeMessage from '../components/common/Typed'
import styled from 'styled-components'
import Particles from 'react-particles-js'
import ParticleConfig from '../static/particlesjs-config.json'

// https://github.com/Wufe/react-particles-js
// https://github.com/VincentGarreau/particles.js/

const Title = styled.h1`
  color: red;
  font-size: 50px;
`
export default () => (
  <div>
    <Head title="Home" />
    <Nav />
    <div>
      <h1>Welcome to Next!</h1>

      <Title>My page</Title>

      <TypeMessage
        strings={[
          `I'm developer`,
          'ฉันเป็นนักพัฒนาซอฟต์แวร์',
          `私は開発者です`
        ]}
      />
    </div>

    <Particles
      params={ParticleConfig}
      style={{
        width: '100%',
        backgroundImage: `url(https://image.ibb.co/hH3sWU/bed_computer_dark_34174.jpg)`,
        backgroundSize: 'cover',
        backgroundPosition: `50% 50%`,
        backgroundRepeat: 'no-repeat'
      }}
    />
  </div>
)

import React, { Component, Fragment } from 'react'
import styled from 'styled-components'
import media from 'styled-media-query'
// import Particles from 'react-particles-js'
// import ParticleConfig from '../static/particlesjs-config.json'
import Head from '../components/head'
import Nav from '../components/nav'
import TypeMessage from '../components/common/Typed'
import Profile from '../components/Profile'
import Glitch from '../components/Glitch'

// https://flatuicolors.com/palette/us

// const ParticlesStyle = styled(Particles)`
//   width: 100%;
//   height: 100vh;
//   height: calc(var(--vh, 1vh) * 100);
//   background-image: url('/static/mac-bg-min.jpg');
//   background-size: cover;
//   background-repeat: no-repeat;
//   background-position: 50% 50%;
//   ${media.lessThan('small')`
//     background-size: cover;
//     background-position: 47.5% 50%;
//   `};

//   canvas {
//     position: absolute;
//   }
// `

const Container = styled.div`
  position: relative;
  /* background: linear-gradient(
    90deg,
    #fca09a,
    #fcccd3,
    #ffcc9d,
    #98ddad,
    #81d7ec,
    #a0aaed
  ); */
  background: linear-gradient(45deg, #ee76ad 0%, #efac78 100%);
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

const TypedContainer = styled.div`
  position: absolute;
  z-index: 1;
`

class Index extends Component {
  componentDidMount() {
    window.addEventListener('resize', this.handleOnResize)
    this.handleOnResize()
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.handleOnResize)
  }

  handleOnResize = () => {
    // First we get the viewport height and we multiple it by 1% to get a value for a vh unit
    let vh = window.innerHeight * 0.01
    // Then we set the value in the --vh custom property to the root of the document
    document.documentElement.style.setProperty('--vh', `${vh}px`)
  }

  render() {
    return (
      <Fragment>
        {/* <link rel="preload" href="/static/mac-bg-min.jpg" as="image" /> */}
        <Head />
        <Nav />
        <Container>
          {/* <ParticlesStyle params={ParticleConfig} /> */}
          <TypedContainer>
            <TypeMessage strings={[`I'm developer.`, `こんにちは`]} />
            {/* こんにちは　KONNICHIWA (Con-ni-chi-wah) Hello/Hi */}
          </TypedContainer>
          <div>
            <h1>Supakorn Thongtra</h1>
            <h1>rainstormza</h1>
          </div>
          {/* <Profile /> */}
          <Glitch />
        </Container>
      </Fragment>
    )
  }
}

export default Index

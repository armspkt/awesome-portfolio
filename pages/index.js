import React, { Component } from 'react'
import styled from 'styled-components'
// import media from 'styled-media-query'
// import Particles from 'react-particles-js'
import Head from '../components/head'
import Nav from '../components/nav'
import TypeMessage from '../components/common/Typed'
// import ParticleConfig from '../static/particlesjs-config.json'

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
`

const Rainbow = styled.span`
  background-image: -webkit-gradient(
    linear,
    left top,
    right top,
    color-stop(0, #f22),
    color-stop(0.15, #f2f),
    color-stop(0.3, #22f),
    color-stop(0.45, #2ff),
    color-stop(0.6, #2f2),
    color-stop(0.75, #2f2),
    color-stop(0.9, #ff2),
    color-stop(1, #f22)
  );
  background-image: gradient(
    linear,
    left top,
    right top,
    color-stop(0, #f22),
    color-stop(0.15, #f2f),
    color-stop(0.3, #22f),
    color-stop(0.45, #2ff),
    color-stop(0.6, #2f2),
    color-stop(0.75, #2f2),
    color-stop(0.9, #ff2),
    color-stop(1, #f22)
  );
  color: transparent;
  -webkit-background-clip: text;
  background-clip: text;
`

const RainbowBackground = styled.div`
  background: linear-gradient(
    90deg,
    #fca09a,
    #fcccd3,
    #ffcc9d,
    #98ddad,
    #81d7ec,
    #a0aaed
  );
  height: 100px;
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
      <div>
        <link rel="preload" href="/static/mac-bg-min.jpg" as="image" />
        <div>
          <Head title="Home" />
          <Nav />
        </div>
        <div>
          <Container>
            {/* <ParticlesStyle params={ParticleConfig} /> */}
          </Container>
          <Rainbow>Rainbows are colorful and scalable and lovely</Rainbow>
          <RainbowBackground>
            inspire by https://devcon4.ethereum.org/
          </RainbowBackground>

          {/* https://rainbowcoding.com/2011/12/02/how-to-create-rainbow-text-in-html-css-javascript/ */}
        </div>
      </div>
    )
  }
}

export default Index

// https://github.com/fisshy/react-scroll

import React, { Component } from 'react'
import Link from 'next/link'
import Head from '../components/head'
import Nav from '../components/nav'
import TypeMessage from '../components/common/Typed'
import AtomSpinner from '../components/common/AtomSpinner'
import styled from 'styled-components'
import media from 'styled-media-query'
import Particles from 'react-particles-js'
import ParticleConfig from '../static/particlesjs-config.json'

// https://github.com/Wufe/react-particles-js
// https://github.com/VincentGarreau/particles.js/

// https://flatuicolors.com/palette/us

const ParticlesStyle = styled(Particles)`
  background-image: url('/static/mac-bg-min.jpg');
  background-size: cover;
  background-repeat: no-repeat;
  background-position: 50% 50%;
  ${media.lessThan('small')`
    background-size: cover;
    background-position: 47.5% 50%;
  `};
`

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

class Index extends Component {
  state = {
    loading: true
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({ loading: false })
    }, 1500)
  }

  render() {
    return (
      <div>
        <link rel="preload" href="/static/mac-bg-min.jpg" as="image" />
        {this.state.loading ? (
          <div>
            <AtomSpinner />
          </div>
        ) : (
          <div>
            <Head title="Home" />
            <Nav />

            <Container>
              <ParticlesStyle params={ParticleConfig} height="99.5vh" />
              <div>
                <TypeMessage strings={[`I'm developer.`, `こんにちは`]} />
                {/* こんにちは　KONNICHIWA (Con-ni-chi-wah) Hello/Hi */}
              </div>
              {/* <Rainbow>Rainbows are colorful and scalable and lovely</Rainbow> */}
              {/* https://rainbowcoding.com/2011/12/02/how-to-create-rainbow-text-in-html-css-javascript/ */}
            </Container>
          </div>
        )}
      </div>
    )
  }
}

export default Index

// https://github.com/fisshy/react-scroll

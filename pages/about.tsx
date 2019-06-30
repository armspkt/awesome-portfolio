import React, { useRef, useEffect } from 'react'
import styled from 'styled-components'
import Head from '../components/head'
import Nav from '../components/common/Nav'
import lax from 'lax.js'
import Plx from 'react-plx'

const Container = styled.div<any>`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 200vh;
  background: linear-gradient(45deg, #fe6b8b 30%, #ff8e53 90%);
  font-size: 5em;
  color: white;
  flex-direction: column;
`

const exampleParallaxData = [
  {
    start: 0,
    end: 300,
    properties: [
      {
        startValue: 0,
        endValue: 90,
        property: 'rotate'
      },
      {
        startValue: 1,
        endValue: 1.5,
        property: 'scale'
      },
      {
        startValue: 1,
        endValue: 0.75,
        property: 'opacity'
      }
    ]
  },
  {
    start: 350,
    duration: 300,
    properties: [
      {
        startValue: '#3cb99c',
        endValue: 'rgba(50,50,200,0.8)',
        property: 'backgroundColor'
      },
      {
        startValue: 0,
        endValue: 100,
        property: 'translateY'
      },
      {
        startValue: 0.75,
        endValue: 1,
        property: 'opacity'
      }
    ]
  },
  {
    start: 700,
    duration: 1000,
    properties: [
      {
        startValue: 100,
        endValue: 0,
        property: 'translateY'
      },
      {
        startValue: 1.5,
        endValue: 2,
        property: 'scale'
      },
      {
        startValue: 90,
        endValue: 0,
        property: 'rotate'
      },
      // Blur is not performant
      // Used just as an example for CSS filters
      {
        startValue: 0,
        endValue: 2,
        property: 'blur'
      }
    ]
  }
]

const styles = {
  width: 100,
  height: 100,
  lineHeight: '100px',
  textAlign: 'center',
  borderRadius: 20,
  backgroundColor: '#34ba9c',
  color: '#fff',
  left: '50%',
  marginLeft: -50,
  top: 100,
  position: 'fixed',
  fontFamily: 'Helvetica, Arial, sans-serif'
}

export default () => {
  const refEl: any = useRef()

  useEffect(() => {
    lax.setup()

    document.addEventListener(
      'scroll',
      function(x) {
        console.log(x)
        lax.update(window.scrollY)
      },
      false
    )

    lax.update(window.scrollY)
    lax.addElement(refEl.current)
  }, [])

  return (
    <div>
      <Head title="About" />
      <Nav />
      <Container>
        About
        <p ref={refEl} data-lax-scale="0 0, 600 1,800 0" data-lax-anchor="self">
          laxx.js
        </p>
      </Container>
      <div style={{ height: 3000 }}>
        <Plx parallaxData={exampleParallaxData} style={styles}>
          Hello!
        </Plx>
      </div>
    </div>
  )
}

// https://github.com/alexfoxy/laxxx
// https://www.youtube.com/watch?v=jaVy3SCibJw&feature=share
// https://github.com/Stanko/react-plx
// https://github.com/Prinzhorn/skrollr

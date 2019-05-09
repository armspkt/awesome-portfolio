import React, { useRef, useEffect } from 'react'
import styled from 'styled-components'
import Head from '../components/head'
import Nav from '../components/common/Nav'
import lax from 'lax.js'

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

export default () => {
  const refEl: any = useRef()

  useEffect(() => {
    lax.setup()

    document.addEventListener(
      'scroll',
      function(x) {
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
    </div>
  )
}

// https://github.com/alexfoxy/laxxx
// https://www.youtube.com/watch?v=jaVy3SCibJw&feature=share

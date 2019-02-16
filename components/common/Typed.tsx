import { useEffect, useRef } from 'react'
import Typed from 'typed.js'
import styled from 'styled-components'
import media from 'styled-media-query'

const TypedContainer = styled.div`
  font-family: 'Operator Mono Light Italic';
  font-size: 3rem;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;

  ${media.lessThan('medium')`
    font-size: 2rem;
  `};
`

const TypeMessage = props => {
  const typedRef = useRef<any>('')

  useEffect(() => {
    // If you want to pass more options as props, simply add
    // your desired props to this destructuring assignment.
    const { strings } = props
    // You can pass other options here, such as typing speed, back speed, etc.
    const options = {
      strings: strings,
      smartBackspace: true,
      loop: false,
      typeSpeed: 100,
      backSpeed: 50
    }
    // typedRef refers to the <span> in the render() method
    const typedInstace = new Typed(typedRef.current, options)

    return () => {
      if (typedInstace) {
        typedInstace.destroy()
      }
    }
  }, [])

  return (
    <TypedContainer>
      {/* <span style={{ marginRight: '1rem' }}>Test:</span> */}
      <span style={{ whiteSpace: 'pre' }} ref={typedRef} />
    </TypedContainer>
  )
}

export default TypeMessage

// https://github.com/mattboldt/typed.js/

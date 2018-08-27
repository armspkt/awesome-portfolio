import React, { Component } from 'react'
import Typed from 'typed.js'
import styled from 'styled-components'
import media from 'styled-media-query'

const TypedContainer = styled.div`
  font-family: 'Operator Mono Light Italic';
  font-size: 2rem;
  position: absolute;
  /* width: 100%; */
  /* height: 100%; */
  display: flex;
  justify-content: center;
  align-items: center;
  top: 0;
  margin-left: 70%;
  margin-top: 15%;
  color: white;

  ${media.lessThan('medium')`
    font-size: 1.6rem;
    top: 25%;
    left: 25%;
    margin-left: 0;
    margin-top: 0;
  `};

  ${media.between('medium', 'large')`
    margin-left: 50%;
  `};
`

class TypeMessage extends Component {
  componentDidMount() {
    // If you want to pass more options as props, simply add
    // your desired props to this destructuring assignment.
    const { strings } = this.props
    // You can pass other options here, such as typing speed, back speed, etc.
    const options = {
      strings: strings,
      loop: true,
      typeSpeed: 100,
      backSpeed: 50
    }
    // this.el refers to the <span> in the render() method
    this.typed = new Typed(this.el, options)
  }

  componentWillUnmount() {
    // Make sure to destroy Typed instance on unmounting
    // to prevent memory leaks
    this.typed.destroy()
  }

  render() {
    return (
      <TypedContainer>
        <span
          style={{ whiteSpace: 'pre' }}
          ref={el => {
            this.el = el
          }}
        />
      </TypedContainer>
    )
  }
}

export default TypeMessage

// https://github.com/mattboldt/typed.js/

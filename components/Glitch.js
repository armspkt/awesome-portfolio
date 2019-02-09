import React from 'react'
import styled from 'styled-components'

const GlitchStyle = styled.a`
  font-size: 130px;
  line-height: 1;
  font-family: 'Poppins', sans-serif;
  font-weight: 700;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  margin: 0;
  text-decoration: none;
  color: #fff;
  &:before,
  &:after {
    display: block;
    content: 'ARM';
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    opacity: 0.8;
  }
  &:after {
    color: #f0f;
    z-index: -2;
  }
  &:before {
    color: #0ff;
    z-index: -1;
  }
  &:hover {
    &:before {
      animation: glitch 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94) both infinite;
    }
    &:after {
      animation: glitch 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94) reverse both
        infinite;
    }
  }
  @keyframes glitch {
    0% {
      -webkit-transform: translate(0);
      transform: translate(0);
    }
    20% {
      -webkit-transform: translate(-5px, 5px);
      transform: translate(-5px, 5px);
    }
    40% {
      -webkit-transform: translate(-5px, -5px);
      transform: translate(-5px, -5px);
    }
    60% {
      -webkit-transform: translate(5px, 5px);
      transform: translate(5px, 5px);
    }
    80% {
      -webkit-transform: translate(5px, -5px);
      transform: translate(5px, -5px);
    }
    to {
      -webkit-transform: translate(0);
      transform: translate(0);
    }
  }
`

function Glitch() {
  return (
    <div>
      <GlitchStyle href="#">ARM</GlitchStyle>
    </div>
  )
}

export default Glitch

// https://ihatetomatoes.net/how-to-create-css-glitch-effect/

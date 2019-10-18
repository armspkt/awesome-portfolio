import React from 'react'
import styled from 'styled-components'

const Box = styled.div`
  width: 40vmin;
  height: 40vmin;
  border: 1px dashed rgba(255, 255, 255, 0.4);
  position: relative;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    border-radius: 50%;
    border: 1px dashed rgba(255, 255, 255, 0.4);
    transform: scale(1.42);
  }
`

const SpinContainer = styled.div`
  width: 100%;
  height: 100%;
  animation: spin 12s linear infinite;
  position: relative;

  @keyframes spin {
    to {
      transform: rotate(1turn);
    }
  }
`

const Shape = styled.div`
  width: 100%;
  height: 100%;
  transition: border-radius 1s ease-out;
  border-radius: 60% 40% 30% 70% / 60% 30% 70% 40%;
  animation: morph 8s ease-in-out infinite both alternate;
  position: absolute;
  overflow: hidden;
  z-index: 5;

  @keyframes morph {
    0% {
      border-radius: 40% 60% 60% 40% / 60% 30% 70% 40%;
    }
    100% {
      border-radius: 40% 60%;
    }
  }
`

const BD = styled.img`
  width: 95%;
  height: 95%;
  position: absolute;
  left: 0%;
  top: 0%;
  background-size: 70%;
  background-position: center center;
  background-repeat: no-repeat;
  display: flex;
  color: #003;
  font-size: 5vw;
  font-weight: bold;
  align-items: center;
  justify-content: center;
  text-align: center;
  text-transform: uppercase;
  animation: spin 12s linear infinite reverse;
  opacity: 1;
  z-index: 2;
`

function Profile() {
  return (
    <Box>
      <SpinContainer>
        <Shape>
          <picture>
            <source srcSet="/static/arm-white.webp" type="image/webp" />
            <BD src="/static/arm-white.png" />
          </picture>
        </Shape>
      </SpinContainer>
    </Box>
  )
}

export default Profile

    // https://9elements.com/io/css-border-radius/
    // https://9elements.github.io/fancy-border-radius/

import styled, { createGlobalStyle } from 'styled-components'
import { Transition, animated, config } from 'react-spring'
import StarParallax from './StarParallax'

const GlobalStyle = createGlobalStyle`
  body {
    overflow: hidden;
  }
`

const Container = styled(animated.div)`
  position: fixed;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
  background: #2d3436;
  top: 0;
  left: 0;

  * {
    box-sizing: border-box;
  }
`

const AtomSpinnerContainer = styled.div`
  height: 120px;
  width: 120px;
  overflow: hidden;
`

const SpinnerIner = styled.div`
  position: relative;
  display: block;
  height: 100%;
  width: 100%;
`

const SpinnerLine = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  border-radius: 50%;
  animation-duration: 1s;
  border-left-width: calc(180px / 25);
  border-top-width: calc(180px / 25);
  border-right-width: calc(180px / 25);
  border-left-color: #61dafb;
  border-left-style: solid;
  border-right-color: #61dafb;
  border-right-style: solid;
  border-top-style: solid;
  border-top-color: transparent;

  &:nth-child(1) {
    will-change: transform;
    animation: atom-spinner-animation-1 1s linear infinite;
    -webkit-animation: atom-spinner-animation-1 1s linear infinite;
    transform: rotateZ(120deg) rotateX(66deg) rotateZ(0deg);
    -webkit-transform: rotateZ(120deg) rotateX(66deg) rotateZ(0deg);
  }
  &:nth-child(2) {
    will-change: transform;
    animation: atom-spinner-animation-2 1s linear infinite;
    -webkit-animation: atom-spinner-animation-2 1s linear infinite;
    transform: rotateZ(240deg) rotateX(66deg) rotateZ(0deg);
    -webkit-transform: rotateZ(240deg) rotateX(66deg) rotateZ(0deg);
  }
  &:nth-child(3) {
    will-change: transform;
    animation: atom-spinner-animation-3 1s linear infinite;
    -webkit-animation: atom-spinner-animation-3 1s linear infinite;
    transform: rotateZ(360deg) rotateX(66deg) rotateZ(0deg);
    -webkit-transform: rotateZ(360deg) rotateX(66deg) rotateZ(0deg);
  }

  @keyframes atom-spinner-animation-1 {
    100% {
      transform: rotateZ(120deg) rotateX(66deg) rotateZ(360deg);
      -webkit-transform: rotateZ(120deg) rotateX(66deg) rotateZ(360deg);
    }
  }

  @keyframes atom-spinner-animation-2 {
    100% {
      transform: rotateZ(240deg) rotateX(66deg) rotateZ(360deg);
      -webkit-transform: rotateZ(240deg) rotateX(66deg) rotateZ(360deg);
    }
  }

  @keyframes atom-spinner-animation-3 {
    100% {
      transform: rotateZ(360deg) rotateX(66deg) rotateZ(360deg);
      -webkit-transform: rotateZ(360deg) rotateX(66deg) rotateZ(360deg);
    }
  }
`

const SpinnerCircle = styled.div`
  display: block;
  position: absolute;
  background: #61dafb;
  border-radius: 50%;
  width: 20px;
  height: 20px;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  will-change: transform;
`

const spring = { ...config.default, precision: 0.1, duration: 500 }

const AtomSpiner = ({ loading }) => {
  return (
    <Transition
      native
      items={loading}
      from={{ opacity: 1 }}
      enter={{ opacity: 1 }}
      leave={{ opacity: 0 }}
      config={spring}
    >
      {loading =>
        loading &&
        (props => (
          <Container style={props}>
            <GlobalStyle />
            <StarParallax />
            <AtomSpinnerContainer>
              <SpinnerIner>
                <SpinnerLine />
                <SpinnerLine />
                <SpinnerLine />
                <SpinnerCircle />
              </SpinnerIner>
            </AtomSpinnerContainer>
          </Container>
        ))
      }
    </Transition>
  )
}

export default AtomSpiner

import styled from 'styled-components'
import Transition from 'react-transition-group/Transition'
import StarParallax from './StarParallax'

const Container = styled.div`
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

const AtomSpinner = styled.div`
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
  will-change: transform;

  &:nth-child(1) {
    animation: atom-spinner-animation-1 1s linear infinite;
    transform: rotateZ(120deg) rotateX(66deg) rotateZ(0deg);
  }
  &:nth-child(2) {
    animation: atom-spinner-animation-2 1s linear infinite;
    transform: rotateZ(240deg) rotateX(66deg) rotateZ(0deg);
  }
  &:nth-child(3) {
    animation: atom-spinner-animation-3 1s linear infinite;
    transform: rotateZ(360deg) rotateX(66deg) rotateZ(0deg);
  }

  @keyframes atom-spinner-animation-1 {
    100% {
      transform: rotateZ(120deg) rotateX(66deg) rotateZ(360deg);
    }
  }

  @keyframes atom-spinner-animation-2 {
    100% {
      transform: rotateZ(240deg) rotateX(66deg) rotateZ(360deg);
    }
  }

  @keyframes atom-spinner-animation-3 {
    100% {
      transform: rotateZ(360deg) rotateX(66deg) rotateZ(360deg);
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

const duration = 500

const defaultStyle = {
  transition: `opacity ${duration}ms ease-in-out`,
  opacity: 0,
  willChange: 'opacity'
}

const transitionStyles = {
  entering: { opacity: 0 },
  entered: { opacity: 1 }
}

const Fade = ({ in: inProp }) => (
  <Transition in={inProp} timeout={duration} unmountOnExit>
    {state => (
      <Container
        style={{
          ...defaultStyle,
          ...transitionStyles[state]
        }}
      >
        <StarParallax />
        <AtomSpinner>
          <SpinnerIner>
            <SpinnerLine />
            <SpinnerLine />
            <SpinnerLine />
            <SpinnerCircle />
          </SpinnerIner>
        </AtomSpinner>
      </Container>
    )}
  </Transition>
)

export default props => <Fade in={props.loading} />

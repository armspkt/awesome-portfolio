import styled, { createGlobalStyle } from 'styled-components'
import StarParallax from './StarParallax'
import { motion, AnimatePresence } from 'framer-motion'

interface Props {
  loading: boolean
}

const GlobalStyle: any = createGlobalStyle`
  body {
    overflow: hidden;
  }
`

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

const SpinnerInner = styled.div`
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
  will-change: transform;
  transform: translate(-50%, -50%);
`

const Fade = ({ inProp }: { inProp: boolean }) => (
  <AnimatePresence initial={false}>
    {inProp && (
      <motion.div
        initial={{ opacity: 1 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, ease: 'easeInOut' }}
        exit={{ opacity: 0 }}
      >
        <Container>
          <GlobalStyle />
          <StarParallax />
          <AtomSpinner>
            <SpinnerInner>
              <SpinnerLine />
              <SpinnerLine />
              <SpinnerLine />
              <SpinnerCircle />
            </SpinnerInner>
          </AtomSpinner>
        </Container>
      </motion.div>
    )}
  </AnimatePresence>
)

function AtomSpinnerComponent({ loading }: Props) {
  return <Fade inProp={loading} />
}

export default AtomSpinnerComponent

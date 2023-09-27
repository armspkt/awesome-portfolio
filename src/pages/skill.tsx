import Head from '../components/head'
import Nav from '../components/common/Nav'
import styled from 'styled-components'
import { Turnstile, type TurnstileInstance } from '@marsidev/react-turnstile'
import { useRef } from 'react'

const TURNSTILE_SITE_KEY = '0x4AAAAAAACZiactAHstXUv2'

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background: linear-gradient(45deg, #ff8e53 30%, #fe6b8b 90%);
  color: white;
`

const Skill = () => {
  const ref = useRef<TurnstileInstance>(null)
  const ref2 = useRef<TurnstileInstance>(null)

  return (
    <div>
      <Head title="Skill"></Head>
      <Nav />
      <Container>
        {/* <div>Skill</div> */}

        <div>
          <Turnstile
            ref={ref}
            siteKey={TURNSTILE_SITE_KEY}
            options={{ action: 'login' }}
            scriptOptions={{ id: 'login' }}
          />
          <div>
            <button onClick={() => alert(ref.current?.getResponse())}>
              Get response
            </button>
          </div>
          <div>
            <button onClick={() => ref.current?.reset()}>Reset widget</button>
          </div>
          <div>
            <button onClick={() => ref.current?.remove()}>Remove widget</button>
          </div>
          <div>
            <button onClick={() => ref.current?.render()}>Render widget</button>
          </div>
        </div>
      </Container>
    </div>
  )
}

export default Skill

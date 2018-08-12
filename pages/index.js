import Link from 'next/link'
import Head from '../components/head'
import Nav from '../components/nav'
import TypeMessage from '../components/common/Typed'
import styled from 'styled-components'

const Title = styled.h1`
  color: red;
  font-size: 50px;
`
export default () => (
  <div>
    <Head title="Home" />
    <Nav />
    <div>
      <h1>Welcome to Next!</h1>

      <Title>My page</Title>

      <TypeMessage
        strings={[
          `I'm developer`,
          'ฉันเป็นนักพัฒนาซอฟต์แวร์',
          `私は開発者です`
        ]}
      />
    </div>
  </div>
)

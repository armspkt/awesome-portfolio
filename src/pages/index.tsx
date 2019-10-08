import { NextPage } from 'next'
import React from 'react'
import styled from 'styled-components'
import Head from '../components/head'
import Nav from '../components/common/Nav'
import TypeMessage from '../components/common/Typed'
import Profile from '../components/common/Profile'
// import Rows from '../components/Generic'

const Container = styled.div`
  position: relative;
  background: linear-gradient(45deg, #2196f3 30%, #21cbf3 90%);
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

const Name = styled.div`
  font-weight: 400;
  color: white;

  span {
    font-weight: 100;
  }
`

const Index: NextPage = () => {
  // const [count, setCount] = React.useState(0)
  // if (count === 1) {
  //   // Simulate a JS error
  //   throw new Error('I crashed!')
  // }

  return (
    <>
      <Head />
      <Nav />
      <Container>
        <Name>
          <h1>
            Supakorn <span>Thongtra</span>
          </h1>
        </Name>
        <TypeMessage strings={[`I'm developer.`]} />
        <Profile />
        {/* <Rows input={[1]} />
        <Rows input={1} />
        <Rows input={true} /> // Also works! */}
        {/* <button onClick={() => setCount(count + 1)}>Click me {count} </button> */}
      </Container>
    </>
  )
}

export default Index

// https://codesandbox.io/s/y3j31r13zz
// https://codepen.io/armspkt/pen/dybqPKB

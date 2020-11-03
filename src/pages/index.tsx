import { NextPage } from 'next'
import React from 'react'
import styled from 'styled-components'
import Head from '../components/head'
import Nav from '../components/common/Nav'
import TypeMessage from '../components/common/Typed'
import Profile from '../components/common/Profile'
// import Rows from '../components/Generic'
import useSWR from 'swr'

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

const RainbowButton = styled.button`
  border: 0;
  outline: 0;
  box-sizing: content-box;
  display: inline-block;
  margin: 13px 0 0;
  padding: 2px;
  border-radius: 30px;
  background: linear-gradient(
    to right,
    #fdde5c,
    #f8ab5e,
    #f56a62,
    #a176c8,
    #759beb,
    #65beb3,
    #70db96
  );
  color: #000;
  font-size: 17px;
  font-weight: 400;
  cursor: pointer;

  span {
    background: #fff;
    display: block;
    border-radius: 30px;
    padding: 9px 20px 10px;
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
        {/* <br />
        <br />
        <br />
        <RainbowButton>
          <span>สร้างสไตล์ของคุณ</span>
        </RainbowButton> */}
      </Container>
    </>
  )
}

export default Index

// https://codesandbox.io/s/y3j31r13zz
// https://codepen.io/armspkt/pen/dybqPKB
// https://github.com/jwilber/roughViz
// https://medium.com/swlh/create-a-dark-mode-of-your-app-using-styled-components-a44bc5a59330
// https://encycolorpedia.com/3e4989

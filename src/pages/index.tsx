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

const NameContainer = styled.div`
  background: white;
  border-radius: 4px;
  margin: 16px;
`

const Name = styled.div`
  font-size: 32px;
  font-weight: 400;
  background-image: linear-gradient(90deg, #12c2e9, #c471ed, #f64f59);
  /* background-image: linear-gradient(
    90deg,
    #ec6192,
    #ec4c34,
    #ffbd2b,
    #ebde56,
    #57c754,
    #53a1eb
  ); */
  /* background-image: linear-gradient(
    -90deg,
    #adfbda,
    #35c3ff,
    #fda399,
    #76d880,
    #ebf38b,
    #adfbda
  ); */
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  border-radius: 4px;
  padding: 4px 8px;
  text-align: center;

  h1 {
    margin: 0;
  }

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

const Card = styled.div`
  position: relative;
  margin-top: 1rem;
  margin-bottom: 1rem;
  margin-left: 1.5rem;
  margin-right: 1.5rem;
  display: flex;
  width: 16rem;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  padding: 1rem;
  border-radius: 20px;
  min-height: 350px;
  background: rgb(0, 204, 255);
  /* background: linear-gradient(
    45deg,
    rgba(0, 204, 255, 0.44861694677871145) 0%,
    rgba(212, 0, 212, 0.4514180672268907) 100%
  ); */
  background: linear-gradient(
    45deg,
    #fdde5c,
    #f8ab5e,
    #f56a62,
    #a176c8,
    #759beb,
    #65beb3,
    #70db96
  );
  transition: all 300ms ease-in-out;

  &::before {
    position: absolute;
    width: 8rem;
    content: '';
    /* background: linear-gradient(#00ccff, #d400d4); */
    background: linear-gradient(
      #70db96,
      #65beb3,
      #759beb,
      #a176c8,
      #f56a62,
      #f8ab5e,
      #fdde5c
    );
    -webkit-animation: animate 2s linear infinite;
    animation: animate 2s linear infinite;
    height: 140%;
    opacity: 0;
  }

  &::after {
    position: absolute;
    content: '';
    border-radius: 16px;
    inset: 4px;
    background-color: #fff;
  }

  &:hover {
    transform: scale(1.065);
    opacity: 1;
  }

  &:hover::before {
    opacity: 1;
  }

  @keyframes animate {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
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
        <NameContainer>
          <Name>
            Supakorn <span>Thongtra</span>
          </Name>
        </NameContainer>
        <TypeMessage strings={[`I'm developer.`]} />
        <Profile />
        {/* <button onClick={() => setCount(count + 1)}>Click me {count} </button> */}
        {/* <br />
        <RainbowButton>
          <span>สร้างสไตล์ของคุณ</span>
        </RainbowButton> */}

        {/* <Card>
          <div>test</div>
        </Card> */}
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

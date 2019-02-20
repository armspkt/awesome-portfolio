import React, { Fragment } from 'react'
import styled from 'styled-components'
import Head from '../components/head'
import Nav from '../components/common/Nav'
import TypeMessage from '../components/common/Typed'

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

function Index() {
  return (
    <Fragment>
      <Head />
      <Nav />
      <Container>
        <Name>
          <h1>
            Supakorn <span>Thongtra</span>
          </h1>
        </Name>
        <TypeMessage strings={[`I'm developer.`]} />
      </Container>
    </Fragment>
  )
}

export default Index

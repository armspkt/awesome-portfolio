import { Fragment } from 'react'
import Link from 'next/link'
import styled, { createGlobalStyle } from 'styled-components'
import media from 'styled-media-query'

// styled-components v4
// https://medium.com/styled-components/announcing-styled-components-v4-better-faster-stronger-3fe1aba1a112
const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: 'Operator Mono Light';
    src: url('../static/fonts/OperatorMono-Light.otf');
  }

  @font-face {
    font-family: 'Operator Mono Light Italic';
    src: url('../static/fonts/OperatorMono-LightItalic.otf');
  }

  html, body {
    margin: 0;
    padding: 0;
    font-family: -apple-system, BlinkMacSystemFont, Avenir Next, Avenir,
          Helvetica, sans-serif;
  }

  body {
    overflow: hidden;
  }
`
// fix styled-compoennts-v4-beta not working with styled-components at the same level when use GlobalStyle (only build on production)
const FixSyledComponentsBeta = styled.div`
  display: block;
`

const NavStyle = styled.nav`
  position: fixed;
  margin: 0;
  width: 100%;
  z-index: 999;
  /* background: salmon; */
`

const NavContent = styled.div`
  margin: 0 auto;
  max-width: 980px;
  padding: 0 22px;
  position: relative;
  padding-left: calc(max(22px, env(safe-area-inset-left)));
  padding-right: calc(max(22px, env(safe-area-inset-right)));
`

const NavUlStyle = styled.ul`
  cursor: default;
  margin: 0;
  padding: 0;
  width: auto;
  height: 44px;
  display: flex;
  justify-content: space-between;
  user-select: none;
  list-style: none;
`

const NavLiStyle = styled.li`
  padding: 10px;
  color: white;
`

const Nav = () => (
  <Fragment>
    <GlobalStyle />
    <FixSyledComponentsBeta>
      <NavStyle>
        <NavContent>
          <NavUlStyle>
            <NavLiStyle>HOME</NavLiStyle>
            <NavLiStyle>GITHUB</NavLiStyle>
          </NavUlStyle>
        </NavContent>
      </NavStyle>
    </FixSyledComponentsBeta>
  </Fragment>
)

export default Nav

import { Fragment } from 'react'
import Link from 'next/link'
import styled, { createGlobalStyle } from 'styled-components'
// import media from 'styled-media-query'

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
  cursor: pointer;
  padding: 10px;
`

const Nav = () => (
  <Fragment>
    <GlobalStyle />
    <NavStyle>
      <NavContent>
        <NavUlStyle>
          <Link prefetch href="/home" passHref>
            <NavLiStyle>HOME</NavLiStyle>
          </Link>

          <Link prefetch href="/" passHref>
            <NavLiStyle>GITHUB</NavLiStyle>
          </Link>
        </NavUlStyle>
      </NavContent>
    </NavStyle>
  </Fragment>
)

export default Nav

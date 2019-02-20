import { Fragment } from 'react'
import Link from 'next/link'
import styled, { createGlobalStyle } from 'styled-components'
import media from 'styled-media-query'
// import Button from '@material-ui/core/Button'

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
    font-family: Roboto,-apple-system, BlinkMacSystemFont, Avenir Next, Avenir, Helvetica, sans-serif;
  }
`

const NavStyle = styled.nav`
  color: white;
  font-weight: 300;
  font-size: 1.5rem;
  position: fixed;
  width: 100%;
  z-index: 999;
`

const NavContent = styled.div`
  margin: 0 auto;
  max-width: 980px;
  padding: 0;
  position: relative;
  padding-left: calc(max(22px, env(safe-area-inset-left)));
  padding-right: calc(max(22px, env(safe-area-inset-right)));

  ${media.lessThan('980px')`
    padding: 0 4vw;
  `};

  ${media.lessThan('small')`
    padding: 0 8vw;
  `};
`

const NavUlStyle = styled.ul`
  cursor: default;
  margin: 0;
  padding: 0;
  width: auto;
  height: 70px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  user-select: none;
  list-style: none;
`

const NavLiStyle = styled.li`
  cursor: pointer;
  padding: 10px;
`

const ButtonContainer = styled.div`
  margin-left: auto;
`

const Nav = () => (
  <Fragment>
    <GlobalStyle />
    <NavStyle>
      <NavContent>
        <NavUlStyle>
          <Link prefetch href="/" passHref>
            <NavLiStyle>Home</NavLiStyle>
          </Link>

          <Link prefetch href="/about" passHref>
            <NavLiStyle>About</NavLiStyle>
          </Link>
          <Link prefetch href="/skill" passHref>
            <NavLiStyle>Skills</NavLiStyle>
          </Link>
          <Link prefetch href="/experience" passHref>
            <NavLiStyle>Experience</NavLiStyle>
          </Link>
          <ButtonContainer>
            {/* <Button variant="outlined" color="primary">
              Contact
            </Button> */}
          </ButtonContainer>
        </NavUlStyle>
      </NavContent>
    </NavStyle>
  </Fragment>
)

export default Nav

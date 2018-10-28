import { Fragment } from 'react'
// import Link from 'next/link'
import styled from 'styled-components'
import media from 'styled-media-query'

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
    <NavStyle>
      <NavContent>
        <NavUlStyle>
          <NavLiStyle>HOME</NavLiStyle>
          <NavLiStyle>GITHUB</NavLiStyle>
        </NavUlStyle>
      </NavContent>
    </NavStyle>
  </Fragment>
)

export default Nav

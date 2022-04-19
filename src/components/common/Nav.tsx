import Link from 'next/link'
import styled from 'styled-components'
import media from 'styled-media-query'
import IconButton from '@material-ui/core/IconButton'
import SaveAltIcon from '@material-ui/icons/SaveAlt'

const NavStyle = styled.nav`
  color: white;
  font-weight: 300;
  font-size: 1.5rem;
  position: fixed;
  width: 100%;
  z-index: 999;

  /* ${media.lessThan('small')`
    overflow: scroll;
  `}; */
`

const NavContent = styled.div`
  margin: 0 auto;
  max-width: 980px;
  padding: 0;
  position: relative;
  padding-left: calc(max(22px, env(safe-area-inset-left)));
  padding-right: calc(max(22px, env(safe-area-inset-right)));

  ${media.lessThan('medium')`
    padding: 0 4vw;
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

const Nav = () => (
  <>
    <NavStyle>
      <NavContent>
        <NavUlStyle>
          {/* <Link href="/" passHref>
            <NavLiStyle>Home</NavLiStyle>
          </Link>
          <Link href="/about" passHref>
            <NavLiStyle>About</NavLiStyle>
          </Link>
          <Link href="/skill" passHref>
            <NavLiStyle>Skills</NavLiStyle>
          </Link>
          <Link href="/experience" passHref>
            <NavLiStyle>Experience</NavLiStyle>
          </Link>
          <Link href="/" passHref>
            <NavLiStyle>Blog</NavLiStyle>
          </Link>
          <Link href="/" passHref>
            <NavLiStyle>React Playground</NavLiStyle>
          </Link> */}
          <NavLiStyle style={{ marginLeft: 'auto' }}>
            <Link prefetch={false} href="/static/supakorn.pdf" passHref>
              <a target="_blank">
                <IconButton aria-label="SaveAlt">
                  <SaveAltIcon htmlColor="white" fontSize="large" />
                </IconButton>
              </a>
            </Link>
          </NavLiStyle>
        </NavUlStyle>
      </NavContent>
    </NavStyle>
  </>
)

export default Nav

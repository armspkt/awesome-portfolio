import Link from 'next/link'
import styled, { injectGlobal } from 'styled-components'

injectGlobal`
  // @font-face {
  //   font-family: 'Operator Mono';
  //   src: url('../fonts/Operator-Mono.ttf');
  // }

  body {
    margin: 0;
    font-family: -apple-system, BlinkMacSystemFont, Avenir Next, Avenir,
          Helvetica, sans-serif;
  }
`

const UlStyle = styled.ul`
  display: flex;
  justify-content: space-between;
`

const LiStyle = styled.li`
  display: flex;
  padding: 6px 8px;
`

const AStyle = styled.a`
  color: #067df7;
  text-decoration: none;
  font-size: 13px;
`

const links = [
  { href: 'https://github.com/segmentio/create-next-app', label: 'Github' }
].map(link => {
  link.key = `nav-link-${link.href}-${link.label}`
  return link
})

const Nav = () => (
  <nav>
    <UlStyle style={{ padding: '4px 16px' }}>
      <LiStyle>
        <Link prefetch href="/" passHref>
          <AStyle>Home</AStyle>
        </Link>
      </LiStyle>
      <UlStyle>
        {links.map(({ key, href, label }) => (
          <LiStyle key={key}>
            <Link href={href} passHref>
              <AStyle>{label}</AStyle>
            </Link>
          </LiStyle>
        ))}
      </UlStyle>
    </UlStyle>
  </nav>
)

export default Nav

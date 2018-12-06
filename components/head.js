import NextHead from 'next/head'
import { string } from 'prop-types'

const defaultTitle = `Arm Supakorn`
const defaultDescription = `Supakorn's awesome portfolio that used Nextjs to create. Usage React-Spring to create awesome animation. Usage Reactjs`
const defaultOGURL = 'http://armspkt.firebaseapp.com/'
const defaultOGImage = 'https://armspkt.firebaseapp.com/static/arm.jpg'

const Head = props => (
  <NextHead>
    <title>{props.title || defaultTitle}</title>
    <meta
      name="description"
      content={props.description || defaultDescription}
    />
    <meta
      name="keywords"
      content="rainstormza, Supakorn Thongtra, Arm, Portfolio, React, Nextjs, styled-components"
    />
    <meta name="author" content="Supakorn Thongtra" />
    <link rel="icon" sizes="192x192" href="/static/touch-icon.png" />
    <link rel="apple-touch-icon" href="/static/touch-icon.png" />
    <link rel="mask-icon" href="/static/favicon-mask.svg" color="#49B882" />
    <link rel="icon" href="/static/favicon.ico" />

    <meta property="fb:app_id" content="1980447875380995" />
    <meta property="og:site_name" content="Arm Supakorn" />
    <meta property="og:title" content={props.title || defaultTitle} />
    <meta
      property="og:description"
      content={props.description || defaultDescription}
    />
    <meta property="og:type" content="website" />
    <meta property="og:url" content={props.url || defaultOGURL} />
    <meta property="og:image" content={props.ogImage || defaultOGImage} />
    <meta property="og:image:width" content="1200" />
    <meta property="og:image:height" content="630" />
    <meta property="og:image:alt" content="Arm is smiling." />
    <meta property="og:locale" content="en_US" />

    <meta name="twitter:title" content={props.title || defaultTitle} />
    <meta
      name="twitter:description"
      content={props.description || defaultDescription}
    />
    <meta name="twitter:image" content={props.ogImage || defaultOGImage} />
    <meta name="twitter:site" content="@armspkt" />
    <meta name="twitter:card" content="summary_large_image" />
  </NextHead>
)

Head.propTypes = {
  title: string,
  description: string,
  url: string,
  ogImage: string
}

export default Head

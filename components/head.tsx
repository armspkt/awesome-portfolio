import NextHead from 'next/head'

interface Props {
  title?: string
  description?: string
  url?: string
  ogImage?: string
}

const defaultTitle = `Arm Supakorn`
const defaultDescription = `Supakorn's awesome portfolio that used Nextjs to create. Usage React-Spring to create awesome animation.`
const defaultOGURL = 'http://armspkt.firebaseapp.com/'
const defaultOGImage = 'https://armspkt.firebaseapp.com/static/arm.jpg'

const Head = ({ title, description, url, ogImage }: Props) => (
  <NextHead>
    <title>{title || defaultTitle}</title>
    <meta name="description" content={description || defaultDescription} />
    <meta
      name="keywords"
      content="rainstormza, Supakorn Thongtra, Arm, armspkt, Portfolio, React, Nextjs, styled-components, react-spring"
    />
    <meta name="author" content="Supakorn Thongtra" />
    <link rel="icon" sizes="192x192" href="/static/favicon.ico" />
    <link rel="apple-touch-icon" href="/static/favicon.ico" />
    <link rel="mask-icon" href="/static/favicon.ico" color="#49B882" />
    <link rel="icon" href="/static/favicon.ico" />

    <meta property="fb:app_id" content="1980447875380995" />
    <meta property="og:site_name" content="Arm Supakorn" />
    <meta property="og:title" content={title || defaultTitle} />
    <meta
      property="og:description"
      content={description || defaultDescription}
    />
    <meta property="og:type" content="website" />
    <meta property="og:url" content={url || defaultOGURL} />
    <meta property="og:image" content={ogImage || defaultOGImage} />
    <meta property="og:image:width" content="1200" />
    <meta property="og:image:height" content="630" />
    <meta property="og:image:alt" content="Arm is smiling." />
    <meta property="og:locale" content="en_US" />

    <meta name="twitter:title" content={title || defaultTitle} />
    <meta
      name="twitter:description"
      content={description || defaultDescription}
    />
    <meta name="twitter:image" content={ogImage || defaultOGImage} />
    <meta name="twitter:site" content="@armspkt" />
    <meta name="twitter:card" content="summary_large_image" />
  </NextHead>
)

export default Head

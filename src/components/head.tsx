import NextHead from 'next/head'
import { ReactNode } from 'react'

interface Props {
  title?: string
  description?: string
  url?: string
  ogImage?: string
  children?: ReactNode
}

const defaultTitle = `Arm Supakorn`
const defaultDescription = `Supakorn's awesome portfolio that used Nextjs to create. Usage framer-motion to create awesome animation.`
const defaultOGURL = 'http://armm.wtf/'
const defaultOGImage =
  'https://firebasestorage.googleapis.com/v0/b/armspkt.appspot.com/o/arm.jpg?alt=media&token=28d58609-57a4-40f3-81e3-2a24ad0f8172'

const Head = ({ title, description, url, ogImage, children }: Props) => (
  <NextHead>
    <title>{title || defaultTitle}</title>
    <meta name="description" content={description || defaultDescription} />
    <meta
      name="keywords"
      content="rainstormza, Supakorn Thongtra, Arm, armspkt, Portfolio, React, Nextjs, styled-components, framer-motion"
    />
    <meta name="author" content="Supakorn Thongtra" />
    <link rel="icon" sizes="192x192" href="/favicon.ico" />
    <link rel="apple-touch-icon" href="/favicon.ico" />
    <link rel="mask-icon" href="/favicon.ico" color="#49B882" />
    <link rel="icon" href="/favicon.ico" />

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

    {children}
  </NextHead>
)

export default Head

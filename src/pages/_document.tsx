import Document, {
  Html,
  Head,
  Main,
  NextScript,
  DocumentContext,
} from 'next/document'
import { ServerStyleSheet } from 'styled-components'
import { ServerStyleSheets } from '@material-ui/styles'
import flush from 'styled-jsx/server'
import theme from '../theme'

export default class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext): Promise<any> {
    const sheet = new ServerStyleSheet()
    const sheets = new ServerStyleSheets()
    const originalRenderPage = ctx.renderPage

    try {
      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: (App) => (props) =>
            sheets.collect(sheet.collectStyles(<App {...props} />)),
        })

      const initialProps = await Document.getInitialProps(ctx)
      return {
        ...initialProps,
        styles: (
          <>
            {initialProps.styles}
            {sheet.getStyleElement()}
            {sheets.getStyleElement()}
            {flush() || null}
          </>
        ),
      }
    } finally {
      sheet.seal()
    }
  }

  render() {
    return (
      <Html lang="en">
        <Head>
          {/* https://htmlhead.dev/#recommended-minimum */}
          <meta charSet="utf-8" />
          {/* PWA primary color */}
          <meta name="theme-color" content={theme.palette.primary.main} />
          <meta httpEquiv="X-UA-Compatible" content="IE=edge,chrome=1" />
          <meta
            name="google-site-verification"
            content="tSFXXxeK1C4D-BZuHfJSc0nbyPqDTB7U60rXqIn9MOE"
          />
          <link rel="manifest" href="/manifest.json" />
          <link
            rel="stylesheet"
            href="https://fonts.googleapis.com/css?family=Roboto:100,300,400,500&display=swap"
          />
          <link
            rel="stylesheet"
            href="https://fonts.googleapis.com/icon?family=Material+Icons"
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

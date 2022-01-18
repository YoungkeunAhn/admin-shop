import React from "react"
import Document, { Head, Main, NextScript } from "next/document"
import { ServerStyleSheets } from "@material-ui/styles"

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const materialSheets = new ServerStyleSheets()
    const originalRenderPage = ctx.renderPage

    try {
      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: (App) => (props) =>
            materialSheets.collect(<App {...props} />),
        })
      const initialProps = await Document.getInitialProps(ctx)
      return {
        ...initialProps,
        styles: (
          <React.Fragment>
            {initialProps.styles}
            {materialSheets.getStyleElement()}
          </React.Fragment>
        ),
      }
    } finally {
    }
  }

  render() {
    return (
      <html>
        <Head>
          <link
            rel='stylesheet'
            href='https://fonts.googleapis.com/icon?family=Material+Icons'
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </html>
    )
  }
}

export default MyDocument

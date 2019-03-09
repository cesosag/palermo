// _document is only rendered on the server side and not on the client side
// Event handlers like onClick can't be added to this file

// ./pages/_document.js
import Document, { Html, Head, Main, NextScript } from 'next/document'

class Body extends Main {
  render() {
    const { html } = this.context._documentProps
    return (
      <body id="__next" dangerouslySetInnerHTML={{__html: html}} />
    )
  }
}

class CustomDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx)
    return { ...initialProps }
  }

  render() {
    return (
      <Html>
        <Head />
        <Body />
        <NextScript />
      </Html>
    )
  }
}

export default CustomDocument
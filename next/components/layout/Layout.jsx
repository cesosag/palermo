import Head from 'next/head'
import Header from '../header/Header'
import Content from '../content/Content'
import Footer from '../footer/Footer'
import { Fragment } from 'react'

import './Layout.sass'

const Layout = ({title, children}) => (
  <Fragment>
    <Head>
      <title>{title}</title>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link rel="stylesheet" href="https://unpkg.com/normalize.css@8.0.1/normalize.css" />
    </Head>
    <Header>
      This is the header
    </Header>
    <Content>
      {children}
    </Content>
    <Footer>
      This is the Footer
    </Footer>
  </Fragment>
)

export default Layout

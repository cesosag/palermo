/* eslint-disable react/react-in-jsx-scope */
import fetch from 'isomorphic-unfetch'
import { BASE_API_URL } from '../config/constants'

import Layout from '../components/layout/Layout'
import Section from '../components/section/Section'

const Index = ({ data }) => (
  <Layout title={data.title}>
    <Section>
      Welcome {data.title}
    </Section>
  </Layout>
)

Index.getInitialProps = async function () {
  const res = await fetch(`${BASE_API_URL}pages/3`)
  const data = await res.json()
  return { data }
}

export default Index

import type { NextPageWithLayout } from 'next'
import { ReactElement } from 'react'
import Layout from '../layouts/Layout'

const Home: NextPageWithLayout = () => {
  return <div>Home</div>
}

Home.layout = Layout

export default Home

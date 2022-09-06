import React from 'react'
import { Section } from '@hummingbot/hbui/elements/layout'
import Layout from '../ui/components/Layout'
import Navigation from '../ui/components/Navigation'
import Hero from '../ui/components/home/Hero'
import ProductsServices from '../ui/components/home/ProductsServices'
import WhoWeAre from '../ui/components/home/WhoWeAre'
import Investors from '../ui/components/home/Investors'
import Footer from '../ui/components/footer'
import Seo from "../system/seo"

function Home() {
  return (
    <Layout>
      <Seo pageTitle="Home" />
      <Section>
        <Navigation />
        <Hero />
        <ProductsServices />
        <Investors />
        <WhoWeAre />
        <Footer />
      </Section>
    </Layout>
  )
}

export default Home

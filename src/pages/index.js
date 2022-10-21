import React from 'react'
import Layout from '../ui/components/Layout'
import Navigation from '../ui/components/Navigation'
import Hero from '../ui/components/home/Hero'
import Metrics from '../ui/components/home/Metrics'
import WhatCanYouDo from '../ui/components/home/WhatYouCanDo'
import Features from '../ui/components/home/Features'
import Strategies from '../ui/components/home/Strategies'
import Governance from '../ui/components/home/Governance'
import WhoWeAre from '../ui/components/home/WhoWeAre'
import ActionBlock from '../ui/components/ActionBlock'
import Footer from '../ui/components/footer'
import Seo from "../system/seo"

function Home() {
  return (
    <Layout>
      <Seo pageTitle="Home" />
      <Navigation />
      <Hero />
      <Metrics />
      <Features />
      <WhatCanYouDo />
      <Strategies />
      <Governance />
      <WhoWeAre />
      <ActionBlock />
      <Footer />
    </Layout>
  )
}

export default Home

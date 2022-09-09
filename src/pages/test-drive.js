import React from 'react'
import Layout from '../ui/components/Layout'
import Navigation from '../ui/components/Navigation'
import { Section } from '@hummingbot/hbui/elements/layout'
import TestHero from '../ui/components/testdrive/TestHero'
import WhoWeAre from '../ui/components/home/WhoWeAre'
import Footer from '../ui/components/footer'
import Seo from "../system/seo"

function TestDrive() {
    return (
      <Layout>
        <Seo pageTitle="Hummingbot Test Drive" />
        <Section>
          <Navigation />
            <TestHero />
            <WhoWeAre />
          <Footer />
        </Section>
      </Layout>
    )
  }
  
  export default TestDrive
  
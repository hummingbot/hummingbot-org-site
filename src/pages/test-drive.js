import React from 'react'
import Layout from '../ui/components/Layout'
import Navigation from '../ui/components/Navigation'
import { Section } from '@hummingbot/hbui/elements/layout'
import TestHero from '../ui/components/testdrive/TestHero'
import ActionBlock from '../ui/components/ActionBlock'
import Footer from '../ui/components/footer'
import Seo from "../system/seo"

function TestDrive() {
    return (
      <Layout>
        <Seo pageTitle="Hummingbot Test Drive" />
        <Section>
          <Navigation />
            <TestHero />
            <ActionBlock />
          <Footer />
        </Section>
      </Layout>
    )
  }
  
  export default TestDrive
  
import React from 'react'
import Layout from '../ui/components/Layout'
import Navigation from '../ui/components/Navigation'
import { Section } from '@hummingbot/hbui/elements/layout'
import TestHero from '../ui/components/testdrive/TestHero'
import InfoBlock from '../ui/components/testdrive/InfoBlock'
import InstallBlock from '../ui/components/testdrive/InstallBlock'
import Footer from '../ui/components/footer'
import Seo from "../system/seo"

function TestDrive() {
    return (
      <Layout>
        <Seo pageTitle="Hummingbot Test Drive" />
        <Section>
          <Navigation />
            <TestHero />
            <InfoBlock />
            <InstallBlock />
          <Footer />
        </Section>
      </Layout>
    )
  }
  
  export default TestDrive
  
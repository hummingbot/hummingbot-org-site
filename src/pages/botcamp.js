import React from 'react'
import Layout from '../ui/components/Layout'
import Navigation from '../ui/components/Navigation'
import { Section } from '@hummingbot/hbui/elements/layout'
import BotcampHero from '../ui/components/botcamp/BotcampHero'
import Testimonials from '../ui/components/botcamp/Testimonials'
import CodeSample from '../ui/components/botcamp/CodeSample'
import BotcampFAQ from '../ui/components/botcamp/BotcampFAQ'
import Footer from '../ui/components/footer'
import Seo from "../system/seo"

function BotCamp() {
    return (
      <Layout>
        <Seo pageTitle="Hummingbot BotCamp" />
        <Section>
          <Navigation />
            <BotcampHero />
            <Testimonials />
            <CodeSample />
            <BotcampFAQ />
          <Footer />
        </Section>
      </Layout>
    )
  }
  
  export default BotCamp
  
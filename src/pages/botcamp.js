import React from 'react'
import Layout from '../ui/components/Layout'
import Navigation from '../ui/components/Navigation'
import { Section } from '@hummingbot/hbui/elements/layout'
import BotcampHero from '../ui/components/botcamp/BotcampHero'
import WhyBotcamp from '../ui/components/botcamp/WhyBotCamp'
import Testimonials from '../ui/components/botcamp/Testimonials'
import Trajectory from '../ui/components/botcamp/Trajectory'
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
            <WhyBotcamp />
            <Testimonials />
            <Trajectory />
            <BotcampFAQ />
          <Footer />
        </Section>
      </Layout>
    )
  }
  
  export default BotCamp
  
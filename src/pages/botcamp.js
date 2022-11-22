import React from 'react'
import Layout from '../ui/components/Layout'
import Navigation from '../ui/components/Navigation'
import { Section } from '@hummingbot/hbui/elements/layout'
import BotcampHero from '../ui/components/botcamp/BotcampHero'
import WhyBotcamp from '../ui/components/botcamp/WhyBotCamp'
// import Testimonials from '../ui/components/botcamp/Testimonials'
import BotcampContent from '../ui/components/botcamp/Content'
import Trajectory from '../ui/components/botcamp/Trajectory'
import StudentScripts from '../ui/components/botcamp/StudentScripts'
import WhoBotcampFor from '../ui/components/botcamp/WhoBotcampFor'
import BotcampFAQ from '../ui/components/botcamp/BotcampFAQ'
import BotcampCTA from '../ui/components/botcamp/BotcampCTA'
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
            <BotcampContent />
            <StudentScripts />
            <WhoBotcampFor />
            <BotcampFAQ />
            <BotcampCTA />
          <Footer />
        </Section>
      </Layout>
    )
  }

  export default BotCamp
  
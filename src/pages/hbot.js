/* eslint no-unused-vars: [ "off", { "argsIgnorePattern": "tw" } ] */
import React from 'react'
import tw from 'twin.macro'
import Layout from '../ui/components/Layout'
import Navigation from '../ui/components/Navigation'
import { Section } from '@hummingbot/hbui/elements/layout'
import Hero from '../ui/components/hbot/Hero'
import HbotLinks from '../ui/components/hbot/HbotLinks'
import UseHbot from '../ui/components/hbot/UseHbot'
import Footer from '../ui/components/footer'
import Seo from "../system/seo"

function HBOT() {
  return (
    <Layout>
      <Seo pageTitle="HBOT" />
      <Section>
        <Navigation />
        <Hero />
        <HbotLinks />
        <UseHbot />
        <Footer />
      </Section>
    </Layout>
  )
}

export default HBOT

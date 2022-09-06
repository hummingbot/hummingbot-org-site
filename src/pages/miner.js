/* eslint no-unused-vars: [ "off", { "argsIgnorePattern": "tw" } ] */
import React from 'react'
import tw from 'twin.macro'
import Layout from '../ui/components/Layout'
import Navigation from '../ui/components/Navigation'
import { Link } from "gatsby"
import { Section, Container } from '@hummingbot/hbui/elements/layout'
import { P, H1, H5, H6, Body, Bold, Green } from '@hummingbot/hbui/elements/typography'
import Hero from '../ui/components/miner/Hero'
import WhatIsMiner from '../ui/components/miner/WhatIsMiner'
import HowItWorks from '../ui/components/miner/HowItWorks'
import RewardFactors from '../ui/components/miner/RewardFactors'
import BecomeMarketMaker from '../ui/components/miner/BecomeMarketMaker'
import Strategies from '../ui/components/miner/Strategies'
import ActionBlock from '../ui/components/miner/ActionBlock'
import Footer from '../ui/components/footer'
import Seo from "../system/seo"

function Miner() {
  return (
    <Layout>
      <Seo pageTitle="Miner" />
      <Section>
        <Navigation />
        <Hero />
        <WhatIsMiner />
        <HowItWorks />
        <RewardFactors />
        <BecomeMarketMaker />
        <Strategies />
        <ActionBlock />
        <Footer />
      </Section>
    </Layout>
  )
}

export default Miner

/* eslint no-unused-vars: [ "off", { "argsIgnorePattern": "tw" } ] */
import React from 'react'
import tw from 'twin.macro'
import { Section, Container, Separator } from '@hummingbot/hbui/elements/layout'
import { H3, H5, Body } from '@hummingbot/hbui/elements/typography'
import { GreySideLine } from '../../elements/layout'

function OpenSource() {
  return (
    <Section id='open-source' tw='overflow-hidden  py-20 md:py-28 lg:py-36 xl:py-52'>
      <Container>
        <H3 tw='leading-tight'>Hummingbot Open-Source</H3>
        <H5 isGreen isLight>Separately maintained by the Hummingbot Foundation</H5>
        <GreySideLine tw='mb-16 md:mb-24 lg:mb-28 mt-xs md:mt-sm' />
        <div tw='mt-xxl block md:flex items-start'>
          <div tw='pb-0 mt-xs border-l border-green pl-xs leading-tight w-full md:w-[40%] mr-0 md:mr-xl'>
            <Body tw='py-0'>Open-source, DIY software to deploy automated trading strategies on centralized and decentralized exchanges and protocols (AMMs)</Body>
          </div>
          <div tw='pb-0 mt-xs border-l border-green pl-xs leading-tight w-full md:w-[40%] mr-0 md:mr-xl'>
            <Body tw='py-0'>Hummingbot specializes in market making strategies, DEX connectivity, and bridging multiple trading venues (arbitrage, cross-exchange market making, AMM arbitrage)</Body>
          </div>
        </div>
      </Container>
    </Section>
  )
}

export default OpenSource

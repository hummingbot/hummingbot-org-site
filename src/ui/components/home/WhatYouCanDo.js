/* eslint no-unused-vars: [ "off", { "argsIgnorePattern": "tw" } ] */
import React from 'react'
import tw, { styled, css } from 'twin.macro'
import { Link } from 'gatsby'
import { Section, Separator } from '@hummingbot/hbui/elements/layout'
import { H4, H5, H6, P } from '@hummingbot/hbui/elements/typography'
import { Container } from '../../elements/layout'
import { ExternalLinkButton } from '@hummingbot/hbui/components/buttons'

function WhatCanYouDo() {
  return (
    <Section tw='py-8 md:py-12 lg:py-24'>
      <Container>
        <H4 isWhite isBold tw='pb-md md:pb-lg'>What can you do with Hummingbot?</H4>
        <RowGroup>
          <LeftColumn>
            <H6 isBold>Traders & Developers</H6>
          </LeftColumn>
          <ThreeColumnHolder>
            <div tw='pb-md'>
              <TitleP>Learn to build HFT bots</TitleP>
              <LightP>Join Hummingbot BotCamp and build your own custom HFT and market making bots</LightP>
              <Link to="/botcamp">
                <ExternalLinkButton isLarge tw='w-full' label="Learn with BotCamp" />
              </Link>
            </div>
            <div tw='pb-md'>
              <TitleP>Earn liquidity mining rewards</TitleP>
              <LightP>Run market making bots on Miner and earn rewards based on open order volume</LightP>
              <a href="https://coinalpha.com/miner" target="_blank" rel="noreferrer">
                <ExternalLinkButton tw='w-full justify-between' isLarge label="Hummingbot Miner" />
              </a>
            </div>
            <div tw='pb-md'>
              <TitleP>Capture HBOT bounties</TitleP>
              <LightP>Earn HBOT bounties by fixing bugs and contributing to the Hummingbot codebase</LightP>
              <a href="https://docs.hummingbot.org/maintenance/bounties" target="_blank" rel="noreferrer">
                <ExternalLinkButton tw='w-full justify-between' isLarge label="Bounties" />
              </a>
            </div>
          </ThreeColumnHolder>
        </RowGroup>
        <RowGroup>
          <LeftColumn>
            <H6 isBold>Exchanges & Protocols</H6>
          </LeftColumn>
          <ThreeColumnHolder>
            <div>
              <TitleP>Tap into our global market maker community</TitleP>
              <LightP>Become a certified exchange and access thousands of market makers globally</LightP>
              <a href="https://docs.hummingbot.org/maintenance/certification" target="_blank" rel="noreferrer">
                <ExternalLinkButton tw='w-full justify-between' isLarge label="Exchange Certification" />
              </a>
            </div>
            <div>
              <TitleP>Own your liquidity with self-serve market making</TitleP>
              <LightP>Save money vs hiring market makers by running your own market making bots</LightP>
              <a href="https://docs.hummingbot.org/strategies" target="_blank" rel="noreferrer">
                <ExternalLinkButton tw='w-full justify-between' isLarge label="Hummingbot Strategies" />
              </a>
            </div>
            <div>
              <TitleP>Add your own connector to the Hummingbot codebase</TitleP>
              <LightP>Build and contribute your CEX and DEX connectors to our open source codebase</LightP>
              <a href="https://docs.hummingbot.org/developers" target="_blank" rel="noreferrer">
                <ExternalLinkButton tw='w-full justify-between' isLarge label="Developer Docs" />
              </a>
            </div>
          </ThreeColumnHolder>
        </RowGroup>
      </Container>
    </Section>
  )
}

export default WhatCanYouDo

const RowGroup = styled.div(() => [
  tw`pb-12 block xl:(grid grid-cols-4 gap-8)`,
])

const LeftColumn = styled.div(() => [
  tw`col-span-1 pb-sm md:pb-md xl:pb-0`,
])

const RightColumn = styled.div(() => [
  tw`w-full lg:w-3/4`,
])

const TitleP = styled(P)(() => [
  tw`text-terminal`,
])

const LightP = styled(P)(() => [
  tw`text-white mt-xxs md:mt-xs opacity-70 mb-xs`,
])

const Column = styled.div(() => [
  tw`w-full pb-md md:(w-1/3 pr-xs)`,
])

const ThreeColumnHolder = styled.div(() => [
  tw`col-span-3 border-t-2 border-terminal pt-xs grid grid-cols-1 gap-0 md:(grid-cols-3 gap-4)`,
])

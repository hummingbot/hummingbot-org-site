/* eslint no-unused-vars: [ "off", { "argsIgnorePattern": "tw" } ] */
import React from 'react'
import tw from 'twin.macro'
import { styled } from 'twin.macro'
import { Link } from 'gatsby'
import { Section, Separator } from '@hummingbot/hbui/elements/layout'
import { H4, H5, H6, P } from '@hummingbot/hbui/elements/typography'
import { Container } from '../../elements/layout'
import { LinkButton } from '../../elements/buttons'
import LiquidityMiningIllustration from './assets/bots_mining_illustration.svg'
import { ExternalLinkButton } from "../../elements/buttons"

function WhatCanYouDo() {
  return (
    <Section tw='py-8 md:py-12 lg:py-24'>
      <Container>
        <H4 isWhite isBold>What can you do with Hummingbot?</H4>
        {/* <H6 isWhite isLight style={{opacity: '0.6'}}>Empowering companies to take control of token liquidity</H6> */}
        <CustomContainer>
          <LeftColumn>
            <H6 isBold>Traders & Developers</H6>
          </LeftColumn>
          <RightColumn>
            <ThreeColumnHolder>
              <Column>
                <TitleP>Learn to build HFT bots</TitleP>
                <LightP>Join Hummingbot BotCamp and build your own custom HFT and market making bots</LightP>
                <a href="https://hummingbot.thinkific.com" target="_blank" rel="noreferrer">
                  <ExternalLinkButton isLarge label="Hummingbot BotCamp" />
                </a>
              </Column>
              <Column>
                <TitleP>Earn liquidity mining rewards</TitleP>
                <LightP>Run market making bots on Miner and earn rewards based on open order volume</LightP>
                <a href="https://coinalpha.com/miner" target="_blank" rel="noreferrer">
                  <ExternalLinkButton isLarge label="Hummingbot Miner" />
                </a>
              </Column>
              <Column>
                <TitleP>Capture HBOT bounties</TitleP>
                <LightP>Earn HBOT bounties by fixing bugs and contributing to the Hummingbot codebase</LightP>
                <a href="https://hummingbot.org/maintenance/bounties" target="_blank" rel="noreferrer">
                  <ExternalLinkButton isLarge label="Bounties" />
                </a>
              </Column>
            </ThreeColumnHolder>
          </RightColumn>
        </CustomContainer>
        <CustomContainer>
          <LeftColumn>
            <H6 isBold>Exchanges & Protocols</H6>
          </LeftColumn>
          <RightColumn>
            <ThreeColumnHolder>
              <Column>
                <TitleP>Tap into our global market maker community</TitleP>
                <LightP>Become a certified exchange and access thousands of market makers globally</LightP>
                <a href="https://hummingbot.org/maintenance/certification" target="_blank" rel="noreferrer">
                  <ExternalLinkButton isLarge label="Exchange Certification" />
                </a>
              </Column>
              <Column>
                <TitleP>Own your liquidity with self-serve market making</TitleP>
                <LightP>Save money vs hiring market makers by running your own market making bots</LightP>
                <a href="https://hummingbot.org/strategies" target="_blank" rel="noreferrer">
                  <ExternalLinkButton isLarge label="Hummingbot Strategies" />
                </a>
              </Column>
              <Column>
                <TitleP>Add your own connector to the Hummingbot codebase</TitleP>
                <LightP>Build and contribute your CEX and DEX connectors to our open source codebase</LightP>
                <a href="https://hummingbot.org/developers" target="_blank" rel="noreferrer">
                  <ExternalLinkButton isLarge label="Developer Docs" />
                </a>
              </Column>
            </ThreeColumnHolder>
          </RightColumn>
        </CustomContainer>
      </Container>
    </Section>
  )
}

export default WhatCanYouDo

const CustomContainer = styled.div(() => [
  tw`my-md flex flex-col md:(flex-row my-xl)`,
])

const LeftColumn = styled.div(() => [
  tw`w-full pb-xs md:(w-1/4 pr-xl)`,
])

const RightColumn = styled.div(() => [
  tw`w-full md:w-3/4`,
])

const TitleP = styled(P)(() => [
  tw`text-terminal`,
])

const LightP = styled(P)(() => [
  tw`text-white mt-xxs md:mt-xs opacity-70 mb-xs`,
])

const Column = styled.div(() => [
  tw`w-full pb-md sm:(w-1/3 pr-xs)`,
])

const ThreeColumnHolder = styled.div(() => [
  tw`flex flex-col pt-md border-t-2 border-terminal sm:(flex-row pt-xs)`,
])

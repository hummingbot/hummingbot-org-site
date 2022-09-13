/* eslint no-unused-vars: [ "off", { "argsIgnorePattern": "tw" } ] */
import React from 'react'
import tw, { styled, css } from 'twin.macro'
import { Section } from '@hummingbot/hbui/elements/layout'
import { Container } from '../../elements/layout'
import { H4, P } from '@hummingbot/hbui/elements/typography'
import { ExternalLinkButton } from '../../elements/buttons'
import GradOval from './assets/OvalGradientLower.svg'

function Strategies() {
  return (
    <Section tw='relative py-8 md:py-12 lg:py-24'>
      <div style={{position: 'absolute', top: '50%', left: '50%', width: '1989px', height: '1083px'}}>
        <img src={GradOval} alt='test' style={{zIndex: '0', position: 'relative', top: '-50%', left: '-50%', width: '1989px', height: '1083px'}} />
      </div>
      <Container style={{zIndex: '1'}} tw="pb-xxxl">
        <H4 isBold>Explore our library of customizable strategies and scripts</H4>
        <Columns>
          <Column>
            <a href="https://hummingbot.org/strategies/pure-market-making/" target='_blank' rel="noreferrer">
              <div tw='flex'>
                <SmallRectangle />
                <BoxesHeaderP>Pure Market Making</BoxesHeaderP>
              </div>
              <BoxesDescP>Highly configurable, popular with beginners</BoxesDescP>
            </a>
          </Column>
          <Column>
            <a href="https://hummingbot.org/strategies/cross-exchange-market-making/" target='_blank' rel="noreferrer">
              <div tw='flex'>
                <SmallRectangle />
                <BoxesHeaderP>Cross-Exchange Market Making</BoxesHeaderP>
              </div>
              <BoxesDescP>Protect against market volatility by hedging</BoxesDescP>
            </a>
          </Column>
          <Column>
            <a href="https://hummingbot.org/strategies/avellaneda-market-making/" target='_blank' rel="noreferrer">
              <div tw='flex'>
                <SmallRectangle />
                <BoxesHeaderP>Avellaneda Market Making</BoxesHeaderP>
              </div>
              <BoxesDescP>Based on the seminal Avellaneda & Skoikov paper</BoxesDescP>
            </a>
          </Column>
          <Column>
            <a href="https://hummingbot.org/strategies/amm-arbitrage/" target='_blank' rel="noreferrer">
              <div tw='flex'>
                <SmallRectangle />
                <BoxesHeaderP>AMM Arbitrage</BoxesHeaderP>
              </div>
              <BoxesDescP>Exploit price dislocations between any CEX and DEX</BoxesDescP>
            </a>
          </Column>
        </Columns>
        <LargeBox>
          <div>
            <DescP><span tw="text-terminal">Scripts</span> let you define any trading strategy with just a few lines of Python.</DescP>
          </div>
          <a href="https://hummingbot.org/developers/scripts/" target='_blank' rel="noreferrer">
            <ExternalLinkButton isLarge label="Explore Scripts" />
          </a>
        </LargeBox>
      </Container>
    </Section>
  )
}

export default Strategies

const Columns = styled.div(() => [
  tw`my-xs grid grid-cols-1 gap-0 md:(my-lg grid-cols-2 gap-8) xl:(my-xl grid-cols-4 gap-8)`,
])

const Column = styled.div(() => [
  tw`mb-xxs pt-sm pr-sm pb-sm lg:(pt-md pr-md pb-md mb-0)`,
  css`
    background: #161C18;
    border-radius: 10px;
  `,
])

const LargeBox = styled.div(() => [
  tw`w-full p-sm md:(flex justify-between items-center p-xs px-md)`,
  css`
    background: #161C18;
    border-radius: 10px;
  `,
])

const SmallRectangle = styled.div(() => [
  css`
    width: 3px;
    height: 12px;
    background: #5FFFD7;
    position: relative;
    top: 5px;
    left: 1px;
  `,
])

const HeaderP = styled(P)(() => [
  tw`font-medium text-terminal leading-tight mb-xs`,
])

const DescP = styled(P)(() => [
  tw`font-medium text-white leading-tight`,
])

const BoxesHeaderP = styled(HeaderP)(() => [
  tw`leading-none pl-[26px]`,
])

const BoxesDescP = styled(DescP)(() => [
  tw`pl-[28px]`,
])

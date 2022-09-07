/* eslint no-unused-vars: [ "off", { "argsIgnorePattern": "tw" } ] */
import React from 'react'
import tw, { styled } from 'twin.macro'
import { Section } from '@hummingbot/hbui/elements/layout'
import { Container } from '../../elements/layout' /* custom container with more left-right padding */
import { H1, H6 } from '@hummingbot/hbui/elements/typography'
import { BackgroundStars } from "../BackgroundStars"
import GradOval from './assets/OvalGradientLower.svg'
import { ItemsRow } from '@hummingbot/hbui/elements/layout'
import { CustomRoundButton, ExternalLinkButton } from "../../elements/buttons"

function Hero() {
  return (
    <Section tw='relative h-[500px] md:h-[700px] lg:h-[800px]' style={{overflow: 'hidden'}}>
      <div style={{opacity: '0.5', position: 'absolute', top: '100%', left: '50%', width: '1989px', height: '1083px'}}>
        <img src={GradOval} alt='test' style={{zIndex: '0', position: 'relative', top: '-50%', left: '-50%', width: '1989px', height: '1083px'}} />
      </div>
      <span tw='hidden md:inline'>
        <BackgroundStars />
      </span>
      <Section tw='h-[500px] md:h-[700px] lg:h-[800px]' style={{justifyContent: 'center'}}>
        <Container tw='z-10 pt-0 pb-7 md:pb-8 lg:pb-9 xl:pb-10'>
          <CustomH1 isBold tw='lg:max-w-4xl pb-xs'>Open Source<br />Market Making</CustomH1>
          <H6 tw='text-white max-w-[700px] mb-lg'>Hummingbot is open source software that helps you build <strong>market making 
          and arbitrage bots</strong> that run on any crypto exchange, <strong>centralized or decentralized</strong>.</H6>
          <a href="https://miner.hummingbot.io" target='_blank' rel="noreferrer">
            <ItemsRow>
              <CustomRoundButton isLarge>Learn Market Making</CustomRoundButton>
              <ExternalLinkButton isLarge label="Get Started" />
            </ItemsRow>
          </a>
        </Container>
      </Section>
      <BottomGradientLine />
    </Section>
  )
}

export default Hero

const CustomH1 = styled(H1)({
  background: 'linear-gradient(270deg, #00C2CE 25.96%, #318DFF 100%)',
  WebkitTextFillColor: 'transparent',
  WebkitBackgroundClip: 'text',
  lineHeight: '100%',
})


const BottomGradientLine = styled.div({
  position: 'absolute',
  bottom: '0',
  left: '0',
  width: '100%',
  height: '3px',
  background: 'linear-gradient(270deg, #00C2CE 25.96%, #318DFF 100%)',
})
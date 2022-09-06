/* eslint no-unused-vars: [ "off", { "argsIgnorePattern": "tw" } ] */
import React from 'react'
import tw from 'twin.macro'
import styled from 'styled-components'
import { Section, Container, Separator } from '@hummingbot/hbui/elements/layout'
import { LinkButton } from '../../elements/buttons'
import { H5, P, Body, Green } from '@hummingbot/hbui/elements/typography'
import HummingbotLogo from "../../../svgs/HummingbotLogo"
import CoinAlphaLogo from "../../../svgs/CoinAlphaLogo"

function WhoWeAre() {
  return (
    <Section id='who-we-are' tw='z-10 py-20 md:py-32 lg:py-40 xl:py-44' style={{background: 'url(assets/grid_perspective.png) no-repeat', backgroundSize: 'cover', position: 'relative', zIndex: '0'}}>
      <Container tw='block md:flex' style={{zIndex: '5', position: 'relative'}}>
        <Side tw='self-start pr-0 md:pr-xl'>
          <LogoHolder>
            <CoinAlphaLogo />
            <H5 isWhite isBold tw='ml-xxs! text-3xl!'>
              CoinAlpha
            </H5>
          </LogoHolder>
          <P tw='mt-[8px] leading-tight max-w-none md:max-w-[560px]' isWhite>
            CoinAlpha, the original creator of Hummingbot, is an active member of and contributor to the Hummingbot ecosystem and community.
          </P>
          <br />
          <P tw='mt-[8px] leading-tight opacity-60 max-w-none md:max-w-[560px]' isWhite>
            We build advanced tooling and systems on top of Hummingbot, working alongside the Foundation to democratize algorithmic trading and promote user adoption.
          </P>
        </Side>
        <Side tw='self-start mt-xxl md:mt-0' className='Side'>
          <LogoHolder>
            <HummingbotLogo />
            <H5 isWhite isBold tw='ml-xs! text-3xl!'>
              Hummingbot
            </H5>
          </LogoHolder>
          <Body tw='leading-tight max-w-none md:max-w-[560px]' isWhite style={{ marginTop: "8px" }}>
            An independent, non-profit foundation that coordinates the advancement of the Hummingbot <Green>open-source code base</Green>.
          </Body>
          <a href="https://hummingbot.org">
            <LinkButton label='Foundation website' />
          </a>
        </Side>
      </Container>
    </Section>
  )
}

export default WhoWeAre

const Side = styled(Container)(props => ({
  background: props.background,
}))

const LogoHolder = styled.div({
  display: 'flex',
  alignItems: 'center',
  position: 'relative',
  marginBottom: '10px',
})

const CALogoHolder = styled(LogoHolder)({
  '& svg *': {
    fill: 'white',
  },
})
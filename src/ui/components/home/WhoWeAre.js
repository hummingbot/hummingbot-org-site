/* eslint no-unused-vars: [ "off", { "argsIgnorePattern": "tw" } ] */
import React from 'react'
import tw from 'twin.macro'
import styled from 'styled-components'
import { Section, Container, Separator } from '@hummingbot/hbui/elements/layout'
import { ExternalLinkButton } from '../../elements/buttons'
import { H5, P, Body, Green } from '@hummingbot/hbui/elements/typography'
import HummingbotLogo from "../../../svgs/HummingbotLogo"
import CoinAlphaLogo from "../../../svgs/CoinAlphaLogo"

function WhoWeAre() {
  return (
    <Section id='who-we-are' tw='z-10 py-20 md:py-32 lg:py-40 xl:py-44' style={{background: 'url(assets/grid_perspective.png) no-repeat', backgroundSize: 'cover', position: 'relative', zIndex: '0'}}>
      <Container tw='block md:flex' style={{zIndex: '5', position: 'relative'}}>
        <Side tw='self-start pr-0 md:pr-xl'>
          <LogoHolder>
            <HummingbotLogo />
            <H5 isWhite isBold tw='ml-xs! text-3xl!'>
              Hummingbot Foundation
            </H5>
          </LogoHolder>
          <P tw='mt-[8px] mb-sm leading-tight max-w-none md:max-w-[560px]' isWhite>
            Open souce foundation that coordinates decentralized maintenance and enables HBOT token holders to steer the evolution of the Hummingbot codebase.
          </P>
        </Side>
        <Side tw='self-start mt-xxl md:mt-0' className='Side'>
          <LogoHolder>
            <CoinAlphaLogo />
            <H5 isWhite isBold tw='ml-xxs! text-3xl!'>
              CoinAlpha, Inc.
            </H5>
          </LogoHolder>
          <P tw='mt-[8px] mb-sm leading-tight max-w-none md:max-w-[560px]' isWhite>
            The company that originally created Hummingbot, CoinAlpha provides liquidity solutions to exchanges, protocols, token issuers, trading firms, and other institutions.
          </P>
          <a href="https://coinalpha.com">
            <ExternalLinkButton label='CoinAlpha website' target="_blank" rel="noreferrer"/>
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
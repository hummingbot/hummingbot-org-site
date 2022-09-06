/* eslint no-unused-vars: [ "off", { "argsIgnorePattern": "tw" } ] */
import React from 'react'
import tw, { styled } from 'twin.macro'
import { Section, Container } from '@hummingbot/hbui/elements/layout'
import { H5, H4, P } from '@hummingbot/hbui/elements/typography'
import { CustomRoundButton } from '../../elements/buttons'

function HowItWorks() {
  return (
    <Section>
      <Container tw='relative py-24 md:py-40 lg:py-52 xl:py-60'>
        <TopGradientLine />
        <H5 isBold>How does Hummingbot Miner work?</H5>
        <Columns>
          <Column>
            <CustomH4>1</CustomH4>
            <P>Token issuers sponsor campaigns, offering weekly rewards for specific trading pairs on one or multiple exchanges.</P>
          </Column>
          <Column>
            <CustomH4>2</CustomH4>
            <P>Users sign-up to our platform (no KYC required) and connect their read-only exchange API keys, so trading activity can be monitored and rewards allocated.</P>
          </Column>
          <Column>
            <CustomH4>3</CustomH4>
            <P>Users run Humminbot Client or their algo-trading solution of choice, and provide liquidity to one or more of the sponsored token pairs.</P>
          </Column>
          <Column>
            <CustomH4>4</CustomH4>
            <P>Rewards are allocated on 1-minute snapshots and paid out on a weekly basis.</P>
          </Column>
          <Column>
            <CustomH4>5</CustomH4>
            <P>Tokens get additional liquidity from our community of individual market makers and users get rewarded in exchange. Everybody wins!</P>
          </Column>
        </Columns>
        <a href="https://miner.hummingbot.io" target='_blank' rel="noreferrer">
          <CustomRoundButton isLarge>Get started</CustomRoundButton>
        </a>
        <BottomGradientLine />
      </Container>
    </Section>
  )
}

export default HowItWorks

const CustomH4 = styled(H4)(() => [
  tw`font-bold text-terminal`,
])

const Columns = styled.div(() => [
  tw`my-md grid grid-cols-1 gap-0 sm:(grid-cols-2 gap-6) xl:(my-xl grid-cols-5 gap-8)`,
])

const Column = styled.div(() => [
  tw`mb-xs sm:mb-0`,
])

const TopGradientLine = styled.div({
  position: 'absolute',
  top: '0',
  left: '0',
  width: '50%',
  height: '4px',
  background: 'linear-gradient(270deg, #318DFF 1.17%, #00B1BB 100%)',
})

const BottomGradientLine = styled.div({
  position: 'absolute',
  bottom: '0',
  right: '0',
  width: '50%',
  height: '4px',
  background: 'linear-gradient(270deg, #318DFF 42.91%, #E549FF 100%)',
})

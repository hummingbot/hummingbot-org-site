/* eslint no-unused-vars: [ "off", { "argsIgnorePattern": "tw" } ] */
import React from 'react'
import { styled } from 'twin.macro'
import { Section, ItemsRow } from '@hummingbot/hbui/elements/layout'
import { H4, H5, P } from '@hummingbot/hbui/elements/typography'
import { Container } from '../../elements/layout'
import LiquidityMiningIllustration from '../../assets/bots_mining_illustration.svg'
import { ExternalLinkButton } from "../../elements/buttons"

function Governance() {
  return (
    <Section tw='py-16 md:py-28 lg:py-36 border-b-2 border-terminal'>
      <Container tw="pb-lg md:pb-xl">
        <H4 isBold>Hummingbot is maintained by community developers and governed by HBOT token holders</H4>
      </Container>
      <Container tw='mb-sm block md:flex'>
        <BoxHBOT tw='p-sm md:p-md border-2 border-terminal/25'>
          <H5 isBold tw='leading-none text-terminal!'>HBOT Token</H5>
          <P isWhite isMedium tw='relative z-20 mt-sm max-w-[100%] md:max-w-[50%]'>
            The HBOT governance token lets holders decide which exchanges and strategies should be included in the Hummingbot codebase, prioritize Github issues, and allocate developer bounties.
          </P>
          <br />
          <ItemsRow>
            <a href="https://docs.hummingbot.org/hbot" target='_blank' rel="noreferrer">
              <ExternalLinkButton isLarge label="HBOT Token" />
            </a>
            <a href="https://docs.hummingbot.org/governance/whitepaper" target='_blank' rel="noreferrer">
              <ExternalLinkButton isLarge label="Whitepaper" />
            </a>            
          </ItemsRow>
          <img tw='pointer-events-none relative z-10 opacity-20 md:opacity-100' src={LiquidityMiningIllustration} alt='Market Making' />
        </BoxHBOT>
      </Container>
      <Container tw='block md:(flex justify-between)'>
        <Box tw='w-full p-sm self-start md:(p-md w-[49%]) border-2 border-magenta/25'>
          <H5 isBold tw='leading-none text-magenta!'>Community Channels</H5>
          <P isWhite isMedium tw='mt-sm'>
            Join the conversation on our official Discord server or Discourse forum.
          </P>
          <br />
          <ItemsRow>
          <a href="https://discord.gg/hummingbot" target='_blank' rel="noreferrer">
            <ExternalLinkButton isLarge label="Discord" />
          </a>
          <a href="https://forum.hummingbot.org" target='_blank' rel="noreferrer">
            <ExternalLinkButton isLarge label="Forum" />
          </a>
          </ItemsRow>
        </Box>
        <Box tw='p-sm w-full mt-sm mb-xxl self-start md:(p-md w-[49%] my-0) border-2 border-blue/25'>
          <H5 isBold tw='leading-none text-blue!'>Snapshot</H5>
          <P isMedium isWhite tw='mt-sm'>
            Vote without paying gas on pull requests, bounties, elections, and other proposals.
          </P>
          <br />
          <a href="https://snapshot.org/#/hbot.eth" target='_blank' rel="noreferrer">
            <ExternalLinkButton isLarge label="Snapshot" />
          </a>
        </Box>
      </Container>
    </Section>
  )
}

export default Governance

const Box = styled.div(props => ({
  background: 'rgba(15, 25, 36, 0.6)',
  border: '2px solid #0F1924',
  borderRadius: '13px',
}))

const BoxHBOT = styled.div(props => ({
  backgroundColor: "rgba(15, 25, 36, 0.6)",
  backgroundRepeat: 'no-repeat',
  backgroundSize: 'cover',
  border: '2px solid #0F1924',
  borderRadius: '13px',
  position: 'relative',
  '& img': {
    position: 'absolute',
    top: '0',
    right: '0',
    height: '100%',
  }
}))

import React from 'react'
import { styled } from 'twin.macro'
import { Section, ItemsRow } from '@hummingbot/hbui/elements/layout'
import { H5, P } from '@hummingbot/hbui/elements/typography'
import { Container } from '../../elements/layout'
import LiquidityMiningIllustration from '../../assets/bots_mining_illustration.svg'
import { ExternalLinkButton } from '@hummingbot/hbui/components/buttons'

function HbotLinks() {
  return (
    <Section tw='py-16 md:py-28 lg:py-36 border-b-2 border-terminal'>
      <Container tw='mb-sm block md:flex'>
        <BoxHBOT tw='p-sm md:p-md border-2 border-terminal/25'>
          <H5 isBold tw='leading-none text-terminal!'>HBOT Token</H5>
          <P isWhite isMedium tw='relative z-20 mt-sm max-w-[100%] md:max-w-[50%]'>
          HBOT is an Ethereum ERC-20 token that trades on Uniswap, where holders can trade it or earn fees for providing liquidity.
          </P>
          <br />
          <div tw='flex flex-col gap-2'>
            <ItemsRow>
              <a href="https://app.uniswap.org/" target='_blank' rel="noreferrer">
                <ExternalLinkButton label="Trade on Uniswap" />
              </a>
              <a href="https://docs.google.com/spreadsheets/u/1/d/1UNAumPMnXfsghAAXrfKkPGRH9QlC8k7Cu1FGQVL1t0M/edit?usp=sharing" target='_blank' rel="noreferrer">
                <ExternalLinkButton isLarge label="HBOT Tracker" />
              </a>
            </ItemsRow>
            <ItemsRow>
              <a href="https://etherscan.io/address/0xe5097d9baeafb89f9bcb78c9290d545db5f9e9cb" target='_blank' rel="noreferrer">
                <ExternalLinkButton label="Etherscan" />
              </a>
              <a href="https://coinmarketcap.com/currencies/hummingbot/" target='_blank' rel="noreferrer">
                <ExternalLinkButton label="CoinMarketCap" />
              </a>
            </ItemsRow>
          </div>
          <img tw='pointer-events-none relative z-10 opacity-20 md:opacity-100' src={LiquidityMiningIllustration} alt='Market Making' />
        </BoxHBOT>
      </Container>
      <Container tw='block md:(flex justify-between) mb-sm'>
        <Box tw='w-full p-sm self-start md:(p-md w-[49%]) border-2 border-magenta/25'>
          <H5 isBold tw='leading-none text-magenta!'>Get Involved</H5>
          <P isWhite isMedium tw='mt-sm'>
            Discuss active proposals on our official Discord and then vote your HBOT tokens on Snapshot.
          </P>
          <br />
          <ItemsRow>
            <a href="https://discord.gg/hummingbot" target='_blank' rel="noreferrer">
              <ExternalLinkButton isLarge label="Discord" />
            </a>
            <a href="https://snapshot.org/#/hbot.eth" target='_blank' rel="noreferrer">
              <ExternalLinkButton isLarge label="Snapshot" />
            </a>
            <a href="https://www.notion.so/hummingbot-foundation/5c767683f80b45c4934aa8cf755a2ff5?v=4dd057ac162f49c9813e11cec0688204&pvs=4" target='_blank' rel="noreferrer">
              <ExternalLinkButton isLarge label="Calendar" />
            </a>
          </ItemsRow>
        </Box>
        <Box tw='p-sm w-full mt-sm self-start md:(p-md w-[49%] my-0) border-2 border-blue/25'>
          <H5 isBold tw='leading-none text-orange!'>Reported Volumes</H5>
          <P isWhite isMedium tw='mt-sm'>
            Real-time dashboard of daily anonymized, aggregated volume reported by Hummingbot users.
          </P>
          <br />
          <ItemsRow>
            <a href="https://p.datadoghq.com/sb/a96a744f5-a15479d77992ccba0d23aecfd4c87a52" target='_blank' rel="noreferrer">
              <ExternalLinkButton isLarge label="Reported Volumes" />
            </a>
          </ItemsRow>
        </Box>
      </Container>
    </Section>
  )
}

export default HbotLinks

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

import React from 'react'
import { styled } from 'twin.macro'
import { Section, ItemsRow } from '@hummingbot/hbui/elements/layout'
import { H5, P } from '@hummingbot/hbui/elements/typography'
import { Container } from '../../elements/layout'
import LiquidityMiningIllustration from '../../assets/bots_mining_illustration.svg'
import { ExternalLinkButton } from "../../elements/buttons"

function HbotLinks() {
  return (
    <Section tw='py-16 md:py-28 lg:py-36 border-b-2 border-terminal'>
      <Container tw='mb-sm block md:flex'>
        <BoxHBOT tw='p-sm md:p-md border-2 border-terminal/25'>
          <H5 isBold tw='leading-none text-terminal!'>HBOT Token</H5>
          <P isWhite isMedium tw='relative z-20 mt-sm max-w-[100%] md:max-w-[50%]'>
          HBOT is an Ethereum ERC-20 token that trades on Uniswap, where holders can trade it or earn fees for providing liquidity. Future venues will be listed here.
          </P>
          <br />
          <div tw='flex flex-col gap-2'>
            <a href="https://app.uniswap.org/" target='_blank' rel="noreferrer">
              <ExternalLinkButton label="Trade on Uniswap" />
            </a>
            <ItemsRow>
              <a href="https://info.uniswap.org/#/pools/0x3ab72a32810cf72bde4aa0191dd7702f50de0f64" target='_blank' rel="noreferrer">
                <ExternalLinkButton label="HBOT/ETH pool" />
              </a>
              <a href="https://info.uniswap.org/#/pools/0x47541d068e1289297e1ef66277507116a26de860" target='_blank' rel="noreferrer">
                <ExternalLinkButton label="HBOT/USDC pool" />
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
          <H5 isBold tw='leading-none text-magenta!'>Join the Community</H5>
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
          </ItemsRow>
        </Box>
        <Box tw='p-sm w-full mt-sm mb-xxl self-start md:(p-md w-[49%] my-0) border-2 border-blue/25'>
          <H5 isBold tw='leading-none text-blue!'>Governance Resources</H5>
          <P isMedium isWhite tw='mt-sm'>
            Learn more about how the HBOT token works and track recent distributions with HBOT Tracker.
          </P>
          <br />
          <ItemsRow>
            <a href="https://snapshot.org/#/hbot.eth" target='_blank' rel="noreferrer">
              <ExternalLinkButton isLarge label="Whitepaper" />
            </a>
            <a href="https://snapshot.org/#/hbot.eth" target='_blank' rel="noreferrer">
              <ExternalLinkButton isLarge label="HBOT Tracker" />
            </a>
          </ItemsRow>
        </Box>
      </Container>
      <Container>
        <Box tw='w-full p-sm self-start border-2 border-orange/25'>
          <H5 isBold tw='leading-none text-orange!'>Reported Volumes</H5>
          <P isWhite isMedium tw='mt-sm'>
          A real-time, customizable Datadog dashboard of the daily aggregated, anonymized trade volumes reported by Hummingbot clients.
          </P>
          <br />
          <ItemsRow>
            <a href="https://discord.gg/hummingbot" target='_blank' rel="noreferrer">
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

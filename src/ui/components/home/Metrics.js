/* eslint no-unused-vars: [ "off", { "argsIgnorePattern": "tw" } ] */
import React from 'react'
import tw, { css, styled } from 'twin.macro'
import { Section, ItemsRow, Container } from '@hummingbot/hbui/elements/layout'
import { H2, H6, P } from '@hummingbot/hbui/elements/typography'
import { Container as CustomContainer } from '../../elements/layout'
import { ExternalLinkButton, CustomRoundButton } from "../../elements/buttons"

function Metrics() {
  return (
    <Section tw='py-24 lg:(py-32) border-t-2 border-b-2 border-terminal' style={{background: '#0F1924'}}>
      <CustomContainer>
        <MetricsGrid tw='flex flex-col items-center mb-lg sm:(flex-row justify-between)'>
          <div>
            <H2 isHeavy tw='leading-none'>100M+</H2>
            <P tw='mt-xxs'>Avg 24H Volume</P>
          </div>
          <div>
            <H2 isHeavy tw='leading-none'>1M+</H2>
            <P tw='mt-xxs'>All-Time Downloads</P>
          </div>
          <div>
            <H2 isHeavy tw='leading-none'>13+</H2>
            <P tw='mt-xxs'>HFT Strategies</P>
          </div>
        </MetricsGrid>
      </CustomContainer>
      <CustomContainer>
        <TwoColumns>
          <div tw='mb-lg lg:(mb-0)'>
            <H6 isBold tw='col-span-3 border-b-2 border-blue text-terminal pb-xxs mb-xxs'>CEX Connectors</H6>
            <div>
              <Columns>
                <H6 isMedium tw='text-terminal'>Binance</H6>
                <H6 isMedium tw='text-terminal'>FTX</H6>
                <H6 isMedium tw='text-terminal'>Kucoin</H6>
                <H6 isMedium tw='text-terminal'>Gate.io</H6>
              </Columns>
              <br />
              <div tw='col-span-3'>
                <a tw='inline-flex' href="https://docs.hummingbot.org/exchanges" target="_blank" rel="noreferrer">
                  <ExternalLinkButton isLarge label="See 30+ more" />
                </a>
              </div>
            </div>
          </div>
          <div>
            <H6 isBold tw='col-span-3 border-b-2 border-magenta text-terminal pb-xxs mb-xxs'>DEX Connectors</H6>
            <div>
              <Columns>
                <H6 isMedium tw='text-terminal'>Uniswap</H6>
                <H6 isMedium tw='text-terminal'>dYdX</H6>
                <H6 isMedium tw='text-terminal'>TraderJoe</H6>
                <H6 isMedium tw='text-terminal'>Serum</H6>
              </Columns>
              <br />
              <div tw='col-span-3'>
                <a tw='inline-flex' href="https://docs.hummingbot.org/gateway/exchanges" target="_blank" rel="noreferrer">
                  <ExternalLinkButton isLarge label="See 10+ more" />
                </a>
              </div>
            </div>
          </div>
        </TwoColumns>
      </CustomContainer>
    </Section>
  )
}
export default Metrics

const MetricsGrid = styled.div({
  width: '100%',
  margin: '0 auto',
  maxWidth: '800px',
})

const TwoColumns = styled.div(() => [
  tw`grid grid-cols-1 gap-0 lg:(grid-cols-2 gap-8)`,
])
const Columns = styled.div(() => [
  tw`grid grid-cols-4 gap-0`,
])

const LeftColumn = styled.div(() => [
  tw`w-full pb-xs md:(w-1/4 pr-xl)`,
])

const RightColumn = styled.div(() => [
  tw`w-full md:w-3/4`,
])

const CEXContainer = styled(H6)(() => [
  tw`md:(mx-md) mr-sm text-terminal`,
])

const DEXContainer = styled(H6)(() => [
  tw`md:(mx-md) mr-sm text-blue`,
])

const LinkContainer = styled.div(() => [
  tw`md:(mx-md) sm:(mx-sm)`,
])

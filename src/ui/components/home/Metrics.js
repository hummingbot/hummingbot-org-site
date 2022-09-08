/* eslint no-unused-vars: [ "off", { "argsIgnorePattern": "tw" } ] */
import React from 'react'
import tw, { css, styled } from 'twin.macro'
import { Section, ItemsRow } from '@hummingbot/hbui/elements/layout'
import { H2, H6, P } from '@hummingbot/hbui/elements/typography'
import { Container } from '../../elements/layout'
import { ExternalLinkButton, ExternalLinkButtonBlue, CustomRoundButton } from "../../elements/buttons"

function Metrics() {
  return (
    <Section>
      <Container>
        <MetricsGrid tw='flex flex-col items-center mt-sm mb-lg sm:(flex-row justify-between)'>
          <div>
            <H2>100M+</H2>
            <P>Avg 24H Volume</P>
          </div>
          <div>
            <H2>1M+</H2>
            <P>All-Time Downloads</P>
          </div>
          <div>
            <H2>13+</H2>
            <P>HFT Strategies</P>
          </div>
        </MetricsGrid>
        <CustomContainer>
          <LeftColumn>
            <H6 isBold>CEX Connectors</H6>
          </LeftColumn>
          <RightColumn>
            <ItemsRow>
              <CEXContainer>Binance</CEXContainer>
              <CEXContainer>FTX</CEXContainer>
              <CEXContainer>Kucoin</CEXContainer>
              <CEXContainer>Gate.io</CEXContainer>
              <LinkContainer>
                <a href="https://hummingbot.org/exchanges" target="_blank" rel="noreferrer">
                  <ExternalLinkButton isLarge label="See 30+ more" />
                </a>
              </LinkContainer>
            </ItemsRow>
          </RightColumn>
        </CustomContainer>
        <CustomContainer>
          <LeftColumn>
            <H6 isBold>DEX Connectors</H6>
          </LeftColumn>
          <RightColumn>
            <ItemsRow>
              <DEXContainer>Uniswap</DEXContainer>
              <DEXContainer>dYdX</DEXContainer>
              <DEXContainer>TraderJoe</DEXContainer>
              <DEXContainer>Serum</DEXContainer>
              <LinkContainer>
                <a href="https://hummingbot.org/gateway/exchanges/amm" target="_blank" rel="noreferrer">
                  <ExternalLinkButtonBlue isLarge label="See 10+ more" />
                </a>
              </LinkContainer>
            </ItemsRow>
          </RightColumn>
        </CustomContainer>
      </Container>
      <BottomGradientLine />
    </Section>
  )
}
export default Metrics

const MetricsGrid = styled.div({
  width: '100%',
  margin: '0 auto',
  maxWidth: '800px',
})

const CustomContainer = styled.div(() => [
  tw`flex flex-col sm:(flex-row my-sm)`,
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

const BottomGradientLine = styled.div({
  bottom: '0',
  left: '0',
  width: '100%',
  height: '3px',
  background: 'linear-gradient(270deg, #00C2CE 25.96%, #318DFF 100%)',
})

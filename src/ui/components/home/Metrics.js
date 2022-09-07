/* eslint no-unused-vars: [ "off", { "argsIgnorePattern": "tw" } ] */
import React from 'react'
import tw from 'twin.macro'
import styled from 'styled-components'
import { Section } from '@hummingbot/hbui/elements/layout'
import { Container } from '../../elements/layout' /* custom container with more left-right padding */
import { H2, P } from '@hummingbot/hbui/elements/typography'

function Metrics() {
  return (
    <Section>
      <Container>
        <MetricsGrid tw='flex flex-col items-center mt-sm mb-sm sm:(flex-row justify-between)'>
          <div>
            <H2>1B+</H2>
            <P>24H Volume</P>
          </div>
          <div>
            <H2>1M+</H2>
            <P>All-Time Downloads</P>
          </div>
          <div>
            <H2>40+</H2>
            <P>Exchange Connectors</P>
          </div>
          <div>
            <H2>13+</H2>
            <P>HFT Strategies</P>
          </div>
        </MetricsGrid>
      </Container>
    </Section>
  )
}
export default Metrics

const MetricsGrid = styled.div({
  width: '100%',
  margin: '0 auto',
  maxWidth: '800px',
})

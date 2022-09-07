import React from 'react'
import { Section } from '@hummingbot/hbui/elements/layout'
import { Container } from '../../elements/layout' /* custom container with more left-right padding */
import { ItemsRow } from '@hummingbot/hbui/elements/layout'
import { H2, P } from '@hummingbot/hbui/elements/typography'

function Metrics() {
  return (
    <Section>
      <Container>
        <ItemsRow>
          <div>
            <H2>10B+</H2>
            <P>Trade Volume</P>
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
        </ItemsRow>
      </Container>
    </Section>
  )
}
export default Metrics
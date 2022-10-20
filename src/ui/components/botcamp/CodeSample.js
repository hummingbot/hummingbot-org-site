/* eslint no-unused-vars: [ "off", { "argsIgnorePattern": "tw" } ] */
import React from 'react'
import tw, { styled, css } from 'twin.macro'
import { Section, Container } from '@hummingbot/hbui/elements/layout'
import { P, H4, H6 } from '@hummingbot/hbui/elements/typography'
import CodeBlock from '@hummingbot/hbui/components/code/CodeBlock'

function CodeSample() {
  return (
  <Section tw='py-8 md:py-12 lg:py-24'>
    <Container>
      <H4 isWhite isBold>Sample Script Code</H4>
      <CodeBlock
        code={myCodeContent}
      />
    </Container>
  </Section>
  )
}

const myCodeContent = String.raw`
  def on_tick(self):
    if self.create_timestamp <= self.current_timestamp:
      self.cancel_all_orders()
      proposal: List[OrderCandidate] = self.create_proposal()
      proposal_adjusted: List[OrderCandidate] = self.adjust_proposal_to_budget(proposal)
      self.place_orders(proposal_adjusted)
      self.create_timestamp = self.order_refresh_time + self.current_timestamp
  `
export default CodeSample
  
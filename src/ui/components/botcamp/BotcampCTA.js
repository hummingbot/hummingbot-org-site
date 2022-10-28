/* eslint no-unused-vars: [ "off", { "argsIgnorePattern": "tw" } ] */
import React from 'react'
import tw, { styled, css } from 'twin.macro'
import { Section, Container, Separator } from '@hummingbot/hbui/elements/layout'
import { P, H1, H2, H4, H6 } from '@hummingbot/hbui/elements/typography'

function BotcampCTA() {
  return (
  <Section tw='py-xxxl'>
    <Container>
        <H1 isBold tw='text-center'>
          Learn how to build your own custom bots
        </H1>
    </Container>
  </Section>
  )
}

export default BotcampCTA

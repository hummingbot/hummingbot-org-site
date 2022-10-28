/* eslint no-unused-vars: [ "off", { "argsIgnorePattern": "tw" } ] */
import React from 'react'
import tw, { styled, css } from 'twin.macro'
import { Section, Container, Separator } from '@hummingbot/hbui/elements/layout'
import { P, H1, H2, H4, H6 } from '@hummingbot/hbui/elements/typography'

function WhoBotcampFor() {
  return (
  <Section tw='pt-xxxl'>
    <Container>
        <H2 isBold tw='text-center'>
          Who is Botcamp for?
        </H2>
    </Container>
    <Separator tw='pt-xxxl' />
  </Section>
  )
}

export default WhoBotcampFor

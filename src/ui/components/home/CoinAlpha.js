/* eslint no-unused-vars: [ "off", { "argsIgnorePattern": "tw" } ] */
import React from 'react'
import tw, { css, styled } from 'twin.macro'
import { Section, Container } from '@hummingbot/hbui/elements/layout'
import { H6, Green } from '@hummingbot/hbui/elements/typography'

function CoinAlpha() {
  return (
    <Section id='who-we-are' tw='z-10 bg-green py-12 md:py-14 lg:py-16 xl:py-20'>
      <Container>
        <H6 isMedium tw='text-black'>CoinAlpha, the original creator of Hummingbot, is an active member of and contributor to the Hummingbot ecosystem and community.  We build advanced tooling and systems on top of Hummingbot, working alongside the Foundation to democratize algorithmic trading and promote user adoption.</H6>
      </Container>
    </Section>
  )
}

export default CoinAlpha
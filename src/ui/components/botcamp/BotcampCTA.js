/* eslint no-unused-vars: [ "off", { "argsIgnorePattern": "tw" } ] */
import React from 'react'
import tw, { styled, css } from 'twin.macro'
import { Section, Container, Separator } from '@hummingbot/hbui/elements/layout'
import { P, H1, H2, H4, H6 } from '@hummingbot/hbui/elements/typography'
import { Button } from '@hummingbot/hbui/elements/buttons'
import GetNewsletter from './GetNewsletter'

function BotcampCTA() {
  return (
  <Section tw='z-10 py-20 md:py-32 lg:py-40 xl:py-44' style={{background: 'url(assets/grid_perspective.png) no-repeat', backgroundSize: 'cover', position: 'relative', zIndex: '0'}}>
    <Container tw='text-center'>
        <H2 isBold tw='mb-xs'>
          Learn to code crypto trading bots
        </H2>
        <H6 tw='text-terminal pb-md'>
          Each batch is limited to a small group. Sign up now to secure your spot!
        </H6>

        <div tw='flex justify-center'>
          <a href="https://airtable.com/shrRj5bUAauDj2M4G" target="_blank" rel="noreferrer">
            <Button isLarge variant="terminal">
             Apply to next cohort
            </Button>
          </a>
        </div>

    </Container>
    <GetNewsletter />
  </Section>
  )
}

export default BotcampCTA

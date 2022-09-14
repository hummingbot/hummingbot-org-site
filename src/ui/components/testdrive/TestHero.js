/* eslint no-unused-vars: [ "off", { "argsIgnorePattern": "tw" } ] */
import React from 'react'
import tw, { styled } from 'twin.macro'
import { Section } from '@hummingbot/hbui/elements/layout'
import { Container } from '../../elements/layout' /* custom container with more left-right padding */
import { P, H1, H6 } from '@hummingbot/hbui/elements/typography'
import { GradientSideLine } from '../../elements/layout'
import { BackgroundNodes } from '../BackgroundNodes'

function TestHero() {
  return (
    <Section style={{overflow: 'hidden'}}>
      <BackgroundNodes />
      <Container tw='z-10 pt-20 md:pt-28 lg:pt-44 xl:pt-32 pb-7 md:pb-8 lg:pb-9 xl:pb-10'>
        <CustomH1 isMedium tw='w-full lg:max-w-4xl'>Test Drive</CustomH1>
        <H6 isWhite isLight style={{opacity: '0.6'}} tw='pb-xl'>Launch Hummingbot in your browser</H6>
        <GradientSideLine />
      </Container>
    </Section>
  )
}

export default TestHero

const CustomH1 = styled(H1)({
  background: 'linear-gradient(270deg, #00C2CE 25.96%, #318DFF 100%)',
  WebkitTextFillColor: 'transparent',
  WebkitBackgroundClip: 'text',
  lineHeight: '100%',
})

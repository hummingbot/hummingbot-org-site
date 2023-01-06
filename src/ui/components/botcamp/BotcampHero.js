/* eslint no-unused-vars: [ "off", { "argsIgnorePattern": "tw" } ] */
import React from 'react'
import tw, { styled } from 'twin.macro'
import { Section, Container, Separator } from '@hummingbot/hbui/elements/layout'
import { P, H1, H5 } from '@hummingbot/hbui/elements/typography'
import { Button } from '@hummingbot/hbui/elements/buttons'
import VideoCard from '@hummingbot/hbui/components/video/VideoCard'

function BotcampHero() {
  return (
    <Section tw='border-b-4 border-terminal' style={{background: 'linear-gradient(177deg, black, rgba(95, 255, 215, 0.3))'}}>
      <Container tw='py-xxxl text-center'>
        <H1 isBold tw='leading-tight'>
          Hummingbot 
          <span tw='text-terminal'> Botcamp</span>
        </H1>

        <H5 tw='pb-md max-w-[741px] text-center mx-auto leading-tight'>
          Learn the <span tw='text-magenta'> dark arts of crypto market making </span>
          with our hands-on, small-batch online course
        </H5>

        <div tw='flex justify-center'>
          <a href="https://airtable.com/shrRj5bUAauDj2M4G" target="_blank" rel="noreferrer">
            <Button isLarge isTerminal>
              Apply for March 2023 cohort
            </Button>
          </a>
        </div>
        <P tw='text-sm mt-xxs font-medium'>Max 25 seats per cohort</P>
        <P tw='text-sm mt-xxs font-medium pb-xxl'>Tuition: $1750/year or $3500/lifetime</P>

        <VideoCard
          videoEmbedSrc={'https://www.youtube.com/embed/_xsJA3ApAPY'}
          // title="Botcamp Trailer"
          descriptionText="BotCamp trailer video"
        />

      </Container>
      <Separator />
    </Section>
  )
}

export default BotcampHero

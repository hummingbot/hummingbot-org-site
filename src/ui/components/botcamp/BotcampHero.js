/* eslint no-unused-vars: [ "off", { "argsIgnorePattern": "tw" } ] */
import React from 'react'
import tw, { styled } from 'twin.macro'
import { Section, Container, Separator } from '@hummingbot/hbui/elements/layout'
import { H1, H6 } from '@hummingbot/hbui/elements/typography'
import { Button } from '@hummingbot/hbui/elements/buttons'
import VideoCard from '@hummingbot/hbui/components/video/VideoCard'

function BotcampHero() {
  return (
    <Section>
      <Container tw='py-xxxl text-center'>
        <H1 isBold>
          Hummingbot 
          <span tw='text-terminal'> BotCamp</span>
        </H1>

        <H6 tw='pb-md'>
          Learn the <span tw='text-magenta'> dark arts of market making </span>
          with our hands-on 4-week online course
        </H6>

        <div tw='pb-xl flex justify-center'>
          <a href="https://hummingbot.thinkific.com" target="_blank" rel="noreferrer">
            <Button isLarge isTerminal objectCenter>
              Apply for next cohort
            </Button>
          </a>
        </div>

        <VideoCard
          videoEmbedSrc={'https://www.youtube.com/embed/HfHaQS-nWHw'}
          // title="Botcamp Trailer"
          descriptionText="BotCamp trailer video"
        />

      </Container>
      <Separator />
    </Section>
  )
}

export default BotcampHero

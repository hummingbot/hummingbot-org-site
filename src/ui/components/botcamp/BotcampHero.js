/* eslint no-unused-vars: [ "off", { "argsIgnorePattern": "tw" } ] */
import React from 'react'
import tw, { styled } from 'twin.macro'
import { Section, Container } from '@hummingbot/hbui/elements/layout'
import { P, H1, H6 } from '@hummingbot/hbui/elements/typography'
import VideoCard from '@hummingbot/hbui/components/video/VideoCard'
import { ExternalLinkButton } from "../../elements/buttons"

function BotcampHero() {
  return (
    <Section>
      <Container tw='py-60'>
        <H1 tw='w-full lg:max-w-4xl'>Learn the dark arts of market making</H1>
        <H6 tw='pb-md'>Build high-frequency trading & market making strategies</H6>
        <a href="https://hummingbot.thinkific.com" target="_blank" rel="noreferrer">
          <ExternalLinkButton isLarge label="Sign up now" />
        </a>

        <br />

        <VideoCard
          videoEmbedSrc={'https://www.youtube.com/embed/HfHaQS-nWHw'}
          title="Botcamp Trailer"
          descriptionText="BotCamp trailer video"
        />
      </Container>
    </Section>
  )
}

export default BotcampHero

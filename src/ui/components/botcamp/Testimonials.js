/* eslint no-unused-vars: [ "off", { "argsIgnorePattern": "tw" } ] */
import React from 'react'
import tw, { styled, css } from 'twin.macro'
import { Section, Container, Separator } from '@hummingbot/hbui/elements/layout'
import { P, H2, H4, H6 } from '@hummingbot/hbui/elements/typography'
import VideoCard from '@hummingbot/hbui/components/video/VideoCard'

function Testimonials() {
  return (
  <Section tw='pt-xxxl'>
    <Container>
      <H4 isWhite isBold>
        Watch what our student have to say about BotCamp
      </H4>

      <VideoGrid>
        <LeftColumn>
          <VideoCard
            videoEmbedSrc={'https://www.youtube.com/embed/HfHaQS-nWHw'}
            descriptionText="BotCamp testimonial 1"
          />
        </LeftColumn>
        <RightColumn>
          <H6 isBold tw='leading-none'>Vik</H6>
          <P tw='text-secondary'>Microelectronics Engineer, Russia</P>
          <P tw='mt-md'>"I learned how to create a working arbitrage strategy that I'm now running every day"</P>
        </RightColumn>
      </VideoGrid>

      <VideoGrid>
        <LeftColumn>
          <VideoCard
            videoEmbedSrc={'https://www.youtube.com/embed/HfHaQS-nWHw'}
            descriptionText="BotCamp testimonial 2"
          />
        </LeftColumn>
        <RightColumn>
          <H6 isBold tw='leading-none'>Alan</H6>
          <P tw='text-secondary'>Quantitative Engineer, USA</P>
          <P tw='mt-md'>"I learned how to create a working arbitrage strategy that I'm now running every day"</P>
        </RightColumn>
      </VideoGrid>

      <VideoGrid>
        <LeftColumn>
          <VideoCard
            videoEmbedSrc={'https://www.youtube.com/embed/HfHaQS-nWHw'}
            descriptionText="BotCamp testimonial 3"
          />
        </LeftColumn>
        <RightColumn>
          <H6 isBold tw='leading-none'>Vik</H6>
          <P tw='text-secondary'>Microelectronics Engineer, Russia</P>
          <P tw='mt-md'>"I learned how to create a working arbitrage strategy that I'm now running every day"</P>
        </RightColumn>
      </VideoGrid>

    </Container>
    <Separator tw='pt-xl' />
  </Section>
  )
}

export default Testimonials
  
const VideoGrid = styled.div(() => [
  tw`my-md flex flex-col md:(flex-row my-xl)`,
])

const LeftColumn = styled.div(() => [
  tw`w-full pb-xs md:(w-1/3 pr-xl)`,
])

const RightColumn = styled.div(() => [
  tw`w-full md:w-2/3`,
])

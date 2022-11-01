/* eslint no-unused-vars: [ "off", { "argsIgnorePattern": "tw" } ] */
import React from 'react'
import tw, { styled, css } from 'twin.macro'
import { Section, Container, Separator } from '@hummingbot/hbui/elements/layout'
import { P, H2, H4, H6 } from '@hummingbot/hbui/elements/typography'
import VideoCard from '@hummingbot/hbui/components/video/VideoCard'

function Testimonials() {
  return (
  <Section tw='py-xxl lg:py-xxxl xl:py-52 border-t-4 border-terminal' style={{background: 'linear-gradient(177deg, rgba(95, 255, 215, 0.15), black)'}}>
    
    <Container>
      <H4 isBold tw='mb-sm md:mb-md lg:mb-lg text-terminal'>
        Watch what our students have to say about BotCamp
      </H4>

      <div tw='grid grid-cols-1 gap-0 xl:(grid-cols-3 gap-8)'>
        <VideoGrid>
          <LeftColumn>
            <VideoCard
              videoEmbedSrc={'https://www.youtube.com/embed/HfHaQS-nWHw'}
              descriptionText="BotCamp testimonial 1"
              tw='p-0 md:p-2'
            />
          </LeftColumn>
          <RightColumn>
            <H6 isBold tw='leading-none text-terminal'>Vik</H6>
            <P tw='text-secondary'>Microelectronics Engineer, Russia</P>
            <H6 tw='mt-xxs md:mt-xs leading-tight'>"I learned how to create a working arbitrage strategy that I'm now running every day"</H6>
          </RightColumn>
        </VideoGrid>

        <VideoGrid>
          <LeftColumn>
            <VideoCard
              videoEmbedSrc={'https://www.youtube.com/embed/HfHaQS-nWHw'}
              descriptionText="BotCamp testimonial 2"
              tw='p-0 md:p-2'
            />
          </LeftColumn>
          <RightColumn>
            <H6 isBold tw='leading-none text-terminal'>Alan</H6>
            <P tw='text-secondary'>Quantitative Engineer, USA</P>
            <H6 tw='mt-xxs md:mt-xs leading-tight'>"I learned how to create a working arbitrage strategy that I'm now running every day"</H6>
          </RightColumn>
        </VideoGrid>

        <VideoGrid>
          <LeftColumn>
            <VideoCard
              videoEmbedSrc={'https://www.youtube.com/embed/HfHaQS-nWHw'}
              descriptionText="BotCamp testimonial 3"
              tw='p-0 md:p-2'
            />
          </LeftColumn>
          <RightColumn>
            <H6 isBold tw='leading-none text-terminal'>Vik</H6>
            <P tw='text-secondary'>Microelectronics Engineer, Russia</P>
            <H6 tw='mt-xxs md:mt-xs leading-tight'>"I learned how to create a working arbitrage strategy that I'm now running every day"</H6>
          </RightColumn>
        </VideoGrid>
      </div>
    </Container>

  </Section>
  )
}

export default Testimonials
  
const VideoGrid = styled.div(() => [
  tw`my-xxs flex flex-col border-2 border-grey-dark-scale-400`,
  tw`md:(my-xs flex-row border-none)`,
  tw`xl:flex-col`,
])

const LeftColumn = styled.div(() => [
  tw`w-full`,
  tw`md:(w-7/12 pr-sm flex-row)`,
  tw`xl:w-full`,
])

const RightColumn = styled.div(() => [
  tw`w-full bg-body p-4 border-t-2 border-terminal`,
  tw`md:(border-none bg-transparent p-0 w-5/12)`,
  tw`xl:(w-full pt-sm)`,
])

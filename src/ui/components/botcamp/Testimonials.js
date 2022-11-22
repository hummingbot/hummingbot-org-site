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
              videoEmbedSrc={'https://www.youtube.com/embed/lamJjaHcRSs'}
              descriptionText="Alkalifah testimonial"
              tw='p-0 md:p-2'
            />
          </LeftColumn>
          <RightColumn>
            <H6 isBold tw='leading-none text-terminal'>Alkalifah</H6>
            <P tw='text-secondary'>Trader</P>
            <H6 tw='mt-xxs md:mt-xs leading-tight'>"I have never been hired for a coding job and I only studied computer science for two years, yet I was able to come up with a script that I'm proud of. I think everyone could do it. I also want to give a shout ut to Fede. Without his guidance, I could have not completed my strategy script."</H6>
          </RightColumn>
        </VideoGrid>

        <VideoGrid>
          <LeftColumn>
            <VideoCard
              videoEmbedSrc={'https://www.youtube.com/embed/atoEWjF37B8'}
              descriptionText="Alan testimonial"
              tw='p-0 md:p-2'
            />
          </LeftColumn>
          <RightColumn>
            <H6 isBold tw='leading-none text-terminal'>Alan</H6>
            <P tw='text-secondary'>Founder</P>
            <H6 tw='mt-xxs md:mt-xs leading-tight'>"I wanted to be able to learn how to develop in Hummingbot because my goal is to do reinforcement learning with Hummingbot, which would involve me doing more than using someone else's scripts. It's also useful for people who just want learn the basic nuts and bolts of trading."</H6>
          </RightColumn>
        </VideoGrid>

        <VideoGrid>
          <LeftColumn>
            <VideoCard
              videoEmbedSrc={'https://www.youtube.com/embed/rFq0Add0qJ0'}
              descriptionText="Vik testimonial"
              tw='p-0 md:p-2'
            />
          </LeftColumn>
          <RightColumn>
            <H6 isBold tw='leading-none text-terminal'>Vik</H6>
            <P tw='text-secondary'>Mom</P>
            <H6 tw='mt-xxs md:mt-xs leading-tight'>"Coding was my hobby before, but then I understood that I can make money from quant trading. I live now from the trading and for almost all the money I get, I spend on my family needs. I thought that Hummingbot scripts were just something simple, but I learned that scripts can do complex logic or complex strategies too."</H6>
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

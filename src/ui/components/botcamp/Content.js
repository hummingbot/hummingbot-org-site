/* eslint no-unused-vars: [ "off", { "argsIgnorePattern": "tw" } ] */
import React from 'react'
import tw, { styled, css } from 'twin.macro'
import { Section, Container, Separator } from '@hummingbot/hbui/elements/layout'
import { P, H1, H2, H4, H6, Body } from '@hummingbot/hbui/elements/typography'
import Snackbar from '@hummingbot/hbui/components/snackbar'

function BotcampContent() {
  return (
  <Section tw='pt-xxxl'>
    <Container>
      <CustomContainer>
        <LeftColumn>
          <H2 isBold tw='text-terminal leading-tight'>
            Course content
          </H2>
        </LeftColumn>
        <RightColumn>
          <Item>
            <Title>Pre-work</Title>
            <ContentDescription tw='pb-md'>
              Get access to a private Discord channel and watch the pre-work videos to get familiar with basic trading terminology, Hummingbot codebase, and the script design/submission process.
            </ContentDescription>
            <ContentItem>- [video] Botcamp - Basic Training</ContentItem>
            <ContentItem>- [video] Intro to the Hummingbot codebase</ContentItem>
            <ContentItem>- [video] Designing and contributing your script</ContentItem>
          </Item>

          <Item>
            <Title>Week 1</Title>
            <ContentDescription tw='pb-md'>
              In the first live session, you'll learn how the course works, test your knowledge in quizzes about the pre-work, and sign up for mentor office hours. Your homework is to watch script teardown videos, start designing your custom script, and perform optional coding challenges.
            </ContentDescription>

            <CustomInnerContainer>
              <LeftInnerColumn>
              <Body tw='text-terminal font-medium leading-none pb-sm'>Homework</Body>
              <ContentItem>- [video] Teardown: Simple Pure Market Making</ContentItem>
              <ContentItem>- [code] Design your custom strategy using the template</ContentItem>
              </LeftInnerColumn>
              <RightInnerColumn>
              <Body tw='text-blue font-bold leading-none pb-sm'>Optional</Body>
              <ContentItem>- [code] Implement a simple arbitrage script</ContentItem>
              <ContentItem>- [help] Submit questions for discussion during next live session</ContentItem>
              </RightInnerColumn>
            </CustomInnerContainer>
          </Item>

          <Item>
            <Title>Week 2</Title>
            <ContentDescription tw='pb-md'>
              During the second week's live session, we'll cover the basic theory and practice of two-sided market making strategies, code the simple arbitrage script implementation together, and provide feedback to student script designs.
            </ContentDescription>
            <CustomInnerContainer>
              <LeftInnerColumn>
                <Body tw='text-terminal font-medium leading-none pb-sm'>Homework</Body>
                <ContentItem>- [video] Teardown: Simple XEMM</ContentItem>
                <ContentItem>- [video] Teardown: Simple VWAP</ContentItem>
                <ContentItem>- [code] Start coding your custom script</ContentItem>
              </LeftInnerColumn>
              <RightInnerColumn>
                <Body tw='text-blue font-bold leading-none pb-sm'>Optional</Body>
                <ContentItem>- [help] Get help from mentors during office hours</ContentItem>
                <ContentItem>- [code] Extend the Simple PMM script with a dynamic price ceiling/floor feature</ContentItem>
              </RightInnerColumn>
            </CustomInnerContainer>
          </Item>

          <Item>
            <Title>Week 3</Title>
            <ContentDescription tw='pb-md'>
              In Week 3, you'll learn basic hedging techniques like cross-exchange market making, as well as advanced topics like accessing order book data. We'll also review the dynamic price ceiling/floor implementation, and provide final guidance to students coding their custom scripts.
            </ContentDescription>

            <CustomInnerContainer>
              <LeftInnerColumn>
              <Body tw='text-terminal font-medium leading-none pb-sm'>Homework</Body>
              <ContentItem>- [code] Submit a pull request with the code of your script</ContentItem>
              <ContentItem>- [video] Create a video presenting your script</ContentItem>
              </LeftInnerColumn>
              <RightInnerColumn>
              <Body tw='text-blue font-bold leading-none pb-sm'>Optional</Body>
              <ContentItem>- [help] Get help from mentors during office hours</ContentItem>
              </RightInnerColumn>
            </CustomInnerContainer>
          </Item>

          <Item>
            <Title>Week 4: Demo Day</Title>
            <ContentDescription tw='pb-md'>
              In the final Demo Day session, students present their videos and vote for for their favorite script submissions. The top submissions receive HBOT token prizes and get their scripts merged into the Hummingbot codebase, while all qualifying scripts receive a Hummingbot Script Developer NFT certificate.
            </ContentDescription>
            <ContentItem>- [star] NFT certificates for qualifying scripts</ContentItem>
            <ContentItem>- [star] HBOT rewards for winning and qualifying scripts</ContentItem>
          </Item>
        </RightColumn>
      </CustomContainer>
    </Container>
  </Section>
  )
}

export default BotcampContent

const CustomContainer = styled.div(() => [
  tw`my-md flex flex-col md:(flex-row my-xl)`,
])

const LeftColumn = styled.div(() => [
  tw`w-full pb-xs md:(w-1/3 pr-xl)`,
])

const RightColumn = styled.div(() => [
  tw`w-full md:w-2/3`,
])

const CustomInnerContainer = styled.div(() => [
  tw`my-md flex flex-col md:(flex-row my-md)`,
])

const LeftInnerColumn = styled.div(() => [
  tw`w-full pb-xs md:(w-1/2 pr-xl)`,
])
const RightInnerColumn = styled.div(() => [
  tw`w-full md:w-1/2`,
])

const Item = styled.div(() => [
  tw`w-full pb-md border-t-2 border-terminal`,
])

const Title = styled(H6)(() => [
  tw`text-terminal font-bold pt-xs`,
])

const ContentItem = styled(P)(() => [
  tw`text-white font-medium leading-tight mb-4`,
])

const ContentDescription = styled(P)(() => [
  tw`text-secondary mt-xs font-medium`,
])

/* eslint no-unused-vars: [ "off", { "argsIgnorePattern": "tw" } ] */
import React from 'react'
import tw, { styled, css } from 'twin.macro'
import { Section, Container, Separator } from '@hummingbot/hbui/elements/layout'
import { P, H1, H2, H4, H6 } from '@hummingbot/hbui/elements/typography'
import Snackbar from '@hummingbot/hbui/components/snackbar'

function BotcampContent() {
  return (
  <Section tw='pt-xxxl'>
    <Container>
      <CustomContainer>
        <LeftColumn>
          <H2 isBold tw='text-terminal'>
            Botcamp content
          </H2>
        </LeftColumn>
        <RightColumn>
          <Item>
            <Title>Pre-work</Title>
            <Content tw='pb-md'>
              Get access to a private Discord channel and watch the pre-work videos to get familiar with basic trading terminology, Hummingbot codebase, and the script design/submission process.
            </Content>

            <ol tw='pb-md'>
              <li>[video] Botcamp - Basic Training</li>
              <li>[video] Intro to the Hummingbot codebase</li>
              <li>[video] Designing and contributing your script</li>
            </ol>
          </Item>

          <Item>
            <Title>Week 1</Title>
            <Content tw='pb-md'>
              In the first live session, you'll learn how the course works, compete for HBOT rewards in quizzes about the pre-work, and sign up for mentor office hours. Your homework is to watch script teardown videos, start designing your custom script, and perform optional coding challenges.
            </Content>

            <CustomInnerContainer>
              <LeftInnerColumn>
              <Snackbar type="success" label="homework" />
                <ol>
                  <li>[video] Teardown: Simple Pure Market Making</li>
                  <li>[code] Design your custom strategy using the template</li>
                </ol>
              </LeftInnerColumn>
              <RightInnerColumn>
              <Snackbar type="info" label="optional" />
                <ol>
                  <li>[code] Implement a simple arbitrage script</li>
                  <li>[help] Submit questions for discussion during next live session</li>
                </ol>
              </RightInnerColumn>
            </CustomInnerContainer>
          </Item>

          <Item>
            <Title>Week 2</Title>
            <Content tw='pb-md'>
              During the second week's live session, we'll cover the basic theory and practice of two-sided market making strategies, code the simple arbitrage script implementation together, and provide feedback to student script designs.
            </Content>
            <CustomInnerContainer>
              <LeftInnerColumn>
                <Snackbar type="success" label="homework" />
                <ol>
                  <li>[video] Teardown: Simple XEMM</li>
                  <li>[video] Teardown: Simple VWAP</li>
                  <li>[code] Start coding your custom script</li>
                </ol>
              </LeftInnerColumn>
              <RightInnerColumn>
                <Snackbar type="info" label="optional" />
                <ol>
                  <li>[help] Get help from mentors during office hours</li>
                  <li>[code] Extend the Simple PMM script with a dynamic price ceiling/floor feature</li>
                </ol>
              </RightInnerColumn>
            </CustomInnerContainer>
          </Item>

          <Item>
            <Title>Week 3</Title>
            <Content tw='pb-md'>
              In Week 3, you'll learn basic hedging techniques like cross-exchange market making, as well as advanced topics like accessing order book data. We'll also review the dynamic price ceiling/floor implementation, and provide final guidance to students coding their custom scripts.
            </Content>

            <CustomInnerContainer>
              <LeftInnerColumn>
              <Snackbar type="success" label="homework" />
              <ol>
                <li>[code] Submit a pull request with the code of your script</li>
                <li>[video] Create a video presenting your script</li>
              </ol>
              </LeftInnerColumn>
              <RightInnerColumn>
              <Snackbar type="info" label="Optional" />
                <ol>
                  <li>[help] Get help from mentors during office hours</li>
                </ol>
              </RightInnerColumn>
            </CustomInnerContainer>
          </Item>

          <Item>
            <Title>Week 4: Demo Day</Title>
            <Content tw='pb-md'>
              In the final Demo Day session, students present their videos and vote for for their favorite script submissions. The top submissions receive HBOT token prizes and get their scripts merged into the Hummingbot codebase, while all qualifying scripts receive a Hummingbot Script Developer NFT certificate.
            </Content>
            <ol tw='pb-md'>
              <li>[star] NFT certificates for qualifying scripts</li>
              <li>[star] HBOT rewards for winning and qualifying scripts</li>
            </ol>
          </Item>
        </RightColumn>
      </CustomContainer>
    </Container>

    <Separator tw='pt-xl' />
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
  tw`text-terminal pt-xs`,
])

const Content = styled(P)(() => [
  tw`text-secondary mt-xs`,
])

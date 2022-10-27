/* eslint no-unused-vars: [ "off", { "argsIgnorePattern": "tw" } ] */
import React from 'react'
import tw, { styled, css } from 'twin.macro'
import { Section, Container, Separator } from '@hummingbot/hbui/elements/layout'
import { H4 } from '@hummingbot/hbui/elements/typography'
import { CardB } from '@hummingbot/hbui/components/cards/CardB'

function WhyBotcamp() {
  return (
  <Section tw='py-xxxl'>
    <Container>
      <H4 isWhite isBold>Why take BotCamp?</H4>
      <Columns>
        <CardB
          tw='mb-4 lg:mb-0'
          iconElement={<IconBook/>}
          headerText="Learn the theory and practice of market making"
          descriptionText="Hummingbot open sourced the code behind Wall Street's secretive market making algorithms. BotCamp teaches you how to run these algos successfully and profitably."
        />
        <CardB
          tw='mb-4 lg:mb-0'
          iconElement={<IconBook/>}
          headerText="Design and build your own trading strategy"
          descriptionText="Have an idea for a killer trading algo? In BotCamp, you'll learn how to create any type of quant trading strategy using live order book data from multiple exchanges, in just a few lines of Python code."
        />
        <CardB
          tw='mb-4 lg:mb-0'
          iconElement={<IconBook/>}
          headerText="Lifetime access to community and content library"
          descriptionText="Join a community of pro trader mentors from the Hummingbot community, as well as BotCamp's expanding library of strategy deep dives, code samples, and other valuable content."
        />
      </Columns>
    </Container>
    <Separator />
  </Section>
  )
}

export default WhyBotcamp

const Columns = styled.div(() => [
  tw`my-md grid grid-cols-1 gap-0 lg:(my-xl grid-cols-3 gap-4)`,
])

function IconBook() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      viewBox="0 0 24 24"
    >
      <path d="M2 3h6a4 4 0 014 4v14a3 3 0 00-3-3H2zM22 3h-6a4 4 0 00-4 4v14a3 3 0 013-3h7z"></path>
    </svg>
  );
}
  
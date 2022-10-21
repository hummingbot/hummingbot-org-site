/* eslint no-unused-vars: [ "off", { "argsIgnorePattern": "tw" } ] */
import React from 'react'
import tw, { styled, css } from 'twin.macro'
import { Section, Container } from '@hummingbot/hbui/elements/layout'
import { P, H4, H6 } from '@hummingbot/hbui/elements/typography'
import { CardB } from '@hummingbot/hbui/components/cards/CardB'

import { Link } from 'gatsby'

function Testimonials() {
  return (
  <Section tw='py-8 md:py-12 lg:py-24'>
    <Container>
      <H4 isWhite isBold>Testimonials</H4>
      <Columns>
        <CardB
          tw='mb-4 lg:mb-0'
          iconElement={<IconBook/>}
          headerText="Testimonial 1"
          descriptionText="Hummingbot is a local software client that never exposes your keys externally. The entire codebase is publicly auditable on Github."
        />
        <CardB
          tw='mb-4 lg:mb-0'
          iconElement={<IconBook/>}
          headerText="Testimonial 2"
          descriptionText="We support most major centralized and decentralized exchanges, allowing you to hedge and arbitrage between them seamlessly." // remove this if no link is necessary
        />
        <CardB
          tw='mb-4 lg:mb-0'
          iconElement={<IconBook/>}
          headerText="Testimonial 3"
          descriptionText="With sophisticated strategies like Avellaneda, Hummingbot is the only trading bot designed for professional market makers and liquidity providers."
        />
      </Columns>
    </Container>
  </Section>
  )
}

const Columns = styled.div(() => [
  tw`my-md grid grid-cols-1 gap-0 lg:(my-xl grid-cols-3 gap-4)`,
])


function IconA() {
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
      <circle cx="12" cy="12" r="10"></circle>
      <path d="M12 8L12 12"></path>
      <path d="M12 16L12.01 16"></path>
    </svg>
  );
}

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
  
export default Testimonials
  
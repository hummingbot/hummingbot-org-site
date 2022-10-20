/* eslint no-unused-vars: [ "off", { "argsIgnorePattern": "tw" } ] */
import React from 'react'
import tw, { styled, css } from 'twin.macro'
import { Section, Container } from '@hummingbot/hbui/elements/layout'
import { P, H4, H6 } from '@hummingbot/hbui/elements/typography'
import { CardB } from '@hummingbot/hbui/components/cards/CardB'
import { Link } from 'react-router-dom' // import from 'gatsby' package in Gatsby projects

function Testimonials() {
  return (
  <Section tw='py-8 md:py-12 lg:py-24'>
    <Container>
      <H4 isWhite isBold>Testimonials</H4>
      <Columns>
        <Column>
          <div tw='flex justify-between mb-md'>
            <IconA tw='relative top-[4px]' />
            <H6>Testimonial 1</H6>
          </div>
          <P tw='text-white'>Hummingbot is a local software client that never exposes your keys externally. The entire codebase is publicly auditable on Github</P>
        </Column>
        <Column>
          <div tw='flex justify-between mb-md'>
            <IconA tw='relative top-[4px]' />
            <H6>Testimonial 2</H6>
          </div>
          <P tw='text-white'>We support most major centralized and decentralized exchanges, allowing you to hedge and arbitrage between them seamlessly</P>
        </Column>
        <Column>
          <div tw='flex justify-between mb-md'>
            <IconA tw='relative top-[4px]' />
            <H6>Testimonial 3</H6>
          </div>
          <P tw='text-white'>With sophisticated strategies like Avellaneda, Hummingbot is the only trading bot designed for professional market makers and liquidity providers</P>
        </Column>
      </Columns>

      {/* <div tw='w-full flex content-between'>
        <CardB
          tw='mr-xs'
          iconElement={<IconA/>}
          headerText="Testimonial 1"
          descriptionText="Inner site link. Vestibulum id ligula porta felis euismod semper. Maecenas faucibus."
          linkURL="/"
          linkClass={Link}
          external={false}
        />
        <CardB
          tw='mr-xs'
          iconElement={<IconB/>}
          headerText="Testimonial 2"
          descriptionText="With external link. Vestibulum id ligula porta felis euismod semper. Maecenas faucibus mollis interdum."
          linkURL="https://www.google.com"
          external={true}
        />
        <CardB
          headerText="Testimonial 3"
          descriptionText="With external link. Vestibulum id ligula porta felis euismod semper. Maecenas faucibus mollis interdum."
          linkURL="https://www.google.com"
          linkClass={Link}
          external={true}
        />
      </div>       */}
    </Container>
  </Section>
  )
}

const Columns = styled.div(() => [
  tw`my-md grid grid-cols-1 gap-0 lg:(my-xl grid-cols-3 gap-8)`,
])

const Column = styled.div(() => [
  tw`mb-sm p-sm lg:(p-md mb-0)`,
  css`
    background: #161C18;
    border-radius: 10px;
  `,
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

function IconB() {
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
  
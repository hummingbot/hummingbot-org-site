/* eslint no-unused-vars: [ "off", { "argsIgnorePattern": "tw" } ] */
import React from 'react'
import { Link } from 'gatsby'
import tw, { styled, css } from 'twin.macro'
import { Section, Container } from '@hummingbot/hbui/elements/layout'
import { H6, H3, H4, H5, P, Green } from '@hummingbot/hbui/elements/typography'
import { ExternalLinkButton } from '../elements/buttons'

function ActionBlock() {
  return (
    <Section tw='relative py-20 md:py-28'>
      <Container style={{zIndex: '1'}}>
        <Columns>
          <ColumnA>
            <div tw='flex justify-between mb-md'>
              <H5 tw='font-bold text-white leading-none'>Learn the dark arts of market making with Hummingbot BotCamp</H5>
            </div>
            <a href="https://hummingbot.thinkific.com">
              <ExternalLinkButton isLarge tw='w-full' label="Learn with BotCamp" />
            </a>
          </ColumnA>
          <ColumnB>
            <div tw='flex justify-between mb-md'>
              <CustomH6>Join a global community of quant traders</CustomH6>
            </div>
            <P tw='text-white mb-md'>Join the 20,000+ quant traders and market makers in the global Hummingbot community</P>
            <a href="https://discord.gg/hummingbot" target='_blank' rel="noreferrer">
              <ExternalLinkButton tw='justify-between mb-xxs min-w-[280px]' isLarge label='Join Discord server' />
            </a>
            <a href="https://hummingbot.substack.com" target='_blank' rel="noreferrer">
              <ExternalLinkButton tw='justify-between min-w-[280px]' isLarge label='Get monthly newsletter' />
            </a>
          </ColumnB>
        </Columns>
      </Container>
    </Section>
  )
}

export default ActionBlock

const Columns = styled.div(() => [
  tw`items-start my-md grid grid-cols-1 gap-0 lg:(my-xl grid-cols-2 gap-8)`,
])

const ColumnA = styled.div(() => [
  tw`mb-sm border-2 border-terminal p-sm lg:(p-md mb-0)`,
  css`
    background: #161C18;
    border-radius: 10px;
  `,
])

const ColumnB = styled.div(() => [
  tw`mb-sm p-sm lg:(p-md mb-0)`,
  css`
    background: rgba(95, 255, 215, 0.04);
    border-radius: 10px;
  `,
])

const CustomH6 = styled(H6)(() => [
  tw`font-medium text-terminal leading-tight w-[calc(100% - 38px)]`,
])

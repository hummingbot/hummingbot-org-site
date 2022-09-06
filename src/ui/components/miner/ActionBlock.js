/* eslint no-unused-vars: [ "off", { "argsIgnorePattern": "tw" } ] */
import React from 'react'
import tw, { styled, css } from 'twin.macro'
import { Section, Container } from '@hummingbot/hbui/elements/layout'
import { H6, H3, H4, H5, P, Green } from '@hummingbot/hbui/elements/typography'
import { ExternalLinkButton, CustomRoundButton } from '../../elements/buttons'
import GradOval from './assets/OvalGradientFat.svg'

function ActionBlock() {
  return (
    <Section tw='relative py-20 md:py-28'>
      <div style={{position: 'absolute', top: '50%', left: '50%', width: '1501px', height: '1084px'}}>
        <img src={GradOval} alt='test' style={{zIndex: '0', position: 'relative', top: '-50%', left: '-50%', width: '1501px', height: '1084px'}} />
      </div>
      <Container style={{zIndex: '1'}}>
        <Columns>
          <ColumnA>
            <div tw='flex justify-between mb-md'>
              <H5 tw='font-bold text-white leading-none'>Sign up to Hummingbot to get started</H5>
            </div>
            <a href="https://miner.hummingbot.io" target='_blank' rel="noreferrer">
              <CustomRoundButton isLarge tw='w-full'>Get started</CustomRoundButton>
            </a>
          </ColumnA>
          <ColumnB>
            <div tw='flex justify-between mb-md'>
              <CustomH6>Learn from Hummingbot Academy and Community</CustomH6>
            </div>
            <P tw='text-white mb-md'>Learn how to become a successful market maker through Hummingbot Academy and joining our Hummingbot Discord server</P>
            <a href="https://hummingbot.io/en/academy/" target='_blank' rel="noreferrer">
              <ExternalLinkButton tw='justify-between mb-xxs min-w-[280px]' isLarge label='Learn through Academy' />
            </a>
            <a href="https://discord.gg/V4PfK2tHC6" target='_blank' rel="noreferrer">
              <ExternalLinkButton tw='justify-between min-w-[280px]' isLarge label='Join Discord server' />
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



function OpenOrdersIcon({...props}) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="22"
      height="21"
      fill="none"
      viewBox="0 0 22 21"
      {...props}
    >
      <path fill="#5FFFD7" d="M0 18H22V21H0z"></path>
      <path fill="#5FFFD7" d="M0 12H22V15H0z"></path>
      <path fill="#5FFFD7" d="M0 6H22V9H0z"></path>
      <path fill="#5FFFD7" d="M0 0H22V3H0z"></path>
    </svg>
  );
}

function SpreadIcon({...props}) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="22"
      height="19"
      fill="none"
      viewBox="0 0 22 19"
      {...props}
    >
      <path
        fill="#5FFFD7" d="M10.622 4.872c.206.17.55.17.756 0l4.467-3.667c.207-.189.207-.472 0-.643l-.527-.434c-.206-.17-.55-.17-.778 0l-3.528 2.91L7.46.129c-.229-.17-.572-.17-.778 0l-.527.434c-.207.17-.207.454 0 .643l4.467 3.667zM10.622 14.128c.206-.17.55-.17.756 0l4.467 3.667c.207.189.207.472 0 .643l-.527.434c-.206.17-.55.17-.778 0l-3.528-2.91-3.552 2.91c-.229.17-.572.17-.778 0l-.527-.434c-.207-.17-.207-.454 0-.643l4.467-3.667z"
      ></path>
      <path fill="#5FFFD7" d="M0 10H22V12H0z"></path>
      <path fill="#5FFFD7" d="M0 7H22V9H0z"></path>
    </svg>
  );
}

function ClockIcon({...props}) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="23"
      height="23"
      fill="none"
      viewBox="0 0 23 23"
      {...props}
    >
      <path
        fill="#5FFFD7" d="M11.25 0C5.016 0 0 5.063 0 11.25 0 17.484 5.016 22.5 11.25 22.5c6.188 0 11.25-5.016 11.25-11.25C22.5 5.062 17.437 0 11.25 0zm0 20.25c-4.969 0-9-4.031-9-9 0-4.922 4.031-9 9-9 4.922 0 9 4.078 9 9 0 4.969-4.078 9-9 9zm1.125-8.813V6.375A1.14 1.14 0 0011.25 5.25a1.11 1.11 0 00-1.125 1.125V12c0 .375.14.703.422.938l3 2.25c.187.14.422.187.656.187.375 0 .703-.14.938-.422.375-.515.28-1.219-.235-1.594l-2.531-1.921z"
      ></path>
    </svg>
  );
}

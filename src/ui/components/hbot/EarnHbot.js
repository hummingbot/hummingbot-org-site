/* eslint no-unused-vars: [ "off", { "argsIgnorePattern": "tw" } ] */
import React from 'react'
import tw, { styled, css } from 'twin.macro'
import { Section, Container } from '@hummingbot/hbui/elements/layout'
import { H4, H6, P } from '@hummingbot/hbui/elements/typography'
import { ExternalLinkButton } from '@hummingbot/hbui/components/buttons'

function EarnHbot() {
  return (
    <Section tw='pb-20 md:pb-28 lg:pb-36 relative border-b-2 border-terminal'>
      <Container>
        <H4 isWhite isBold>How to earn HBOT</H4>
        <Columns>
          <Column>
            <div tw='flex justify-between mb-md'>
              <OpenOrdersIcon tw='relative top-[4px]' />
              <CustomH6>Developer bounties</CustomH6>
            </div>
            <P tw='text-white mb-xs'>
              Get assigned bounties for fixing bugs, upgrading exchange connectors, and other maintenance work.
            </P>
            <a href="https://github.com/orgs/hummingbot/projects/7" target='_blank' rel="noreferrer">
              <ExternalLinkButton label="Bounties Board" />
            </a>
          </Column>
          <Column>
            <div tw='flex justify-between mb-md'>
              <SpreadIcon tw='relative top-[4px]' />
              <CustomH6>Provide liquidity</CustomH6>
            </div>
            <P tw='text-white mb-xs'>
              Earn HBOT rewards for providing liquidity to select pairs on Hummingbot Miner.
            </P>
            <a href="https://miner.hummingbot.io" target='_blank' rel="noreferrer">
              <ExternalLinkButton label="Hummingbot Miner" />
            </a>
          </Column>
          <Column>
            <div tw='flex justify-between mb-md'>
              <ClockIcon tw='relative top-[4px]' />
              <CustomH6>Support the community</CustomH6>
            </div>
              <P tw='text-white mb-xs'>
                Provide answers to community questions on Discord to earn weekly HBOT incentives.
              </P>
              <a href="https://discord.com/channels/530578568154054663/537722826342400001/1050416395655061574" target='_blank' rel="noreferrer">
                <ExternalLinkButton label="Learn more" />
              </a>
          </Column>
        </Columns>
      </Container>
    </Section>
  )
}

export default EarnHbot

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

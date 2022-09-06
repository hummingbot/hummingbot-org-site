/* eslint no-unused-vars: [ "off", { "argsIgnorePattern": "tw" } ] */
import React from 'react'
import tw, { styled, css } from 'twin.macro'
import { Section, Container } from '@hummingbot/hbui/elements/layout'
import { H6, H5, P, Green } from '@hummingbot/hbui/elements/typography'
import { Button } from '@hummingbot/hbui/elements/buttons'
import { ExternalLinkButton } from '../../elements/buttons'
import GradOval from './assets/OvalGradientLower.svg'

function RewardFactors() {
  return (
    <Section tw='relative py-24 md:py-40 lg:py-52 xl:py-60'>
      <div style={{position: 'absolute', top: '50%', left: '50%', width: '1989px', height: '1083px'}}>
        <img src={GradOval} alt='test' style={{zIndex: '0', position: 'relative', top: '-50%', left: '-50%', width: '1989px', height: '1083px'}} />
      </div>
      <ChartIllustration tw='hidden absolute bottom-[-50px] right-[-500px] md:block xl:right-[-400px]' />
      <Container style={{zIndex: '1'}}>
        <H5 isBold>What factors influence the rewards allocation?</H5>
        <Columns>
          <Column>
            <div tw='flex justify-between mb-md'>
              <OpenOrdersIcon tw='relative top-[4px]' />
              <CustomH6>The amount of your open orders</CustomH6>
            </div>
            <P tw='text-white'>Orders do not need to be filled. We look at open orders placed every minute compared with the rest of the miners.</P>
          </Column>
          <Column>
            <div tw='flex justify-between mb-md'>
              <SpreadIcon tw='relative top-[4px]' />
              <CustomH6>The closer the spread, the higher the reward</CustomH6>
            </div>
            <P tw='text-white'>Reward gets exponentially higher when the spread of your market orders are closer to the mid-price. The order has to be lower than the maximum spread listed by each campaign.</P>
          </Column>
          <Column>
            <div tw='flex justify-between mb-md'>
              <ClockIcon tw='relative top-[4px]' />
              <CustomH6>How long your open orders are maintained</CustomH6>
            </div>
            <P tw='text-white'>Total rewards are distributed evenly per minute, which is then allocated to our miners according to how tight their spreads are and their order amount.</P>
          </Column>
        </Columns>
        
        <a href="https://support.hummingbot.io/hc/en-us/articles/4402951684505-Earning-Rewards-Calculation" target='_blank' rel="noreferrer">
          <ExternalLinkButton tw='mb-xxs' isLarge label='Learn how rewards work' />
        </a>
        <a href="https://hummingbot.io/en/liquidity-mining-whitepaper/" target='_blank' rel="noreferrer">
          <ExternalLinkButton isLarge label='Read the liquidity mining whitepaper' />
        </a>
      </Container>
    </Section>
  )
}

export default RewardFactors

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

function ChartIllustration({...props}) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="732"
      height="423"
      fill="none"
      viewBox="0 0 732 423"
      {...props}
    >
      <rect
        width="344.18"
        height="496.153"
        x="0"
        y="1"
        stroke="#5FFFD7"
        strokeWidth="2"
        rx="13"
        transform="matrix(.86603 .5 -.86603 .5 432.279 .5)"
      ></rect>
      <rect
        width="222.615"
        height="179.621"
        fill="url(#paint0_linear_279_129)"
        rx="6"
        transform="matrix(.86603 .5 0 1 110 100.146)"
      ></rect>
      <rect
        width="219.615"
        height="176.621"
        x="1.299"
        y="2.25"
        stroke="#5FFFD7"
        strokeOpacity="0.12"
        strokeWidth="3"
        rx="4.5"
        transform="matrix(.86603 .5 0 1 110.174 99.496)"
      ></rect>
      <path
        fill="#5FFFD7"
        d="M128.291 237.966c0-.52.365-.731.815-.471.451.261.816.893.816 1.414v25.928c0 .52-.365.731-.816.471-.45-.26-.815-.893-.815-1.413v-25.929z"
      ></path>
      <rect
        width="1.884"
        height="41.755"
        fill="#5FFFD7"
        rx="0.942"
        transform="matrix(.86603 .5 0 1 140.905 230.365)"
      ></rect>
      <rect
        width="1.884"
        height="26.947"
        fill="#5FFFD7"
        rx="0.942"
        transform="matrix(.86603 .5 0 1 153.52 252.456)"
      ></rect>
      <rect
        width="1.884"
        height="38.599"
        fill="#5FFFD7"
        rx="0.942"
        transform="matrix(.86603 .5 0 1 166.134 248.086)"
      ></rect>
      <rect
        width="1.884"
        height="57.535"
        fill="#5FFFD7"
        rx="0.942"
        transform="matrix(.86603 .5 0 1 178.748 236.434)"
      ></rect>
      <rect
        width="1.884"
        height="34.958"
        fill="#5FFFD7"
        rx="0.942"
        transform="matrix(.86603 .5 0 1 191.363 266.294)"
      ></rect>
      <rect
        width="1.884"
        height="71.858"
        fill="#5FFFD7"
        rx="0.942"
        transform="matrix(.86603 .5 0 1 203.977 236.676)"
      ></rect>
      <rect
        width="1.884"
        height="46.125"
        fill="#5FFFD7"
        rx="0.942"
        transform="matrix(.86603 .5 0 1 216.591 269.692)"
      ></rect>
      <rect
        width="1.884"
        height="57.535"
        fill="#5FFFD7"
        rx="0.942"
        transform="matrix(.86603 .5 0 1 229.206 265.565)"
      ></rect>
      <rect
        width="1.884"
        height="63.847"
        fill="#5FFFD7"
        rx="0.942"
        transform="matrix(.86603 .5 0 1 241.82 266.536)"
      ></rect>
      <rect
        width="1.884"
        height="82.297"
        fill="#5FFFD7"
        rx="0.942"
        transform="matrix(.86603 .5 0 1 254.435 255.369)"
      ></rect>
      <rect
        width="1.884"
        height="71.858"
        fill="#5FFFD7"
        rx="0.942"
        transform="matrix(.86603 .5 0 1 267.049 273.091)"
      ></rect>
      <path
        fill="#5FFFD7"
        d="M279.663 258.571c0-.52.366-.731.816-.471.451.26.816.893.816 1.413v92.719c0 .52-.365.731-.816.471-.45-.26-.816-.893-.816-1.413v-92.719z"
      ></path>
      <rect
        width="245.951"
        height="39.252"
        fill="#151819"
        rx="9"
        transform="matrix(.86603 .5 0 1 90 242.146)"
      ></rect>
      <defs>
        <linearGradient
          id="paint0_linear_279_129"
          x1="125.916"
          x2="101.294"
          y1="-87.481"
          y2="79.837"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#151819" stopOpacity="0"></stop>
          <stop offset="1" stopColor="#151819"></stop>
        </linearGradient>
      </defs>
    </svg>
  );
}

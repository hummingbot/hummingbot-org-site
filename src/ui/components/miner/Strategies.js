/* eslint no-unused-vars: [ "off", { "argsIgnorePattern": "tw" } ] */
import React from 'react'
import tw, { styled, css } from 'twin.macro'
import { Section, Container } from '@hummingbot/hbui/elements/layout'
import { H5, P, Green } from '@hummingbot/hbui/elements/typography'
import { ExternalLinkButton, CustomRoundButton } from '../../elements/buttons'
import GradOval from './assets/OvalGradientLower.svg'

function Strategies() {
  return (
    <Section tw='relative py-24 md:py-40 lg:py-52 xl:py-60'>
      <div style={{position: 'absolute', top: '50%', left: '50%', width: '1989px', height: '1083px'}}>
        <img src={GradOval} alt='test' style={{zIndex: '0', position: 'relative', top: '-50%', left: '-50%', width: '1989px', height: '1083px'}} />
      </div>
      <Container style={{zIndex: '1'}}>
        <H5 isBold>Use built-in strategies or build your own</H5>
        <P tw='my-sm max-w-[800px]'>Hummingbot Foundation offers a wide range of open-source trading strategies that cater for your use case and are often used to mine our liquidity mining rewards. Popular strategies include:</P>
        <Columns>
          <Column>
            <div tw='flex'>
              <SmallRectangle />
              <BoxesHeaderP>Pure market making</BoxesHeaderP>
            </div>
            <BoxesDescP>Easy to set-up, highly configurable to capture rewards</BoxesDescP>
          </Column>
          <Column>
            <div tw='flex'>
              <SmallRectangle />
              <BoxesHeaderP>Cross-exchange market making</BoxesHeaderP>
            </div>
            <BoxesDescP>Lower your inventory risk during market volatility</BoxesDescP>
          </Column>
          <Column>
            <div tw='flex'>
              <SmallRectangle />
              <BoxesHeaderP>Avellaneda market making</BoxesHeaderP>
            </div>
            <BoxesDescP>Auto-manage your inventory given market volatility</BoxesDescP>
          </Column>
          <Column>
            <div tw='flex'>
              <SmallRectangle />
              <BoxesHeaderP>Liquidity mining strategy</BoxesHeaderP>
            </div>
            <BoxesDescP>Manage multiple markets at the same time</BoxesDescP>
          </Column>
        </Columns>
        <LargeBox>
          <div>
            <DescP>Some people prefer adding custom scripts on their own.</DescP>
            <DescP tw='opacity-60 mt-xxs'>There are over 13 strategies available.</DescP>
          </div>
          <a href="https://hummingbot.org/strategies/" target='_blank' rel="noreferrer">
            <CustomButton isLarge>Explore Strategies</CustomButton>
          </a>
        </LargeBox>
      </Container>
    </Section>
  )
}

export default Strategies

const Columns = styled.div(() => [
  tw`my-xs grid grid-cols-1 gap-0 md:(my-lg grid-cols-2 gap-8) xl:(my-xl grid-cols-4 gap-8)`,
])

const Column = styled.div(() => [
  tw`mb-xxs pt-sm pr-sm pb-sm lg:(pt-md pr-md pb-md mb-0)`,
  css`
    background: #161C18;
    border-radius: 10px;
  `,
])

const LargeBox = styled.div(() => [
  tw`w-full p-sm md:(flex justify-between items-center p-xs px-md)`,
  css`
    background: #161C18;
    border-radius: 10px;
  `,
])

const SmallRectangle = styled.div(() => [
  css`
    width: 3px;
    height: 12px;
    background: #5FFFD7;
    position: relative;
    top: 5px;
    left: 1px;
  `,
])

const HeaderP = styled(P)(() => [
  tw`font-medium text-terminal leading-tight mb-xs`,
])

const DescP = styled(P)(() => [
  tw`font-medium text-white leading-tight`,
])

const BoxesHeaderP = styled(HeaderP)(() => [
  tw`leading-none pl-[26px]`,
])

const BoxesDescP = styled(DescP)(() => [
  tw`pl-[28px]`,
])

const CustomButton = styled(CustomRoundButton)(() => [
  tw`mt-xs w-full md:(mt-0 w-auto)`,
])

/* eslint no-unused-vars: [ "off", { "argsIgnorePattern": "tw" } ] */
import React from 'react'
import tw, { styled } from 'twin.macro'
import { Section, Container } from '@hummingbot/hbui/elements/layout'
import { P, H6, Green } from '@hummingbot/hbui/elements/typography'
import TerminalWindows from '../../assets/terminal_windows.png'

function WhatIsMiner() {
  return (
    <Section tw='py-xl'>
      <Container tw='relative'>
        <img tw='w-[450px] absolute hidden bottom-[-400px] xl:(block right-[-20%]) 2xl:right-[-30%]' src={TerminalWindows} alt='Terminal windows' />
        <CustomContainer>
          <LeftColumn>
            <H6 isBold>What is Hummingbot Miner?</H6>
          </LeftColumn>
          <RightColumn>
            <P isMedium><span tw='text-terminal'>Miner</span> is a platform that allows token issuers to sponsor liquidity mining campaigns on both centralized and decentralized exchanges to provide rewards for our community of market makers</P>
          </RightColumn>
        </CustomContainer>
        <CustomContainer>
          <LeftColumn>
            <H6 isBold>For Token Issuers</H6>
          </LeftColumn>
          <RightColumn>
            <ThreeColumnHolder>
              <Column>
                <TitleP>Liquidity from decentralized market making.</TitleP>
                <LightP>Token issuers can get liquidity from our community of individual traders.</LightP>
              </Column>
              <Column>
                <TitleP>Marketing value / public promotion</TitleP>
                <LightP>Get exposure to a large community of early adopters and crypto evangelists.</LightP>
              </Column>
              <Column>
                <TitleP>Cheaper and more diversified alternative.</TitleP>
                <LightP>Low cost. You provide the reward pool, let our community take care of the rest.</LightP>
              </Column>
            </ThreeColumnHolder>
          </RightColumn>
        </CustomContainer>
        <CustomContainer>
          <LeftColumn>
            <H6 isBold>For Traders</H6>
          </LeftColumn>
          <RightColumn>
            <ThreeColumnHolder>
              <Column>
                <TitleP>Get rewarded for providing liquidity.</TitleP>
                <LightP>Individual traders can receive rewards by market making for the specified campaigns.</LightP>
              </Column>
              <Column>
                <TitleP>Support your favorite token projects</TitleP>
                <LightP>Earn additional returns while “hodling” your favorite tokens.</LightP>
              </Column>
              <Column>
                <TitleP>Use Hummingbot Client or your own solutions.</TitleP>
                <LightP>Use HB Client’s built-in strategies alternative platforms or even your own MM solutions. Miner is open to all.</LightP>
              </Column>
            </ThreeColumnHolder>
          </RightColumn>
        </CustomContainer>
      </Container>
    </Section>
  )
}

export default WhatIsMiner

const CustomContainer = styled.div(() => [
  tw`my-md flex flex-col md:(flex-row my-xl)`,
])

const LeftColumn = styled.div(() => [
  tw`w-full pb-xs md:(w-1/4 pr-xl)`,
])

const RightColumn = styled.div(() => [
  tw`w-full md:w-3/4`,
])

const TitleP = styled(P)(() => [
  tw`text-terminal`,
])

const LightP = styled(P)(() => [
  tw`text-white mt-xxs md:mt-xs opacity-70`,
])

const Column = styled.div(() => [
  tw`w-full pb-md sm:(w-1/3 pr-xs)`,
])

const ThreeColumnHolder = styled.div(() => [
  tw`flex flex-col pt-md border-t-2 border-terminal sm:(flex-row pt-xs)`,
])

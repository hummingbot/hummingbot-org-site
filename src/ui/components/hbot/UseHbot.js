/* eslint no-unused-vars: [ "off", { "argsIgnorePattern": "tw" } ] */
import React from 'react'
import tw, { styled, css } from 'twin.macro'
import { Section, Container, Separator } from '@hummingbot/hbui/elements/layout'
import { H4, H6, P } from '@hummingbot/hbui/elements/typography'
import { CardB } from '@hummingbot/hbui/components/cards/CardB'

function UseHbot() {
  return (
  <Section tw='pt-xxxl'>
    <CustomContainer>
      <LeftColumn>
        <H4 isWhite isBold>
          Why take Botcamp?
        </H4>
      </LeftColumn>
      <RightColumn>
        <Item>
          <Title>Learn the theory and practice of crypto market making</Title>
          <Content>
            Hummingbot open sourced the code behind Wall Street's secretive market making algorithms. BotCamp teaches you how to run these algos successfully in volatile crypto markets.
          </Content>
        </Item>

        <Item>
          <Title>Design and code your own trading strategy</Title>
          <Content>
            Have an idea for a killer trading algo? In BotCamp, you'll learn how to code your custom strategy using Hummingbot in just a few lines of basic Python code.
          </Content>
        </Item>

        <Item>
          <Title>Lifetime access to community and content library</Title>
          <Content>
            Join a community of developers and market makers, and get lifetime access to BotCamp's expanding library of strategy teardowns, tutorial videos, and other quant trading content.
          </Content>
        </Item>
      </RightColumn>
    </CustomContainer>
    <Separator tw='pt-xl' />
  </Section>
  )
}

export default UseHbot

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

const CustomContainer = styled(Container)(() => [
  tw`my-md flex flex-col md:(flex-row my-xl)`,
])

const LeftColumn = styled.div(() => [
  tw`w-full pb-xs md:(w-1/3 pr-xl)`,
])

const RightColumn = styled.div(() => [
  tw`w-full block md:(grid grid-cols-3 gap-8 w-2/3)`,
])

const Item = styled.div(() => [
  tw`w-full pb-md border-t-2 border-terminal`,
])

const Title = styled(H6)(() => [
  tw`text-terminal leading-tight pt-xs`,
])

const Content = styled(P)(() => [
  tw`text-white mt-xxs md:mt-xs opacity-70 mb-xs`,
])
  
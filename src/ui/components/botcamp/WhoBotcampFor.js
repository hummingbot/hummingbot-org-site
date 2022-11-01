/* eslint no-unused-vars: [ "off", { "argsIgnorePattern": "tw" } ] */
import React from 'react'
import tw, { styled, css } from 'twin.macro'
import { Section, Container, Separator } from '@hummingbot/hbui/elements/layout'
import { P, H1, H2, H4, H6 } from '@hummingbot/hbui/elements/typography'

function WhoBotcampFor() {
  return (
  <Section tw='border-b-4 border-terminal'>
    <Container>
      <CustomContainer>
        <LeftColumn>
          <H4 isBold tw='text-terminal mb-md lg:mb-xl'>
            Who is Botcamp for?
          </H4>
          <Title>+ Industry professionals</Title>
          <Item>
            For employees of crypto exchanges, funds and trading firms - uplevel your coding skills while learning the theory and practice of market making.
          </Item>
          <Title>+ Crypto bot traders</Title>
          <Item>
            Are you losing money on simple web-based trading bots that don't give you full control? Take Botcamp to learn how to create your own trading bots
          </Item>
          <Title>+ Hummingbot users</Title>
          <Item>
            Looking to improve your liquidity mining performance? Want to learn how to make money building Hummingbot strategies for customers? Take Botcamp to learn how to design and run profitable market making strategies.
          </Item>
        </LeftColumn>
        <RightColumn>
          <H4 isBold tw='text-[#EB5783] mb-md lg:mb-xl'>
            Who is it not for?
          </H4>
          <TitleRed>- You want guaranteed profits</TitleRed>
          <Item>
            We will teach you how to design your script to hedge risks and to optimize for profitability. However, we cannot guarantee that your script will make money. Trading is competitive and every market is different, so it takes hard work and effort to craft a profitable strategy.
          </Item>
          <TitleRed>- You're looking for shortcuts and hacks</TitleRed>
          <Item>
            Botcamp mentors will teach you the skills and theory needed to build a profitable trading strategy. To get the most out of BotCamp however, you should be willing to put in the work needed to improve your strategy iteratively.
          </Item>
          <TitleRed>- You're code-averse</TitleRed>
          <Item>
            We teach Botcamp participants how to code their own trading strategies, because the most successful Hummingbot users are those who customize their bots. You just need basic Python skills and an aptitude to learn, and we'll teach you the rest!
          </Item>
        </RightColumn>
      </CustomContainer>
    </Container>
  </Section>
  )
}

export default WhoBotcampFor

const CustomContainer = styled.div(() => [
    tw`flex flex-col py-xl`,
    tw`md:(py-xxxl flex-row)`,
    tw`lg:py-40`,
  ])
  
  const LeftColumn = styled.div(() => [
    tw`w-full pb-xs md:(w-1/2 pr-xl)`,
  ])
  
  const RightColumn = styled.div(() => [
    tw`w-full md:w-1/2`,
  ])
  
  const Item = styled(P)(() => [
    tw`pb-md`,
  ])
  
  const Title = styled(H6)(() => [
    tw`text-terminal font-medium pb-xs`,
  ])

  const TitleRed = styled(H6)(() => [
    tw`text-[#EB5783] font-medium pb-xs`,
  ])
/* eslint no-unused-vars: [ "off", { "argsIgnorePattern": "tw" } ] */
import React from 'react'
import tw, { styled, css } from 'twin.macro'
import { Section, Container, Separator } from '@hummingbot/hbui/elements/layout'
import { P, H1, H6 } from '@hummingbot/hbui/elements/typography'

function BotcampFAQ() {
  return (
  <Section tw='pt-xxxl'>
    <Container>
      <CustomContainer>
          <LeftColumn>
            <H1 isBold tw='text-terminal'>
              F.A.Q.
            </H1>
          </LeftColumn>
          <RightColumn>
            <Title>+ Does voting with HBOT cost gas or other transaction fees?</Title>
            <Item>
              No. On Snapshot, HBOT holders vote by signing messages using their HBOT token balance to vote on issues without paying gas. Snapshots are recorded to IPFS to generate a permanent record.
            </Item>
            <Title>+ Will there be other uses for the HBOT token in the future?</Title>
            <Item>
              Yes, Hummingbot Foundation is continually experimenting with novel ways to use HBOT to incentive community participation and reward open source contribution. We encourage HBOT holders to submit their own ideas for future HBOT use cases via proposals.
            </Item>
            <Title>+ What is HBOT's circulating and total supply?</Title>
            <Item>
              The total supply of HBOT was fixed at genesis at 1 billion tokens. No more tokens will be minted in the future. For the current circulating supply and release schedule, see <a href="https://docs.google.com/spreadsheets/u/1/d/1UNAumPMnXfsghAAXrfKkPGRH9QlC8k7Cu1FGQVL1t0M/edit?usp=sharing">HBOT Tracker</a>, a Google Sheet maintained by Hummingbot Foundation.     
            </Item>
            <Title>+ How are HBOT tokens being distributed?</Title>
            <Item>
              When the Hummingbot Foundation took ownership of the Hummingbot codebase in December 2021, 600 million locked HBOT tokens (60% of total supply) were distributed to past team members and investors at CoinAlpha, the company that originally created Hummingbot. The remaining 400 million tokens (40% of total supply) are reserved for the Hummingbot community are will be distributed across fixed, bi-annual <a href="https://docs.hummingbot.org/governance/epochs">Epochs</a>.
            </Item>
            <Title>+ Will HBOT trade on other exchanges in the future?</Title>
            <Item>
              Yes. In the future, Hummingbot Foundation aims to support the listing of the HBOT token on other decentralized and centralized exchanges, as well as incentivize users to use Hummingbot to provide liquidity for HBOT across these venues.
            </Item>
            <Title>+ How do I access my locked HBOT tokens?</Title>
            <Item>
              Each locked HBOT token holder has their own unique token vesting smart contract that automatically releases their HBOT tokens over time. Holders can access their tokens by calling the <span tw='text-terminal'>release</span> function on the vesting contract to release their tokens to their beneficiary wallet defined in the contract. The Foundation will publish a guide on how to access your tokens in the coming weeks.
            </Item>
            <Title>+ How do I delegate my HBOT token voting power?</Title>
            <Item>
              The delegation feature of HBOT will be terminated by March 1, 2023. Until then, you can delegate the HBOT voting power of your locked HBOT tokens to another Ethereum address. See this <a href="https://www.notion.so/hummingbot-foundation/Delegate-to-Vote-HBOT-1e653c0c510245a584b32f99ab347cd0">Notion page</a> for more information on how to delegate your tokens.
            </Item>

          </RightColumn>
      </CustomContainer>


    </Container>
    <Separator tw='pt-xxxl' />
  </Section>
  )
}

export default BotcampFAQ
  

const CustomContainer = styled.div(() => [
  tw`my-md flex flex-col md:(flex-row my-xl)`,
])

const LeftColumn = styled.div(() => [
  tw`w-full pb-xs md:(w-1/3 pr-xl)`,
])

const RightColumn = styled.div(() => [
  tw`w-full md:w-2/3`,
])

const Item = styled(P)(() => [
  tw`pb-md`,
])

const Title = styled(H6)(() => [
  tw`text-terminal pb-xs`,
])
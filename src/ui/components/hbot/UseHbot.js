/* eslint no-unused-vars: [ "off", { "argsIgnorePattern": "tw" } ] */
import React from 'react'
import tw, { styled, css } from 'twin.macro'
import { Section, Container, Separator } from '@hummingbot/hbui/elements/layout'
import { P, H1, H2, H3, H4, H6, Body } from '@hummingbot/hbui/elements/typography'
import { ExternalLinkButton } from "../../elements/buttons"

function UseHbot() {
  return (
  <Section
    tw='py-xl md:py-xxxl border-y-2 border-terminal'
    id='use-hbot'
  >
    <Container>
      <CustomContainer>
        <LeftColumn>
          <H4 isWhite isBold tw='leading-tight'>
            Ways to use HBOT
          </H4>
          <P tw='text-secondary pt-md'>
            Help us make Hummingbot better through governance
          </P>
        </LeftColumn>
        <RightColumn>
          <Item>
            <Title>Propose changes</Title>
            <Content>
              Vote on polls and proposals that decide which exchanges and strategies are included in the Hummingbot codebase.
            </Content>
            <a href="https://docs.hummingbot.org/proposals" target='_blank' rel="noreferrer">
              <ExternalLinkButton label="Types of Proposals" />
            </a>
          </Item>

          <Item>
            <Title>Allocate bounties</Title>
            <Content>
              Allocate HBOT bounties to developers for fixing bugs or adding new connectors, strategies, and enhancements.
            </Content>
            <a href="https://github.com/orgs/hummingbot/projects/7" target='_blank' rel="noreferrer">
              <ExternalLinkButton label="Bounties Board" />
            </a>
          </Item>

          <Item>
            <Title>Prioritize issues</Title>
            <Content>
            Decide which issues and pull requests are included in each monthly release.
            </Content>
            <a href="https://github.com/orgs/hummingbot/projects/1" target='_blank' rel="noreferrer">
              <ExternalLinkButton label="Pull Request Status" />
            </a>
          </Item>

        </RightColumn>
      </CustomContainer>
    </Container>
  </Section>
  )
}

export default UseHbot

const CustomContainer = styled.div(() => [
  tw`my-md flex flex-col md:(flex-row my-xl)`,
])

const LeftColumn = styled.div(() => [
  tw`w-full pb-xs md:(w-1/3 pr-xl)`,
])

const RightColumn = styled.div(() => [
  tw`w-full md:w-2/3`,
])

const Item = styled.div(() => [
  tw`w-full pb-md border-t-2 border-terminal`,
])

const Title = styled(H6)(() => [
  tw`text-terminal pt-xs leading-tight`,
])

const Content = styled(P)(() => [
  tw`text-white mt-xxs md:mt-xs opacity-70 mb-xs`,
])

/* eslint no-unused-vars: [ "off", { "argsIgnorePattern": "tw" } ] */
import React from 'react'
import tw, { styled, css } from 'twin.macro'
import { Section, Container, Separator } from '@hummingbot/hbui/elements/layout'
import { P, H1, H2, H3, H4, H6, Body } from '@hummingbot/hbui/elements/typography'

function Trajectory() {
  return (
  <Section tw='py-xl md:py-xxxl border-y-4 border-terminal'>
    <Container>
      <CustomContainer>
        <LeftColumn>
          <H4 isWhite isBold tw='leading-tight'>
            Accelerate your trajectory as a quant trader
          </H4>
          <P tw='text-secondary pt-md'>
            Botcamp equips you with the knowledge and skills you need to compete with the pros 
          </P>
        </LeftColumn>
        <RightColumn>
          <Item>
            <Title>Hands-on training building strategies together</Title>
            <Content>
              We believe the best way to learn market making is to write and run code together. Our bootcamp focuses on practical technical demos with quizzes, contents, homeworks, and example scripts contributed by our community of students.
            </Content>
          </Item>

          <Item>
            <Title>1-1 mentorship and guidance</Title>
            <Content>
              We offer 1-1 mentorship and guidance from our vetted community of mentors to offer you tailored help and support, whether its evaluating your strategy design, getting stuck with a bug in your code, or getting pointers to methods you can use to solve your problem.
            </Content>
          </Item>

          <Item>
            <Title>Lifetime access to community of mentors and content library</Title>
            <Content>
              Get ongoing access to current + new content, mentorship sessions, AMAs, scripts coding examples, strategy deep dives, and support from a community of peers that can help you execute your learnings. 
            </Content>
          </Item>
        </RightColumn>
      </CustomContainer>
    </Container>
    <Container>
      <Certificate>
        <CertificateContent>
          <H3 isBold tw='text-terminal mb-xxs md:mb-xs'>Get certified &#x2713;</H3>
          <H6 tw='text-secondary'>
            Our Hummingbot community includes hedge funds and clients interested in working with our student developers. Receive a <span tw='text-terminal'>NFT certificate</span> after course completion that expands your opportunities as a scripts developer. 
          </H6>
        </CertificateContent>
      </Certificate>
    </Container>
  </Section>
  )
}

export default Trajectory

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

const Certificate = styled.div(() => [
  tw`flex flex-col`,
  tw`justify-center items-center`,
  tw`border-y-2 border-x-[20px] rounded border-terminal`,
  tw`min-h-[300px] sm:min-h-[400px] md:min-h-[500px]`,
])

const CertificateContent = styled.div(() => [
  tw`w-[90%] sm:w-[80%] md:w-[60%] max-w-[700px]`,
])


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
            <Title>+ How much does BotCamp cost? </Title>
            <Item>
              The 4-week Botcamp course costs <span tw='text-terminal'>$1000 USD</span>, because our staff and mentors devote hands-on, 1:1 coaching time to help each and every student learn and build their custom script. That's why we cap each cohort at <span tw='text-terminal'>max 20 students</span>. Students also get lifetime access to all the content in library, which we will expand with more strategy teardowns, tutorials, and other content. Prices increase to US$1750 in Cohort #4.
            </Item>
            <Title>+ Can I apply for a scholarship to Botcamp?</Title>
            <Item>
              We may have a few extra spots for scholarships on a highly selective basis. 
            <Title>+ How much coding knowledge is required?</Title>
            <Item>
              Our scripts developer course requires only basic knowledge in coding - having taken any computer programming 101 course is fine. The scripts are designed to be simple and can be creating with 40 lines of code. We will also provide a dedicated onboarding guide for students who have less developer experience.
            </Item>
            <Title>+ How much time should be spent in the program?</Title>
            <Item>
              Students typically spend a few hours per week in the program, while we are flexible on your schedule and time. That said, how much you get is based on how much you spend learning and reaching out to our community of mentors and students. The goal of the courses is to provide you with an overview of the knowledge, and pointers for you to continue work on your own based on your goals. Reach out to our mentors who will be able to provide you with 1-1 guidance if needed!     
            </Item>
            <Title>+ What can you do after being certified?</Title>
            <Item>
              We will be opening up the Hummingbot community to partnerships with hedge funds and exchanges very soon, and there will be opportunities for developers to submit their own strategy / improvement proposals or collaborate with different people in the community to contribute to the Hummingbot codebase and earn rewards. Stay tuned!  
            </Item>
            <Title>+ Is there a Refund Policy?</Title>
            <Item>
              Botcamp only allows refunds within 14 days of your payment and before the start of the cohort, whichever date is earlier. 
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
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
            <Title>+ How much does Botcamp cost? </Title>
            <Item>              
              The 6-week Botcamp course along with 1 year of access to the content library and community costs $1750. Students can also opt to take the course and get lifetime access to the content library and community for $3500. We will regularly add fresh content to the content library and introduce new modules accessible by all students in the Botcamp community.
            </Item>

            <Title>+ Can I apply for a scholarship to Botcamp?</Title>
            <Item>
              We may have a few extra spots for scholarships on a highly selective basis. 
            </Item>
            <Title>+ How many students are in a cohort? </Title>

            <Item>              
              Currently, each cohort is <span tw='text-terminal'>capped at 30 students</span> so that we and our mentors devote hands-on, 1:1 coaching time to help each student build their custom script. Students can book office hours with mentors and opt into 1:1 sessions with other students to learn collaboratively. At the end of Botcamp, students present the scripts they have built to the community at Demo Day.
            </Item>

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
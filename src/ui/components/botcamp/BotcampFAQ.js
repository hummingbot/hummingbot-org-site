/* eslint no-unused-vars: [ "off", { "argsIgnorePattern": "tw" } ] */
import React from 'react'
import tw, { styled, css } from 'twin.macro'
import { Section, Container } from '@hummingbot/hbui/elements/layout'
import { P, H4, H6 } from '@hummingbot/hbui/elements/typography'
import CodeBlock from '@hummingbot/hbui/components/code/CodeBlock'

function BotcampFAQ() {
  return (
  <Section tw='py-8 md:py-12 lg:py-24'>
    <Container>
      <H4 isWhite isBold>Botcamp FAQs</H4>
      <H6>How much coding knowledge is required?</H6>
      <P>
        Our scripts developer course requires only basic knowledge in coding - having taken any computer programming 101 course is fine. The scripts are designed to be simple and can be creating with 40 lines of code. We will also provide a dedicated onboarding guide for students who have less developer experience.        
      </P>
      <H6>How much time should be spent in the program?</H6>
      <P>
				Students typically spend a few hours per week in the program, while we are flexible on your schedule and time. That said, how much you get is based on how much you spend learning and reaching out to our community of mentors and students. The goal of the courses is to provide you with an overview of the knowledge, and pointers for you to continue work on your own based on your goals. Reach out to our mentors who will be able to provide you with 1-1 guidance if needed!     
      </P>
      <H6>What is the cost of the program? </H6>
      <P>
				The program is a paid course of $1000 USD. The reason why we are building the course into a paid course is because  we hope to create an effective course supported by a good quality community of instructors and mentors.This will be one of the major income streams for the Hummingbot Foundation moving forward.  
      </P>
      <H6>What can you do after being certified?</H6>
      <P>
				We will be opening up the Hummingbot community to partnerships with hedge funds and exchanges very soon, and there will be opportunities for developers to submit their own strategy / improvement proposals or collaborate with different people in the community to contribute to the Hummingbot codebase and earn rewards. Stay tuned!  
      </P>
    </Container>
  </Section>
  )
}

export default BotcampFAQ
  
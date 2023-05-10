/* eslint no-unused-vars: [ "off", { "argsIgnorePattern": "tw" } ] */
import React from 'react'
import tw, { styled, css } from 'twin.macro'
import { Section, Container } from '@hummingbot/hbui/elements/layout'
import { H3, H6, PSmall } from '@hummingbot/hbui/elements/typography'
import MailchimpSubscribe from './MailchimpSubscribe'
import { Button } from '@hummingbot/hbui/elements/buttons'

function GetNewsletter() {
  return (
  <Section tw='mt-xxxl mb-xl'>
    <H3 tw='text-center'>
      Not quite ready to apply yet?
    </H3>
    <CustomContainer>
      <LeftColumn>
        <Item>
          <br />
          <H6 isWhite isBold>
            Get the Botcamp Newsletter
          </H6>
          <PSmall isWhite>
            Get notified about news, events, and content from the Hummingbot Botcamp community    
          </PSmall>
          <div tw='flex justify-center'>
            <MailchimpSubscribe />
          </div>
        </Item>
      </LeftColumn>
      <RightColumn>
        <Item>
          <br />
          <H6 isWhite isBold>
            Schedule an Info Call
          </H6>
          <PSmall isWhite>
            Ask us anything about how Botcamp works   
          </PSmall>
          <br />
          <br />
          <div tw='flex justify-center'>
            <Button isLarge variant="success">
              Book a slot
            </Button>
          </div>
        </Item>
      </RightColumn>
    </CustomContainer>
  </Section>
  )
}

export default GetNewsletter

const CustomContainer = styled(Container)(() => [
  tw`my-md flex flex-col md:(flex-row my-xl)`,
])

const LeftColumn = styled.div(() => [
  tw`w-full pb-xs md:(w-1/2 pr-xl)`,
])

const RightColumn = styled.div(() => [
  tw`w-full md:w-1/2`,
])

const Item = styled.div(() => [
  tw`border-t-2 border-success text-center`,
])

/* eslint no-unused-vars: [ "off", { "argsIgnorePattern": "tw" } ] */
import React from 'react'
import tw, { styled } from 'twin.macro'
import { Link } from 'gatsby'
import { Section, Container, ItemsRow } from '@hummingbot/hbui/elements/layout'
import { P, H2, H6 } from '@hummingbot/hbui/elements/typography'
import { Button } from '@hummingbot/hbui/components/buttons'
import TriangleDown from '@hummingbot/hbui/assets/svgs/arrows/TriangleDown'
import { CustomRoundButton } from '../../elements/buttons'
import { GradientSideLine } from '../../elements/layout'
import { BackgroundNodes } from '../BackgroundNodes'
import GradOval from '../../assets/OvalGradientLower.svg'
import tokenImage from '../../assets/hbot-token.png'

function Hero() {
  return (
    <Section tw='relative h-[600px] lg:h-[800px]' style={{overflow: 'hidden'}}>
      <div style={{opacity: '0.5', position: 'absolute', top: '100%', left: '50%', width: '1989px', height: '1083px'}}>
        <img src={GradOval} alt='test' style={{zIndex: '0', position: 'relative', top: '-50%', left: '-50%', width: '1989px', height: '1083px'}} />
      </div>
      <span tw='hidden md:inline'>
        <BackgroundNodes />
      </span>
        <Container tw='z-10 mt-xxl'>
          <CustomH1 isBold tw='pb-xs'>Decide how the Hummingbot codebase evolves</CustomH1>
          <CustomContainer>
            <LeftColumn>
              <TokenImageWrapper>
                <img src={tokenImage} alt='HBOT Token' />
              </TokenImageWrapper>
            </LeftColumn>
            <RightColumn>
              <H6 tw='xl:mt-xl'>
                HBOT is a governance token lets holders decide which <span tw='text-magenta'>exchanges</span> and <span tw='text-blue'>strategies</span> should be included in the Hummingbot codebase, prioritize Github <span tw='text-orange'>issues</span>, and allocate developer <span tw='text-terminal'>bounties</span>.
              </H6>
              <ItemsRow tw='mt-xs'>
                <Link to="#use-hbot">
                  <Button 
                    isLarge
                    isSecondary
                    iconAfter={<TriangleDown tw='fill-current'/>}
                    label="Earn and use HBOT"
                  />
                </Link>
              </ItemsRow>
            </RightColumn>
          </CustomContainer>
        </Container>
      <BottomGradientLine />
    </Section>
  )
}

export default Hero

const CustomH1 = styled(H2)({
  background: 'linear-gradient(270deg, #00C2CE 25.96%, #318DFF 100%)',
  WebkitTextFillColor: 'transparent',
  WebkitBackgroundClip: 'text',
  lineHeight: '100%',
})

const CustomContainer = styled(Container)(() => [
  tw`flex flex-col my-md`,
  tw`md:(flex-row my-xl)`,
])

const LeftColumn = styled.div(() => [
  tw`w-full pb-xs flex justify-center`,
  tw`md:(w-1/2 pr-xxxl justify-end)`,
])

const TokenImageWrapper = styled.div(() => [
  tw`w-1/4`,
  tw`md:w-3/4 lg:w-1/2`,
])

const RightColumn = styled.div(() => [
  tw`w-full`,
  tw`md:(w-1/2)`,
])

const BottomGradientLine = styled.div({
  position: 'absolute',
  bottom: '0',
  left: '0',
  width: '100%',
  height: '1px',
  background: 'linear-gradient(270deg, #00C2CE 25.96%, #318DFF 100%)',
})

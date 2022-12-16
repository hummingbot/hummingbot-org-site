/* eslint no-unused-vars: [ "off", { "argsIgnorePattern": "tw" } ] */
import React from 'react'
import tw, { styled } from 'twin.macro'
import { Section, Container } from '@hummingbot/hbui/elements/layout'
import { P, H2 } from '@hummingbot/hbui/elements/typography'
import { CustomRoundButton } from '../../elements/buttons'
import { GradientSideLine } from '../../elements/layout'
import { BackgroundNodes } from '../BackgroundNodes'
import GradOval from '../../assets/OvalGradientLower.svg'

function Hero() {
  return (
    <Section tw='relative h-[500px] md:h-[700px] lg:h-[800px]' style={{overflow: 'hidden'}}>
      <div style={{opacity: '0.5', position: 'absolute', top: '100%', left: '50%', width: '1989px', height: '1083px'}}>
        <img src={GradOval} alt='test' style={{zIndex: '0', position: 'relative', top: '-50%', left: '-50%', width: '1989px', height: '1083px'}} />
      </div>
      <span tw='hidden md:inline'>
        <BackgroundNodes />
      </span>
      <Section tw='h-[500px] md:h-[700px] lg:h-[800px]' style={{justifyContent: 'center'}}>
        <Container tw='z-10 pt-0 pb-7 md:pb-8 lg:pb-9 xl:pb-10'>
          <CustomH1 isBold tw='lg:max-w-4xl pb-xs'>Decide how the Hummingbot codebase evolves</CustomH1>
          <CustomContainer>
            <LeftColumn>
              <H2>Image</H2>
            </LeftColumn>
            <RightColumn>
              <P>
                The Hummingbot Governance Token (HBOT) lets holders decide which CEXs, DEXs, and strategies should be actively maintained and included in each Hummingbot release.
              </P>
            </RightColumn>
          </CustomContainer>
        </Container>
      </Section>
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
  tw`w-full pb-xs`,
  tw`md:(w-1/2 pr-xl)`,
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
  height: '3px',
  background: 'linear-gradient(270deg, #00C2CE 25.96%, #318DFF 100%)',
})

/* eslint no-unused-vars: [ "off", { "argsIgnorePattern": "tw" } ] */
import React from 'react'
import tw from 'twin.macro'
import { styled } from 'twin.macro'
import { Link } from 'gatsby'
import { Section, Separator } from '@hummingbot/hbui/elements/layout'
import { H4, H5, H6, P } from '@hummingbot/hbui/elements/typography'
import { Container } from '../../elements/layout'
import { LinkButton } from '../../elements/buttons'
import LiquidityMiningIllustration from './assets/bots_mining_illustration.svg'

function WhatCanYouDo() {
  return (
    <Section id='products-services' tw='py-8 md:py-12 lg:py-36 xl:py-60' style={{zIndex: '10', background: 'url(/assets/OvalGradient.svg) no-repeat 50% 20%'}}>
      <Container tw='mb-xl'>
        <H4 isWhite isBold>What can you do with Hummingbot?</H4>
        {/* <H6 isWhite isLight style={{opacity: '0.6'}}>Empowering companies to take control of token liquidity</H6> */}
        <CustomContainer>
          <LeftColumn>
            <H6 isBold>For Token Issuers</H6>
          </LeftColumn>
          <RightColumn>
            <ThreeColumnHolder>
              <Column>
                <TitleP>Liquidity from decentralized market making.</TitleP>
                <LightP>Token issuers can get liquidity from our community of individual traders.</LightP>
              </Column>
              <Column>
                <TitleP>Marketing value / public promotion</TitleP>
                <LightP>Get exposure to a large community of early adopters and crypto evangelists.</LightP>
              </Column>
              <Column>
                <TitleP>Cheaper and more diversified alternative.</TitleP>
                <LightP>Low cost. You provide the reward pool, let our community take care of the rest.</LightP>
              </Column>
            </ThreeColumnHolder>
          </RightColumn>
        </CustomContainer>
        <CustomContainer>
          <LeftColumn>
            <H6 isBold>For Traders</H6>
          </LeftColumn>
          <RightColumn>
            <ThreeColumnHolder>
              <Column>
                <TitleP>Get rewarded for providing liquidity.</TitleP>
                <LightP>Individual traders can receive rewards by market making for the specified campaigns.</LightP>
              </Column>
              <Column>
                <TitleP>Support your favorite token projects</TitleP>
                <LightP>Earn additional returns while “hodling” your favorite tokens.</LightP>
              </Column>
              <Column>
                <TitleP>Use Hummingbot Client or your own solutions.</TitleP>
                <LightP>Use HB Client’s built-in strategies alternative platforms or even your own MM solutions. Miner is open to all.</LightP>
              </Column>
            </ThreeColumnHolder>
          </RightColumn>
        </CustomContainer>

      </Container>



      {/* <Container tw='mb-sm block md:flex'>
        <BoxMiner tw='p-sm md:p-md'>
          <H5 isBold tw='leading-none text-terminal!'>Hummingbot Miner</H5>
          <P isWhite isMedium tw='relative z-20 mt-sm max-w-[100%] md:max-w-[50%]'>
            Platform for crowd-sourced market making, a community-based alternative or complement to hiring a professional market maker, powered by the 18k member Hummingbot trader community.
          </P>
          <Link to='/miner'><LinkButton label='LEARN MORE' tw='mt-sm' /></Link>
          <img tw='pointer-events-none relative z-10 opacity-20 md:opacity-100' src={LiquidityMiningIllustration} alt='Market Making' />
        </BoxMiner>
      </Container>
      <Container tw='block md:(flex justify-between)'>
        <Box tw='w-full p-sm self-start md:(p-md w-[56%])'>
          <H5 isBold tw='leading-none text-magenta!'>Liquidity Solutions</H5>
          <P isWhite isMedium tw='mt-sm'>
            Advisory and support services related to deploying Hummingbot software for token liquidity and treasury management
          </P>
          <br />
          <div tw='flex justify-between'>
            <Cross crosscolor='#E549FF' tw='relative top-[4px]' />
            <P isMedium tw='self-start opacity-70 ml-sm w-[calc(100% - 50px)]'>Access to Hummingbot Pro, an enterprise, battle-hardened version of Hummingbot with premium features, exchange connectors, and strategies</P>
          </div>
          <br />
          <div tw='flex justify-between'>
            <Cross crosscolor='#E549FF' tw='relative top-[4px]' />
            <P isMedium tw='self-start opacity-70 ml-sm w-[calc(100% - 50px)]'>Tap into the expertise of our team of seasoned Wall Street and crypto/tech veterans</P>
          </div>
          <Link to='/contact-us'><LinkButton label='CONTACT US' tw='mt-sm'/></Link>
        </Box>
        <Box tw='p-sm w-full mt-sm mb-xxl self-start md:(p-md w-[40%] my-0)'>
          <H5 isBold tw='leading-none text-blue!'>Custom Engineering</H5>
          <P isMedium isWhite tw='mt-sm'>
            Bespoke solutions engineered to solve the needs of token issuers, exchanges, and hedge funds by extending the capabilities of Hummingbot
          </P>
          <br />
          <div tw='flex justify-between'>
            <Cross crosscolor='#318DFF' tw='relative top-[4px]' />
            <P isMedium tw='self-start opacity-70 ml-sm w-[calc(100% - 50px)]'>Custom strategies, such as advanced trade execution, hedging, rebalancing, AMM LP</P>
          </div>
          <br />
          <div tw='flex justify-between'>
            <Cross crosscolor='#318DFF' tw='relative top-[0]' />
            <P isMedium tw='self-start opacity-70 ml-sm w-[calc(100% - 50px)]'>CEX/DEX connectors</P>
          </div>
          <Link to='/contact-us'><LinkButton label='CONTACT US' tw='mt-sm'/></Link>
        </Box>
      </Container> */}


    </Section>
  )
}

export default WhatCanYouDo

const Box = styled.div(props => ({
  background: 'rgba(15, 25, 36, 0.6)',
  border: '2px solid #0F1924',
  borderRadius: '13px',
}))

const BoxMiner = styled.div(props => ({
  backgroundColor: "rgba(15, 25, 36, 0.6)",
  backgroundRepeat: 'no-repeat',
  backgroundSize: 'cover',
  border: '2px solid #0F1924',
  borderRadius: '13px',
  position: 'relative',
  '& img': {
    position: 'absolute',
    top: '0',
    right: '0',
    height: '100%',
  }
}))

function Cross({...props}) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="23"
      height="23"
      fill="none"
      viewBox="0 0 23 23"
      {...props}
    >
      <path fill={props.crosscolor} d="M10.5 0H12.5V23H10.5z"></path>
      <path
        fill={props.crosscolor}
        d="M23 10.5H25V33.5H23z"
        transform="rotate(90 23 10.5)"
      ></path>
    </svg>
  );
}

const CustomContainer = styled.div(() => [
  tw`my-md flex flex-col md:(flex-row my-xl)`,
])

const LeftColumn = styled.div(() => [
  tw`w-full pb-xs md:(w-1/4 pr-xl)`,
])

const RightColumn = styled.div(() => [
  tw`w-full md:w-3/4`,
])

const TitleP = styled(P)(() => [
  tw`text-terminal`,
])

const LightP = styled(P)(() => [
  tw`text-white mt-xxs md:mt-xs opacity-70`,
])

const Column = styled.div(() => [
  tw`w-full pb-md sm:(w-1/3 pr-xs)`,
])

const ThreeColumnHolder = styled.div(() => [
  tw`flex flex-col pt-md border-t-2 border-terminal sm:(flex-row pt-xs)`,
])

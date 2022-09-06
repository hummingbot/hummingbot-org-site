import React from 'react'
import tw, { styled, css } from 'twin.macro'
import {
  Section,
  // Container,
  PaddingBox,
} from '@hummingbot/hbui/elements/layout'
import { H1, P } from '@hummingbot/hbui/elements/typography'

export const Container = styled.div(() => [
  css`
    align-self: center;
  `,
  tw`w-[calc(100% - 40px)] md:w-11/12 max-w-[1022px]`,
])

export const ContentBlock = styled(Section)(({ backgroundColor }) => [
  css`
    text-align: left;
    width: 100%;
    background-color: ${backgroundColor ? backgroundColor : 'auto'};
  `,
])

export const PageRoot = styled(Section)(() => [
  css`
    min-height: 100vh;
  `,
])

export const MainContentElement = styled(Section)(() => [
  css`
    text-align: left;
    width: 100%;
  `,
])

export const MainContentBody = styled.div(() => [tw`w-full md:w-10/12`])

export const MainContentSidebar = styled.div(() => [
  tw`hidden md:block md:w-2/12`,
])

export const ShortHeroPaddingBox = styled(PaddingBox)(() => [
  tw`py-20 md:py-28 lg:py-32`,
])

export function ResponsiveHelper() {
  return (
    <div tw="fixed top-0 left-0 z-50 p-sm bg-black">
      <div tw='block sm:hidden md:hidden lg:hidden xl:hidden 2xl:hidden'>
        XS
      </div>
      <div tw='hidden sm:block md:hidden lg:hidden xl:hidden 2xl:hidden'>
        SM
      </div>
      <div tw='hidden md:block lg:hidden xl:hidden 2xl:hidden'>
        MD
      </div>
      <div tw='hidden sm:hidden md:hidden lg:block xl:hidden 2xl:hidden'>
        LG
      </div>
      <div tw='hidden sm:hidden md:hidden lg:hidden xl:block 2xl:hidden'>
        XL
      </div>
      <div tw='hidden sm:hidden md:hidden lg:hidden xl:hidden 2xl:block'>
        2XL
      </div>
    </div>
  )
}

export function MainContent({ children }) {
  return (
    <MainContentElement tw="bg-body">
      <Container>
        <PaddingBox>{children}</PaddingBox>
      </Container>
    </MainContentElement>
  )
}

export function MainContentRow({ children }) {
  return (
    <MainContentElement tw="bg-body">
      <Container>
        <PaddingBox tw="flex">{children}</PaddingBox>
      </Container>
    </MainContentElement>
  )
}

export function ShortHero({ title, subTitle, bgImage, boldTitle }) {
  return (
    <ContentBlock tw="bg-window" style={bgImage ? {background: `url(${bgImage}) no-repeat`, backgroundSize: 'cover'} : null}>
      <Container>
        <ShortHeroPaddingBox>
          <H1 isBold={boldTitle}>{title}</H1>
          <P tw="py-4 lg:py-6 lg:w-3/5 xl:w-[500px]">{subTitle}</P>
        </ShortHeroPaddingBox>
      </Container>
    </ContentBlock>
  )
}

export function GradientSideLine({...props}) {
  return (
    <div tw='relative' {...props}>
      <div tw='absolute top-0 left-0 w-[3000px] h-[3px] bg-gradient-to-r from-green-scale-500 to-blue-scale-500' />
    </div>
  )
}

export function GreenSideLine({...props}) {
  return (
    <div tw='relative' {...props}>
      <div tw='absolute top-0 left-0 w-[3000px] h-[3px] bg-green' />
    </div>
  )
}

export function GreySideLine({...props}) {
  return (
    <div tw='relative' {...props}>
      <div tw='absolute top-0 left-0 w-[3000px] h-[3px] bg-[#3E4347]' />
    </div>
  )
}

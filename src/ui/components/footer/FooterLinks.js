import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"
import CoinAlphaLogo from "../../../svgs/CoinAlphaLogo"
import { P, H6 } from '@hummingbot/hbui/elements/typography'
import { communities } from "../../../config/communities"
import globalLinks from "../../../config/global"

const FooterLinks = () => {
  return (
    <div tw='py-xl w-full'>
      <div tw='md:(flex justify-between)'>
        <div style={{ position: "relative" }}>
          <LogoA href='/'>
            <CoinAlphaLogo />
            <H6 isWhite isBold tw='text-2xl'>
              CoinAlpha
            </H6>
          </LogoA>
        </div>
        <div tw='md:(w-[340px])'>
          <div tw='flex mt-md md:mt-0'>
            <LinksHolder>
              <a href="https://hummingbot.io/en/blog/" target='_blank' rel="noreferrer">
                <P isMedium>Blog</P>
              </a>
              <a href={globalLinks.pressKitUrl} target='_blank' rel="noreferrer">
                <P isMedium>Press Kit</P>
              </a>
            </LinksHolder>
            <LinksHolder style={{ marginLeft: "60px" }}>
              <Link to='/terms-of-use'>
                <P isMedium>Terms of Use</P>
              </Link>
              <Link to='/privacy-policy'>
                <P isMedium>Privacy Policy</P>
              </Link>
              <Link to='/cookie-policy'>
                <P isMedium>Cookie Policy</P>
              </Link>
              <a href={'https://hummingbot.io/en' + globalLinks.miningPolicyUrl} target='_blank' rel="noreferrer">
                <P isMedium>Liquidity Mining Policy</P>
              </a>
            </LinksHolder>
          </div>
        </div>
      </div>

      <div tw='mt-xl flex justify-between'>
        <CopyrightTextHolder>
          <CopyrightText>{`© CoinAlpha ${new Date().getFullYear()}`}</CopyrightText>
        </CopyrightTextHolder>
        <div tw='w-auto md:w-[340px]'>
          <IconsRow>
            {communities.map((cardData, key) => (
              <a
                key={key}
                href={cardData.link}
                target="_blank"
                rel="noreferrer"
              >
                {cardData.svgIcon}
              </a>
            ))}
          </IconsRow>
        </div>
      </div>
    </div>
  )
}

export default FooterLinks

export const FlexDivA = styled.div({
  display: 'flex',
  justifyContent: 'space-between',
})

export const LinksHolder = styled.div({
  display: "flex",
  flexDirection: "column",
  color: 'white',
  '& p:hover': {
    // textDecoration: 'underline',
    color: '#5FFFD7',
  }
})

export const IconsRow = styled.div({
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  "&>*": {
    cursor: "pointer",
    marginRight: "10px",
    ":last-child": {
      marginRight: "0",
    },
    "& *": {
      fill: 'white',
    },
    ":hover": {
      "& *": {
        fill: '#5FFFD7',
      },
    },
  },
  '@media only screen and (max-width: 768px)': {
    order: "0",
  },
  '@media only screen and (max-width: 1024px)': {
    order: "1",
  },
  '@media only screen and (max-width: 480px)': {
    order: "0",
  },
})

export const CopyrightTextHolder = styled.div({
  '@media only screen and (max-width: 768px)': {
    marginTop: "10px",
    order: "1",
  },
  '@media only screen and (max-width: 1024px)': {
    order: "0",
  },
  '@media only screen and (max-width: 480px)': {
    marginTop: "10px",
    order: "1",
  },
})

export const LogoA = styled.a({
  display: "flex",
  alignItems: "center",
  position: 'relative',
  left: '-10px',
  '& svg': {
    transform: 'scale(0.8)',
  },
  '& svg *': {
    fill: 'white'
  }
})

export const CopyrightText = styled(P)({
  fontStyle: "normal",
  fontWeight: "normal",
  fontSize: "16px",
  lineHeight: "25px",
  letterSpacing: "0.046em",
  color: "#698097",
})

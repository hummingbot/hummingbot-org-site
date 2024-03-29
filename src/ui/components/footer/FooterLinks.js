import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"
import HummingbotLogo from "../../../svgs/HummingbotLogo"
import { P, H6 } from '@hummingbot/hbui/elements/typography'
import { communities } from "../../../config/communities"
import globalLinks from "../../../config/global"

const FooterLinks = () => {
  return (
    <div tw='py-xl w-full'>
      <div tw='md:(flex justify-between)'>
        <div style={{ position: "relative" }}>
          <LogoA href='/'>
            <HummingbotLogo colorStyle='terminal' />
            <H6 isWhite isBold tw='text-2xl ml-xxs'>
              Hummingbot
            </H6>
          </LogoA>
        </div>
        <div tw='md:(w-[340px])'>
          <div tw='flex mt-md md:mt-0'>
            <LinksHolder>
              <a href="https://blog.hummingbot.org" target='_blank' rel="noreferrer">
                <P isMedium>Blog</P>
              </a>
              <a href="https://hummingbot.substack.com" target='_blank' rel="noreferrer">
                <P isMedium>Newsletter</P>
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
              <Link to='/aml-policy'>
                <P isMedium>AML Policy</P>
              </Link>
            </LinksHolder>
          </div>
        </div>
      </div>

      <div tw='flex flex-col mt-xl justify-between md:flex-row'>
        <CopyrightText tw='order-2 md:order-1'>{`© Hummingbot Foundation ${new Date().getFullYear()}`}</CopyrightText>
        <div tw='order-1 w-auto mb-sm md:(mb-0 w-[340px] order-2)'>
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

export const LogoA = styled.a({
  display: "flex",
  alignItems: "center",
  position: 'relative',
  left: '-10px',
  '& svg': {
    transform: 'scale(0.8)',
  },
})

export const CopyrightText = styled(P)({
  fontStyle: "normal",
  fontWeight: "normal",
  fontSize: "16px",
  lineHeight: "25px",
  letterSpacing: "0.046em",
  color: "#698097",
})

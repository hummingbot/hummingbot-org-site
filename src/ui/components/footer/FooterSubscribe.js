import React from "react"
import styled from "styled-components"
import { H4, P } from "@hummingbot/hbui/elements/typography"
import { green } from "@hummingbot/hbui/constants/colors"
import { Link } from "gatsby"

const headerProps = (isPrimary = true) => {
  return isPrimary ? { isBlack: true } : { isPrimary: true }
}

const FooterSubscribe = ({ hideContactUs, ...props }) => {
  return (
    <RootDiv style={{backgroundColor: hideContactUs ? '#0F1924' : green}}>
      <StyledContent isPrimary={props.isPrimary}>
        {!hideContactUs &&
          <H4 isMedium {...headerProps(props.isPrimary)}>
            Contact Us
          </H4>
        }
        {!hideContactUs &&
          <P isWhite style={{ marginTop: "8px", maxWidth: "510px", lineHeight: '120%'}}>
            Get in touch with our team of experts to discuss how we can help you with token liquidity
          </P>
        }
        {!hideContactUs &&
          <Link
            className="signupButton"
            to="/contact-us"
          >
            CONTACT US
          </Link>
        }
      </StyledContent>
    </RootDiv>
  )
}

export default FooterSubscribe

export const RootDiv = styled.div({
  backgroundColor: '#00c2ce',
  width: "100%",
  paddingLeft: "50px",
  paddingTop: "70px",
  paddingBottom: "60px",
  '@media only screen and (max-width: 1024px)': {
    order: "1",
    width: "100%",
    backgroundColor: '#00c2ce',
    paddingLeft: "50px",
  },
  '@media only screen and (max-width: 768px)': {
    paddingLeft: "40px",
    paddingTop: "50px",
    paddingBottom: "50px",
  },
  '@media only screen and (max-width: 640px)': {
    paddingLeft: "30px",
    paddingTop: "40px",
    paddingBottom: "40px",
  },
  '@media only screen and (max-width: 480px)': {
    paddingLeft: "20px",
  },
})

const StyledContent = styled.div(({ isPrimary = true }) => ({
  paddingRight: "20px",
  "&>.signupButton": {
    width: "130px",
    height: "54px",
    userSelect: "none",
    backgroundColor: '#202D3B',
    border: "6px solid rgba(2,174,185,0.9)",
    borderColor: isPrimary ? "rgba(2,174,185,0.9)" : "#233A51",
    borderRadius: "2px",
    color: "white",
    transition: "all 0.2s ease-out",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    textTransform: "uppercase",
    marginTop: "20px",
    fontStyle: "normal",
    fontWeight: "600",
    fontSize: "14px",
    cursor: "pointer",
    ":hover": {
      color: '#202D3B',
      backgroundColor: 'white',
    },
    ":active": {
      color: '#202D3B',
      backgroundColor: 'rgba(255, 255, 255, 0.5)',
    },
  },
}))

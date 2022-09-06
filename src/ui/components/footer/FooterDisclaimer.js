import React from "react"
import styled from "styled-components"
import { P } from "@hummingbot/hbui/elements/typography"

const FooterSubscribe = () => (
  <DisclaimerContainer>
    <DisclaimerP>
      DISCLAIMER: The websites located at https://coinalpha.com, https://miner.hummingbot.io (collectively, the "Site") are copyrighted works belonging to CoinAlpha, Inc. ("Company", "us", "our", and "we"). Certain features of the Site may be subject to additional guidelines, terms, or rules, which will be posted on the Site in connection with such features. All such additional terms, guidelines, and rules are incorporated by reference into these Terms. These terms of use (these "Terms") set forth the legally binding terms and conditions that govern your use of the Site. By accessing or using the Site, you are accepting these Terms (on behalf of yourself or the entity that you represent), and you represent and warrant that you have the right, authority, and capacity to enter into these terms (on behalf of yourself or the entity that you represent). You may not access or use the Site or accept the terms if you are not at least 18 years old. If you do not agree with all of the provisions of these terms, do not access and/or use the Site.
    </DisclaimerP>
  </DisclaimerContainer>
)

export default FooterSubscribe

export const DisclaimerP = styled(P)({
  fontSize: "14px",
  color: "#455669",
})

export const DisclaimerContainer = styled.div({
  width: "100%",
  background: "#0b1622",
  padding: "50px",
  paddingBottom: "100px",
  '@media only screen and (max-width: 768px)': {
    padding: "40px",
    paddingBottom: "90px",
  },
  '@media only screen and (max-width: 640px)': {
    padding: "30px",
    paddingBottom: "80px",
  },
  '@media only screen and (max-width: 480px)': {
    padding: "20px",
    paddingBottom: "70px",
  },
})

import React from "react"
import styled from 'styled-components'
import { Section, Container } from "@hummingbot/hbui/elements/layout"
import FooterLinks from "./FooterLinks"
// import FooterDisclaimer from "./FooterDisclaimer"

const Footer = ({ isPrimary, hideContactUs }) => (
  <Section style={{background: '#0F1924', zIndex:'2'}}>
    <TopBar />
    <Container>
      <FooterLinks />
    </Container>
    {/* <FooterDisclaimer isPrimary /> */}
  </Section>
)

export default Footer

const TopBar = styled.div({
  height: '6px',
  width: '100%',
  background: 'linear-gradient(270deg, #318DFF 42.91%, #E549FF 100%)',
  transform: 'matrix(-1, 0, 0, 1, 0, 0)',
})

/* eslint no-unused-vars: [ "off", { "argsIgnorePattern": "tw" } ] */
import React from 'react'
import tw from 'twin.macro'
import styled from 'styled-components'
import { Section } from '@hummingbot/hbui/elements/layout'
import { Container } from '../../elements/layout' /* custom container with more left-right padding */
import { H2 } from '@hummingbot/hbui/elements/typography'
import { Button } from '@hummingbot/hbui/components/buttons'

function InstallBlock() {
  return (
    <Section tw='z-10 py-20 md:py-32 lg:py-40 xl:py-44' style={{background: 'url(assets/grid_perspective.png) no-repeat', backgroundSize: 'cover', position: 'relative', zIndex: '0'}}>
      <Container tw='pb-xxxl'>
        <CustomH2 tw='max-w-none mx-auto! text-center leading-tight mb-xl! pb-6 md:max-w-[60%]' isBold>
          Ready for the real thing?
        </CustomH2>
          <a href="https://docs.hummingbot.org/installation/" target='_blank' rel="noreferrer">
            <Button variant="terminal" isLarge label="Install Hummingbot" tw="max-w-none mx-auto! text-center" />
          </a>
      </Container>
    </Section>
  )
}

export default InstallBlock

const CustomH2 = styled(H2)({
  background: 'linear-gradient(270deg, #00C2CE 25.96%, #318DFF 100%)',
  WebkitTextFillColor: 'transparent',
  WebkitBackgroundClip: 'text',
})

/* eslint no-unused-vars: [ "off", { "argsIgnorePattern": "tw" } ] */
import React from 'react'
import tw, { styled, css } from 'twin.macro'
import { Section, Container, Separator } from '@hummingbot/hbui/elements/layout'
import { P, H1, H2, H4, H6 } from '@hummingbot/hbui/elements/typography'
import StudentsJSON from "../../../../content/student-scripts.json"
import { ExternalLinkButton } from '@hummingbot/hbui/components/buttons'

function StudentScripts() {
  return (
  <Section tw='py-28 md:py-40 lg:py-52 border-y-4 border-terminal' style={{background: 'linear-gradient(177deg, rgba(95, 255, 215, 0.15), black)'}}>
    <Container>
      <H4 isBold tw='text-center leading-tight'>
        See what Botcamp students have built
      </H4>
      <P tw='text-secondary text-center mb-lg md:mb-xxl'>
        Scripts created by students in prior Botcamp cohorts
      </P>
      <ScriptsGrid>
        {StudentsJSON.map((data, index) => {
          return <div key={index} tw="mb-lg md:mb-0">
            <P tw='font-bold text-terminal border-b-2 border-terminal w-full pb-xxs mb-xxs'>{data.title}</P>
            <a href={data.link} target="_blank" rel="noreferrer">
              <ExternalLinkButton label='View script' tw='w-full justify-between' />
            </a>
            <P tw='mt-xs'>{data.description}</P>
          </div>
        })}
      </ScriptsGrid>
    </Container>
  </Section>
  )
}

export default StudentScripts

const ScriptsGrid = styled.div(() => [
  tw`grid grid-cols-1 gap-0 md:(grid-cols-3 gap-4) lg:(md:gap-8)`,
])
/* eslint no-unused-vars: [ "off", { "argsIgnorePattern": "tw" } ] */
import React from 'react'
import tw, { styled, css } from 'twin.macro'
import { Section, Container, Separator } from '@hummingbot/hbui/elements/layout'
import { P, H1, H2, H4, H6 } from '@hummingbot/hbui/elements/typography'
import StudentsJSON from "../../../../content/student-scripts.json"
import { CardA } from '@hummingbot/hbui/components/cards/CardA'

function StudentScripts() {
  return (
  <Section tw='pt-xxxl'>
    <Container>
        <H4 isBold tw='text-center'>
          See what Botcamp students have built
        </H4>
        <P tw='text-secondary text-center mb-md'>
          Scripts created by students in prior Botcamp cohorts
        </P>
        <ScriptsGrid>
          {StudentsJSON.map((data, index) => {
            return <CardA
              tw="mx-xs my-md" 
              headerText={data.title}
              descriptionText={data.description}
              linkURL={data.link}
              // {data.author} supervik
              // {data.author_link} https://github.com/supervik
              // {data.cohort} Sept 2022
              external={true}
            />
          })}
        </ScriptsGrid>
    </Container>
    <Separator tw='pt-xxxl' />
  </Section>
  )
}

export default StudentScripts

const ScriptsGrid = styled.div(() => [
  tw`grid grid-cols-3 gap-0`,
])
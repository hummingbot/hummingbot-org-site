/* eslint no-unused-vars: [ "off", { "argsIgnorePattern": "tw" } ] */
import React from 'react'
import tw, { styled } from 'twin.macro'
import NavBar from './NavBar'

const siteNameA = 'Hummingbot'
const siteNameB = ''
const linksRight = [
  { url: '/miner', label: 'Exchanges' },
  { url: '/miner', label: 'Community' },
  { url: '/miner', label: 'Developers' },
  { url: '/miner', label: 'Governance' },
  { url: '/miner', label: 'Blog' },
  { url: '/miner', label: 'FAQ' },
  { url: '/miner', label: 'Test Drive' },
]

function Navigation({ disableBreakcrumbs }) {
  return (
    <RootDiv tw='z-10 w-full relative' style={{background: '#121212'}}>
      <NavBar
        showThemeToggle={false}
        siteNameA={siteNameA}
        siteNameB={siteNameB}
        linksLeft={null}
        linksRight={linksRight}
        logo="hummingbot"
      />
    </RootDiv>
  )
}

export default Navigation

const RootDiv = styled.div({
  '& svg': {
    width: '20px',
  },
})

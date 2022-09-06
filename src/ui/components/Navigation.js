/* eslint no-unused-vars: [ "off", { "argsIgnorePattern": "tw" } ] */
import React from 'react'
import tw, { styled } from 'twin.macro'
import NavBar from './NavBar'

const siteNameA = 'CoinAlpha'
const siteNameB = ''
const linksRight = [
  { url: '/#products-services', label: 'Products & Services' },
  { url: '/#investors', label: 'Investors' },
  { url: '/#who-we-are', label: 'Who We Are' },
  { url: '/contact-us', label: 'Contact us' },
  // { url: '/#open-source', label: 'Open Source' },
  { url: '/miner', label: 'Miner' },
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
        logo="coinalpha"
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

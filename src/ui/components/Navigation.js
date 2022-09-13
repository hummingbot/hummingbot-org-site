/* eslint no-unused-vars: [ "off", { "argsIgnorePattern": "tw" } ] */
import React from 'react'
import tw, { styled } from 'twin.macro'
import NavBar from '@hummingbot/hbui/components/navigation/NavBar'
import { Link } from 'gatsby'

const siteNameA = 'Hummingbot'
const siteNameB = 'Foundation'
const userData = null
const linksRight = [
  { url: null,
    label: 'Learn',
    subLinks: [
      { label: 'Docs', url: 'https://hummingbot.org/docs', external: true },
      { label: 'Botcamp', url: 'https://hummingbot.thinkific.com', external: true },
      { label: 'Events', url: 'https//lu.ma', external: true },
      { label: 'Community', url: 'https://hummingbot.org/community', external: true },
    ] 
  },
  { url: null,
    label: 'Developers',
    subLinks: [
      { label: 'Developer Docs', url: 'https://hummingbot.org/developers', external: true },
      { label: 'Github', url: 'https://github.com/hummingbot/hummingbot', external: true },
      { label: 'Botcamp', url: 'https://hummingbot.thinkific.com', external: true }
    ] 
  },
  { url: null,
    label: 'Governance',
    subLinks: [
      { label: 'Governance', url: 'https://hummingbot.org/governance', external: true },
      { label: 'HBOT', url: 'https://hummingbot.org/hbot', external: true },
      { label: 'Whitepaper', url: 'https://hummingbot.org/governance/whitepaper', external: true },
      { label: 'Snapshot', url: 'https://snapshot.org/hbot.eth', external: true },
      { label: 'Forum', url: 'https://hummingbot.discourse.group', external: true },
    ] 
  },
  { url: null,
    label: 'CoinAlpha',
    subLinks: [
      { label: 'CoinAlpha', url: 'https://coinalpha.com', external: true },
      { label: 'Hummingbot Miner', url: 'https://miner.hummingbot.io', external: true },
    ] 
  },
  { url: null,
    label: 'About',
    subLinks: [
      { label: 'FAQ', url: 'https://hummingbot.org/faq', external: true },
      { label: 'Blog', url: 'https://blog.hummingbot.org', external: true },
      { label: 'Newsletter', url: 'https://hummingbot.substack.com', external: true },
    ] 
  },

]
const linksLeft = null
const linkCTA = {
  label: 'Test Drive',
  url: '/test-drive',
  external: false,
  buttonStyle: 'terminal',
}


// const siteNameA = 'Hummingbot'
// const siteNameB = ''
// const linksRight = [
//   { url: 'https://hummingbot.org/docs', label: 'Docs' },
//   { url: 'https://hummingbot.org/developers', label: 'Developers' },
//   { url: 'https://hummingbot.org/community', label: 'Community' },
//   { url: 'https://hummingbot.org/governance', label: 'Governance' },
//   { url: 'https://blog.hummingbot.org', label: 'Blog' },
//   { url: 'https://hummingbot.thinkific.com', label: 'Botcamp' },
//   { url: '/miner', label: 'Test Drive' },
// ]

function Navigation({ disableBreakcrumbs }) {
  return (
    <RootDiv tw='z-10 w-full relative' style={{background: '#121212'}}>
      <NavBar
        linkClass={Link}
        showThemeToggle={false}
        siteNameA={siteNameA}
        siteNameB={siteNameB}
        userData={userData}
        linksLeft={linksLeft}
        linksRight={linksRight}
        linkCTA={linkCTA}
        position='relative'
      />

      {/* <NavBar
        showThemeToggle={false}
        siteNameA={siteNameA}
        siteNameB={siteNameB}
        linksLeft={null}
        linksRight={linksRight}
        logo="hummingbot"
      /> */}
    </RootDiv>
  )
}

export default Navigation

const RootDiv = styled.div({
  '& svg': {
    width: '20px',
  },
})

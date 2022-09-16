/* eslint no-unused-vars: [ "off", { "argsIgnorePattern": "tw" } ] */
import React from 'react'
import tw, { styled } from 'twin.macro'
import NavBar from '@hummingbot/hbui/components/navigation/NavBar'
import { Link } from 'gatsby'

const siteNameA = 'Hummingbot'
const siteNameB = ''
const userData = null
const linksRight = [
  { url: null,
    label: 'Learn',
    subLinks: [
      { label: 'Docs', url: 'https://docs.hummingbot.org', external: true },
      { label: 'Botcamp', url: 'https://hummingbot.thinkific.com', external: true },
      { label: 'Academy', url: 'https//blog.hummingbot.org/tag/academy', external: true },
      { label: 'Community', url: 'https://docs.hummingbot.org/community', external: true },
    ] 
  },
  { url: null,
    label: 'Developers',
    subLinks: [
      { label: 'Developer Docs', url: 'https://docs.hummingbot.org/developers', external: true },
      { label: 'Github', url: 'https://github.com/hummingbot/hummingbot', external: true },
      { label: 'Botcamp', url: 'https://hummingbot.thinkific.com', external: true }
    ] 
  },
  { url: null,
    label: 'Governance',
    subLinks: [
      { label: 'Governance', url: 'https://docs.hummingbot.org/governance', external: true },
      { label: 'HBOT', url: 'https://docs.hummingbot.org/hbot', external: true },
      { label: 'Whitepaper', url: 'https://docs.hummingbot.org/governance/whitepaper', external: true },
      { label: 'Snapshot', url: 'https://snapshot.org/hbot.eth', external: true },
      { label: 'Forum', url: 'https://forum.hummingbot.org', external: true },
    ] 
  },
  { url: null,
    label: 'Miner',
    subLinks: [
      { label: 'Hummingbot Miner', url: 'https://miner.hummingbot.io', external: true },
      { label: 'Miner FAQ', url: 'https://coinalpha.com/miner', external: true },
    ] 
  },
  { url: null,
    label: 'About',
    subLinks: [
      { label: 'FAQ', url: 'https://docs.hummingbot.org/faq', external: true },
      { label: 'Hummingbot Foundation', url: 'https://docs.hummingbot.org/about', external: true },
      { label: 'CoinAlpha', url: 'https://coinalpha.com', external: true },
    ] 
  },
  { url: 'https://blog.hummingbot.org',
    label: 'Blog'
  },
]
const linksLeft = null
const linkCTA = {
  label: 'Test Drive',
  url: '/test-drive',
  external: false,
  buttonStyle: 'terminal',
}

function Navigation({ disableBreakcrumbs }) {
  return (
    <NavBar
      linkClass={Link}
      showThemeToggle={false}
      siteNameA={siteNameA}
      siteNameB={siteNameB}
      userData={userData}
      linksLeft={linksLeft}
      linksRight={linksRight}
      linkCTA={linkCTA}
      position='absolute'
      bgColor='#121212'
    />
  )
}

export default Navigation

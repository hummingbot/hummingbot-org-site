/* eslint no-unused-vars: [ "off", { "argsIgnorePattern": "tw" } ] */
import React from 'react'
import NavBar from '@hummingbot/hbui/components/navigation/NavBar'
import { Link } from 'gatsby'

const siteNameA = 'Hummingbot'
const siteNameB = ''
const userData = null
const linksRight = [
  { url: '/hbot',
    label: 'HBOT'
  },
  { url: '/botcamp',
    label: 'Botcamp'
  },
  { url: null,
    label: 'Developers',
    subLinks: [
      { label: 'Docs', url: 'https://docs.hummingbot.org', external: true },
      { label: 'Github', url: 'https://github.com/hummingbot/hummingbot', external: true },
      { label: 'Botcamp', url: '/botcamp', external: false }
    ] 
  },
  { url: null,
    label: 'Miner',
    subLinks: [
      { label: 'Hummingbot Miner', url: 'https://miner.hummingbot.io', external: true },
      { label: 'Miner FAQ', url: 'https://coinalpha.com/miner', external: true },
      { label: 'Academy', url: 'https://blog.hummingbot.org/tag/academy', external: true },
    ] 
  },
  { url: null,
    label: 'About',
    subLinks: [
      { label: 'Hummingbot Foundation', url: 'https://docs.hummingbot.org/about', external: true },
      { label: 'CoinAlpha', url: 'https://coinalpha.com', external: true },
      { label: 'Community', url: 'https://docs.hummingbot.org/community', external: true },
      { label: 'FAQ', url: 'https://docs.hummingbot.org/faq', external: true },
    ] 
  },
  { url: 'https://blog.hummingbot.org',
    label: 'Blog'
  },
]
const linksLeft = null
const linkCTA = {
  label: 'Learn with Botcamp',
  url: '/botcamp',
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
      containerVariant='full'
    />
  )
}

export default Navigation

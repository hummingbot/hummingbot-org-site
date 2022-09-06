import React from 'react'
import GlobalStyles from '@hummingbot/hbui/system/GlobalStyles'
import { ThemeProvider } from '@hummingbot/hbui/system/ThemeContext'
import { Section } from '@hummingbot/hbui/elements/layout'
// import { ResponsiveHelper } from '../elements/layout'

const Layout = ({ children, ...rest }) => (
  <ThemeProvider {...rest}>
    <GlobalStyles />
    {/*<ResponsiveHelper />*/}
    <Section tw='overflow-hidden'>
      {children}
    </Section>
  </ThemeProvider>
)

export default Layout

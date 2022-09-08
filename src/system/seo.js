import React from "react"
import PropTypes from "prop-types"
import { Helmet } from "react-helmet"

function Seo({ pageTitle }) {

  const metaData = {
    title: 'Hummingbot',
    description: 'Hummingbot is open source software that helps you run market making and arbitrage trading bots on any crypto centralized and decentralized exchange',
    author: 'Hummingbot',
    siteUrl: 'https://hummingbot.org/',
    locale: 'en'
  }

  return (
    <Helmet
      htmlAttributes={{
        lang: metaData.locale,
      }}
      title={pageTitle}
      titleTemplate={`${metaData.author} | ${pageTitle}`}
      meta={[
        {
          name: `description`,
          content: metaData.description
        },
        {
          property: `og:url`,
          content: metaData.siteUrl
        },
        {
          property: `og:title`,
          content: `CoinAlpha, Inc | ${pageTitle}`
        },
        {
          property: `og:description`,
          content: metaData.description
        },
        {
          property: `og:type`,
          content: 'website'
        },
        {
          property: `og:locale`,
          content: metaData.locale
        },
        {
          property: `og:site_name`,
          content: `CoinAlpha, Inc`
        },
        {
          name: `twitter:card`,
          content: `summary`
        },
        {
          name: `twitter:creator`,
          content: metaData.author
        },
        {
          name: `twitter:title`,
          content: `CoinAlpha, Inc | ${pageTitle}`
        },
        {
          name: `twitter:description`,
          content: metaData.description
        },
      ]}
    >

    </Helmet>
  )
}

Seo.defaultProps = {
  lang: `en`,
  meta: [],
  description: ``,
}

Seo.propTypes = {
  description: PropTypes.string,
  lang: PropTypes.string,
  meta: PropTypes.arrayOf(PropTypes.object),
  pageTitle: PropTypes.string.isRequired,
}

export default Seo

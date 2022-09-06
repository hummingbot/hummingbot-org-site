import { defineMessages } from "gatsby-plugin-react-intl"

const messages = defineMessages({
  platforms1_title: {
    id: "Platforms1.title",
    defaultMessage: "Open source and publicly auditable",
  },
  platforms1_body: {
    id: "Platforms1.description",
    defaultMessage:
      "Hummingbot is a local software client that never exposes your keys externally. The entire codebase is publicly auditable on Github.",
  },
  platforms2_title: {
    id: "Platforms2.title",
    defaultMessage: "Cython for speed, Python for UX",
  },
  platforms2_body: {
    id: "Platforms2.description",
    defaultMessage:
      "Hummingbot developers can build components in Cython, which runs code as low-level C. Alternatively, they can use Python for convenience.",
  },
  platforms3_title: {
    id: "Platforms3.title",
    defaultMessage: "Optimized for liquidity providers",
  },
  platforms3_body: {
    id: "Platforms3.description",
    defaultMessage:
      "With sophisticated strategies like Avellaneda, Hummingbot is the only trading bot designed for professional market makers and liquidity providers.",
  },
  platforms4_title: {
    id: "Platforms4.title",
    defaultMessage: "Decentralized + centralized exchanges",
  },
  platforms4_body: {
    id: "Platforms4.description",
    defaultMessage:
      "We support most major centralized and decentralized exchanges, providing the ability to arbitrage between them seamlessly.",
  },
})

export const platforms = [
  {
    title: messages.platforms1_title,
    body: messages.platforms1_body,
    avatar: "OpenSource",
  },
  {
    title: messages.platforms2_title,
    body: messages.platforms2_body,
    avatar: "CPython",
  },
  {
    title: messages.platforms3_title,
    body: messages.platforms3_body,
    avatar: "OptimisedForLiquidity",
  },
  {
    title: messages.platforms4_title,
    body: messages.platforms4_body,
    avatar: "CentralizedDecentralized",
  },
]

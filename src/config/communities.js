import React from "react"
// import { defineMessages } from "gatsby-plugin-react-intl"
import Discord from "../svgs/social/Discord"
import Twitter from "../svgs/social/Twitter"
import Reddit from "../svgs/social/Reddit"
import YouTube from "../svgs/social/YouTube"
import Github from "../svgs/social/Github"

const descriptions = {
  discord: "Chat in real time with our community",
  twitter: "Follow our latest news & announcements",
  reddit: "Join the discussion",
  youTube: "Tune in to our weekly live sessions",
  github: "Contribute to our code base or suggest new features",
}

export const communities = [
  {
    title: "Discord",
    subText: descriptions.discord,
    link: `https://discord.gg/hummingbot`,
    icon: "Discord",
    svgIcon: <Discord />,
    accentColor: "#6281EC",
  },
  {
    title: "Twitter",
    subText: descriptions.twitter,
    link: `https://twitter.com/hummingbot_org`,
    icon: "Twitter",
    svgIcon: <Twitter />,
    accentColor: "#46AAF5",
  },
  {
    title: "Reddit",
    subText: descriptions.reddit,
    link: `https://www.reddit.com/r/Hummingbot/`,
    icon: "Reddit",
    svgIcon: <Reddit />,
    accentColor: "#FF4500",
  },
  {
    title: "YouTube",
    subText: descriptions.youTube,
    link: `https://www.youtube.com/c/hummingbot?sub_confirmation=1`,
    icon: "YouTube",
    svgIcon: <YouTube />,
    accentColor: "#FF0000",
  },
  {
    title: "Github",
    subText: descriptions.github,
    link: `https://github.com/hummingbot/hummingbot`,
    icon: "Github",
    svgIcon: <Github />,
    accentColor: "#FFFFFF",
  },
]

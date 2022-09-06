import styled from "styled-components"
import { primary } from "hbui/defaults/colors"
import { tablet_max } from "hbui/defaults/media-queries"

export const DarkTransparentBox = styled.div(props => ({
  position: "relative",
  display: "inline-flex",
  flexDirection: "column",
  borderRadius: "2px",
  background: "rgba(21, 36, 51, 0.50)",
  border: "2px solid #152433",
  marginRight: "22px",
  transition: "all 0.2s ease-out",
  cursor: "pointer",
  "& .highlightbar": {
    transition: "all 0.2s ease-out",
    background: `${primary}`,
  },
  "& h5": {
    transition: "color 0.2s ease-out",
    color: primary,
  },
  "& .link": {
    transition: "color 0.2s ease-out",
    "& > *": {
      color: primary,
      fill: primary,
    }
  },
  ":hover": {
    background: "rgba(23, 39, 56, 0.80)",
    "& .highlightbar": {
      background: props.accentColor,
      width: "100% !important",
    },
    "& h5": {
      color: props.accentColor,
    },
    "& .link": {
      transition: "color 0.2s ease-out",
      "& > span": {
        color: props.accentColor,
      },
      "& > svg *": {
        fill: props.accentColor,
      }
    },
  },
  [tablet_max]: {
    marginRight: "0",
    marginBottom: "22px",
    width: "100%",
  },
}))

export const ShortHighlightBar = styled.span({
  position: "absolute",
  width: "28px",
  height: "2px",
  top: "-2px",
  left: "-2px",
  background: primary,
  transition: "width 0.2s ease-out",
})

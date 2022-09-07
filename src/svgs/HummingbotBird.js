import React from "react";
import styled, { css, keyframes } from "styled-components";

// vertical movement
const elevator = keyframes`
  0% { transform: translateY( -10px )}
  100% { transform: translateY( 10px )}
`
const animationVertical = props =>
  css`
    ${elevator} 0.6s ease-in-out infinite alternate;
  `

// wings movement
const wingFlutter = keyframes`
  0% { transform: rotate( -45deg ) }
  100% { transform: rotate( 25deg ) }
`
const wingFlutterShorter = keyframes`
  0% { transform: rotate( -40deg ) }
  100% { transform: rotate( 10deg ) }
`
const wingFlutterShortest = keyframes`
  0% { transform: rotate( -20deg ) }
  100% { transform: rotate( 10deg ) }
`
const animationWings = props =>
  css`
    ${wingFlutter} 0.6s ease-in-out infinite alternate;
  `
const animationWingsShorter = props =>
  css`
    ${wingFlutterShorter} 0.6s ease-in-out infinite alternate;
  `
const animationWingsShortest = props =>
  css`
    ${wingFlutterShortest} 0.6s ease-in-out infinite alternate;
  `

const AnimatedBirdSVG = styled.svg({
  animation: animationVertical,
  animationDelay: "0.2s",
  "& .wing-front": {
		transformOrigin: "56% 58%",
  	animation: animationWings,
  	position: "relative",
  	top: "0",
  	left: "40px",
  },
  "& .wing-back": {
		transformOrigin: "60% 58%",
  	animation: animationWingsShorter,
  },
  "& .wing-background": {
		transformOrigin: "60% 58%",
  	animation: animationWingsShortest,
  }
})

function HummingbotBird() {
  return (
    <AnimatedBirdSVG
      className="hummingbot-bird"
      xmlns="http://www.w3.org/2000/svg"
      width="67"
      height="61"
      fill="none"
      viewBox="0 0 67 61"
    >
      <path
      	className="wing-background"
        fill="#fff"
        fillOpacity="0.33"
        fillRule="evenodd"
        d="M12.077 35.604c5.436 1.788 10.887 1.146 14.474-1.294-1.492-4.11-5.534-7.875-10.97-9.663C10.145 22.859 4.694 23.5 1.107 25.94c.12.329.256.656.407.98 1.742 3.72 5.562 7.038 10.563 8.683z"
        clipRule="evenodd"
      ></path>
      <path
      	className="wing-background"
        fill="#fff"
        fillOpacity="0.25"
        fillRule="evenodd"
        d="M13.965 41.67c5.673-.704 10.348-3.618 12.586-7.365-3.062-3.089-8.293-4.773-13.965-4.07C6.913 30.94 2.238 33.853 0 37.6c.168.17.343.335.524.496 3.114 2.77 8.08 4.239 13.441 3.574z"
        clipRule="evenodd"
      ></path>
      <path
      	className="wing-background"
        fill="#fff"
        fillOpacity="0.12"
        fillRule="evenodd"
        d="M18.647 46.75c4.734-3.246 7.59-8 7.9-12.368-4.113-1.337-9.527-.422-14.261 2.824-4.735 3.245-7.59 7.999-7.9 12.367.257.084.519.159.786.225 4 .988 9.036-.006 13.475-3.049z"
        clipRule="evenodd"
      ></path>
      <path
      	className="wing-background"
        fill="#fff"
        fillOpacity="0.08"
        fillRule="evenodd"
        d="M24.523 48.971c2.943-4.968 3.555-10.498 2.02-14.593-4.286.548-8.814 3.693-11.757 8.661-2.943 4.968-3.554 10.5-2.019 14.593a11.48 11.48 0 001.062-.187c3.958-.89 7.993-3.914 10.694-8.474z"
        clipRule="evenodd"
      ></path>
      <path
        fill="#fff"
        fillOpacity="0.73"
        fillRule="evenodd"
        d="M21.725 17.622c.922 10.434 10.009 18.135 20.297 17.201a18.536 18.536 0 003.67-.71L23.852 7a19.105 19.105 0 00-2.127 10.622z"
        className="wing-back"
        clipRule="evenodd"
      ></path>
      <path
        fill="#fff"
        fillRule="evenodd"
        d="M35.955 28.708c2.467-1.636 5.233-3.695 8.14-4.357 1.92-.438 3.804-.096 5.38 1.096 1.41 1.066 1.756 2.647 2.884 3.896 1.038 1.147 13.757 6.719 13.757 6.719l-.177.422s-11.882-5.324-14.302-4.878c-2.42.446-7.315 1.953-10.432 8.291-3.285 6.679-9.62 10.805-13.14 10.295l3.422 9.912c-17.624.856-11.36-14.124-5.927-21.61C30 33 35.698 28.877 35.955 28.707z"
        clipRule="evenodd"
      ></path>
      <path
        fill="#fff"
        fillRule="evenodd"
        className="wing-front"
        d="M8.5 24.5C14 35.95 28 43 40.282 35.95a24.035 24.035 0 004.018-2.71L4.478 11.988C5 15 6.158 20.115 8.5 24.5z"
        clipRule="evenodd"
      ></path>
    </AnimatedBirdSVG>
  );
}

export default HummingbotBird;

import React, { useEffect, useState } from "react"
import styled from "styled-components"
import { Particle } from "./Particle"
import { loadImages } from "./loadImages"

const Wrapper = styled.div`
  position: absolute;
  opacity: 0.8;
  top: 0;
  left: 0;
  z-index: 0;
  height: 100%;
  width: 100%;
  display: flex;
  overflow: hidden;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`
const Text = styled.p`
  color: white;
`

const alphas = [0.5, 0.7, 0.9, 1]

const initPixi = (PIXXI, resources, id) => {
  const vpWidth = window.innerWidth
  const vpHeight = window.innerHeight
  let renderer = new PIXXI.Renderer({
    width: vpWidth,
    height: vpHeight,
    autoDensity: true,
    forceFXAA: true,
    powerPreference: "high-performance",
    backgroundAlpha: "0",
  })
  document.getElementById("canvasContainer").appendChild(renderer.view)
  
  let ticker = new PIXXI.Ticker()
  let stage = new PIXXI.Container()
  let patternContainer = new PIXXI.Container()
  const lineGraphics = new PIXXI.Graphics();
  
  stage.addChild(patternContainer)
  patternContainer.addChild(lineGraphics)

  let numberOfParticles = Math.floor((vpWidth * vpHeight) / 100000)

  for(let i = 0; i < numberOfParticles; i++) {

    const size = (Math.random() * 4) + 5
    const x = Math.random() * vpWidth
    const y = Math.random() * vpHeight

    const orientation = "horizontal";
    const direction = "Positive";
    const texture = resources[orientation + direction].texture
    const randomIndex = Math.round(Math.random() * (alphas.length-1))
    const alpha = alphas[randomIndex]

    let particleSpeed = 5 + ((Math.random() * 5) - 4)
    if (direction === 'Negative' && particleSpeed > 0) {
      particleSpeed = particleSpeed * -1
    }
    const particle = new Particle(PIXXI, stage, ticker, x, y, alpha, texture, orientation, direction, particleSpeed, size, vpWidth, vpHeight)
    particle.draw()
  }

  ticker.add(() => {
    renderer.render(stage)
  }, PIXXI.UPDATE_PRIORITY.LOW)

  ticker.start()
}

export const Background = ({...props}) => {
  const [loaded, setLoaded] = useState(false)
  useEffect(() => {
    // Pixi imported here to prevent fail while deploying
    const PIXI = require("pixi.js")
    const loader = loadImages(PIXI)
    loader.load((loader, resources) => {
      setLoaded(true)
      initPixi(PIXI, resources, "canvasContainer")
    })
  }, [])
  return <Wrapper {...props} id="canvasContainer">{!loaded && <Text>Loading...</Text>}</Wrapper>
}

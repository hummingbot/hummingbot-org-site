import React, { useEffect, useState } from "react"
import styled from "styled-components"
import { getParentSize } from "../helpers/getParentSize"
import { loadImages } from "./loadImages"
import { Particle } from "./Particle"

const Wrapper = styled.div`
  position: absolute;
  opacity: 0.6;
  top: 0;
  left: 0;
  z-index: 0;
  height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`
const Text = styled.p`
  color: white;
`

let vpWidth = 0
let vpHeight = 0

const initPixi = (PIXXI, resources, id) => {
	let particlesArray = []
	let accentColor = 0x5FFFD7
  const specialParticles = ['binance', 'avalanche', 'dydx', 'uniswap']
	const circleFillStyle = 0x000000

  const parent = getParentSize(id)
  vpWidth = parent.width
  vpHeight = parent.height
  let renderer = new PIXXI.Renderer({
    width: vpWidth,
    height: vpHeight,
    autoDensity: true,
    forceFXAA: true,
    powerPreference: "high-performance",
    backgroundAlpha: "0",
    // transparent: true,
  })
  document.getElementById("canvasContainer").appendChild(renderer.view)
  
  let ticker = new PIXXI.Ticker()
  let stage = new PIXXI.Container()
  let patternContainer = new PIXXI.Container()
  const lineGraphics = new PIXXI.Graphics();
  
  stage.addChild(patternContainer)
  patternContainer.addChild(lineGraphics)

  window.addEventListener("resize", () => {
    const { width, height } = getParentSize(id)
    vpWidth = width / 2
    vpHeight = height / 2
    renderer.resize(width, height)
    stage.position.set(width / 2, height / 2)
    stage.pivot.set(width / 2, height / 2)
  })

  let numberOfParticles = Math.floor((vpWidth * parent.height) / 50000)
  
  const marginW = vpWidth / 3
  const marginH = parent.height / 5
  
  for(let i = 0; i < numberOfParticles; i++) {

    let size
    let isSpecialParticle = false
    let specialParticleName = 'none'
    let x
    let y

    if (specialParticles.length > 0) {
      specialParticleName = specialParticles.pop()
      isSpecialParticle = true
      size = 32
    } else {
      size = (Math.random() * 4) + 5
    }

    const positionFactor = 0.1
    x = (Math.random() * ((vpWidth - size * positionFactor) - (size * positionFactor)) + size * positionFactor)
    y = (Math.random() * ((parent.height - size * positionFactor) - (size * positionFactor)) + size * positionFactor)
    
    if(isSpecialParticle) {
      x = x < marginW ? marginW : x
      x = x > vpWidth - marginW ? vpWidth - marginW : x
      y = y < marginH ? marginH : y
      y = y > parent.height - marginH ? parent.height - marginH : y
    }
    
    let directionX = (Math.random() * 5) - 2.5
    let directionY = (Math.random() * 5) - 2.5
    let color = accentColor
    
    const particle = new Particle(PIXXI, stage, ticker, resources, x, y, directionX, directionY, size, color, specialParticleName, circleFillStyle, vpWidth, parent.height)
    particle.draw()
    particlesArray.push(particle)
  }

  ticker.add(() => {
    renderer.render(stage)
  }, PIXXI.UPDATE_PRIORITY.LOW)

  ticker.add(function (time) {
    renderer.render(stage);

    lineGraphics.clear()

    let opacityValue = 1
    const minDistance = (vpWidth/ 2 * vpHeight/ 2) / 2

    for (let a = 0; a < particlesArray.length; a++) {
      for (let b = a; b < particlesArray.length; b++) {

        const spna = particlesArray[a].specialParticleName
        const spnb = particlesArray[b].specialParticleName
        let cancel = spna === spnb && spna !== 'none'
        if(!cancel) {
          cancel = spna !== 'none' && spnb !== 'none'
        }

        if(!cancel && spna !== 'none') {
          let distance = ((particlesArray[a].x - particlesArray[b].x) * (particlesArray[a].x - particlesArray[b].x))
                        + ((particlesArray[a].y - particlesArray[b].y) * (particlesArray[a].y - particlesArray[b].y))
          
          if(distance < minDistance) {
            opacityValue = 1
            opacityValue = 1 - (distance/(minDistance))

            lineGraphics.lineStyle(2, 0x5FFFD7, opacityValue);
            lineGraphics.moveTo(particlesArray[a].x, particlesArray[a].y);
            lineGraphics.lineTo(particlesArray[b].x, particlesArray[b].y);
          }
        }
      }
    }
  });

  ticker.start()
}

// let timeOutFunctionId;

export const Background = () => {
  const [loaded, setLoaded] = useState(false)
  useEffect(() => {
    // Pixi imported here to prevent fail while deploying
    const PIXI = require("pixi.js")
    const loader = loadImages(PIXI)
    loader.load((loader, resources) => {
      setLoaded(true)
      initPixi(PIXI, resources, "canvasContainer")
    })
    // TODO: better handle window resize
	  // window.addEventListener("resize", () => {
	  // 	clearTimeout(timeOutFunctionId);
	  // 	timeOutFunctionId = setTimeout(() => initPixi(PIXI, "canvasContainer"), 500)
	  // })
  }, [])
  return <Wrapper id="canvasContainer">{!loaded && <Text>Loading...</Text>}</Wrapper>
}

import { useState, useEffect } from "react"

function getWindowDimensions() {
  const hasWindow = typeof window !== "undefined"
  const width = hasWindow ? window.innerWidth : null
  const height = hasWindow ? window.innerHeight : null
  const isDesktop = width > 768
  const isMobile = width < 768

  return {
    width,
    height,
    isDesktop,
    isMobile,
  }
}

export default function useWindowDimensions(debounceTime = 500) {
  const [windowDimensions, setWindowDimensions] = useState(
    getWindowDimensions()
  )

  function handleResize() {
    setWindowDimensions(getWindowDimensions())
  }

  useEffect(() => {
    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  return windowDimensions
}

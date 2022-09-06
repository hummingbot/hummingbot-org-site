import binance from "../logos/binance.png"
import avalanche from "../logos/avalanche.png"
import dydx from "../logos/dydx.png"
import uniswap from "../logos/uniswap.png"

export const loadImages = PIXI => {
  const loader = new PIXI.Loader()
  loader.add("binance", binance)
  loader.add("avalanche", avalanche)
  loader.add("dydx", dydx)
  loader.add("uniswap", uniswap)

  return loader
}

import horizontalNegative from "./images/horizontalNegative.png"
import horizontalPositive from "./images/horizontalPositive.png"
import verticalNegative from "./images/verticalNegative.png"
import verticalPositive from "./images/verticalPositive.png"

export const loadImages = PIXI => {
  const loader = new PIXI.Loader()
  loader.add("horizontalNegative", horizontalNegative)
  loader.add("horizontalPositive", horizontalPositive)
  loader.add("verticalNegative", verticalNegative)
  loader.add("verticalPositive", verticalPositive)
  return loader
}

import { type TinyColor, type RandomOptions, random } from '@ctrl/tinycolor'
import type { IColor } from '../types'

export interface IRandomColorProp {
  format?: 'hex' | 'hsl' | 'hsv' | 'rgb'
  count?: number
  style?: 'bright' | 'dark' | 'light'
}

export function getRandomColor(options: IRandomColorProp): IColor | IColor[] {
  const randomOptions: RandomOptions = {
    luminosity: options?.style || 'random',
  }

  const color: TinyColor = random(randomOptions)

  const { r: red, g: green, b: blue, a: alpha } = color
  const hsv = color.toHsvString()
  const hsvDetail = color.toHsv()
  const hsl = color.toHslString()
  const hslDetail = color.toHsl()
  const hex = color.toHexString()
  const hexa = color.toHex8String()
  const rgb = color.toRgbString()
  const rgbDetail = color.toRgb()

  const randomColor = {
    red,
    green,
    blue,
    alpha,
    hsv,
    hsvDetail,
    hsl,
    hslDetail,
    hex,
    hexa,
    rgb,
    rgbDetail,
  }

  return randomColor
}

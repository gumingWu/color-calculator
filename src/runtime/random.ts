import { type TinyColor, random } from '@ctrl/tinycolor'

export interface IRandomColorProp {
  format?: 'hex' | 'hsl' | 'hsv' | 'rgb'
  count?: number
  style: 'bright' | 'dark' | 'light'
}

export interface IRandomColor {
  red: number
  green: number
  blue: number
  alpha: number
  hex: string
  hexa: string
  hsl: string
  hsv: string
  rgb: string
}

export function getRandomColor(): IRandomColor {
  const color: TinyColor = random()

  const { r: red, g: green, b: blue, a: alpha } = color
  const hsv = color.toHsvString()
  const hsl = color.toHslString()
  const hex = color.toHexString()
  const hexa = color.toHex8String()
  const rgb = color.toRgbString()

  return {
    red,
    green,
    blue,
    alpha,
    hsv,
    hsl,
    hex,
    hexa,
    rgb,
  }
}

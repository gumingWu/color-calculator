import type { Numberify, HSVA, HSLA, RGBA } from '@ctrl/tinycolor'

export interface IColor {
  red: number
  green: number
  blue: number
  alpha: number
  hex: string
  hexa: string
  hsl: string
  hslDetail: Numberify<HSLA>
  hsv: string
  hsvDetail: Numberify<HSVA>
  rgb: string
  rgbDetail: Numberify<RGBA>
}

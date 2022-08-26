// Typescript:
export interface PastellifyOptions {
  saturation?: number
  lightness?: number
  toCSS?: boolean
}


// Functions:
const c2n = (c: string): number => Math.abs(isNaN(parseInt(c)) ? c.toLowerCase().charCodeAt(0) - 96 : isNaN(parseInt(c)) ? 0 : parseInt(c))
const s2n = (s: string): number => s.length > 1 ? parseInt(s.split('').reduce((a, c) => `${ c2n(a) + c2n(c) }`)) : c2n(s)
const postProcess = (n: [ number, number, number ], options?: PastellifyOptions) => options?.toCSS ? `hsl(${ n[0] }, ${ n[1] }%, ${ n[2] }%)` : n
const pastellify = (s: string, options?: PastellifyOptions): number[] | string => postProcess([ (3 * s2n(s) + 2 * s2n(s) + s2n(s)) % 360, options?.saturation ?? 78, options?.lightness ?? 73 ], options)


// Exports:
export default pastellify

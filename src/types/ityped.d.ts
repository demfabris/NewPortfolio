// Type definitions for ityped 0.0
// Project: https://github.com/luisvinicius167/ityped
// Definitions by: Daniel Rosenwasser <https://github.com/DanielRosenwasser>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// Fixed by: fabricio7p

declare module 'ityped' {
  export interface Configuration {
    showCursor: boolean
    strings: string[]
    typeSpeed: number
    backSpeed: number
    pause: number
    loop: boolean
    placeholder: boolean
    cursorChar: string
  }

  export function init(element: HTMLElement, config: Partial<Configuration>): void
}

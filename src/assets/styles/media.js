import { css } from 'styled-components'

const screenSizes = {
  large: 1170,
  desktop: 992,
  tablet: 768,
  mobile: 376
}

export const media = Object
  .keys(screenSizes)
  .reduce((acc, label) => {
    acc[label] = (...args) => css`
      @media (max-width: ${screenSizes[label] / 16}rem) {
        ${css(...args)}
      }
    `
    return acc
  }, {})
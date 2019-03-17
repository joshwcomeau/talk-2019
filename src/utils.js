export const random = (min, max) =>
  Math.floor(Math.random() * (max - min)) + min

export const sample = arr => arr[Math.floor(Math.random() * arr.length)]

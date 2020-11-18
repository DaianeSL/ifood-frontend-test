export const BREAKPOINTS = {
  xs: 0,
  sm: 576,
  md: 768,
  lg: 960,
  xl: 1440,
}

const mq = (bp, includeMedia = true) =>
  `${includeMedia ? '@media ' : ''}(min-width: ${BREAKPOINTS[bp]}px)`

mq.lessThan = (bp, includeMedia = true) =>
  `${includeMedia ? '@media ' : ''}(max-width: ${BREAKPOINTS[bp] - 1}px)`

mq.between = (bpA, bpB, includeMedia = true) =>
  `${includeMedia ? '@media ' : ''}(min-width: ${
    BREAKPOINTS[bpA]
  }px) and (max-width: ${BREAKPOINTS[bpB] + 1}px)`

export default mq

import styled, { keyframes } from 'styled-components'

const spin = keyframes`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
`

export const Spinner = styled.div`
  margin: 0 auto;
  padding: 20px 0 10px;
  svg {
    width: 40px;
    height: 40px;
    animation: ${spin} 2s linear infinite;
  }
`

export const OffScreenText = styled.span`
  position: absolute;
  left: -99999px;
`

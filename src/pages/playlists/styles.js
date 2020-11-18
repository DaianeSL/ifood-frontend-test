import styled from 'styled-components'

export const Wrap = styled.div`
  width: ${({ theme }) => theme.grid.wrap.width};
  max-width: ${({ theme }) => theme.grid.wrap.maxWidth};
  display: flex;
  justify-content: flex-end;
  align-items: flex-start;
  flex-direction: column;
  padding: 0 0 50px;
  margin: 0 auto;
`

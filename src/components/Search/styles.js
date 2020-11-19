import styled from 'styled-components'

export const Input = styled.input`
  width: 100%;
  height: 45px;
  background-color: transparent;
  border: none;
  border-bottom: 2px solid ${({ theme }) => theme.colors.purple};
  color: ${({ theme }) => theme.colors.white};
  font-size: ${({ theme }) => theme.fonts.sizes.inputSearch};
  font-family: ${({ theme }) => theme.fonts.family};
  outline: none;
  padding: 20px 10px;
  font-weight: bold;

  &::placeholder {
    font-family: ${({ theme }) => theme.fonts.family};
    font-weight: bold;
    color: ${({ theme }) => theme.colors.white};
    font-size: ${({ theme }) => theme.fonts.sizes.inputSearch};
    opacity: 1;
  }
`

import styled from 'styled-components'
import mq from '../../helpers/mq'

export const ContainerFilter = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 950px;
  margin: 0 auto;
  padding: 20px;
  max-width: 100%;
  position: relative;
  z-index: 20;
`
export const AdvancedFilter = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-wrap: wrap;
  width: 100%;
  margin-top: 30px;

  select,
  input {
    width: 100%;
    background: transparent;
    color: ${({ theme }) => theme.colors.white};
    font-size: ${({ theme }) => theme.fonts.sizes.input};
    font-family: ${({ theme }) => theme.fonts.family};
    padding: 10px;
    outline: none;
    border: none;
    border-bottom: 2px solid ${({ theme }) => theme.colors.purple};

    &::placeholder {
      color: ${({ theme }) => theme.colors.white};
      font-size: ${({ theme }) => theme.fonts.sizes.input};
      font-family: ${({ theme }) => theme.fonts.family};
      opacity: 1;
    }
  }
`

export const ErrorText = styled.h3`
  font-size: ${({ theme }) => theme.fonts.sizes.title};
  color: ${({ theme }) => theme.colors.white};
`

export const FieldContainer = styled.div`
  width: 50%;

  &:nth-child(odd) {
    padding-right: 20px;
  }

  ${mq.lessThan('md')} {
    width: 100%;
    &:nth-child(odd) {
      padding-right: 0;
    }
  }

  > div {
    width: 100%;
  }
`

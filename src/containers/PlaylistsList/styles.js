import styled from 'styled-components'

export const Link = styled.a`
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  z-index: 10;
`
export const TextContainer = styled.div`
  position: absolute;
  top: calc(100% - 5px);
  right: 0;

  h2,
  p {
    color: ${({ theme }) => theme.colors.purple};
    text-align: right;
  }

  h2 {
    font-size: 30px;
  }
`
export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  width: 100%;
`

export const PlaylistItem = styled.div`
  width: 300px;
  max-width: 100%;
  padding: 25px 25px 25px 25px;
  position: relative;
  z-index: 1;
  margin-bottom: 60px;
  transition: 0.3s;

  img {
    border: 2px solid ${({ theme }) => theme.colors.purple};
  }

  &:hover {
    padding: 25px 30px 30px 25px;
  }

  &:before {
    content: '';
    position: absolute;
    bottom: 0;
    right: 0;
    width: 90%;
    height: 90%;
    z-index: -1;
    background-color: ${({ theme }) => theme.colors.purple};
    transition: 0.3s;
  }
`

export const PlaylistContainer = styled.div`
  padding: 10px;
`

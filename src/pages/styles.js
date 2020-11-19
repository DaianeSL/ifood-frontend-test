import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: flex-end;
  width: 100%;
  height: 100%;
  position: relative;
  overflow: hidden;
  z-index: 1;

  &:before {
    content: '';
    position: absolute;
    top: 10%;
    z-index: 0;
    right: 50%;
    width: 100%;
    height: 100%;
    background-image: url('assets/img/tiger.png');
    background-repeat: no-repeat;
    background-position: center right;
    background-size: cover;
    opacity: 0.15;
    transition: 0.5s ease;
    transform: scale(1.5)
      translate(${({ position }) => `${position.y}px, ${position.x}`}px);
    pointer-events: none;
    filter: invert(54%) sepia(66%) saturate(1559%) hue-rotate(350deg)
      brightness(100%) contrast(91%);
  }
`
export const Link = styled.a`
  color: white;
  font-weight: bold;
  position: absolute;
  font-size: ${({ theme }) => theme.fonts.sizes.title};
  top: 0;
  left: 0;
  z-index: 5;
  text-decoration: none;
  background-color: ${({ theme }) => theme.colors.orange};
  max-width: 0;
  transition: 0.3s ease;
  overflow: hidden;
`

export const Title = styled.h1`
  color: ${({ theme }) => theme.colors.orange};
  font-size: ${({ theme }) => theme.fonts.sizes.title};
  margin: 0;
  text-transform: uppercase;
  overflow: hidden;
  max-width: 100%;
  transition: 0.3s ease;
`

export const TextContainer = styled.div`
  position: relative;
  width: 400px;
  max-width: 100%;

  &:hover ${Title} {
    max-width: 0;
  }
  &:hover ${Link} {
    max-width: 100%;
  }
`

export const Text = styled.p`
  color: ${({ theme }) => theme.colors.orange};
  font-size: ${({ theme }) => theme.fonts.sizes.paragraph};
  font-weight: 200;
`

export const Wrap = styled.div`
  width: 1367px;
  max-width: 90%;
  display: flex;
  justify-content: flex-end;
  align-items: flex-start;
  flex-direction: column;
  padding: 0 0 50px;
`

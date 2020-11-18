import { APP_NAME, APP_DESC } from '../constants/project'
import { useMouseMap } from '../hooks/useMouseMap'
import { SPOTFY_AUTH_URL } from '../constants/services'

import { Container, Title, Text, Wrap, TextContainer, Link } from './styles'

export default function Home() {
  const position = useMouseMap()

  return (
    <Container position={position}>
      <Wrap>
        <TextContainer>
          <Title>{APP_NAME}</Title>
          <Link href={SPOTFY_AUTH_URL}>LogIn</Link>
          <Text>{APP_DESC}</Text>
        </TextContainer>
      </Wrap>
    </Container>
  )
}

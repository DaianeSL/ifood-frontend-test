import { usePlaylistContext } from '../../context'

import Loading from '../../components/Loading'

import {
  Container,
  PlaylistItem,
  TextContainer,
  Link,
  PlaylistContainer,
  ErrorMessage,
} from './styles'

const PlaylistsList = () => {
  const {
    state: { playlists, status },
  } = usePlaylistContext()

  if (status.isLoading) return <Loading text={'Loading'} />

  return (
    <>
      <Container>
        {status.error && (
          <ErrorMessage>Ops! Something went wrong! :(</ErrorMessage>
        )}
        {playlists.length &&
          playlists.map((list, index) => {
            return (
              <PlaylistContainer key={index}>
                <PlaylistItem>
                  <img src={list.images[0].url} alt="" />
                  <Link
                    href={list.external_urls.spotify}
                    rel="noreferrer"
                    target="_blank"
                  >
                    <TextContainer>
                      <h2>{list.name}</h2>
                      <p>by: {list.owner.display_name}</p>
                    </TextContainer>
                  </Link>
                </PlaylistItem>
              </PlaylistContainer>
            )
          })}
      </Container>
    </>
  )
}

export default PlaylistsList

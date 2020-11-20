import { useEffect } from 'react'
import { useRouter } from 'next/router'
import { array } from 'prop-types'

import Filter from '../../containers/Filter'
import PlaylistsList from '../../containers/PlaylistsList'
import { PlaylistProvider } from '../../context'

import { Wrap } from './styles'

const Playlists = ({ filters }) => {
  const router = useRouter()

  useEffect(() => {
    router.push('', {}, { shallow: true })
  }, [])

  return (
    <PlaylistProvider>
      <Wrap>
        <Filter fields={filters} />
        <PlaylistsList />
      </Wrap>
    </PlaylistProvider>
  )
}

export default Playlists

Playlists.propTypes = {
  filters: array.isRequired,
}

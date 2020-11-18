import { array } from 'prop-types'
import fetch from 'isomorphic-unfetch'

import Filter from '../../containers/Filter'
import PlaylistsList from '../../containers/PlaylistsList'
import { PlaylistProvider } from '../../context'

import { Wrap } from './styles'

const Playlists = ({ filters }) => {
  //TODO: remove tokens from url.

  return (
    <PlaylistProvider>
      <Wrap>
        <Filter fields={filters} />
        <PlaylistsList />
      </Wrap>
    </PlaylistProvider>
  )
}

export async function getServerSideProps() {
  const data = await fetch('http://www.mocky.io/v2/5a25fade2e0000213aa90776')
  const { filters } = await data.json() //TODO: add some validation here.

  return {
    props: { filters },
  }
}

export default Playlists

Playlists.propTypes = {
  filters: array.isRequired,
}

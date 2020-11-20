import fetch from 'isomorphic-unfetch'
import Playlists from '../src/pages/playlists'

const PlaylistsPage = (props) => <Playlists {...props} />

export default PlaylistsPage

export async function getServerSideProps() {
  try {
    const data = await fetch('http://www.mocky.io/v2/5a25fade2e0000213aa90776')
    const { filters } = await data.json()
    return {
      props: { filters },
    }
  } catch {
    return {
      props: { filters: [] },
    }
  }
}

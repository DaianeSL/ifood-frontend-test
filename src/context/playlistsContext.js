import {
  createContext,
  useState,
  useContext,
  useEffect,
  useCallback,
} from 'react'
import { element } from 'prop-types'
import { getFeaturedPlaylists } from '../helpers/api'

export const INITIAL_STATE = {
  playlists: [],
  filter: {},
  textFilter: '',
  status: {
    error: false,
    isLoading: false,
  },
}

export const PlaylistsContext = createContext({})

const PlaylistsProvider = ({ children }) => {
  const [state, setState] = useState(INITIAL_STATE)

  const changeState = (mewValue, keyValue) => {
    setState((prevState) => ({
      ...prevState,
      [keyValue]: mewValue,
    }))
  }

  const changeFilterState = useCallback(
    (newValue, keyValue) => {
      setState((prevState) => {
        if (!newValue) {
          delete prevState.filter[keyValue]
          return {
            ...prevState,
            filter: { ...prevState.filter },
          }
        }

        return {
          ...prevState,
          filter: { ...prevState.filter, [keyValue]: newValue },
        }
      })
    },
    [setState]
  )

  const filterByName = (listItems, keyWord) => {
    const regex = new RegExp(keyWord, 'gi')
    const newData = listItems.filter((item) => regex.test(item.name))
    changeState(newData, 'playlists')
  }

  const fetchPlaylists = useCallback(async (params = {}, searchFilter) => {
    changeState({ error: false, isLoading: true }, 'status')

    try {
      const { data } = await getFeaturedPlaylists(params)

      if (data)
        // eslint-disable-next-line no-extra-boolean-cast
        !!searchFilter
          ? filterByName(data.playlists.items, searchFilter)
          : changeState(data.playlists.items, 'playlists')

      changeState({ error: false, isLoading: false }, 'status')
    } catch {
      changeState({ error: true, isLoading: false }, 'status')
    }
  }, [])

  useEffect(() => {
    fetchPlaylists(state.filter, state.textFilter)
  }, [state.textFilter, state.filter, fetchPlaylists])

  useEffect(() => {
    fetchPlaylists()
  }, [])

  useEffect(() => {
    const timer = setInterval(
      () => fetchPlaylists(state.filter, state.textFilter),
      30000
    )
    return () => clearInterval(timer)
  }, [state.playlists])

  return (
    <PlaylistsContext.Provider
      value={{ state, changeState, changeFilterState }}
    >
      {children}
    </PlaylistsContext.Provider>
  )
}

export const usePlaylistContext = () => {
  const context = useContext(PlaylistsContext)
  if (!context)
    throw new Error(
      'Ops! Check if usePlaylistContext is within the PlaylistContext'
    )

  return {
    ...context,
  }
}

export default PlaylistsProvider

PlaylistsProvider.propTypes = {
  children: element.isRequired,
}

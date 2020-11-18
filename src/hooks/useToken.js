import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import queryString from 'query-string'
import Cookie from 'js-cookie'

const useToken = () => {
  const [token, setToken] = useState()

  const { asPath } = useRouter()
  const params = queryString.parse(asPath)

  useEffect(() => {
    const userToken = params['/playlists#access_token']
    setToken(userToken)
    Cookie.set('userToken', userToken)
  }, [])

  return { token }
}

export default useToken

import { createContext, useContext } from 'react'
import { element } from 'prop-types'
import useToken from '../hooks/useToken'

export const AuthContext = createContext({})

const AuthProvider = ({ children }) => {
  const { token } = useToken()

  return (
    <AuthContext.Provider value={{ token }}>{children}</AuthContext.Provider>
  )
}

export const useAuthContext = () => {
  const context = useContext(AuthContext)

  if (!context)
    throw new Error('Ops! Check if useAuthContext is within the AuthProvider')

  return {
    ...context,
  }
}

export default AuthProvider

AuthProvider.propTypes = {
  children: element.isRequired,
}

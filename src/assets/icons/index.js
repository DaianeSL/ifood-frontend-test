import { string } from 'prop-types'

import LoadingIcon from './LoadingIcon'

const Icon = ({ type, color }) => {
  switch (type) {
    case 'loading':
      return <LoadingIcon color={color} />
    default:
      return null
  }
}

export default Icon

Icon.propTypes = {
  type: string.isRequired,
  color: string.isRequired,
}

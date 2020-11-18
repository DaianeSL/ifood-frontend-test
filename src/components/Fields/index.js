import { object } from 'prop-types'
import Select from '../Select'
import DateTime from '../DateTime'
import Input from '../Input'

import { usePlaylistContext } from '../../context/playlistsContext'

const Fields = ({ field }) => {
  const { changeFilterState } = usePlaylistContext()

  if (field?.values) {
    return (
      <Select
        id={field.id}
        onChange={changeFilterState}
        values={field.values}
        label={field.name}
      />
    )
  }

  if (field?.validation?.entityType === 'DATE_TIME') {
    return (
      <DateTime id={field.id} onChange={changeFilterState} label={field.name} />
    )
  }

  if (field?.validation?.primitiveType === 'INTEGER') {
    return (
      <Input
        id={field.id}
        onChange={changeFilterState}
        label={field.name}
        validation={field.validation}
      />
    )
  }

  return null
}

export default Fields

Fields.propTypes = {
  field: object.isRequired,
}

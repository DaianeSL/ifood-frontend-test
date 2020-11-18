import { useState, useEffect } from 'react'
import { string, func } from 'prop-types'

import { Input } from './styles'

const Search = ({ id, onChange, label }) => {
  const [value, setValue] = useState('')

  useEffect(() => {
    onChange(value, id)
  }, [value])

  const handleChange = (e) => {
    setValue(e.target.value)
  }

  return (
    <Input
      type="text"
      onInput={handleChange}
      value={value}
      placeholder={label}
    />
  )
}

export default Search

Search.propTypes = {
  id: string.isRequired,
  onChange: func.isRequired,
  label: string.isRequired,
}

import { useState, useEffect } from 'react'
import { string, func, object } from 'prop-types'

const pattern = {
  ['INTEGER']: '[0-9]*',
}

const Input = ({ id, onChange, label, validation }) => {
  const [value, setValue] = useState('')

  useEffect(() => {
    onChange(value, id)
  }, [value])

  const handleChange = (e) => {
    const inputValue = e.target.value
    const isValid = e.target.validity.valid

    if (isValid && !validation.min) return setValue(inputValue)
    if (inputValue === '') return setValue(inputValue)
    if (
      isValid &&
      Number.parseInt(inputValue) >= validation.min &&
      Number.parseInt(inputValue) <= validation.max
    )
      return setValue(inputValue)
  }

  const hasPattern = pattern[validation.primitiveType]

  return (
    <input
      type="text"
      pattern={hasPattern}
      onInput={handleChange}
      value={value}
      placeholder={label}
    />
  )
}

export default Input

Input.propTypes = {
  id: string.isRequired,
  onChange: func.isRequired,
  label: string.isRequired,
  validation: object.isRequired,
}

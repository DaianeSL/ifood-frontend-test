import { string, array, func } from 'prop-types'

const Select = ({ id, values, label, onChange }) => {
  return (
    // eslint-disable-next-line jsx-a11y/no-onchange
    <select name="" id="" onChange={(e) => onChange(e.target.value, id)}>
      <option value="">{label}</option>
      {values &&
        values.map((
          option,
          index //TODO: option color to prevent windows bug on selects.
        ) => (
          <option key={index} value={option.value}>
            {option.name}
          </option>
        ))}
    </select>
  )
}

export default Select

Select.propTypes = {
  id: string.isRequired,
  values: array.isRequired,
  label: string.isRequired,
  onChange: func.isRequired,
}

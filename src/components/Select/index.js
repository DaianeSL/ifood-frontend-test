import { string, array, func } from 'prop-types'

import { SelectInput, Opt } from './styles'

const Select = ({ id, values, label, onChange }) => {
  return (
    // eslint-disable-next-line jsx-a11y/no-onchange
    <SelectInput
      name={id}
      id={id}
      onChange={(e) => onChange(e.target.value, id)}
    >
      <Opt value="">{label}</Opt>
      {values &&
        values.map((option) => (
          <Opt key={option.value} value={option.value}>
            {option.name}
          </Opt>
        ))}
    </SelectInput>
  )
}

export default Select

Select.propTypes = {
  id: string.isRequired,
  values: array.isRequired,
  label: string.isRequired,
  onChange: func.isRequired,
}

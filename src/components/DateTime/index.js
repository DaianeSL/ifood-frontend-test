import { useState, useEffect } from 'react'
import { string, func } from 'prop-types'
import DatePicker, { registerLocale } from 'react-datepicker'
import { ptBR } from 'date-fns/locale'

registerLocale('pt-BR', ptBR)

const DateTime = ({ id, onChange, label }) => {
  const [selectedDate, setSelectedDate] = useState()
  const [calendarActive, setCalendarActive] = useState(false) //TODO: use to add extra style.

  useEffect(() => {
    if (selectedDate) {
      onChange(selectedDate, id)
    }
  }, [id, onChange, selectedDate])

  return (
    <>
      <DatePicker
        selected={selectedDate}
        onChange={(date) => setSelectedDate(date)}
        onCalendarOpen={() => setCalendarActive(true)}
        onCalendarClose={() => setCalendarActive(selectedDate ? true : false)}
        locale="pt-BR"
        showTimeSelect
        timeFormat="p"
        timeIntervals={15}
        dateFormat="Pp"
        placeholderText={label}
      />
    </>
  )
}

export default DateTime

DateTime.propTypes = {
  id: string.isRequired,
  onChange: func.isRequired,
  label: string.isRequired,
}

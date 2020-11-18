import { array } from 'prop-types'
import { usePlaylistContext } from '../../context/playlistsContext'
import Fields from '../../components/Fields'
import Search from '../../components/Search'

import { ContainerFilter, AdvancedFilter, FieldContainer } from './styles'

const Filter = ({ fields }) => {
  const { changeState } = usePlaylistContext()

  return (
    //TODO: add a error message when the filter is not ready.
    <ContainerFilter>
      <Search id="textFilter" onChange={changeState} label="Search" />
      <AdvancedFilter>
        {fields.length &&
          fields.map((el) => (
            <FieldContainer key={el.id}>
              <Fields field={el} />
            </FieldContainer>
          ))}
      </AdvancedFilter>
    </ContainerFilter>
  )
}

export default Filter

Filter.propTypes = {
  fields: array.isRequired,
}

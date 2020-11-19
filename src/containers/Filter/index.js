import { array } from 'prop-types'
import { usePlaylistContext } from '../../context/playlistsContext'
import Fields from '../../components/Fields'
import Search from '../../components/Search'

import {
  ContainerFilter,
  AdvancedFilter,
  FieldContainer,
  ErrorText,
} from './styles'

const Filter = ({ fields }) => {
  const { changeState } = usePlaylistContext()

  return (
    <ContainerFilter>
      <Search id="textFilter" onChange={changeState} label="Search" />
      <AdvancedFilter>
        {fields.length ? (
          fields.map((el) => (
            <FieldContainer key={el.id}>
              <Fields field={el} />
            </FieldContainer>
          ))
        ) : (
          <ErrorText>Ops! Something went wrong with the filters! :(</ErrorText>
        )}
      </AdvancedFilter>
    </ContainerFilter>
  )
}

export default Filter

Filter.propTypes = {
  fields: array.isRequired,
}

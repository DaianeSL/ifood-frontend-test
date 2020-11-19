import { string } from 'prop-types'
import Icon from '../../assets/icons'
import theme from '../../assets/styles/theme'

import { OffScreenText, Spinner } from './style'

const Loading = ({ text }) => (
  <>
    <OffScreenText>{text}</OffScreenText>
    <Spinner>
      <Icon type="loading" color={theme.colors.orange} />
    </Spinner>
  </>
)

export default Loading

Loading.propTypes = {
  text: string,
}

import { connect } from 'react-redux'
import Content from '../components/Content'

const mapStateToProps = (state) => {
    return {
        themeColor: state.themeColor
    }
}

export default connect(mapStateToProps)(Content)

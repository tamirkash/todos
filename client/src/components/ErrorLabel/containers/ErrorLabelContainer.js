import { connect } from 'react-redux';
import {onUnmount} from "../../../actions/actions";
import ErrorLabel from "../ErrorLabel";

const mapStateToProps = state => {
    return {
        errorMsg: state.user.errorMsg
    }
};

const mapDispatchToProps = dispatch => {
    return {
        onUnmount: () => dispatch(onUnmount())
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(ErrorLabel);
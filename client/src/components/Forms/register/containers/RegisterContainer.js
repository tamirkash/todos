import Register from "../Register";
import {connect} from "react-redux";
import {register} from "../../../../actions/actions";

const mapDispatchToProps = dispatch => {
    return {
        onRegister: (input) => dispatch(register(input))
    }
};

export default connect(null, mapDispatchToProps)(Register);
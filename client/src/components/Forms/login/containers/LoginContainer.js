import { connect } from 'react-redux';
import Login from "../Login";
import {login} from "../../../../actions/actions";

const mapDispatchToProps = dispatch => {
    return {
        onLogin: (credentials) => {
            dispatch(login(credentials))
        }
    }
};

export default connect(null, mapDispatchToProps)(Login);
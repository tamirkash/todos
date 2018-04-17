import { connect } from 'react-redux';
import {withRouter} from "react-router-dom";
import LoggedOutRoute from "../LoggedOutRoute";

const mapStateToProps = state => {
    return {
        logged: state.user.logged
    }
};

export default withRouter(connect(mapStateToProps)(LoggedOutRoute));
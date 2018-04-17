import { connect } from 'react-redux';
import Navigation from "../Navigation";
import {addTodo, logout} from "../../../actions/actions";

const mapStateToProps = state => {
    return {
        username: state.user.username
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onLogout: () => dispatch(logout()),
        onTodoAdd: (text) => dispatch(addTodo(text))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Navigation);
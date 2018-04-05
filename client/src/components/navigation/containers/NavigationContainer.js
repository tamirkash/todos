import { connect } from 'react-redux';
import Navigation from "../Navigation";
import {addTodo} from "../../../actions/actions";

// const mapStateToProps = state => {
//     return {
//         username: state.user.username
//     }
// }

const mapDispatchToProps = dispatch => {
    return {
        onTodoAdd: (text) => dispatch(addTodo(text))
    }
}

export default connect(null, mapDispatchToProps)(Navigation);
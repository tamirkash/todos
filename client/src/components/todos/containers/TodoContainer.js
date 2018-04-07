import {connect} from "react-redux";
import {updateStatus, updateStatusIsOpen} from "../../../actions/actions";
import Todo from "../Todo";

const mapDispatchToProps = dispatch => {
    return {
        updateStatus: (id, status) => dispatch(updateStatus(id, status)),
        updateStatusIsOpen: (isOpen) => dispatch(updateStatusIsOpen(isOpen))
    }
};

const mapStateToProps = state => {
    return {
        statusList: state.status.statusList
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Todo);
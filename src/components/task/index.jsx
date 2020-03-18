import { connect } from 'react-redux';
import Task from './Task';
import { getTasklist, getTask } from '@/views/all/action';

const mapStateToProps = (state) => {
  // console.log(state)
  return {
    tasklist: state.taskliststore.tasklist,
    task: state.taskliststore.task,
    mf: state.taskliststore.mf
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    changeTasklist (data) {
      dispatch(getTasklist(data));
    },
    changeTask (data) {
      dispatch(getTask(data));
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Task)
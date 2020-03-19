import { connect } from 'react-redux';
import Task from './Task';
import { getTasklist, getTask, getCf, getCid } from '@/views/all/action';

const mapStateToProps = (state) => {
  // console.log(state)
  return {
    tasklist: state.taskliststore.tasklist,
    task: state.taskliststore.task,
    mf: state.taskliststore.mf,
    cf: state.taskliststore.cf,
    cid: state.taskliststore.cid
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    changeTasklist (data) {
      dispatch(getTasklist(data));
    },
    changeTask (data) {
      dispatch(getTask(data));
    },
    changeCf (data) {
      dispatch(getCf(data))
    },
    changeCid (data) {
      dispatch(getCid(data))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Task)
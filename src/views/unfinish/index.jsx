//容器组件
import { connect } from 'react-redux'
import UI from './UI';
import { getTasklist, getTask, getMf } from '@/views/all/action';

//获取状态管理器中的状态
const mapStateToProps = (state) => {
  // console.log(state)
  return {
    tasklist: state.taskliststore.tasklist,
    task: state.taskliststore.task,
    mf: state.taskliststore.mf
  }
}
//业务逻辑
const mapDispatchToProps = (dispatch) => {
  return {
    changeTasklist (data) {
      dispatch(getTasklist(data));
    },
    changeTask (data) {
      dispatch(getTask(data));
    },
    changeMf (data) {
      dispatch(getMf(data))
    }
  }
}

const Unfinish = connect(mapStateToProps, mapDispatchToProps)(UI);

export default Unfinish;
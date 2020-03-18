//UI组件
import React from 'react';
import './all.scss';
import Task from '@/components/task/index.jsx';

export default class extends React.Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  render () {
    // console.log(this.props)
    // console.log(this.props.match)
    return (
      <div className="content">
        <button className="add" onClick={() => {
          //打开模态框
          this.props.changeMf(true)
        }}>+</button>
        {this.props.mf ?
          <div className="addbox" onClick={(e) => {
            //点击模态框空白处关闭
            this.props.changeMf(false)
          }}>
            <div className="task" onClick={(e) => {
              e.stopPropagation();//阻止事件冒泡,防止点击输入框引发模态框关闭
            }}>
              <input type="text" value={this.props.task} onChange={(e) => {
                // console.log(e.target.value);
                this.props.changeTask(e.target.value)
              }} />
              <button onClick={() => {
                let tasklist = this.props.tasklist
                let time = Date.now();
                tasklist.push({ task: this.props.task, time, tf: false })
                console.log(this.props.task);
                this.props.changeTasklist(tasklist)
                this.props.changeTask('')
                this.props.changeMf(false)
              }}>添加任务</button>
            </div>
          </div> : ''
        }
        <Task path={this.props.match.path} />
      </div>
    )
  }
  componentDidMount () {
  }
}
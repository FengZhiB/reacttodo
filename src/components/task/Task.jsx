import React from 'react';
import './task.scss';

class Task extends React.Component {
  render () {
    // console.log(this.props.path)
    return (
      <div className="task">
        <ul>
          {/* {this.props.tasklist.map(item => {
            let date = new Date(item.time)
            let year = date.getFullYear();
            let month = date.getMonth() + 1;
            let day = date.getDate();
            let hour = date.getHours();
            let min = date.getMinutes();
            let sc = date.getSeconds();
            let tt = `${year}年${month}月${day}日${hour}时${min}分${sc}秒`
            return (
              <li key={item.time}>
                <p>任务：{item.task}</p>
                <p>添加时间：{tt}</p>
                <p className="btnbox"><span className={item.tf ? 'success' : 'fail'} onClick={() => {
                  let tasklist = this.props.tasklist
                  let id = item.time
                  tasklist.map(elm => {
                    if (id == elm.time) {
                      elm.tf = !elm.tf
                    }
                  })
                  tasklist = [...tasklist] //深拷贝，否则点击后不会重新渲染
                  this.props.changeTasklist(tasklist)
                }}>{item.tf ? '已完成' : '未完成'}</span><span className="updata">修改</span><span className="del">删除</span></p>
              </li>
            )
          })} */}
          {
            (() => {
              switch (this.props.path) {
                case '/all':
                  return (this.props.tasklist.map(item => {
                    let date = new Date(item.time)
                    let year = date.getFullYear();
                    let month = date.getMonth() + 1;
                    let day = date.getDate();
                    let hour = date.getHours();
                    let min = date.getMinutes();
                    let sc = date.getSeconds();
                    let tt = `${year}年${month}月${day}日${hour}时${min}分${sc}秒`
                    return (
                      <li key={item.time}>
                        <p>任务：{item.task}</p>
                        <p>添加时间：{tt}</p>
                        <p className="btnbox"><span className={item.tf ? 'success' : 'fail'} onClick={() => {
                          let tasklist = this.props.tasklist
                          let id = item.time
                          tasklist.map(elm => {
                            if (id === elm.time) {
                              elm.tf = !elm.tf
                            }
                          })
                          tasklist = [...tasklist] //深拷贝，否则点击后不会重新渲染
                          this.props.changeTasklist(tasklist)
                        }}>{item.tf ? '已完成' : '未完成'}</span><span className="updata">修改</span><span className="del">删除</span></p>
                      </li>
                    )
                  }))
                case '/finished':
                  return (this.props.tasklist.map(item => {
                    if (item.tf) {
                      let date = new Date(item.time)
                      let year = date.getFullYear();
                      let month = date.getMonth() + 1;
                      let day = date.getDate();
                      let hour = date.getHours();
                      let min = date.getMinutes();
                      let sc = date.getSeconds();
                      let tt = `${year}年${month}月${day}日${hour}时${min}分${sc}秒`
                      return (
                        <li key={item.time}>
                          <p>任务：{item.task}</p>
                          <p>添加时间：{tt}</p>
                          <p className="btnbox"><span className={item.tf ? 'success' : 'fail'} onClick={() => {
                            let tasklist = this.props.tasklist
                            let id = item.time
                            tasklist.map(elm => {
                              if (id === elm.time) {
                                elm.tf = !elm.tf
                              }
                            })
                            tasklist = [...tasklist] //深拷贝，否则点击后不会重新渲染
                            this.props.changeTasklist(tasklist)
                          }}>{item.tf ? '已完成' : '未完成'}</span><span className="updata">修改</span><span className="del">删除</span></p>
                        </li>)
                    }
                  }))
                case '/unfinish':
                  return (this.props.tasklist.map(item => {
                    if (!item.tf) {
                      let date = new Date(item.time)
                      let year = date.getFullYear();
                      let month = date.getMonth() + 1;
                      let day = date.getDate();
                      let hour = date.getHours();
                      let min = date.getMinutes();
                      let sc = date.getSeconds();
                      let tt = `${year}年${month}月${day}日${hour}时${min}分${sc}秒`
                      return (
                        <li key={item.time}>
                          <p>任务：{item.task}</p>
                          <p>添加时间：{tt}</p>
                          <p className="btnbox"><span className={item.tf ? 'success' : 'fail'} onClick={() => {
                            let tasklist = this.props.tasklist
                            let id = item.time
                            tasklist.map(elm => {
                              if (id === elm.time) {
                                elm.tf = !elm.tf
                              }
                            })
                            tasklist = [...tasklist] //深拷贝，否则点击后不会重新渲染
                            this.props.changeTasklist(tasklist)
                          }}>{item.tf ? '已完成' : '未完成'}</span><span className="updata">修改</span><span className="del">删除</span></p>
                        </li>)
                    }
                  }))
                default:
                  break;
              }
            })()
          }
        </ul>
      </div>
    )
  }
}

export default Task;
import React from 'react';
import './task.scss';

class Task extends React.Component {
  render () {
    // console.log(this.props)
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
                            return { tf: !elm.tf, time: item.time, task: item.task }
                          })
                          tasklist = [...tasklist] //深拷贝，否则点击后不会重新渲染
                          this.props.changeTasklist(tasklist)
                        }}>{item.tf ? '已完成' : '未完成'}</span><span className="updata" onClick={() => {
                          console.log(555555);
                          this.props.changeCid(item.time)
                          this.props.changeCf(true)
                        }}>修改</span><span className="del" onClick={() => {
                          const id = item.time
                          let i = 0
                          let tasklist = this.props.tasklist
                          tasklist.forEach((elm, index) => {
                            if (id === elm.time) {
                              i = index
                            }
                          })
                          tasklist.splice(i, 1)
                          this.props.changeTasklist([...tasklist])
                        }}>删除</span></p>
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
                              return { tf: !elm.tf, time: item.time, task: item.task }
                            })
                            tasklist = [...tasklist] //深拷贝，否则点击后不会重新渲染
                            this.props.changeTasklist(tasklist)
                          }}>{item.tf ? '已完成' : '未完成'}</span><span className="updata" onClick={() => {
                            console.log(555555);
                            this.props.changeCid(item.time)
                            this.props.changeCf(true)
                          }}>修改</span><span className="del" onClick={() => {
                            const id = item.time
                            let i = 0
                            let tasklist = this.props.tasklist
                            tasklist.forEach((elm, index) => {
                              if (id === elm.time) {
                                i = index
                              }
                            })
                            tasklist.splice(i, 1)
                            this.props.changeTasklist([...tasklist])
                          }}>删除</span></p>
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
                              return { tf: !elm.tf, time: item.time, task: item.task }
                            })
                            tasklist = [...tasklist] //深拷贝，否则点击后不会重新渲染
                            this.props.changeTasklist(tasklist)
                          }}>{item.tf ? '已完成' : '未完成'}</span><span className="updata" onClick={() => {
                            this.props.changeCid(item.time)
                            this.props.changeCf(true)
                          }}>修改</span><span className="del" onClick={() => {
                            const id = item.time
                            let i = 0
                            let tasklist = this.props.tasklist
                            tasklist.forEach((elm, index) => {
                              if (id === elm.time) {
                                i = index
                              }
                            })
                            tasklist.splice(i, 1)
                            this.props.changeTasklist([...tasklist])
                          }}>删除</span></p>
                        </li>)
                    }
                  }))
                default:
                  break;
              }
            })()
          }
        </ul>
        {
          this.props.cf ?
            <div className="changebox">
              <input type="text" onChange={(e) => {
                this.props.changeTask(e.target.value)
              }} />
              <button onClick={() => {
                let tasklist = this.props.tasklist
                tasklist.map(item => {
                  if (this.props.cid === item.time) {
                    item.task = this.props.task
                  }
                  return { task: item.task, time: item.time, tf: item.tf }
                })
                this.props.changeTasklist(tasklist)
                this.props.changeTask('')
                this.props.changeCid(0)
                this.props.changeCf(false)
              }}>修改任务</button>
            </div> : ''
        }
      </div>
    )
  }
}

export default Task;
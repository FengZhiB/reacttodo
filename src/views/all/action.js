export function getTask (data) {
  return (dispatch) => {
    dispatch({
      type: 'CHANGETASK',
      data
    })
    // console.log('111');
  }
}

export function getTasklist (data) {
  return (dispatch) => {
    dispatch({
      type: 'CHANGETASKLIST',
      data
    })
    // console.log('222')
  }
}

export function getMf (data) {
  return (dispatch) => {
    dispatch({
      type: 'CHANGEMF',
      data
    })
    // console.log('333')
  }
}
export default (state = {
  task: '',
  tasklist: [],
  mf: false
}, action) => {
  const { type, data } = action;
  switch (type) {
    case 'CHANGETASKLIST':
      // return Object.assign({}, state, { tasklist: data })
      return { ...state, ...{ tasklist: data } }
    case 'CHANGETASK':
      // return Object.assign({}, state, { task: data })
      return { ...state, ...{ task: data } }
    case 'CHANGEMF':
      return { ...state, ...{ mf: data } }
    default:
      break;
  }
  return state;
}
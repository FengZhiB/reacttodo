export default (state = {
  task: '',
  tasklist: [],
  mf: false,
  cf: false,
  cid: 0
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
    case 'CHANGECF':
      return { ...state, ...{ cf: data } }
    case 'CHANGECID':
      return { ...state, ...{ cid: data } }
    default:
      break;
  }
  return state;
}
import { createStore, applyMiddleware, combineReducers } from 'redux';
import taskliststore from '@/views/all/store';

import thunk from 'redux-thunk';

//分模块引入仓库
const reducer = combineReducers({ taskliststore })

//导出仓库
const store = createStore(reducer, applyMiddleware(thunk));

export default store;
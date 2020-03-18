import React from 'react';
import Task from '@/components/task/index.jsx';

function Unfinish (props) {
  return (
    <div className="content">
      未完成
      <Task path={props.match.path} />
    </div>
  )
}

export default Unfinish;
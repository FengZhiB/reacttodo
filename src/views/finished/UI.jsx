import React from 'react';
import Task from '@/components/task/index.jsx';

function Finished (props) {
  return (
    <div className="content">
      已完成
      <Task path={props.match.path} />
    </div>
  )
}

export default Finished;
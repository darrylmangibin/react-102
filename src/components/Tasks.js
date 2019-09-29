import React from 'react';

import Lists from './Lists'

const Tasks = ({ tasks, onDeleteTask, onChangeCompleted, filterText, hideCompleted }) => {
  const incomplete = tasks.filter(t => !t.completed)
  return (
    <React.Fragment>
      <h2 className="list-title">You have {incomplete.length} Task{incomplete.length > 1 ? 's' : ''} left</h2>
      {tasks.length <= 0 ? <p className="empty-message">There are no tasks to show</p> : tasks.map(task => (<Lists 
        key={task.id}
        task={task}
        onDeleteTask={onDeleteTask}
        onChangeCompleted={onChangeCompleted}
      />)).filter(({ props }) => {
        const filtered = props.task.title.toLowerCase().indexOf(filterText.toLowerCase()) > -1;
        const hide = !props.task.completed || !hideCompleted
        return filtered && hide;
      })
      }
    </React.Fragment>
  )
}

export default Tasks;
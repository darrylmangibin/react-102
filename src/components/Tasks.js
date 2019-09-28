import React from 'react';

import Lists from './Lists';

class Tasks extends React.Component {
  render() {
    const renderTasks = this.props.tasks.length <= 0 ? (
      <p className="empty-message">There are no tasks to show</p>
    ) : this.props.tasks.map((task) => {
      return (
        <Lists 
          key={task.id}
          task={task}
          onRemoveTask={this.props.onRemoveTask}
          onChangeCompleted={this.props.onChangeCompleted}
        />
      )
    }).filter((task) => {
      const filtered = task.props.task.title.toLowerCase().indexOf(this.props.filterText.toLowerCase()) > -1;
      const hide = !task.props.task.completed || !this.props.hideCompleted
      if (filtered && hide) {
        return task
      }
    })

    const incomplete = this.props.tasks.filter((task) => {
      if(!task.completed) {
        return task
      }
    })

    return (
      <div>
        <h2 className="list-title">You have {incomplete.length} Task left</h2>
        { renderTasks }
      </div>
    )
  }
}

export default Tasks;
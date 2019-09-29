import React from 'react';

class Lists extends React.Component {

  state = {
    completed: false
  }

  componentDidMount() {
    this.setState({ completed: this.props.task.completed })
  }

  onChangeCompleted = e => {
    const { onChangeCompleted, task } = this.props;
    this.setState({ completed: e.target.checked });
    const data = { completed: e.target.checked }
    onChangeCompleted(task.id, data )
  }

  render() {
    const { task, onDeleteTask } = this.props
    return (
      <label className="list-item">
        <div className="list-item__container">
          <input type="checkbox" 
            checked={this.state.completed}
            onChange={this.onChangeCompleted}
          />
          <span>{task.title}</span>
        </div>
        <button className="button button--text"
          onClick={() => onDeleteTask(task.id)}
        >remove</button>
      </label>
    )
  }
}

export default Lists;
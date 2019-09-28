import React from 'react';
import uuid from 'uuid';

class AddForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: ''
    }
    this.onChangeTitle = this.onChangeTitle.bind(this);
    this.onSubmitTask = this.onSubmitTask.bind(this);
  }

  onChangeTitle(e) {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  onSubmitTask(e) {
    e.preventDefault();

    const data = {
      title: this.state.title,
      completed: false,
      id: uuid()
    }

    this.props.onAddTask(data);
    this.setState({
      title: ''
    })
  }

  render() {
    return (
      <form id="new-task"
        onSubmit={this.onSubmitTask}
      >
        <input type="text" className="input" placeholder="Something" name="title" 
          value={this.state.title}
          onChange={this.onChangeTitle}
        />
        <button className="button" type="submit">Add Task</button>
      </form>
    )
  }
}

export default AddForm;
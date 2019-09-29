import React from 'react';
import uuid from 'uuid';

class AddForm extends React.Component {

  state = {
    title: '',
    completed: false
  }

  onChangeTitle = ({ target }) => {
    this.setState({ [target.name]: target.value })
  }

  onSubmit = e => {
    e.preventDefault();
    const { title, completed } = this.state;
    const { onAddTask } = this.props;
    const data = { title, completed, id: uuid() };
    onAddTask(data);
    this.setState({ title: '' })
  }

  render () {
    const { title } = this.state
    return (
      <form
        onSubmit={this.onSubmit}
      >
        <input type="text" className="input" placeholder="Something" name="title" 
          value={title}
          onChange={this.onChangeTitle}
        />
        <button className="button">Add Task</button>
      </form>
    )
  }
}

export default AddForm;
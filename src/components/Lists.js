import React from 'react';

class Lists extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      completed: false
    }
    this.onChangeCompleted = this.onChangeCompleted.bind(this);
  }

  componentDidMount() {
    this.setState({
      completed: this.props.task.completed
    })
  }

  onChangeCompleted(e) {
    this.setState({
      completed: e.target.checked
    })
    this.props.onChangeCompleted(this.props.task.id, e.target.checked)
  }

  render() {
    return (
      <label className="list-item">
        <div className="list-item__container">
          <input type="checkbox" 
            checked={this.state.completed}
            onChange={this.onChangeCompleted}
          />
          <span>{this.props.task.title}</span>
        </div>
        <button className="button button--text"
          onClick={() => this.props.onRemoveTask(this.props.task.id)}
        >remove</button>
      </label>
    )
  }
}

export default Lists;
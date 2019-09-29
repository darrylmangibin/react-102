import React from 'react';

import Header from './components/Header';
import Actions from './components/Actions';
import Tasks from './components/Tasks';
import AddForm from './components/AddForm';

class App extends React.Component {

  state = {
    tasks: [],
    filterText: '',
    hideCompleted: false
  }

  componentDidUpdate(prevProps, prevState) {
    if(prevState.tasks.length !== this.state.tasks.length) {
      localStorage.setItem('tasks', JSON.stringify(this.state.tasks))
    }
  }

  componentDidMount() {
    const json = localStorage.getItem('tasks');
    try {
      if (json !== null) return this.setState(prevState => ({ ...prevState, tasks: JSON.parse(json) }))
    } catch(err) {
      this.setState(() => ({ tasks: [] }))
    }
  }

  onAddTask = data => {
    this.setState(prevState =>({ ...prevState, tasks: [ ...prevState.tasks, data ] }))
  }

  onDeleteTask = id => {
    this.setState(prevState => ({ ...prevState, tasks: prevState.tasks.filter(t => t.id !== id) }))
  }

  onChangeCompleted = (id, data) => {
    const { tasks } = this.state;
    const i = tasks.findIndex(t => t.id === id);
    const task = { ...tasks[i], ...data };
    tasks[i] = task;
    this.setState(prevState =>({ ...prevState, tasks }))
    localStorage.setItem('tasks', JSON.stringify(this.state.tasks))
  }

  onFilterText = text => {
    this.setState(prevState => ({ ...prevState, filterText: text }))
  }

  onHideCompleted = val => {
    this.setState(prevState => ({ ...prevState, hideCompleted: val }))
  }

  render() {
    return (
      <React.Fragment>
        <Header />
        <Actions 
          onFilterText={this.onFilterText}
          onHideCompleted={this.onHideCompleted}
        />
        <div className="container">
          <Tasks 
            tasks={this.state.tasks}
            onDeleteTask={this.onDeleteTask}
            onChangeCompleted={this.onChangeCompleted}
            filterText={this.state.filterText}
            hideCompleted={this.state.hideCompleted}
          />
          <AddForm 
            onAddTask={this.onAddTask}
          />
        </div>
      </React.Fragment>
    )
  }
}

export default App;
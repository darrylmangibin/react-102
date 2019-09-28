import React from 'react';

import Header from './components/Header';
import Actions from './components/Actions';
import Tasks from './components/Tasks';
import AddForm from './components/AddForm';

class App extends React.Component {
  constructor(props) {
    super(props); 
    this.state = {
      tasks: [],
      filterText: '',
      hideCompleted: false
    }

    this.onAddTask = this.onAddTask.bind(this);
    this.onRemoveTask = this.onRemoveTask.bind(this);
    this.onChangeCompleted = this.onChangeCompleted.bind(this);
    this.onFilterText = this.onFilterText.bind(this);
    this.onHideCompleted = this.onHideCompleted.bind(this);
  }

  componentDidUpdate() {
    localStorage.setItem('tasks', JSON.stringify(this.state.tasks))
  }

  componentDidMount(){
    const json = localStorage.getItem('tasks');
    try {
      if(json !== null) {
        this.setState({
          tasks: JSON.parse(json)
        })
      }
    } catch(err) {
      this.setState({
        tasks: []
      })
    }
    
  }

  onAddTask(data) {
    this.setState((prevState) => {
      return {
        tasks: prevState.tasks.concat(data)
      }
    });
  }

  onRemoveTask(id) {
    this.setState((prevState) => {
      return {
        tasks: prevState.tasks.filter((task) => {
          if(task.id !== id) {
            return task
          }
        })
      }
    })
  }

  onChangeCompleted(id, val) {
    const tasks = this.state.tasks;
    let index = tasks.findIndex((task) => {
      if(task.id === id) {
        return task
      }
    })
    Object.assign(tasks[index], { completed: val });
    this.setState({
      tasks: tasks
    })
  }

  onFilterText(val) {
    this.setState({
      filterText: val
    })
  }

  onHideCompleted(val) {
    console.log(val)
    this.setState({
      hideCompleted: val
    })
  }


  render() {
    return (
      <div>
        <Header />
        <Actions 
          onFilterText={this.onFilterText}
          onHideCompleted={this.onHideCompleted}
        />
        <div className="container">
          <Tasks 
            tasks={this.state.tasks}
            onRemoveTask={this.onRemoveTask}
            onChangeCompleted={this.onChangeCompleted}
            filterText={this.state.filterText}
            hideCompleted={this.state.hideCompleted}
          />
          <AddForm 
            onAddTask={this.onAddTask}
          />
        </div>
      </div>
    )
  }
}

export default App;
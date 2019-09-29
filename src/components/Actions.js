import React from 'react';

class Actions extends React.Component {

  state = {
    filterText: '',
    hideCompleted: false
  }

  onChangeText = e => {
    this.setState({ filterText: e.target.value })
    this.props.onFilterText(e.target.value)
  }

  onChangeHideCompleted = e => {
    this.setState({ hideCompleted: e.target.checked })
    this.props.onHideCompleted(e.target.checked)
  }

  render() {
    return (
      <div className="actions">
        <div className="actions__container">
          <input className="input" type="text" placeholder="Filter Task" 
            value={this.state.filterText}
            onChange={this.onChangeText}
          />
            <label className="checkbox">
              <input type="checkbox" 
                checked={this.state.hideCompleted}
                onChange={this.onChangeHideCompleted}
              /> Hide completed
            </label>
        </div>
      </div>
    )
  }
}

export default Actions;
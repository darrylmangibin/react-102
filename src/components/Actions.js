import React from 'react';

class Actions extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      text: '',
      hideCompleted: false
    }
    this.onChangeText = this.onChangeText.bind(this);
    this.onChangeHideCompleted = this.onChangeHideCompleted.bind(this);
  }

  onChangeText(e) {
    this.setState({
      text: e.target.value
    })
    this.props.onFilterText(e.target.value)
  }

  onChangeHideCompleted(e) {
    this.setState({
      hideCompleted: e.target.checked
    })
    this.props.onHideCompleted(e.target.checked)
  }

  render() {
    return (
      <div className="actions">
        <div className="actions__container">
          <input id="search-text" className="input" type="text" placeholder="Filter Task" 
            value={this.state.text}
            onChange={this.onChangeText}
          />
          <label className="checkbox">
            <input type="checkbox" id="hide-completed" 
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
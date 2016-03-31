import React       from 'react'


import Nav         from './Nav'
import Footer      from './Footer'
import MyWatchlist from './MyWatchlist'

import TodoStore from './stores/TodoStore';

const env = require('./env.js')

/**
 * Retrieve the current TODO data from the TodoStore
 */
function getTodoState() {
  return {
    allTodos: TodoStore.getAll(),
    areAllComplete: TodoStore.areAllComplete(),
    language: 'en'
  };
}


export default React.createClass({
  setLanguage(lang) {
    this.setState({
      language: lang
    })
  },
  getInitialState() {
    return getTodoState();
  },
  componentDidMount: function() {
    TodoStore.addChangeListener(this._onChange);
  },

  componentWillUnmount: function() {
    TodoStore.removeChangeListener(this._onChange);
  },

  render() {
    return (
      <div>
        <MyWatchlist />
        <Nav setLanguage={this.setLanguage} language={this.state.language}  />
        {this.props.children && React.cloneElement(this.props.children,{
          language: this.state.language
        })}
        <Footer />
      </div>
    );
  },

  /**
   * Event handler for 'change' events coming from the TodoStore
   */
  _onChange: function() {
    this.setState(getTodoState());
  },

});

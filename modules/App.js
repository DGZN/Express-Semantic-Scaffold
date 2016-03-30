import React       from 'react'

import Nav         from './Nav'
import Footer      from './Footer'
import MyWatchlist from './MyWatchlist'

const env = require('./env.js')

export default React.createClass({
  setLanguage(lang) {
    this.setState({
      language: lang
    })
  },
  getInitialState() {
    return {
      user: {}
    , language: 'en'
    }
  },
  setUser(user) {
    this.setState({
      user: user
    })
  },
  render() {

    if ( ! this.state.user && this.state.user.id )
      this.validateUser()

    return (
      <div>
        <MyWatchlist />
        <Nav setLanguage={this.setLanguage} setUser={this.setUser} language={this.state.language} user={this.state.user} />
        {this.props.children && React.cloneElement(this.props.children, {
            user: this.state.user
          , setUser: this.setUser
          , language: this.state.language
          })}
        <Footer />
      </div>
    );
  },

  validateUser() {
    var token = localStorage.getItem('melody::authToken');
    if (token && token.length) {
      this.authenticateUser(token)
    } else {
      console.log("token is empty, user is not authenticated")
    }
  },

  authenticateUser(token) {
    if (token.length) {
      $.post(env.endpoint + '/v1/users/auth/token/' + token,
      function(res){
        if (res.errors) {
          console.log("Login from Token errors", res.errors)
        }
        if (res.status && res.status == true && res.user) {
          this.setUser(res.user)
        }
      }.bind(this))
    }
  },

  signOut() {
    console.log("Logging out user")
  }

});

import React from 'react';
import AuthenticationActions from '../../actions/AuthenticationActions';

class Login {
  changeUserName(event){
    AuthenticationActions.updateUserName(event.target.value);
  }
  changePassword(event){
    AuthenticationActions.updatePassword(event.target.value);
  }
  login(){
    AuthenticationActions.login();
  }
  render() {
    return (
      <form role="form">
        <input type="text" onChange={this.changeUserName} placeholder="Username"/>
        <input type="password" onChange={this.changePassword} placeholder="Password"/>
        <button type="button" onClick={this.login}>Login</button>
    </form>
    )
  }
}

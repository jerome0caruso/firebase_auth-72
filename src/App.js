import React, { Component } from 'react'
import Navbar from './components/Navbar'
import { Routes, Route } from "react-router-dom";
import Home from './views/Home';
import Register from './views/Register';
import Login from './views/Login';



export default class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      user: null
    }
  }

  register = (e) => {
    e.preventDefault();
    console.log(e);
    const email = e.target.email.value;
    const password = e.target.password.value;
    const confirmPass = e.target.confirmPass.value;
    if (password !== confirmPass){
      alert('Your passwords are not the same')
      return
    }
    console.log(email, password, confirmPass)
  }

  logout = () =>{
    console.log('Sign Out');
  }

  login = (e) =>{
    e.preventDefault();
    console.log(e);
    const email = e.target.email.value;
    const password = e.target.password.value;
    console.log(email, password)
  }

  render() {
    return (
      <div>
        <Navbar logout={this.logout} user={this.state.user}/>
        <div className='container'>
          <Routes>
            <Route path='/' element={<Home user={this.state.user}/>} />
            <Route path='/register' element={<Register register={this.register} user={this.state.user}/>} />
            <Route path='/login' element={<Login login={this.login} user={this.state.user}/>} />
          </Routes>
        </div>

      </div>
    )
  }
}

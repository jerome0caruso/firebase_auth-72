import React, { Component } from 'react'
import { Navigate } from 'react-router-dom';

export default class Login extends Component {
    render() {
        return this.props.user ? <Navigate to='/' /> :(
            <div>
                <h6 className='text-center'>Login Here</h6>
                <form onSubmit={(e) => this.props.login(e)}>
                    <div className='form-group'>
                        <fieldset>
                            <label htmlFor='email'>Email</label>
                            <input type='text' name='email' className='form-control' placeholder='Email' />
                        </fieldset>
                        <fieldset>
                            <label htmlFor='password'>Password</label>
                            <input type='password' name='password' className='form-control' placeholder='Password' />
                        </fieldset>
                        <input type='submit' className='btn btn-primary mt-3 w-100' />
                    </div>
                </form>
            </div>
        )
    }
}

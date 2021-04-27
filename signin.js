import React, { Component } from 'react';
import {Link} from 'react-router-dom';

const validEmailRegex = RegExp(/^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i);
const validateForm = (errors) => {
  let valid = true;
  Object.values(errors).forEach(
    (val) => val.length > 0 && (valid = false)
  );
  return valid;
}
    const handleKeyDown = e => {
      if (e.key === " ") {
        e.preventDefault();
      }
    };

class Signin extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: null,
      password: null,
      errors: {
        email: '',
        password: '',
      }
    };
  }

  handleChange = (event) => {
    event.preventDefault();
    const { name, value } = event.target;
    let errors = this.state.errors;

    switch (name) {
      case 'email': 
        errors.email = 
          validEmailRegex.test(value)
            ? ''
            : 'Please enter a valid email!';
        break;
      case 'password': 
        errors.password = 
          value.length < 8 || value.length>20
            ? 'Please enter correct password'
            : '';   
      default: break;
    }
 
    this.setState({errors, [name]: value});
  }

  handleSubmit = (event) => {
    event.preventDefault();
    if(validateForm(this.state.errors)) {
     console.info('Valid Form')
    }else{
      console.error('Invalid Form')
      alert('Please change values')
    }
  }

  render() {
     
    const {errors} = this.state;
    return (
      <div className='signup'>
           
        <div className='signindiv'>
        <p className="signp1">SIGN IN TO YOUR ACCOUNT</p>
          <form onSubmit={this.handleSubmit}  noValidate>
            <div>
              <input  className='inp' type='email' placeholder='Email' name='email' value={this.state.email} onChange={this.handleChange}  onKeyDown={handleKeyDown} noValidate required/><br/>
              {errors.email.length > 0 && 
                <span className='error'>{errors.email}</span>}
            </div>
            <div>
              <input className='inp' type='password' placeholder='Password'name='password' value={this.state.password} onChange={this.handleChange} onKeyDown={handleKeyDown} noValidate required/><br/>
                <span className='error'>{errors.password}</span>
            </div>
            <div>  
           <button onSubmit={this.handleSubmit} className="but"><Link className="submit" to='/home'>SIGN IN</Link></button>
            </div>
            <br/><br/>  
          </form>
        </div>
        </div>
    );
  }
}

export default Signin;

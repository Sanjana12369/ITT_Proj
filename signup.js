import React,{Component} from 'react';
import {Link} from 'react-router-dom';
const validEmailRegex = RegExp(/^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i);
const letter=RegExp(/^[a-z A-Z\b]+$/);
const validateForm=(errors)=>{
    let valid=true;
    Object.values(errors).forEach(
        (val)=> val.length >0 && (valid=false)
    );
    return valid;
}
const handleKeyDown=e=>{
    if(e.key===" ")
    {
        e.preventDefault();
    }     
}
class Signup extends Component{
    constructor(props){
        super(props);
        this.state={
            email : null,
            password : null,
            confirmPass :null,
            errors:{
            email : '',
            password : '',
            confirmPass :''
            }
        };
    }
    handleChange=(event)=>{
        event.preventDefault();
        const {name,value}=event.target;
        let errors=this.state.errors;
        switch(name){
            case 'email':
                errors.email=
                validEmailRegex.test(value)
                ? ''
                : 'Kindly enter a valid email'
                break;
            case 'password':
                errors.password=
                value.length<8 || value.length>20
                ? 'Range is 8-20 characters'
                : ''
                break;
            case 'confirmPass':
                errors.confirmPass=
                value===this.state.password
                ? ''
                : 'Please make sure password is matching'
                break;
            default:
                break;
            
        }
        this.setState({errors,[name]:value});
    }
    handleSubmit=event =>{
        event.preventDefault();
        if(validateForm(this.state.errors)) {
            console.info('Valid Form');   
          }
        else{
            console.error('Invalid Form')
            alert('Please change values')
        }
    }
    render(){
        const {errors}=this.state;
        return(

            <div className="signup">
                <div className="signupdiv">
                    <br/>
                <form onSubmit={this.handleSubmit} noValidate>
                    <div >
                    <p className="signp1">CREATE A NEW ACCOUNT</p><br/>
                    <p className="signp2">Enter email address and password</p>
                       <input className="inp" type="email" placeholder="Email" name="email" value={this.state.email} onChange={this.handleChange} onKeyDown={handleKeyDown} noValidate required/><br/>
                       {errors.email.length>0 &&
                       <span className="error">{errors.email}</span>}
                    </div>
                    <div>
                    <input className="inp" type="password" placeholder="Password" name="password" value={this.state.password} onChange={this.handleChange} onKeyDown={handleKeyDown} noValidate required/><br/>
                        <span className="error">{errors.password}</span>
                   </div>
                    <div>
                    <input className="inp" type="password" placeholder="Re-enter password" name="confirmPass" value={this.state.confirmPass} onChange={this.handleChange} onKeyDown={handleKeyDown} noValidate required/><br/>
                        <span className="error">{errors.confirmPass}</span>
                    </div>
                    <div>
                  < button onSubmit={this.handleSubmit} className="but"><Link className="submit" to='/signin'>SIGN UP</Link></button> 
                    </div>
                </form>
                </div> 
            </div>
        );
    }
}
export default Signup; 
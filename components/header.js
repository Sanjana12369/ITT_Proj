import React,{Component} from 'react';
import {Navbar} from 'reactstrap';
import {Link} from 'react-router-dom';
const Header=()=>
{
    return(
        <Navbar className="header">
            <a className="link"><Link to="/home">HOME</Link></a>
            <a className="link"><Link to="/signin">SIGN IN</Link></a>
            <a className="link"><Link to="/signup">SIGN UP</Link></a>
        </Navbar>

    );
}
export default Header;
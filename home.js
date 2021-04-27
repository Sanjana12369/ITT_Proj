import React,{Component} from 'react';
import {RiRestaurantLine} from 'react-icons/ri';
import {GiPartyPopper} from 'react-icons/gi';
import {FaUmbrellaBeach} from 'react-icons/fa';
import {CgGames} from 'react-icons/cg';
import {GiMountains} from 'react-icons/gi';
import {RiEBike2Fill} from 'react-icons/ri';
import {BiBus} from 'react-icons/bi';

class Home extends Component{
    constructor(props){
        super(props);
    }
    render(){
        const box1={
            background:"#C14000",
            color:"#FFFFFF",
            width:"280px",
            height:"280px",
            textAlign:"center",
            marginTop:"5%",
            borderRadius:"5px"
            
        }
        const box2={
            background:"#009987",
            color:"#FFFFFF",
            width:"280px",
            height:"280px",
            textAlign:"center",
            
            marginTop:"5%",
            
            borderRadius:"5px"
            
        }
        const box3={
            background:"#FEA501",
            color:"#FFFFFF",
            width:"280px",
            height:"280px",
            textAlign:"center",
           
            marginTop:"5%", 
            
            borderRadius:"5px"
        }
        const box4={
            background:"#854E99",
            color:"#FFFFFF",
            width:"280px",
            height:"280px",
            textAlign:"center",
           
            marginTop:"5%",
            
            borderRadius:"5px"
            
            
        }
        const box5={
            background:"#AABA4E",
            color:"#FFFFFF",
            width:"280px",
            height:"280px",
            textAlign:"center",
            
            marginTop:"5%",
           
            borderRadius:"5px"
           
            
        }
        const box6={
            background:"#3487BA",
            color:"#FFFFFF",
            width:"280px",
            height:"280px",
            textAlign:"center",
           
            marginTop:"5%",
            
            borderRadius:"5px"
        }
        const box7={
            background:"#D444BC",
            color:"#FFFFFF",
            width:"280px",
            height:"280px",
            textAlign:"center",
           
            marginTop:"5%",
            borderRadius:"5px"
            
        }

        return(
        <div className="home">
            <div className="container">
            <div style={box1}>
                <RiRestaurantLine className="logo"/>
                <h1>RESTAURANTS</h1>
                <p>Need to grab a quick bite or wanna enjoy a delicious dinner?</p>
            </div>
            <div  style={box2}>
                <GiPartyPopper className="logo"/>
                <h1>CLUBBING</h1>
                <p>The weekend is here, so why not go out and party</p>
            </div>
            <div style={box3}>
                <FaUmbrellaBeach className="logo"/>
                <h1>BEACHES</h1>
                <p>Best Escape Anyone Can Have</p>
            </div>
            </div>
            <div className="container">
            <div style={box4}>
                <CgGames className="logo"/>
                <h1>RECREATION</h1>
                <p>Love playing games? We got you covered</p>
            </div>
            <div style={box5}>
                <GiMountains className="logo"/>
                <h1>SIGHTSEEING</h1>
                <p>Wanna go visit beautiful spots nearby</p>
            </div>
            <div style={box6}>
                <RiEBike2Fill className="logo"/>
                <h1>RENTALS</h1>
                <p>Been wanting to go on a bike ride?</p>
            </div>
            </div>
            <div className="container">
            <div style={box7}>
                <BiBus className="logo"/>
                <h1>TRANSPORT</h1>
                <p>Timings of all the public transport</p>
                </div>
            </div>

        </div>
        );
    }

}
export default Home;
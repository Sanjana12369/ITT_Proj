import React, {Component} from 'react';
class Rentals extends Component{
    constructor(props){
        super(props);
    }
   
    render(){
        const box4={
            background:"#854E99",
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
        const box2={
            background:"#009987",
            color:"#FFFFFF",
            width:"280px",
            height:"280px",
            textAlign:"center",
            marginTop:"5%",
            borderRadius:"5px"
        }
       
        const img1={
            marginTop:"20px"
        }
        return(
            <div className="rest">
                <div className="container">
                    <div className="flip-card">
                        <div style={box4} className="flip-card-inner">
                            <div className="flip-card-front">
                                <img style={img1}src='/assets/images/drive.jpg'  width="250px" height="190px"/>
                                <p>drivezy</p>
                            </div>
                            <div className="flip-card-back">
                                <p>Contact number-8310383148</p>
                            </div>
                        </div>
                    </div>

                        <div className="flip-card">
                           <div style={box2} className="flip-card-inner">
                              <div className="flip-card-front">
                                <img style={img1}src='/assets/images/bhoom.png'  width="250px" height="190px"/>
                                <p >BHOOM</p>
                              </div>
                              <div className="flip-card-back">
                                <p>Contact number-081500 25955</p>
                              </div>
                            </div>
                        </div>

                    <div className="flip-card">
                        <div style={box6} className="flip-card-inner">
                            <div className="flip-card-front">
                                <img style={img1}src='/assets/images/ez.png'  width="250px" height="190px"/>
                                <p>EZ</p>
                            </div>
                            <div className="flip-card-back">
                                <p>Contact number-070677 06719</p>
                            </div>
                        </div>
                    </div>
                    </div>

                    <div className="container">
                      <div className="flip-card">
                        <div style={box4} className="flip-card-inner">
                            <div className="flip-card-front">
                                <img style={img1}src='/assets/images/royal.png'  width="250px" height="190px"/>
                                <p>ROYAL BROTHERS</p>
                            </div>
                            <div className="flip-card-back">
                                <p>Contact number-090195 95595</p>
                            </div>
                        </div>
                      </div>
                      <div className="flip-card">
                        <div style={box2} className="flip-card-inner">
                            <div className="flip-card-front">
                                <img style={img1}src='/assets/images/indian.jpg'  width="250px" height="190px"/>
                                <p>INDIA RIDES</p>
                            </div>
                            <div className="flip-card-back">
                                <p>Contact number-096863 25168</p>
                            </div>
                        </div>
                      </div>
                      <div className="flip-card">
                        <div style={box6} className="flip-card-inner">
                            <div className="flip-card-front">
                                <img style={img1}src='/assets/images/manipal motors.jpg'  width="250px" height="190px"/>
                                <p>MANIPAL MOTORS</p>
                            </div>
                            <div className="flip-card-back">
                                <p>Contact number-9448445494</p>
                            </div>
                        </div>
                      </div>
                    </div>

                    <div className="container">
                      <div className="flip-card">
                        <div style={box4} className="flip-card-inner">
                            <div className="flip-card-front">
                                <img style={img1}src='/assets/images/grab.png'  width="250px" height="190px"/>
                                <p>GRAB A RIDE</p>
                            </div>
                            <div className="flip-card-back">
                                <p>Contact number-095380 14571</p>
                            </div>
                        </div>   
                      </div>
                      <div className="flip-card">
                        <div style={box2} className="flip-card-inner">
                            <div className="flip-card-front">
                                <img style={img1}src='/assets/images/car rental.jpg'  width="250px" height="190px"/>
                                <p>CAR RENTAL</p>
                            </div>
                            <div className="flip-card-back">
                                <p>Contact number-9632701517</p>
                            </div>
                        </div>
                        </div>

                        <div className="flip-card">
                        <div style={box6} className="flip-card-inner">
                            <div className="flip-card-front">
                                <img style={img1}src='/assets/images/zoom.png'  width="250px" height="190px"/>
                                <p>ZOOMCAR</p>
                            </div>
                            <div className="flip-card-back">
                                <p>App bases rental</p>
                            </div>
                        </div>
                        </div>
                        </div>

                        <div className="container">
                      <div className="flip-card">
                      <div style={box2} className="flip-card-inner">
                            <div className="flip-card-front">
                                <img style={img1}src='/assets/images/sunil.png'  width="250px" height="190px"/>
                                <p>SUNIL CAR RENTALS</p>
                            </div>
                            <div className="flip-card-back">
                                <p>Contact number-9964876403</p>
                            </div>
                        </div>
                        </div>

                    </div>
                    </div>
        );
    }
}
export default Rentals;
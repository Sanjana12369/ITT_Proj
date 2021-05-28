import React, {Component} from 'react';
class Recreation extends Component{
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
                                <img style={img1}src='/assets/images/trigger.jpg'  width="250px" height="190px"/>
                                <p>TRIGGER</p>
                            </div>
                            <div className="flip-card-back">
                                <p>Trigger boasts of a premium status with its choice of consoles, ambience, and non-gaming services</p>
                            </div>
                        </div>
                    </div>

                        <div className="flip-card">
                           <div style={box2} className="flip-card-inner">
                              <div className="flip-card-front">
                                <img style={img1}src='/assets/images/zeal.jpg'  width="250px" height="190px"/>
                                <p >POOL</p>
                              </div>
                              <div className="flip-card-back">
                                <p></p>
                              </div>
                            </div>
                        </div>

                    <div className="flip-card">
                        <div style={box6} className="flip-card-inner">
                            <div className="flip-card-front">
                                <img style={img1}src='/assets/images/bharat.jpg'  width="250px" height="190px"/>
                                <p>BHARAT CINEMAS</p>
                            </div>
                            <div className="flip-card-back">
                                <p>The closest cinema multiplex to MIT campus</p>
                            </div>
                        </div>
                    </div>
                    </div>

                    <div className="container">
                      <div className="flip-card">
                        <div style={box4} className="flip-card-inner">
                            <div className="flip-card-front">
                                <img style={img1}src='/assets/images/inox.jpg'  width="250px" height="190px"/>
                                <p>INOX</p>
                            </div>
                            <div className="flip-card-back">
                                <p>Another alternative cinema multiplex in Manipal</p>
                            </div>
                        </div>
                      </div>
                      <div className="flip-card">
                        <div style={box2} className="flip-card-inner">
                            <div className="flip-card-front">
                                <img style={img1}src='/assets/images/chill.jpg'  width="250px" height="190px"/>
                                <p>CHILLSPACE</p>
                            </div>
                            <div className="flip-card-back">
                                <p>A place to hangout with your friends and chill for hours, with board games, video games and much more</p>
                            </div>
                        </div>
                      </div>
                      <div className="flip-card">
                        <div style={box6} className="flip-card-inner">
                            <div className="flip-card-front">
                                <img style={img1}src='/assets/images/black.jpg'  width="250px" height="190px"/>
                                <p>BLACK CUP</p>
                            </div>
                            <div className="flip-card-back">
                                <p></p>
                            </div>
                        </div>
                      </div>
                    </div>

                    <div className="container">
                      <div className="flip-card">
                        <div style={box4} className="flip-card-inner">
                            <div className="flip-card-front">
                                <img style={img1}src='/assets/images/pup.jpg'  width="250px" height="190px"/>
                                <p>PUP CAFE</p>
                            </div>
                            <div className="flip-card-back">
                                <p>Calm down with man's best friends, dogs!</p>
                            </div>
                        </div>   
                      </div>
                      <div className="flip-card">
                        <div style={box2} className="flip-card-inner">
                            <div className="flip-card-front">
                                <img style={img1}src='/assets/images/marena.jpg'  width="250px" height="190px"/>
                                <p>MARENA</p>
                            </div>
                            <div className="flip-card-back">
                                <p></p>
                            </div>
                        </div>
                        </div>

                        <div className="flip-card">
                        <div style={box6} className="flip-card-inner">
                            <div className="flip-card-front">
                                <img style={img1}src='/assets/images/laser.jpg'  width="250px" height="190px"/>
                                <p>LASER TAG</p>
                            </div>
                            <div className="flip-card-back">
                                <p></p>
                            </div>
                        </div>
                        </div>
                    </div>
                    </div>
        );
    }
}
export default Recreation;
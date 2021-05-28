import React, {Component} from 'react';
class Sightseing extends Component{
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
                                <img style={img1}src='/assets/images/baba.jpg'  width="250px" height="190px"/>
                                <p>BABA POINT</p>
                            </div>
                            <div className="flip-card-back">
                                <p></p>
                            </div>
                        </div>
                    </div>

                        <div className="flip-card">
                           <div style={box2} className="flip-card-inner">
                              <div className="flip-card-front">
                                <img style={img1}src='/assets/images/end point.jpg'  width="250px" height="190px"/>
                                <p className="pad">END POINT</p>
                              </div>
                              <div className="flip-card-back">
                                <p>It's a beautiful centre of attraction for nature buffs, located at the top of a hill and looks out over the valley along with a resplendent view of the surroundings.</p>
                              </div>
                            </div>
                        </div>

                    <div className="flip-card">
                        <div style={box6} className="flip-card-inner">
                            <div className="flip-card-front">
                                <img style={img1}src='/assets/images/manipal Lake.jpg'  width="250px" height="190px"/>
                                <p>MANIPAL LAKE</p>
                            </div>
                            <div className="flip-card-back">
                                <p>is a small lake but a preferable scenic spot for the locals and is at A Serene Side Of Town</p>
                            </div>
                        </div>
                    </div>
                    </div>

                    <div className="container">
                      <div className="flip-card">
                        <div style={box4} className="flip-card-inner">
                            <div className="flip-card-front">
                                <img style={img1}src='/assets/images/perampali.jpg'  width="250px" height="190px"/>
                                <p>PERAMPALLI CHURCH</p>
                            </div>
                            <div className="flip-card-back">
                                <p>The stunningly beautiful Perampalli church boasts of an impressive building with a storied past.</p>
                            </div>
                        </div>
                      </div>
                      <div className="flip-card">
                        <div style={box2} className="flip-card-inner">
                            <div className="flip-card-front">
                                <img style={img1}src='/assets/images/Railway U.jpg'  width="250px" height="190px"/>
                                <p>RAILWAY BRIDGE</p>
                            </div>
                            <div className="flip-card-back">
                                <p>You can either sit and relax on any of the four platforms made on the bridge or may climb down on any of the supporting columns using the fixed ladder</p>
                            </div>
                        </div>
                      </div>
                      <div className="flip-card">
                        <div style={box6} className="flip-card-inner">
                            <div className="flip-card-front">
                                <img style={img1}src='/assets/images/hanging.jpg'  width="250px" height="190px"/>
                                <p>HANGING BRIDGE</p>
                            </div>
                            <div className="flip-card-back">
                                <p>The quintessential hangout for the avid bicycle enthusiast in Manipal</p>
                            </div>
                        </div>
                      </div>
                    </div>

                    <div className="container">
                      <div className="flip-card">
                        <div style={box4} className="flip-card-inner">
                            <div className="flip-card-front">
                                <img style={img1}src='/assets/images/kayak.jpg'  width="250px" height="190px"/>
                                <p>KAYAKING POINT</p>
                            </div>
                            <div className="flip-card-back">
                                <p>Pioneer of Flatwater kayaking in Karnataka.</p>
                            </div>
                        </div>   
                      </div>
                      <div className="flip-card">
                        <div style={box2} className="flip-card-inner">
                            <div className="flip-card-front">
                                <img style={img1}src='/assets/images/kundadri.jpg'  width="250px" height="190px"/>
                                <p>KUNDADRI</p>
                            </div>
                            <div className="flip-card-back">
                                <p>Located at a comfortable distance of around 45 kilometers from Manipal, the trip to Agumbe is in itself a joyous experience filled with beautiful vistas of Karnataka’s forest regions.</p>
                            </div>
                        </div>
                        </div>

                        <div className="flip-card">
                        <div style={box6} className="flip-card-inner">
                            <div className="flip-card-front">
                                <img style={img1}src='/assets/images/seawalk.jpg'  width="250px" height="190px"/>
                                <p>SEA WALK MALPE</p>
                            </div>
                            <div className="flip-card-back">
                                <p>The Malpe Seawalk is one of the must visit tourist sights in Udupi giving the best experience of seeing sunset and sunrise </p>
                            </div>
                        </div>
                        </div>
                    </div>

                    <div className="container">
                    <div className="flip-card">
                        <div style={box4} className="flip-card-inner">
                            <div className="flip-card-front">
                                <img style={img1}src='/assets/images/kayaking.jpg'  width="250px" height="190px"/>
                                <p>KAYAKING KEMMANNU</p>
                            </div>
                            <div className="flip-card-back">
                                <p>near Kemmannu Suspension Bridge, 10 kms from Udupi enjoyed on Suvarna River.</p>
                            </div>
                            </div>
                        </div>
                        
                        <div className="flip-card">
                        <div style={box2} className="flip-card-inner">
                            <div className="flip-card-front">
                                <img style={img1}src='/assets/images/mulki.jpg'  width="250px" height="190px"/>
                                <p>MULKI</p>
                            </div>
                            <div className="flip-card-back">
                                <p>An unexplored coastal town near Mangalore, Mulki offers breathtaking waters surrounded by tranquil groves.</p>
                            </div>
                        </div>
                        </div>
                        
                        <div className="flip-card">
                        <div style={box6} className="flip-card-inner">
                            <div className="flip-card-front">
                                <img style={img1}src='/assets/images/St Mary.jpg'  width="250px" height="190px"/>
                                <p>ST. MARY'S ISLAND</p>
                            </div>
                            <div className="flip-card-back">
                                <p>It is a small group of islands accessible by ferry from Malpe, and you get around 2 hours to explore it before the ferry takes you back</p>
                            </div>
                            </div>
                        </div>

                    </div>

                    <div className="container">
                        
                    <div className="flip-card">
                        <div style={box4} className="flip-card-inner">
                            <div className="flip-card-front">
                                <img style={img1}src='/assets/images/venugopal.jpg'  width="250px" height="190px"/>
                                <p>VENUGOPAL TEMPLE</p>
                            </div>
                            <div className="flip-card-back">
                                <p>Constructed in the South Indian style of architecture, Venugopala Temple is a famous attraction in the city of Manipal.</p>
                            </div>
                        </div>
                        </div>

                        <div className="flip-card">
                        <div style={box2} className="flip-card-inner">
                            <div className="flip-card-front">
                                <img style={img1}src='/assets/images/arbi.jpg'  width="250px" height="190px"/>
                                <p>ARBI FALLS</p>
                            </div>
                            <div className="flip-card-back">
                                <p>One of the top waterfalls in Udupi,The clean  water, cool breeze and chirping birds completely overcast the surroundings.</p>
                            </div>
                        </div>
                        </div>
                        
                        <div className="flip-card">
                        <div style={box6} className="flip-card-inner">
                            <div className="flip-card-front">
                                <img style={img1}src='/assets/images/Railway M.jpg'  width="250px" height="190px"/>
                                <p>RAILWAY BRIDGE MANIPAL</p>
                            </div>
                            <div className="flip-card-back">
                                <p>This is just a peaceful location where you can go to relax for a couple of hours.</p>
                            </div>
                        </div>
                        </div>
                        
                    </div>
                    </div>

        );
    }
}
export default Sightseing;
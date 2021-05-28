import React, {Component} from 'react';
class Clubbing extends Component{
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
                                <img style={img1}src='/assets/images/dt.jpg'  width="250px" height="190px"/>
                                <p>DeeTee</p>
                            </div>
                            <div className="flip-card-back">
                                <p>More famously known as “Drinking Temple” ,it is an extremely dimly lit pub in Manipal</p>
                            </div>
                        </div>
                    </div>

                        <div className="flip-card">
                           <div style={box2} className="flip-card-inner">
                              <div className="flip-card-front">
                                <img style={img1}src='/assets/images/zeal.jpg'  width="250px" height="190px"/>
                                <p >ZEAL</p>
                              </div>
                              <div className="flip-card-back">
                                <p>Wanna dance it out? Then get ready to hit Zeal.</p>
                              </div>
                            </div>
                        </div>

                    <div className="flip-card">
                        <div style={box6} className="flip-card-inner">
                            <div className="flip-card-front">
                                <img style={img1}src='/assets/images/edge.jpg'  width="250px" height="190px"/>
                                <p>EDGE</p>
                            </div>
                            <div className="flip-card-back">
                                <p>Open lounge ,Dance floor ,DJ music ,Incredibly Affordable rates and insane vibes,</p>
                            </div>
                        </div>
                    </div>
                    </div>

                    <div className="container">
                      <div className="flip-card">
                        <div style={box4} className="flip-card-inner">
                            <div className="flip-card-front">
                                <img style={img1}src='/assets/images/ecsatsy.jpg'  width="250px" height="190px"/>
                                <p>ECSTASY</p>
                            </div>
                            <div className="flip-card-back">
                                <p>A Brand new place to Eat, Chill and Dance in Manipal.</p>
                            </div>
                        </div>
                      </div>
                      <div className="flip-card">
                        <div style={box2} className="flip-card-inner">
                            <div className="flip-card-front">
                                <img style={img1}src='/assets/images/zero.jpg'  width="250px" height="190px"/>
                                <p>ZERO DEGREES MANIPAL</p>
                            </div>
                            <div className="flip-card-back">
                                <p>Dance and Night Club</p>
                            </div>
                        </div>
                      </div>
                      <div className="flip-card">
                        <div style={box6} className="flip-card-inner">
                            <div className="flip-card-front">
                                <img style={img1}src='/assets/images/blue.jpg'  width="250px" height="190px"/>
                                <p>BLUE WATERS</p>
                            </div>
                            <div className="flip-card-back">
                                <p>Open air lounges, DJ, Dance Floor, Night Club, Private and Corporate Party Hall,Manipal's Most happing Night Club.</p>
                            </div>
                        </div>
                      </div>
                    </div>

                    <div className="container">
                      <div className="flip-card">
                        <div style={box4} className="flip-card-inner">
                            <div className="flip-card-front">
                                <img style={img1}src='/assets/images/hashtag.jpg'  width="250px" height="190px"/>
                                <p>HASHTAG</p>
                            </div>
                            <div className="flip-card-back">
                                <p>The exciting new pub in Manipal is LIT,Cosmopolitan decor,Unending Mocktails,Live music,And amazing food from all around the world</p>
                            </div>
                        </div>   
                      </div>
                      <div className="flip-card">
                        <div style={box2} className="flip-card-inner">
                            <div className="flip-card-front">
                                <img style={img1}src='/assets/images/big.jpg'  width="250px" height="190px"/>
                                <p>BIG SHOT</p>
                            </div>
                            <div className="flip-card-back">
                                <p>You can unwind with a glass of fine wine or a handcrafted cocktail and savor culinary creations including international specialties and authentic Indian dishes</p>
                            </div>
                        </div>
                        </div>

                        <div className="flip-card">
                        <div style={box6} className="flip-card-inner">
                            <div className="flip-card-front">
                                <img style={img1}src='/assets/images/hakuna.jpg'  width="250px" height="190px"/>
                                <p>HAKUNA MATATA</p>
                            </div>
                            <div className="flip-card-back">
                                <p>A super chill place with live music and great food!</p>
                            </div>
                        </div>
                        </div>
                    </div>
                    </div>
        );
    }
}
export default Clubbing;
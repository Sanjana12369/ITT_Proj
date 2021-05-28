import React, {Component} from 'react';
class Restaurants extends Component{
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
                                <img style={img1}src='/assets/images/rest1.jpg'  width="250px" height="190px"/>
                                <p>TAWA PUNJAB</p>
                            </div>
                            <div className="flip-card-back">
                                <p>A newly opened restaurant with amazing Punjabi food</p>
                            </div>
                        </div>
                    </div>

                        <div className="flip-card">
                           <div style={box2} className="flip-card-inner">
                              <div className="flip-card-front">
                                <img style={img1}src='/assets/images/eott.jpg'  width="250px" height="190px"/>
                                <p className="pad">EYE OF THE TIGER</p>
                              </div>
                              <div className="flip-card-back">
                                <p>American-style bar venue serving a menu of international comfort food dishes and cocktails.</p>
                              </div>
                            </div>
                        </div>

                    <div className="flip-card">
                        <div style={box6} className="flip-card-inner">
                            <div className="flip-card-front">
                                <img style={img1}src='/assets/images/bacchus.jpg'  width="250px" height="190px"/>
                                <p>BACCHUS INN</p>
                            </div>
                            <div className="flip-card-back">
                                <p>Named after a Greek God, this place is a must try for the great ambience and affordable food.</p>
                            </div>
                        </div>
                    </div>
                    </div>

                    <div className="container">
                      <div className="flip-card">
                        <div style={box4} className="flip-card-inner">
                            <div className="flip-card-front">
                                <img style={img1}src='/assets/images/lb.jpg'  width="250px" height="190px"/>
                                <p>LAUGHING BUDDHA</p>
                            </div>
                            <div className="flip-card-back">
                                <p>One of the most prestigious and budget friendly restaurant known for its Pan Asian delicacy</p>
                            </div>
                        </div>
                      </div>
                      <div className="flip-card">
                        <div style={box2} className="flip-card-inner">
                            <div className="flip-card-front">
                                <img style={img1}src='/assets/images/grub.jpg'  width="250px" height="190px"/>
                                <p>GRUB MONKEYS</p>
                            </div>
                            <div className="flip-card-back">
                                <p>Great place, amazing vibes, and lip-smacking food!</p>
                            </div>
                        </div>
                      </div>
                      <div className="flip-card">
                        <div style={box6} className="flip-card-inner">
                            <div className="flip-card-front">
                                <img style={img1}src='/assets/images/dollops.jpg'  width="250px" height="190px"/>
                                <p>DOLLOPS</p>
                            </div>
                            <div className="flip-card-back">
                                <p>Simple country-style restaurant preparing a range of traditional Indian and regional dishes.</p>
                            </div>
                        </div>
                      </div>
                    </div>

                    <div className="container">
                      <div className="flip-card">
                        <div style={box4} className="flip-card-inner">
                            <div className="flip-card-front">
                                <img style={img1}src='/assets/images/dominoes.jpg'  width="250px" height="190px"/>
                                <p>DOMINOES</p>
                            </div>
                            <div className="flip-card-back">
                                <p>Delivery/carryout chain offering a wide range of pizzas and a variety of other dishes and sides.</p>
                            </div>
                        </div>   
                      </div>
                      <div className="flip-card">
                        <div style={box2} className="flip-card-inner">
                            <div className="flip-card-front">
                                <img style={img1}src='/assets/images/viros.jpg'  width="250px" height="190px"/>
                                <p>VITOS</p>
                            </div>
                            <div className="flip-card-back">
                                <p>Handmade,naturally leavened and wood fire pizza,Italian, European, Goan influences. Sinful desserts,Coffees,Cold brews</p>
                            </div>
                        </div>
                        </div>

                        <div className="flip-card">
                        <div style={box6} className="flip-card-inner">
                            <div className="flip-card-front">
                                <img style={img1}src='/assets/images/fulfill.jpg'  width="250px" height="190px"/>
                                <p>FULFILS</p>
                            </div>
                            <div className="flip-card-back">
                                <p>Fullfills is a casual dining restaurant with a simplistic vibe, the Multi-Cuisine menu serves, Italian, Continental and Mexican dishes that you can relish</p>
                            </div>
                        </div>
                        </div>
                    </div>

                    <div className="container">
                    <div className="flip-card">
                        <div style={box4} className="flip-card-inner">
                            <div className="flip-card-front">
                                <img style={img1}src='/assets/images/mtr.jpg'  width="250px" height="190px"/>
                                <p>MTR</p>
                            </div>
                            <div className="flip-card-back">
                                <p>This place is famous for the delicious breakfast, make sure you give it a try!</p>
                            </div>
                            </div>
                        </div>
                        
                        <div className="flip-card">
                        <div style={box2} className="flip-card-inner">
                            <div className="flip-card-front">
                                <img style={img1}src='/assets/images/ginger.jpg'  width="250px" height="190px"/>
                                <p>GINGER GARLIC</p>
                            </div>
                            <div className="flip-card-back">
                                <p>Christmas is like candy; it slowly melts in your mouth sweetening every taste bud,making you wish it could last forever. So give a chance to tingle your taste buds and your tummy happy.</p>
                            </div>
                        </div>
                        </div>
                        
                        <div className="flip-card">
                        <div style={box6} className="flip-card-inner">
                            <div className="flip-card-front">
                                <img style={img1}src='/assets/images/fot.jpg'  width="250px" height="190px"/>
                                <p>FROTH ON TOP</p>
                            </div>
                            <div className="flip-card-back">
                                <p>This place has a quick service and of course food. The place is small and cozy with a soothing ambiance.</p>
                            </div>
                            </div>
                        </div>

                    </div>

                    <div className="container">
                        
                    <div className="flip-card">
                        <div style={box4} className="flip-card-inner">
                            <div className="flip-card-front">
                                <img style={img1}src='/assets/images/country.jpg'  width="250px" height="190px"/>
                                <p>Country INN</p>
                            </div>
                            <div className="flip-card-back">
                                <p>Rest easy in this centrally located Manipal hotel · Relax in inviting rooms with 24-hour room service and free Wi-Fi.</p>
                            </div>
                        </div>
                        </div>

                        <div className="flip-card">
                        <div style={box2} className="flip-card-inner">
                            <div className="flip-card-front">
                                <img style={img1}src='/assets/images/sais.jpg'  width="250px" height="190px"/>
                                <p>SAI'S</p>
                            </div>
                            <div className="flip-card-back">
                                <p></p>
                            </div>
                        </div>
                        </div>
                        
                        <div className="flip-card">
                        <div style={box6} className="flip-card-inner">
                            <div className="flip-card-front">
                                <img style={img1}src='/assets/images/pai.jpg'  width="250px" height="190px"/>
                                <p>PAI'S TIFFINS</p>
                            </div>
                            <div className="flip-card-back">
                                <p>Craving for a proper breakfast? This is the right place.</p>
                            </div>
                        </div>
                        </div>
                        
                    </div>

                    <div className="container">

                    <div className="flip-card">
                        <div style={box4} className="flip-card-inner">
                            <div className="flip-card-front">
                                <img style={img1}src='/assets/images/bbq.jpg'  width="250px" height="190px"/>
                                <p>BBQ</p>
                            </div>
                            <div className="flip-card-back">
                                <p></p>
                            </div>
                            </div>
                        </div>
                        
                        <div className="flip-card">
                        <div style={box2} className="flip-card-inner">
                            <div className="flip-card-front">
                                <img style={img1}src='/assets/images/egg.jpg'  width="250px" height="190px"/>
                                <p>EGG FACTORY</p>
                            </div>
                            <div className="flip-card-back">
                                <p>An outdoor restaurant with great ambience and mouth watering dishes.</p>
                            </div>
                        </div>
                        </div>

                        <div className="flip-card">
                        <div style={box6} className="flip-card-inner">
                            <div className="flip-card-front">
                                <img style={img1}src='/assets/images/zza.jpg'  width="250px" height="190px"/>
                                <p>ZZA BAR</p>
                            </div>
                            <div className="flip-card-back">
                                <p>Italian restaurant with a wide variety of dishes</p>
                            </div>
                        </div>
                        </div>
                    </div>

                    <div className="container">
                    <div className="flip-card">
                        <div style={box4} className="flip-card-inner">
                            <div className="flip-card-front">
                                <img style={img1}src='/assets/images/basil.jpg'  width="250px" height="190px"/>
                                <p>BASIL CAFE</p>
                            </div>
                            <div className="flip-card-back">
                                <p>Affordable continental food with great quality</p>
                            </div>
                        </div>
                        </div>

                        <div className="flip-card">
                        <div style={box2} className="flip-card-inner">
                            <div className="flip-card-front">
                                <img style={img1}src='/assets/images/saiba.jpg'  width="250px" height="190px"/>
                                <p>SAIBA</p>
                            </div>
                            <div className="flip-card-back">
                                <p>A family restaurant with a variety of cuisines .</p>
                            </div>
                        </div>
                        </div>
                        
                        <div className="flip-card">
                        <div style={box6} className="flip-card-inner">
                            <div className="flip-card-front">
                                <img style={img1}src='/assets/images/coast.jpg'  width="250px" height="190px"/>
                                <p>COAST ASIA</p>
                            </div>
                            <div className="flip-card-back">
                                <p>Varieties of seafood straight from the Konkani kitchen</p>
                            </div>
                        </div>
                        </div>
                    </div>

                    <div className="container">
                    <div className="flip-card">
                    <div style={box2} className="flip-card-inner">
                            <div className="flip-card-front">
                                <img style={img1}src='/assets/images/kmc.jpg'  width="250px" height="190px"/>
                                <p>KMC FOODCOURT</p>
                            </div>
                            <div className="flip-card-back">
                                <p>Comprises a variety of restaurant chains like SubWay,Saiba,Chinese Kitchen and Hot Chix</p>
                            </div>
                        </div>
                        </div>

                    </div>


            </div>
            
        );
    }
}
export default Restaurants;
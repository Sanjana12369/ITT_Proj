import React, {Component} from 'react';
class Fast extends Component{
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
        return( <div className="rest">
        <div className="container">
            <div className="flip-card">
                <div style={box4} className="flip-card-inner">
                    <div className="flip-card-front">
                        <img style={img1}src='/assets/images/vikrams.jpg'  width="250px" height="190px"/>
                        <p>VIKRAM'S</p>
                    </div>
                    <div className="flip-card-back">
                        <p>A perfect place for those who missed breakfast and crave good omelettes</p>
                    </div>
                </div>
            </div>

                <div className="flip-card">
                   <div style={box2} className="flip-card-inner">
                      <div className="flip-card-front">
                        <img style={img1}src='/assets/images/manna.jpg'  width="250px" height="190px"/>
                        <p className="pad">MANNA ROLLS</p>
                      </div>
                      <div className="flip-card-back">
                        <p>Tasty rolls at a very student friendly budget</p>
                      </div>
                    </div>
                </div>

            <div className="flip-card">
                <div style={box6} className="flip-card-inner">
                    <div className="flip-card-front">
                        <img style={img1}src='/assets/images/momo.jpg'  width="250px" height="190px"/>
                        <p>THE MOMO ZONE</p>
                    </div>
                    <div className="flip-card-back">
                        <p>Delicious momos with spicy and flavourful sauces</p>
                    </div>
                </div>
            </div>
            </div>

            <div className="container">
              <div className="flip-card">
                <div style={box4} className="flip-card-inner">
                    <div className="flip-card-front">
                        <img style={img1}src='/assets/images/crave.jpg'  width="250px" height="190px"/>
                        <p>CRAVE</p>
                    </div>
                    <div className="flip-card-back">
                        <p>The best bakery and dessert joint in Manipal</p>
                    </div>
                </div>
              </div>
              <div className="flip-card">
                <div style={box2} className="flip-card-inner">
                    <div className="flip-card-front">
                        <img style={img1}src='/assets/images/planet.jpg'  width="250px" height="190px"/>
                        <p>PLANET CAFE</p>
                    </div>
                    <div className="flip-card-back">
                        <p>Can deliver quick, tasty meals after midnight</p>
                    </div>
                </div>
              </div>
              <div className="flip-card">
                <div style={box6} className="flip-card-inner">
                    <div className="flip-card-front">
                        <img style={img1}src='/assets/images/mfc.jpg'  width="250px" height="190px"/>
                        <p>MFC</p>
                    </div>
                    <div className="flip-card-back">
                        <p>Manipal's affordable, competetive answer to KFC</p>
                    </div>
                </div>
              </div>
            </div>

            <div className="container">
              <div className="flip-card">
                <div style={box4} className="flip-card-inner">
                    <div className="flip-card-front">
                        <img style={img1}src='/assets/images/kamath.jpg'  width="250px" height="190px"/>
                        <p>KAMATH CAFE</p>
                    </div>
                    <div className="flip-card-back">
                        <p>Dosas and many more items that boast local taste</p>
                    </div>
                </div>   
              </div>
              <div className="flip-card">
                <div style={box2} className="flip-card-inner">
                    <div className="flip-card-front">
                        <img style={img1}src='/assets/images/shubham.jpg'  width="250px" height="190px"/>
                        <p>SHUBHAM BIRYANI</p>
                    </div>
                    <div className="flip-card-back">
                        <p>Every student in Manipal swears by this tasty, pocket-friendly Biryani</p>
                    </div>
                </div>
                </div>

                <div className="flip-card">
                <div style={box6} className="flip-card-inner">
                    <div className="flip-card-front">
                        <img style={img1}src='/assets/images/waffee.jpg'  width="250px" height="190px"/>
                        <p>WAFFEE HOUSE</p>
                    </div>
                    <div className="flip-card-back">
                        <p>Waffles and Pancakes at a place with a lovely ambience</p>
                    </div>
                </div>
                </div>
            </div>

            <div className="container">
            <div className="flip-card">
                <div style={box4} className="flip-card-inner">
                    <div className="flip-card-front">
                        <img style={img1}src='/assets/images/naturals.jpg'  width="250px" height="190px"/>
                        <p>NATURALS</p>
                    </div>
                    <div className="flip-card-back">
                        <p>Delightfully flavoured ice creams</p>
                    </div>
                    </div>
                </div>
                
                <div className="flip-card">
                <div style={box2} className="flip-card-inner">
                    <div className="flip-card-front">
                        <img style={img1}src='/assets/images/tiwari.jpg'  width="250px" height="190px"/>
                        <p>TIWARI CHAAT</p>
                    </div>
                    <div className="flip-card-back">
                        <p>The closest chaat joint to campus</p>
                    </div>
                </div>
                </div>
                
                <div className="flip-card">
                <div style={box6} className="flip-card-inner">
                    <div className="flip-card-front">
                        <img style={img1}src='/assets/images/samosa.jpg'  width="250px" height="190px"/>
                        <p>TC SAMOSA CHAAT</p>
                    </div>
                    <div className="flip-card-back">
                        <p>Opens at 4AM, yet attracts a significant crowd for it's delightful tea and samosas</p>
                    </div>
                    </div>
                </div>

            </div>

            <div className="container">
                
            <div className="flip-card">
                <div style={box4} className="flip-card-inner">
                    <div className="flip-card-front">
                        <img style={img1}src='/assets/images/milk.jpg'  width="250px" height="190px"/>
                        <p>MILK MAGGI</p>
                    </div>
                    <div className="flip-card-back">
                        <p>A refreshing twist on a classic dish, very close to the campus</p>
                    </div>
                </div>
                </div>

                <div className="flip-card">
                <div style={box2} className="flip-card-inner">
                    <div className="flip-card-front">
                        <img style={img1}src='/assets/images/mcd.jpg'  width="250px" height="190px"/>
                        <p>McDONALD'S</p>
                    </div>
                    <div className="flip-card-back">
                        <p>Staple joint for burgers and fries</p>
                    </div>
                </div>
                </div>
                
                <div className="flip-card">
                <div style={box6} className="flip-card-inner">
                    <div className="flip-card-front">
                        <img style={img1}src='/assets/images/canara.jpg'  width="250px" height="190px"/>
                        <p>CANARA CHAAT WALK</p>
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
                        <img style={img1}src='/assets/images/chai.jpg'  width="250px" height="190px"/>
                        <p>CHAI CAFE</p>
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
export default Fast;
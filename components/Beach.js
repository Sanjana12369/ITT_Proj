import React, {Component} from 'react';
class Beach extends Component{
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
                                <img style={img1}src='/assets/images/pith.jpg'  width="250px" height="190px"/>
                                <p>PITHRODY UDYAVARA</p>
                            </div>
                            <div className="flip-card-back">
                                <p>It is a beach that lies between a river and the mighty Arabian sea with the untouched nature</p>
                            </div>
                        </div>
                    </div>

                        <div className="flip-card">
                           <div style={box2} className="flip-card-inner">
                              <div className="flip-card-front">
                                <img style={img1}src='/assets/images/malpe.jpg'  width="250px" height="190px"/>
                                <p >MALPE</p>
                              </div>
                              <div className="flip-card-back">
                                <p>Malpe Beach is a natural port, traditionally known for its settlement of the Mogaveera fishermen community here</p>
                              </div>
                            </div>
                        </div>

                    <div className="flip-card">
                        <div style={box6} className="flip-card-inner">
                            <div className="flip-card-front">
                                <img style={img1}src='/assets/images/kodi.jpg'  width="250px" height="190px"/>
                                <p>KODI</p>
                            </div>
                            <div className="flip-card-back">
                                <p>‘Kodi’ in the Kannada language translates to ‘shore’ and is especially famous since it is surrounded by water on three sides</p>
                            </div>
                        </div>
                    </div>
                    </div>

                    <div className="container">
                      <div className="flip-card">
                        <div style={box4} className="flip-card-inner">
                            <div className="flip-card-front">
                                <img style={img1}src='/assets/images/hoode.jpg'  width="250px" height="190px"/>
                                <p>HOODE</p>
                            </div>
                            <div className="flip-card-back">
                                <p>This is the perfect place for you if you enjoy lazy, solitary walks along a beach.</p>
                            </div>
                        </div>
                      </div>
                      <div className="flip-card">
                        <div style={box2} className="flip-card-inner">
                            <div className="flip-card-front">
                                <img style={img1}src='/assets/images/mara.jpg'  width="250px" height="190px"/>
                                <p>MARAVANTHE</p>
                            </div>
                            <div className="flip-card-back">
                                <p>Maravanthe wears the look of a fairyland with the picturesque Kodachadri Hills forming a backdrop to the Sauparnika River on one side and miles of unspoilt white sand on the othe</p>
                            </div>
                        </div>
                      </div>
                      <div className="flip-card">
                        <div style={box6} className="flip-card-inner">
                            <div className="flip-card-front">
                                <img style={img1}src='/assets/images/mattu.jpg'  width="250px" height="190px"/>
                                <p>MATTU</p>
                            </div>
                            <div className="flip-card-back">
                                <p>Mattu Beach is a quaint, secluded tropical paradise that boasts of having water on two of its sides</p>
                            </div>
                        </div>
                      </div>
                    </div>

                    <div className="container">
                      <div className="flip-card">
                        <div style={box4} className="flip-card-inner">
                            <div className="flip-card-front">
                                <img style={img1}src='/assets/images/padubidri.jpg'  width="250px" height="190px"/>
                                <p>PADUBIDRI</p>
                            </div>
                            <div className="flip-card-back">
                                <p>It is a clean and calm place to sit and enjoy panoramic views of the sea and the sun on its journey up and down the horizon.</p>
                            </div>
                        </div>   
                      </div>
                      <div className="flip-card">
                        <div style={box2} className="flip-card-inner">
                            <div className="flip-card-front">
                                <img style={img1}src='/assets/images/kapu.jpg'  width="250px" height="190px"/>
                                <p>KAPU</p>
                            </div>
                            <div className="flip-card-back">
                                <p>it features a cool lighthouse and Kapu also has ruins of Jain Basadis that line across the stretch of sand</p>
                            </div>
                        </div>
                        </div>

                        <div className="flip-card">
                        <div style={box6} className="flip-card-inner">
                            <div className="flip-card-front">
                                <img style={img1}src='/assets/images/padukere.jpg'  width="250px" height="190px"/>
                                <p>PADUKERE</p>
                            </div>
                            <div className="flip-card-back">
                                <p>The Warm, Calm and Beautiful, totally private beach hope it remains the same</p>
                            </div>
                        </div>
                        </div>
                        </div>

                        <div className="container">
                      <div className="flip-card">
                      <div style={box2} className="flip-card-inner">
                            <div className="flip-card-front">
                                <img style={img1}src='/assets/images/delta.jpg'  width="250px" height="190px"/>
                                <p>DELTA</p>
                            </div>
                            <div className="flip-card-back">
                                <p>The beach is located at an estuary where the Swarna River meets the Arabian Sea. This place has other neighbouring small islands.</p>
                            </div>
                        </div>
                        </div>

                    </div>
                    </div>
        );
    }
}
export default Beach;
import "./dashboard.css";
import "../css/custome.css"
import Pdf from "../images/pdf.png";
// import Header from "../component/Header.js";
import NavBar from "../component/NavBar";
import Sijan from "../images/sijan.jpg"

function Dashboard(){
    return(
        <>
     
      
        <div className="main-wrapper ">
        <NavBar/>
            <div className="wrapper-1 d-lg-flex d-md-flex d-sm-block ">
                <div className="img1 d-flex align-items-center ">
                  
                    <img src={Sijan} alt="image" />
                </div>
            <div className="info px-2 d-flex align-items-center bg-primary" >
                <div>
                <h3>
                I’m Sijan Kasalawat.
                    A Fontend Developer
                </h3>
                <p>I’m probably the most passionate designer you will ever get to work with. If you have a great project that needs some amazing skills, I’m your guy.</p>

                </div>
                
             </div>
            </div>
            <div className="wrapper-2 px-2">
                <div >
                    <p>
                    WORK EXPERIENCE
                    </p>
                    <h2>
                    Companies I have worked for in the past. 
                    </h2>
                </div>
                <div className="col-12">
                    <div className="row">
                        <div className="col-lg-4 col-md-6 col-sm-12 p-2">
                            <h1>
                                01
                            </h1>
                            <h4>
                            Google, Interaction Designer
                            </h4>
                            <p>
                            I currently am the lead designer on the interaction design team for Google Play. 
                            </p>

                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-12 p-2">
                        <h1>
                                01
                            </h1>
                            <h4>
                            Google, Interaction Designer
                            </h4>
                            <p>
                            I currently am the lead designer on the interaction design team for Google Play. 
                            </p>

                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-12 p-2">
                        <h1>
                                01
                            </h1>
                            <h4>
                            Google, Interaction Designer
                            </h4>
                            <p>
                            I currently am the lead designer on the interaction design team for Google Play. 
                            </p>

                        </div>


                    </div>
                </div>
            </div>
            <div className="wrapper-3">
                <div className="col-lg-6 col-md-6 col-sm-12">
<h2>Philosophy & values</h2><p>I think everyone wants the same thing - relationship with humanity, peace with the metaphysical, and experience with the universe. I try to grasp these things with my values: authenticity, creativity, & hospitality.</p>
                </div>
                <div className="col-lg-6 col-md-6 col-sm-12">
                    
                    </div>
    

            </div>
            <div className="wrapper-4 col-12">
                <div className="row">
                    <div className="col-lg-6 col-md-6 col-sm-12">
                        <h1>
                        Skillset
                        </h1>
                        <p>With skills in over 4 different fields of design, I am the perfect person to hire when it comes to a full fledged project. Whatever your needs are, I can pretty much take on any challenge.</p>
                    </div>
                    <div className="col-lg-6 col-md-6 col-sm-12">
                        <div className="col-12">
                            <div class="row">
         
                            <div className="col-lg-6 col-md-6 col-sm-12">
                            <h4>Product Design</h4>
                            <p>
                            Working at Facebook has taught me a lot about how to understand users, solve problems and build great products.
                            </p>
                            </div>
                            <div className="col-lg-6 col-md-6 col-sm-12">
                            <h4>Product Design</h4>
                            <p>
                            Working at Facebook has taught me a lot about how to understand users, solve problems and build great products.
                            </p>
                            </div>
                            <div className="col-lg-6 col-md-6 col-sm-12">
                            <h4>Product Design</h4>
                            <p>
                            Working at Facebook has taught me a lot about how to understand users, solve problems and build great products.
                            </p>
                            </div>
                            <div className="col-lg-6 col-md-6 col-sm-12">
                            <h4>Product Design</h4>
                            <p>
                            Working at Facebook has taught me a lot about how to understand users, solve problems and build great products.
                            </p>
                            </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
            <div className="wrapper-5">
            <div class="parent">
  <div class="slide">
  <div class="child">1</div>
    <div class="child">2</div>
    <div class="child">3</div>
    <div class="child">4</div>
    <div class="child">5</div>
  <div class="child">1</div>
    <div class="child">2</div>
    <div class="child">3</div>
    <div class="child">4</div>
    <div class="child">5</div>
    
  </div>
</div>
            </div>
            
            <a href={Pdf} download className="btn line-btn-dark btn-icon btn-radius" title="">
  download CV
</a>
        </div>
        </>

    );

}export default Dashboard;
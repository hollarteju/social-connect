import React from "react";
import {useState} from "react"

const LogIn= ()=>{
  const [logToggle, setlogToggle]= useState(true);

  function signIn(){
    setlogToggle(false)
  }

   function signUp(){
    setlogToggle(true)
   }
   
  
  console.log(logToggle)
    return(
      

      <div>
        {logToggle?        
  <section className="vh-100 ">
  <div className="container  py-5 h-100"> 
      <div className="row d-flex justify-content-center align-items-center h-100">
           <div className="col col-xl-10">
               <div className="card" style={{borderRadius: "1rem"}}>
                   <div className="row g-0" style={{position:"relative"}}>
                      <div className="col-md-6 col-lg-5 d-none d-md-block">
                          <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/img1.webp" alt="login form" className="img-fluid" style={{borderRadius: "1rem 0 0 1rem"}} />
                      </div> 
                      <div className="col-md-6 col-lg-7 d-flex align-items-center">
                          <div className="card-body p-4 p-lg-5 text-black">

                              <form>
                                  <div className="d-flex align-items-center mb-3 pb-1">
                                      <i className="fas fa-cubes fa-2x me-3" style={{color: "#ff6219"}}></i>
                                      <span className="h1 fw-bold mb-0">Logo</span>
                                  </div>
                                  <h5 className="fw-normal mb-3 pb-3" style={{letterSpacing: "1px"}}>Sign into your account</h5>
                                  <div className="form-outline mb-5">
                                      <input type="text" id="form2Example17" className="form-control form-control-lg" name="username" placeholder="E-mail" />
                                      
                                  </div>
                                  <div className="form-outline mb-4">
                                      <input type="password" id="form2Example27" name="password" className="form-control form-control-lg" placeholder="Password" />
                                          
                                  </div> 
                                  <div className="pt-1 mb-2">
                                      <button className="btn btn-dark btn-lg btn-block bg-indigo" style={{width:"100%", border:"none"}} type="submit">Login</button>
                                          </div>
                                              <a className="small text-muted" href="#!">Forgot password?</a>
                                              <div className="my-4 d-flex justify-content-center" style={{textAlign:"center", width:"100%",position:"relative"}}>
                                                  <button className="btn btn-dark btn-sm btn-block bg-white mx-3 px-2 d-flex"
                                                   style={{color:"black", justifyContent:"center"}}>
                                                      <i className="bx bxl-google mx-1 fs-3" style={{color:"red"}}></i> Google
                                                  </button>
                                                  <button className="btn btn-dark btn-sm btn-block bg-white mx-3 px-2 d-flex"
                                                   style={{color:"black", justifyContent:"center"}}>
                                                      <i className="bx bxl-facebook fs-3" style={{color:"blue", position:"relative"}}></i>Facebook
                                                  </button>
                                              </div>
                                                  <p className="mb-5 pb-lg-2" style={{color: "#393f81"}}>Don't have an account?
                                                      <a href="#!" style={{color: "#393f81"}}  onClick={()=>signIn()}>Register here</a>
                                                  </p>
                                                 
                              </form>
                          </div> 
                      </div>
                  </div>
              </div>
          </div>
      </div>
  </div>
</section>
:
 

      
<section className="h-100 h-custom gradient-custom-2">
  <div className="container py-5 h-100">
    <div className="row d-flex justify-content-center align-items-center h-100">
      <div className="col-12">
        <div className="card card-registration card-registration-2" style={{borderRadius:"15px"}}>
          <div className="card-body p-0">
            <div className="row g-0">
              <div className="col-lg-6">
                <div className="p-5">
                  <h3 className="fw-normal mb-5" style={{color: "#4835d4"}}>General Infomation</h3>

                  <div className="mb-4 pb-2">
                    <select className="select">
                      <option value="1">Gender</option>
                      <option value="2">Male</option>
                      <option value="3">Female</option>
                      <option value="4">Others</option>
                    </select>
                  </div>

                  <div className="row">
                    <div className="col-md-6 mb-4 pb-2">

                      <div className="form-outline">
                        <input type="text" id="form3Examplev2" className="form-control form-control-lg" />
                        <label className="form-label" for="form3Examplev2">First name</label>
                      </div>

                    </div>
                    <div className="col-md-6 mb-4 pb-2">

                      <div className="form-outline">
                        <input type="text" id="form3Examplev3" className="form-control form-control-lg" />
                        <label className="form-label" for="form3Examplev3">Last name</label>
                      </div>

                    </div>
                  </div>

                  <div className="mb-4 pb-2">
                    <select className="select">
                      <option value="1">Interest</option>
                      <option value="2">1</option>
                      <option value="3">2</option>
                      <option value="4">3</option>
                    </select>
                  </div>

                  <div className="mb-4 pb-2">
                    <div className="form-outline">
                      <input type="text" id="form3Examplev4" className="form-control form-control-lg" />
                      <label className="form-label" for="form3Examplev4">Position</label>
                    </div>
                  </div>

                  <div className="row">
                    <div className="col-md-6 mb-4 pb-2 mb-md-0 pb-md-0">

                      <div className="form-outline">
                        <input type="text" id="form3Examplev5" className="form-control form-control-lg" />
                        <label className="form-label" for="form3Examplev5">Bussines Arena</label>
                      </div>

                    </div>
                    <div className="col-md-6">

                      <select className="select">
                        <option value="1">Employees</option>
                        <option value="2">Two</option>
                        <option value="3">Three</option>
                        <option value="4">Four</option>
                      </select>

                    </div>
                  </div>

                </div>
              </div>
              <div className="col-lg-6 bg-indigo text-white">
                <div className="p-5">
                  <h3 className="fw-normal mb-5">Contact Details</h3>

                  <div className="mb-4 pb-2">
                    <div className="form-outline form-white">
                      <input type="text" id="form3Examplea2" className="form-control form-control-lg" />
                      <label className="form-label" for="form3Examplea2">Country</label>
                    </div>
                  </div>

                  <div className="mb-4 pb-2">
                    <div className="form-outline form-white">
                      <input type="text" id="form3Examplea3" className="form-control form-control-lg" />
                      <label className="form-label" for="form3Examplea3">State</label>
                    </div>
                  </div>


                  <div className="row">

                    <div className="col-md-5 mb-4 pb-2">


                      <div className="form-outline form-white">

                        <input type="text" id="form3Examplea7" className="form-control form-control-lg" />

                        <label className="form-label" for="form3Examplea7">Code +</label>

                      </div>


                    </div>

                    <div className="col-md-7 mb-4 pb-2">


                      <div className="form-outline form-white">

                        <input type="text" id="form3Examplea8" className="form-control form-control-lg" />

                        <label className="form-label" for="form3Examplea8">Phone Number</label>

                      </div>


                    </div>

                  </div>


                  <div className="mb-4">

                    <div className="form-outline form-white">

                      <input type="text" id="form3Examplea9" className="form-control form-control-lg" />

                      <label className="form-label" for="form3Examplea9">Your Email</label>

                    </div>

                  </div>
                  <div className="mb-4">

                    <div className="form-outline form-white">

                      <input type="password" id="form3Examplea9" className="form-control form-control-lg" />

                      <label className="form-label" for="form3Examplea9">Password</label>

                    </div>

                </div>


                  <div className="form-check d-flex justify-content-start mb-4 pb-3">

                    <input className="form-check-input me-3" type="checkbox" value="" id="form2Example3c" />

                    <label className="form-check-label text-white" for="form2Example3">

                      I do accept the <a href="#!" className="text-white"><u>Terms and Conditions</u></a> of your

                      site.

                    </label>

                  </div>


                  <button type="button" className="btn btn-light btn-lg" data-mdb-ripple-color="dark" onClick={()=>signUp()}>Register</button>


                </div>

              </div>

            </div>

          </div>

        </div>

      </div>

    </div>

  </div>

</section>
}


 

</div>


    )
}

export default LogIn;
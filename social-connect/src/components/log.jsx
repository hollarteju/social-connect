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
<section className="vh-100" style={{backgrondColor: "#508bfc"}}>
  <div className="container py-5 h-100">
    <div className="row d-flex justify-content-center align-items-center h-100">
      <div className="col-12 col-md-8 col-lg-6 col-xl-5">
        <div className="card shadow-2-strong" style={{borderRadius:"1rem"}}>
          <div className="card-body p-5 text-center">

            <h3 className="mb-5">Sign in</h3>

            <div className="form-outline mb-4">
              <input type="email" id="typeEmailX-2" className="form-control form-control-lg" />
              <label className="form-label" for="typeEmailX-2">Email</label>
            </div>

            <div className="form-outline mb-4">
              <input type="password" id="typePasswordX-2" className="form-control form-control-lg" />
              <label className="form-label" for="typePasswordX-2">Password</label>
            </div>

         
            <div className="form-check d-flex justify-content-start mb-4">
              <input className="form-check-input" type="checkbox" value="" id="form1Example3" />
              <label className="form-check-label" for="form1Example3"> Remember password </label>
            </div>

            <button className="btn btn-primary btn-lg btn-block mx-4" type="submit">Login</button>
            <button className="btn btn-primary btn-lg btn-block mx-4" type="submit" onClick={()=>signIn()}>SignUp</button>

            <hr className="my-4"/>

            <button className="btn btn-lg btn-block btn-primary mb-4" style={{backgroundColr: "#dd4b39"}}
              type="submit"><i className="fab fa-google me-2"></i> Sign in with google</button>
            <button className="btn btn-lg btn-block btn-primary mb-2" style={{backgroundColr: "#3b5998"}}
              type="submit"><i className="fab fa-facebook-f me-2"></i>Sign in with facebook</button>

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
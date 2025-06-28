function Nav() {
    return ( 
        <>
          <nav class="navbar navbar-expand-lg navbar-light bg-light">
          <div class="container-fluid  ">
              <div>
              <a class="navbar-brand fs-2 px-5" href="#">Electronics</a>
              {/* <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
              <span class="navbar-toggler-icon"></span>
              </button> */}
              </div>
              <div class="collapse navbar-collapse d-flex justify-content-around " id="navbarNav">
              <ul class="navbar-nav">
                  <li class="nav-item">
                  <a class="nav-link active fs-5 px-5"  aria-current="page" href="#">Home</a>
                  </li>
                  <li class="nav-item">
                  <a class="nav-link  active fs-5 px-5"  aria-current="page" href="#">Product </a>
                  </li>
                  <li class="nav-item">
                  <a class="nav-link  active fs-5 px-5"  aria-current="page" href="#">About</a>
                  </li>
              </ul>
              <span  className="text-end">

              <ul class="navbar-nav  ">
                  <li class="nav-item">
                  <a class="nav-link active fs-5 px-5"  href="#">Signup</a>
                  </li>
                  <li class="nav-item">
                  <a class="nav-link  active fs-5 px-5" href="#">Login </a>
                  </li>
                  <li class="nav-item">
                  <a class="nav-link  active fs-5 px-5" href="#">Cart</a>
                  </li>
              </ul>
              </span>
            </div>
          </div>
          </nav>
        </>
     );
    }
    
    export default Nav;

    
    {/* <div className="nav-bar">
        <div className="nav-name">
            <h1>Dhasu</h1>
        </div>
        <div className="nav-acc">
            <h3 className="nav-li" >Home</h3>
            <h3 className="nav-li" >Product</h3>
            <h3 className="nav-li" >About</h3>
        </div>
        <div className="nav-acc">
            <h3 className="nav-li" >Signup</h3>
            <h3 className="nav-li" >Login</h3>
            <h3 className="nav-li" >Cart</h3>
        </div>0
    </div> */}

    
{/* <nav class="navbar navbar-expand-lg navbar-light bg-light">
            <div class="container-fluid">
              <a class="navbar-brand" href="#">Navbar w/ text</a>
              <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
              </button>
              <div class="collapse navbar-collapse" id="navbarText">
                <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                  <li class="nav-item">
                    <a class="nav-link active" href="#">Home</a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" href="#">Features</a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" href="#">Pricing</a>
                  </li>
                </ul>
                <span class="navbar-text">
                  Navbar text with an inline element
                </span>
              </div>
            </div>
          </nav> */}
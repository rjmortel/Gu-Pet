import gupetlogo from "../assets/images/gupetlogo.png"


const Nav = () => {
  return (
    <>
      {/* Nav */}
      <nav class="navbar fixed-top navbar-expand-md" id="home">
        <div class="container-fluid navbar-tog hover-overlay">
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div
            class="collapse navbar-collapse nav justify-content-center"
            id="navbarNav"
          >
            <ul class="navbar-nav nav justify-content-center d-flex align-items-center">
              <li class="nav-item">
                <a class="nav-link" aria-current="page" href="#home">
                  <h6 class="nav-font">HOME</h6>
                </a>
              </li>

              <li class="nav-item">
                <a class="nav-link" aria-current="page" href="#about-sec">
                  <h6 class="nav-font">ABOUT</h6>
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#gallery">
                  <h6 class="nav-font">GALLERY</h6>
                </a>
              </li>
              <li class="nav-item order-md-0">
                <a class="navbar-brand" href="brand">
                  <img
                    class="nav-logo d-none d-md-block"
                    src={gupetlogo}
                    alt="Logo"
                    width="160"
                    height="140"
                  />
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#services">
                  <h6 class="nav-font">SERVICES</h6>
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#reviews">
                  <h6 class="nav-font">REVIEWS</h6>
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#contact">
                  <h6 class="nav-font">CONTACT</h6>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Nav;
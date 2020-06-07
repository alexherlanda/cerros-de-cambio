function writeBar() {
  console.log("Generando la barra de navegación");
  document.write(`

  <header class="main-header hmx-35">
       
  <div class="header-top grey">
    <div class="container clearfix">
     
      <div class="top-right pull-right">
        <div class="social-links clearfix">
          <a href="https://www.facebook.com/IbsaSocial/"
            ><span class="fa fa-facebook-f"></span
          ></a>
          <a href="https://www.linkedin.com/company/cerros-de-cambio/"
            ><span class="fa fa-linkedin"></span
          ></a>
          <a href="https://www.instagram.com/cerrosdecambio/"
            ><span class="fa fa-instagram"></span
          ></a>
        </div>
      </div>
    </div>
  </div>


  <div class="header-info">
    <div class="container">
      <div class="clearfix">
        <div class="float-left">
          <div class="main-logo">
            <a class="navbar-brand pr-50" href="index.html"
              ><img src="images/logo.png" alt="" title=""
            /></a>
          </div>
        </div>
      </div>
    </div>
  </div>

 
  <div class="header-upper black-bg-3 dark">
    <div class="container clearfix">
      <div class="black-bg-3 upper-right clearfix">
        <div class="nav-outer clearfix">
        
          <nav class="main-menu navbar-expand-lg">
            <div class="navbar-header">
           
              <button
                type="button"
                class="navbar-toggle"
                data-toggle="collapse"
                data-target=".navbar-collapse"
              >
                <span class="icon-bar"></span>
                <span class="icon-bar"></span>
                <span class="icon-bar"></span>
              </button>
            </div>

            <div class="navbar-collapse collapse clearfix">
              <ul class="navigation clearfix">
                <li><a href="#">Inicio</a></li>
                <li class="dropdown">
                  <a href="#">Conócenos</a>
                  <ul>
                    <li><a href="#">¿Qué hacemos?</a></li>
                    <li><a href="team.html">Nuestro Equipo</a></li>
                    <li><a href="#">Testimonios</a></li>
                    <li><a href="faq.html">FAQ's</a></li>
                  </ul>
                </li>
                <li class="dropdown">
                  <a href="#">Participa</a>
                  <ul>
                    <li><a href="#">Voluntariado</a></li>
                    <li><a href="#">Eventos</a></li>
                  </ul>
                </li>
                <li class="dropdown">
                  <a href="#">Proyectos</a>
                  <ul>
                    <li><a href="#">Proyecto A</a></li>
                    <li><a href="#">Proyecto B</a></li>
                    <li><a href="#">Proyecto C</a></li>
                    <li><a href="#">Transparencia</a></li>
                  </ul>
                </li>
                <li><a href="contact.html">Contáctanos</a></li>
              </ul>
            </div>
          </nav>

      
          <div class="outer-box float-right">
            <div class="link-btn">
              <a href="#" class="theme-btn btn-style-one">Súmate</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
 

 
  <div class="sticky-header">
    <div class="container clearfix">
     
      <div class="logo float-left">
        <a href="index.html" class="img-responsive"
          ><img src="images/logo.png" alt="" title=""
        /></a>
      </div>

  
      <div class="right-col float-right">
    
        <nav class="main-menu navbar-expand-lg">
          <div class="navbar-collapse collapse clearfix">
            <ul class="navigation clearfix">
              <li><a href="#">Inicio</a></li>
              <li class="dropdown">
                <a href="#">Conócenos</a>
                <ul>
                  <li><a href="#">¿Qué hacemos?</a></li>
                  <li><a href="team.html">Nuestro Equipo</a></li>
                  <li><a href="#">Testimonios</a></li>
                  <li><a href="faq.html">FAQ's</a></li>
                </ul>
              </li>
              <li class="dropdown">
                <a href="#">Participa</a>
                <ul>
                  <li><a href="#">Voluntariado</a></li>
                  <li><a href="#">Eventos</a></li>
                </ul>
              </li>
              <li class="dropdown">
                <a href="#">Proyectos</a>
                <ul>
                  <li><a href="#">Proyecto A</a></li>
                  <li><a href="#">Proyecto B</a></li>
                  <li><a href="#">Proyecto C</a></li>
                  <li><a href="#">Transparencia</a></li>
                </ul>
              </li>
              <li><a href="#">Contáctanos</a></li>
            </ul>
          </div>
        </nav>
      
      </div>
    </div>
  </div>

</header>

`);
  console.log("La barra de navergacion fue generada correctamente");
}

writeBar();

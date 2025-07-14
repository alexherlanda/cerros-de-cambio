function writeBar() {
  console.log("Generando la barra de navegación");
  document.write(`

  <header class="main-header hmx-35">
       
  <div class="header-top grey">
    <div class="container clearfix">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
     
      <div class="top-right pull-right">
        <div class="social-links clearfix">
          <a href="https://www.facebook.com/CerrosdeCambio"
            ><span class="fab fa-facebook-f"></span
          ></a>
          <a href="https://www.linkedin.com/company/cerros-de-cambio/"
            ><span class="fab fa-linkedin"></span
          ></a>
          <a href="https://www.instagram.com/cerrosdecambio/"
            ><span class="fab fa-instagram"></span
          ></a>
          <a href="http://wa.me/573028610002"
            ><span class="fab fa-whatsapp"></span
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
          <a class="navbar-brand" href="index.html" style="padding: 0; line-height: inherit; height: inherit;">
            <img src="images/logo.png" alt="" title="" style="width: 200px; height: auto; transition: none;" />
          </a>
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
                <li><a href="index.html">Inicio</a></li>
                <li class="dropdown">
                  <a href="#">Conócenos</a>
                  <ul>
                    <li><a href="quehacemos.html">¿Qué hacemos?</a></li>
                    <li><a href="team.html">Nuestro Equipo</a></li>
                    <li><a href="faq.html">FAQ's</a></li>
                    <li><a href="politicas.html">Políticas</a></li>
                  </ul>
                </li>
                <li class="dropdown">
                  <a href="#">Participa</a>
                  <ul>
                    <li><a href="sumate.html">¡Súmate!</a></li>
                  </ul>
                </li>


                <li class="dropdown">
                  <a href="socialhero.html">Social Hero</a>
                  <ul>
                    <li><a href="sh-brandon.html">Social Hero: Brandon</a></li>
                    <li><a href="sh-jessica.html">Social Hero: Jessica</a></li>
                    <li><a href="sh-maicol.html">Social Hero: Maicol</a></li>
                    <li><a href="sh-natalia.html">Social Hero: Natalia</a></li>
                  </ul>
                </li>
              </ul>
            </div>
          </nav>

      
          <div class="outer-box float-right">
            <div class="link-btn">
              <a href="sumate.html" class="theme-btn btn-style-one">Súmate</a>
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
          ><img src="images/logo16.png" width="170" height="54.25" alt="" title=""
        /></a>
      </div>

  
      <div class="right-col float-right">
    
        <nav class="main-menu navbar-expand-lg">
          <div class="navbar-collapse collapse clearfix">
            <ul class="navigation clearfix">
              <li><a href="index.html">Inicio</a></li>
              <li class="dropdown">
                <a href="#">Conócenos</a>
                <ul>
                  <li><a href="quehacemos.html">¿Qué hacemos?</a></li>
                  <li><a href="team.html">Nuestro Equipo</a></li>
                  <li><a href="faq.html">FAQ's</a></li>
                  <li><a href="politicas.html">Políticas</a></li>
                </ul>
              </li>
              <li class="dropdown">
                <a href="#">Participa</a>
                <ul>
                  <li><a href="sumate.html">¡Súmate!</a></li>
                </ul>
              </li>


              <li class="dropdown">
                  <a href="socialhero.html">Social Hero</a>
                  <ul>
                    <li><a href="sh-brandon.html">Social Hero: Brandon</a></li>
                    <li><a href="sh-jessica.html">Social Hero: Jessica</a></li>
                    <li><a href="sh-maicol.html">Social Hero: Maicol</a></li>
                    <li><a href="sh-natalia.html">Social Hero: Natalia</a></li>
                  </ul>
                </li>
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



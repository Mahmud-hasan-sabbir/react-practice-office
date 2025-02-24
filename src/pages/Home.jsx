import React, { useEffect } from "react";
import $ from "jquery"; 
import { Link } from "react-router-dom";

function Home() {
  useEffect(() => {
    $(".progress-bar").each(function () {
      var progressValue = $(this).attr("aria-valuenow");
      $(this).animate({ width: progressValue + "%" }, 1500);
    });
  }, []); 

  return (
    <>
              <header className="top-area">
                <div className="header-area">
                    <nav className="navbar navbar-default bootsnav navbar-fixed dark no-background">
                        <div className="container">
                            <div className="navbar-header">
                                <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#navbar-menu">
                                    <i className="fa fa-bars"></i>
                                </button>
                                <Link className="navbar-brand" to="/">Sabbir</Link>
                            </div>
                            <div className="collapse navbar-collapse menu-ui-design" id="navbar-menu">
                                <ul className="nav navbar-nav navbar-right" data-in="fadeInDown" data-out="fadeOutUp">
                                    <li className="smooth-menu active"></li>
                                    <li className="smooth-menu"><a href="#education">education</a></li>
                                    <li className="smooth-menu"><a href="#skills">skills</a></li>
                                    <li className="smooth-menu"><a href="#experience">experience</a></li>
                                    <li className="smooth-menu"><a href="#profiles">profile</a></li>
                                    <li className="smooth-menu"><a href="#portfolio">portfolio</a></li>
                                    <li className="smooth-menu"><a href="#clients">clients</a></li>
                                    <li className="smooth-menu"><a href="#contact">contact</a></li>
                                </ul>
                            </div>
                        </div>
                    </nav>
                </div>
                <div className="clearfix"></div>
            </header>

            <section id="welcome-hero" className="welcome-hero">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12 text-center">
                            <div className="header-text">
                                <h2>hi <span>,</span> i am <br />Mahmud Hasan Sabbir <br />  <span></span></h2>
                                <p>Software Engineer</p>
                                <a href="" download>download resume</a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section id="about" class="about">
              <div class="section-heading text-center">
                <h2>about me</h2>
              </div>
              <div class="container">
                <div class="about-content">
                  <div class="row">
                    <div class="col-sm-6">
                      <div class="single-about-txt">
                        <h3>
                          I am a Professional UI/UX Designer and Web developer. Consectetur an adipisi elita, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam quis nostrud.
                        </h3>
                        <p>
                          Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspi unde omnis iste natus error sit voluptatem accusantium doloremque lauda ntium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam vo luptatem quia voluptas sit aspernatur aut odit aut fugit,
                        </p>
                        <div class="row">
                          <div class="col-sm-4">
                            <div class="single-about-add-info">
                              <h3>phone</h3>
                              <p>987-123-6547</p>
                            </div>
                          </div>
                          <div class="col-sm-4">
                            <div class="single-about-add-info">
                              <h3>email</h3>
                              <p>browny@info.com</p>
                            </div>
                          </div>
                          <div class="col-sm-4">
                            <div class="single-about-add-info">
                              <h3>website</h3>
                              <p>www.brownsine.com</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="col-sm-offset-1 col-sm-5">
                      <div class="single-about-img">
                        <img src="/assets/images/about/profile_image.jpg" alt="profile_image" />
                        <div class="about-list-icon">
                          <ul>
                            <li>
                              <a href="#">
                                <i  class="fa fa-facebook" aria-hidden="true"></i>
                              </a>
                            </li>
                            <li>
                              <a href="#">
                                <i  class="fa fa-dribbble" aria-hidden="true"></i>
                              </a>
                              
                            </li>
                            <li>
                              <a href="#">
                                <i  class="fa fa-twitter" aria-hidden="true"></i>
                              </a>
                              
                            </li>
                            <li>
                              <a href="#">
                                <i  class="fa fa-linkedin" aria-hidden="true"></i>
                              </a>
                            </li>
                            <li>
                              <a href="#">
                                <i  class="fa fa-instagram" aria-hidden="true"></i>
                              </a>
                            </li>
                            
                            
                          </ul>
                        </div>

                      </div>

                    </div>
                  </div>
                </div>
              </div>
		        </section>

            <section id="education" class="education">
              <div class="section-heading text-center">
                <h2>education</h2>
              </div>
              <div class="container">
                <div class="education-horizontal-timeline">
                  <div class="row">
                    <div class="col-sm-4">
                      <div class="single-horizontal-timeline">
                        <div class="experience-time">
                          <h2>2008 - 2010</h2>
                          <h3>master <span>of </span> computer science</h3>
                        </div>
                        <div class="timeline-horizontal-border">
                          <i class="fa fa-circle" aria-hidden="true"></i>
                          <span class="single-timeline-horizontal"></span>
                        </div>
                        <div class="timeline">
                          <div class="timeline-content">
                            <h4 class="title">
                              university of north carolina
                            </h4>
                            <h5>north carolina, USA</h5>
                            <p class="description">
                              Duis aute irure dolor in reprehenderit in vol patate velit esse cillum dolore eu fugiat nulla pari. Excepteur sint occana inna tecat cupidatat non proident. 
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="col-sm-4">
                      <div class="single-horizontal-timeline">
                        <div class="experience-time">
                          <h2>2004 - 2008</h2>
                          <h3>bachelor <span>of </span> computer science</h3>
                        </div>
                        <div class="timeline-horizontal-border">
                          <i class="fa fa-circle" aria-hidden="true"></i>
                          <span class="single-timeline-horizontal"></span>
                        </div>
                        <div class="timeline">
                          <div class="timeline-content">
                            <h4 class="title">
                              university of north carolina
                            </h4>
                            <h5>north carolina, USA</h5>
                            <p class="description">
                              Duis aute irure dolor in reprehenderit in vol patate velit esse cillum dolore eu fugiat nulla pari. Excepteur sint occana inna tecat cupidatat non proident. 
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="col-sm-4">
                      <div class="single-horizontal-timeline">
                        <div class="experience-time">
                          <h2>2004 - 2008</h2>
                          <h3>bachelor <span>of </span> creative design</h3>
                        </div>
                        <div class="timeline-horizontal-border">
                          <i class="fa fa-circle" aria-hidden="true"></i>
                          <span class="single-timeline-horizontal spacial-horizontal-line
                          "></span>
                        </div>
                        <div class="timeline">
                          <div class="timeline-content">
                            <h4 class="title">
                              university of bolton
                            </h4>
                            <h5>bolton, united kingdome</h5>
                            <p class="description">
                              Duis aute irure dolor in reprehenderit in vol patate velit esse cillum dolore eu fugiat nulla pari. Excepteur sint occana inna tecat cupidatat non proident. 
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

		        </section>

            <section id="skills" className="skills">
              <div className="skill-content">
                <div className="section-heading text-center">
                  <h2>skills</h2>
                </div>
                <div className="container">
                  <div className="row">
                    <div className="col-md-6">
                      <div className="">
                        <div className="barWrapper">
                          <span className="progressText">adobe photoshop</span>
                          <div className="single-progress-txt">
                            <div className="progress">
                              <div
                                className="progress-bar"
                                role="progressbar"
                                aria-valuenow="90"
                                aria-valuemin="10"
                                aria-valuemax="100"
                                style={{ width: "0%" }} // Initial width to 0%
                              ></div>
                            </div>
                            <h3>90%</h3>
                          </div>
                        </div>
                        {/* Repeat other skills similarly */}
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="">
                        <div className="barWrapper">
                          <span className="progressText">html 5</span>
                          <div className="single-progress-txt">
                            <div className="progress">
                              <div
                                className="progress-bar"
                                role="progressbar"
                                aria-valuenow="90"
                                aria-valuemin="10"
                                aria-valuemax="100"
                                style={{ width: "0%" }} // Initial width to 0%
                              ></div>
                            </div>
                            <h3>90%</h3>
                          </div>
                        </div>
                        {/* Repeat other skills similarly */}
                      </div>
                    </div>
                  </div>
                </div>
                <div className="container">
                  <div className="row">
                    <div className="col-md-6">
                      <div className="">
                        <div className="barWrapper">
                          <span className="progressText">adobe illustrator</span>
                          <div className="single-progress-txt">
                            <div className="progress">
                              <div
                                className="progress-bar"
                                role="progressbar"
                                aria-valuenow="90"
                                aria-valuemin="10"
                                aria-valuemax="100"
                                style={{ width: "0%" }} // Initial width to 0%
                              ></div>
                            </div>
                            <h3>90%</h3>
                          </div>
                        </div>
                        {/* Repeat other skills similarly */}
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="">
                        <div className="barWrapper">
                          <span className="progressText">css 3 animation
                          </span>
                          <div className="single-progress-txt">
                            <div className="progress">
                              <div
                                className="progress-bar"
                                role="progressbar"
                                aria-valuenow="90"
                                aria-valuemin="10"
                                aria-valuemax="100"
                                style={{ width: "0%" }} // Initial width to 0%
                              ></div>
                            </div>
                            <h3>90%</h3>
                          </div>
                        </div>
                        {/* Repeat other skills similarly */}
                      </div>
                    </div>
                  </div>
                </div>
                <div className="container">
                  <div className="row">
                    <div className="col-md-6">
                      <div className="">
                        <div className="barWrapper">
                          <span className="progressText">adobe after effects</span>
                          <div className="single-progress-txt">
                            <div className="progress">
                              <div
                                className="progress-bar"
                                role="progressbar"
                                aria-valuenow="90"
                                aria-valuemin="10"
                                aria-valuemax="100"
                                style={{ width: "0%" }} // Initial width to 0%
                              ></div>
                            </div>
                            <h3>90%</h3>
                          </div>
                        </div>
                        {/* Repeat other skills similarly */}
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="">
                        <div className="barWrapper">
                          <span className="progressText">communication
                          </span>
                          <div className="single-progress-txt">
                            <div className="progress">
                              <div
                                className="progress-bar"
                                role="progressbar"
                                aria-valuenow="90"
                                aria-valuemin="10"
                                aria-valuemax="100"
                                style={{ width: "0%" }} // Initial width to 0%
                              ></div>
                            </div>
                            <h3>90%</h3>
                          </div>
                        </div>
                        {/* Repeat other skills similarly */}
                      </div>
                    </div>
                  </div>
                </div>
                <div className="container">
                  <div className="row">
                    <div className="col-md-6">
                      <div className="">
                        <div className="barWrapper">
                          <span className="progressText">sketch</span>
                          <div className="single-progress-txt">
                            <div className="progress">
                              <div
                                className="progress-bar"
                                role="progressbar"
                                aria-valuenow="90"
                                aria-valuemin="10"
                                aria-valuemax="100"
                                style={{ width: "0%" }} // Initial width to 0%
                              ></div>
                            </div>
                            <h3>90%</h3>
                          </div>
                        </div>
                        {/* Repeat other skills similarly */}
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="">
                        <div className="barWrapper">
                          <span className="progressText">creativity
                          </span>
                          <div className="single-progress-txt">
                            <div className="progress">
                              <div
                                className="progress-bar"
                                role="progressbar"
                                aria-valuenow="90"
                                aria-valuemin="10"
                                aria-valuemax="100"
                                style={{ width: "0%" }} // Initial width to 0%
                              ></div>
                            </div>
                            <h3>90%</h3>
                          </div>
                        </div>
                        {/* Repeat other skills similarly */}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            <section id="experience" class="experience">
              <div class="section-heading text-center">
                <h2>experience</h2>
              </div>
              <div class="container">
                <div class="experience-content">
                    <div class="main-timeline">
                      <ul>
                        <li>
                          <div class="single-timeline-box fix">
                            <div class="row">
                              <div class="col-md-5">
                                <div class="experience-time text-right">
                                  <h2>2018 - Present</h2>
                                  <h3>creative director</h3>
                                </div>
                              </div>
                              <div class="col-md-offset-1 col-md-5">
                                <div class="timeline">
                                  <div class="timeline-content">
                                    <h4 class="title">
                                      <span><i class="fa fa-circle" aria-hidden="true"></i></span>
                                      hoplony tech limited
                                    </h4>
                                    <h5>newyork, USA</h5>
                                    <p class="description">
                                      Duis aute irure dolor in reprehenderit in vol patate velit esse cillum dolore eu fugiat nulla pari. Excepteur sint occana inna tecat cupidatat non proident. 
                                    </p>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </li>

                        <li>
                          <div class="single-timeline-box fix">
                            <div class="row">
                              <div class="col-md-offset-1 col-md-5 experience-time-responsive">
                                <div class="experience-time">
                                  <h2>
                                    <span><i class="fa fa-circle" aria-hidden="true"></i></span>
                                    2016 - 2018
                                  </h2>
                                  <h3>associate design director</h3>
                                </div>
                              </div>
                              <div class="col-md-5">
                                <div class="timeline">
                                  <div class="timeline-content text-right">
                                    <h4 class="title">
                                      hoplony tech limited
                                    </h4>
                                    <h5>newyork, USA</h5>
                                    <p class="description">
                                      Duis aute irure dolor in reprehenderit in vol patate velit esse cillum dolore eu fugiat nulla pari. Excepteur sint occana inna tecat cupidatat non proident. 
                                    </p>
                                  </div>
                                </div>
                              </div>
                              <div class="col-md-offset-1 col-md-5 experience-time-main">
                                <div class="experience-time">
                                  <h2>
                                    <span><i class="fa fa-circle" aria-hidden="true"></i></span>
                                    2016 - 2018
                                  </h2>
                                  <h3>associate design director</h3>
                                </div>
                              </div>
                            </div>
                          </div>
                        </li>

                        <li>
                          <div class="single-timeline-box fix">
                            <div class="row">
                              <div class="col-md-5">
                                <div class="experience-time text-right">
                                  <h2>2013 - 2016</h2>
                                  <h3>senior UI/UX designer</h3>
                                </div>
                              </div>
                              <div class="col-md-offset-1 col-md-5">
                                <div class="timeline">
                                  <div class="timeline-content">
                                    <h4 class="title">
                                      <span><i class="fa fa-circle" aria-hidden="true"></i></span>
                                      hoplony tech limited
                                    </h4>
                                    <h5>newyork, USA</h5>
                                    <p class="description">
                                      Duis aute irure dolor in reprehenderit in vol patate velit esse cillum dolore eu fugiat nulla pari. Excepteur sint occana inna tecat cupidatat non proident. 
                                    </p>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </li>

                        <li>
                          <div class="single-timeline-box fix">
                            <div class="row">
                              <div class="col-md-offset-1 col-md-5 experience-time-responsive">
                                <div class="experience-time">
                                  <h2>
                                    <span><i class="fa fa-circle" aria-hidden="true"></i></span>
                                    2012 - 2013
                                  </h2>
                                  <h3>UI/UX designer</h3>
                                </div>
                              </div>
                              <div class="col-md-5">
                                <div class="timeline">
                                  <div class="timeline-content text-right">
                                    <h4 class="title">
                                      hoplony tech limited
                                    </h4>
                                    <h5>newyork, USA</h5>
                                    <p class="description">
                                      Duis aute irure dolor in reprehenderit in vol patate velit esse cillum dolore eu fugiat nulla pari. Excepteur sint occana inna tecat cupidatat non proident. 
                                    </p>
                                  </div>
                                </div>
                              </div>
                              <div class="col-md-offset-1 col-md-5 experience-time-main">
                                <div class="experience-time">
                                  <h2>
                                    <span><i class="fa fa-circle" aria-hidden="true"></i></span>
                                    2012 - 2013
                                  </h2>
                                  <h3>UI/UX designer</h3>
                                </div>
                              </div>
                            </div>
                          </div>
                        </li>

                        <li>
                          <div class="single-timeline-box fix">
                            <div class="row">
                              <div class="col-md-5">
                                <div class="experience-time text-right">
                                  <h2>2010 - 2012</h2>
                                  <h3>frontend developer</h3>
                                </div>
                              </div>
                              <div class="col-md-offset-1 col-md-5">
                                <div class="timeline">
                                  <div class="timeline-content">
                                    <h4 class="title">
                                      <span><i class="fa fa-circle" aria-hidden="true"></i></span>
                                      hoplony tech limited
                                    </h4>
                                    <h5>newyork, USA</h5>
                                    <p class="description">
                                      Duis aute irure dolor in reprehenderit in vol patate velit esse cillum dolore eu fugiat nulla pari. Excepteur sint occana inna tecat cupidatat non proident. 
                                    </p>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </li>

                      </ul>
                    </div>
                  </div>
              </div>

		        </section>

            <section id="profiles" class="profiles">
              <div class="profiles-details">
                <div class="section-heading text-center">
                  <h2>profiles</h2>
                </div>
                <div class="container">
                  <div class="profiles-content">
                    <div class="row">
                      <div class="col-sm-3">
                        <div class="single-profile">
                          <div class="profile-txt">
                            <a href=""><i class="flaticon-themeforest"></i></a>
                            <div class="profile-icon-name">themeforest</div>
                          </div>
                          <div class="single-profile-overlay">
                            <div class="profile-txt">
                              <a href=""><i class="flaticon-themeforest"></i></a>
                              <div class="profile-icon-name">themeforest</div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div class="col-sm-3">
                        <div class="single-profile">
                          <div class="profile-txt">
                            <a href=""><i class="flaticon-dribbble"></i></a>
                            <div class="profile-icon-name">dribbble</div>
                          </div>
                          <div class="single-profile-overlay">
                            <div class="profile-txt">
                              <a href=""><i class="flaticon-dribbble"></i></a>
                              <div class="profile-icon-name">dribbble</div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div class="col-sm-3">
                        <div class="single-profile">
                          <div class="profile-txt">
                            <a href=""><i class="flaticon-behance-logo"></i></a>
                            <div class="profile-icon-name">behance</div>
                          </div>
                          <div class="single-profile-overlay">
                            <div class="profile-txt">
                              <a href=""><i class="flaticon-behance-logo"></i></a>
                              <div class="profile-icon-name">behance</div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div class="col-sm-3">
                        <div class="single-profile profile-no-border">
                          <div class="profile-txt">
                            <a href=""><i class="flaticon-github-logo"></i></a>
                            <div class="profile-icon-name">github</div>
                          </div>
                          <div class="single-profile-overlay">
                            <div class="profile-txt">
                              <a href=""><i class="flaticon-github-logo"></i></a>
                              <div class="profile-icon-name">github</div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="profile-border"></div>
                    <div class="row">
                      <div class="col-sm-3">
                        <div class="single-profile">
                          <div class="profile-txt">
                            <a href=""><i class="flaticon-flickr-website-logo-silhouette"></i></a>
                            <div class="profile-icon-name">flickR</div>
                          </div>
                          <div class="single-profile-overlay">
                            <div class="profile-txt">
                              <a href=""><i class="flaticon-flickr-website-logo-silhouette"></i></a>
                              <div class="profile-icon-name">flickR</div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div class="col-sm-3">
                        <div class="single-profile">
                          <div class="profile-txt">
                            <a href=""><i class="flaticon-smug"></i></a>
                            <div class="profile-icon-name">smungMung</div>
                          </div>
                          <div class="single-profile-overlay">
                            <div class="profile-txt">
                              <a href=""><i class="flaticon-smug"></i></a>
                              <div class="profile-icon-name">smungMung</div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div class="col-sm-3">
                        <div class="single-profile">
                          <div class="profile-txt">
                            <a href=""><i class="flaticon-squarespace-logo"></i></a>
                            <div class="profile-icon-name">squareSpace</div>
                          </div>
                          <div class="single-profile-overlay">
                            <div class="profile-txt">
                              <a href=""><i class="flaticon-squarespace-logo"></i></a>
                              <div class="profile-icon-name">squareSpace</div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div class="col-sm-3">
                        <div class="single-profile profile-no-border">
                          <div class="profile-txt">
                            <a href=""><i class="flaticon-bitbucket-logotype-camera-lens-in-perspective"></i></a>
                            <div class="profile-icon-name">bitBucket</div>
                          </div>
                          <div class="single-profile-overlay">
                            <div class="profile-txt">
                              <a href=""><i class="flaticon-bitbucket-logotype-camera-lens-in-perspective"></i></a>
                              <div class="profile-icon-name">bitBucket</div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
		        </section>

            <section id="portfolio" class="portfolio">
              <div class="portfolio-details">
                <div class="section-heading text-center">
                  <h2>portfolio</h2>
                </div>
                <div class="container">
                  <div class="portfolio-content">
                    <div class="isotope">
                      <div class="row">

                        <div class="col-sm-4">
                          <div class="item">
                            <img src="/assets/images/portfolio/p1.jpg" alt="portfolio image"/>
                            <div class="isotope-overlay">
                              <a href="#">
                                ui/ux design
                              </a>
                            </div>
                          </div>
                          <div class="item">
                            <img src="/assets/images/portfolio/p2.jpg" alt="portfolio image"/>
                            <div class="isotope-overlay">
                              <a href="#">
                                ui/ux design
                              </a>
                            </div>
                          </div>
                        </div>

                        <div class="col-sm-4">
                          <div class="item">
                            <img src="/assets/images/portfolio/p3.jpg" alt="portfolio image"/>
                            <div class="isotope-overlay">
                              <a href="#">
                                web design
                              </a>
                            </div>
                          </div>
                        </div>

                        <div class="col-sm-4">
                          <div class="item">
                            <img src="/assets/images/portfolio/p4.jpg" alt="portfolio image"/>
                            <div class="isotope-overlay">
                              <a href="#">
                                web development
                              </a>
                            </div>
                          </div>
                          <div class="item">
                            <img src="/assets/images/portfolio/p5.jpg" alt="portfolio image"/>
                            <div class="isotope-overlay">
                              <a href="#">
                                web development
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

		        </section>

            <section id="clients" class="clients">
              <div class="section-heading text-center">
                <h2>clients</h2>
              </div>
              <div class="clients-area">
                <div class="container">
                  <div class="owl-carousel owl-theme" id="client">
                    <div class="item">
                      <a href="#">
                      <img src="./assets/images/clients/c1.png" alt="brand-image" />
                      </a>
                    </div>
                    <div class="item">
                      <a href="#">
                        <img src="./assets/images/clients/c2.png" alt="brand-image" />
                      </a>
                    </div>
                    <div class="item">
                      <a href="#">
                        <img src="./assets/images/clients/c3.png" alt="brand-image" />
                      </a>
                    </div>
                    <div class="item">
                      <a href="#">
                        <img src="./assets/images/clients/c4.png" alt="brand-image" />
                      </a>
                    </div>
                    <div class="item">
                      <a href="#">
                        <img src="./assets/images/clients/c5.png" alt="brand-image" />
                      </a>
                    </div>
                    <div class="item">
                      <a href="#">
                        <img src="./assets/images/clients/c6.png" alt="brand-image" />
                      </a>
                    </div>
                    <div class="item">
                      <a href="#">
                        <img src="./assets/images/clients/c7.png" alt="brand-image" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>

		        </section>

            <section id="contact" class="contact">
              <div class="section-heading text-center">
                <h2>contact me</h2>
              </div>
              <div class="container">
                <div class="contact-content">
                  <div class="row">
                    <div class="col-md-offset-1 col-md-5 col-sm-6">
                      <div class="single-contact-box">
                        <div class="contact-form">
                          <form>
                            <div class="row">
                              <div class="col-sm-6 col-xs-12">
                                <div class="form-group">
                                <input type="text" className="form-control" id="name" placeholder="Name*" name="name" />
                                </div>
                              </div>
                              <div class="col-sm-6 col-xs-12">
                                <div class="form-group">
                                <input type="email" className="form-control" id="email" placeholder="Email*" name="email" />
                                </div>
                              </div>
                            </div>
                            <div class="row">
                              <div class="col-sm-12">
                                <div class="form-group">
                                <input type="text" className="form-control" id="subject" placeholder="Subject" name="subject" />
                                </div>
                              </div>
                            </div>
                            <div class="row">
                              <div class="col-sm-12">
                                <div class="form-group">
                                <textarea className="form-control" rows="8" id="comment" placeholder="Message"></textarea>
                                </div>
                              </div>
                            </div>
                            <div class="row">
                              <div class="col-sm-12">
                                <div class="single-contact-btn">
                                  <a class="contact-btn" href="#" role="button">submit</a>
                                </div>
                              </div>
                            </div>
                          </form>
                        </div>
                      </div>
                    </div>
                    <div class="col-md-offset-1 col-md-5 col-sm-6">
                      <div class="single-contact-box">
                        <div class="contact-adress">
                          <div class="contact-add-head">
                            <h3>browny star</h3>
                            <p>uI/uX designer</p>
                          </div>
                          <div class="contact-add-info">
                            <div class="single-contact-add-info">
                              <h3>phone</h3>
                              <p>987-123-6547</p>
                            </div>
                            <div class="single-contact-add-info">
                              <h3>email</h3>
                              <p>browny@info.com</p>
                            </div>
                            <div class="single-contact-add-info">
                              <h3>website</h3>
                              <p>www.brownsine.com</p>
                            </div>
                          </div>
                        </div>
                        <div class="hm-foot-icon">
                          <ul>
                            <li><a href="#"><i class="fa fa-facebook"></i></a></li>
                            <li><a href="#"><i class="fa fa-dribbble"></i></a></li>
                            <li><a href="#"><i class="fa fa-twitter"></i></a></li>
                            <li><a href="#"><i class="fa fa-linkedin"></i></a></li>
                            <li><a href="#"><i class="fa fa-instagram"></i></a></li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

		        </section>

            <footer id="footer-copyright" class="footer-copyright">
              <div class="container">
                <div class="hm-footer-copyright text-center">
                  <p>
                    &copy; copyright yourname. design and developed by <a href="https://www.themesine.com/">themesine</a>
                  </p>
                </div>
              </div>

              <div id="scroll-Top">
                <div class="return-to-top">
                  <i class="fa fa-angle-up " id="scroll-top" ></i>
                </div>
                
              </div>
			
            </footer>
      <section>
        <div className="section-heading text-center">
          <h2>My Development</h2>
        </div>

        <div>
        <MyDevelopment />
        <MyDevelopment />
        <MyDevelopment />
        <MyDevelopment />
        </div>
      </section>
    </>
  );
}

function MyDevelopment() {
  const stylelist = () => ({
    width: "25%",
    height: "300px",
    padding: "20px",
    border: "1px solid red",
    float:"left"
    
  });

  return (
    <div style={stylelist()}>
      <img src="./assets/develop/2.jpg" alt="brand-image" />
      <h1>Hello Bangladesh</h1>
      <p>Bangladesh is a small country</p>
    </div>
  );
}

export default Home;

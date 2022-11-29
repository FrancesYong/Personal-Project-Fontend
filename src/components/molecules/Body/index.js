import React from 'react'
import About from '../../data/dataAbout.json';
import Education from '../../data/dataEducation.json';

function index() {
  return (
    <div className="page-content">
      {/* {
       About.map(post =>{
          return (
            <div>
              <p>{post.Age}</p>
            </div>)
        })
      } */}
        <div>
          <div className="profile-page">
            <div className="wrapper">
              <div className="page-header page-header-small" filter-color="green">
                <div className="page-header-image" data-parallax="true" style={{backgroundImage: 'url("images/cc-bg-1.jpg")'}} />
                <div className="container">
                  <div className="content-center">
                    <div className="cc-profile-image"><a href="#"><img src="images/anthony.jpg" alt="Image" /></a></div>
                    <div className="h2 title">Yong, Frances Rully</div>
                    <p className="category text-white">Windows App Developer, Mobile App Developer, Web Developer, Graphic Designer</p>
                    {/* <a className="btn btn-primary smooth-scroll mr-2" href="#contact" data-aos="zoom-in" data-aos-anchor="data-aos-anchor">Hire Me</a><a className="btn btn-primary" href="#" data-aos="zoom-in" data-aos-anchor="data-aos-anchor">Download CV</a> */}
                  </div>
                </div>
                <div className="section">
                  <div className="container">
                    <div className="button-container"><a className="btn btn-default btn-round btn-lg btn-icon" href="#" rel="tooltip" title="Follow me on Facebook"><i className="fa fa-facebook" /></a><a className="btn btn-default btn-round btn-lg btn-icon" href="#" rel="tooltip" title="Follow me on Twitter"><i className="fa fa-twitter" /></a><a className="btn btn-default btn-round btn-lg btn-icon" href="#" rel="tooltip" title="Follow me on Google+"><i className="fa fa-google-plus" /></a><a className="btn btn-default btn-round btn-lg btn-icon" href="#" rel="tooltip" title="Follow me on Instagram"><i className="fa fa-instagram" /></a></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="section" id="about">
            <div className="container">
              <div className="card" data-aos="fade-up" data-aos-offset={10}>
                <div className="row">
                  <div className="col-lg-6 col-md-12">
                    <div className="card-body">
                      <div className="h4 mt-0 title">About</div>
                      <p>Hello! I am Yong, Frances Rully. Windows App Developer, Mobile App Developer, Web Developer, Graphic Designer.</p>
                      <p>I am a student from Universitas Klabat. I took the faculty of computer science majoring in informatics. <a href="https://templateflip.com/templates/creative-cv/" target="_blank">Learn More</a></p>
                    </div>
                  </div>
                  <div className="col-lg-6 col-md-12">
                    <div className="card-body">
                      <div className="h4 mt-0 title">Basic Information</div>
                      <div className="row">
                        <div className="col-sm-4"><strong className="text-uppercase">Age:</strong></div>
                        <div className="col-sm-8">{ About.map(post =>{ return (<div><p>{post.Age}</p></div>) }) }</div>
                      </div>
                      <div className="row mt-3">
                        <div className="col-sm-4"><strong className="text-uppercase">Email:</strong></div>
                        <div className="col-sm-8">{ About.map(post =>{ return (<div><p>{post.Email}</p></div>) }) }</div>
                      </div>
                      <div className="row mt-3">
                        <div className="col-sm-4"><strong className="text-uppercase">Phone:</strong></div>
                        <div className="col-sm-8">{ About.map(post =>{ return (<div><p>{post.Phone}</p></div>) }) }</div>
                      </div>
                      <div className="row mt-3">
                        <div className="col-sm-4"><strong className="text-uppercase">Address:</strong></div>
                        <div className="col-sm-8">{ About.map(post =>{ return (<div><p>{post.Address}</p></div>) }) }</div>
                      </div>
                      <div className="row mt-3">
                        <div className="col-sm-4"><strong className="text-uppercase">Language:</strong></div>
                        <div className="col-sm-8">{ About.map(post =>{ return (<div><p>{post.Language}</p></div>) }) }</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="section" id="skill">
            <div className="container">
              <div className="h4 text-center mb-4 title">Professional Skills</div>
              <div className="card" data-aos="fade-up" data-aos-anchor-placement="top-bottom">
                <div className="card-body">
                  <div className="row">
                    <div className="col-md-6">
                      <div className="progress-container progress-primary"><span className="progress-badge">HTML</span>
                        <div className="progress">
                          <div className="progress-bar progress-bar-primary" data-aos="progress-full" data-aos-offset={10} data-aos-duration={2000} role="progressbar" aria-valuenow={60} aria-valuemin={0} aria-valuemax={100} style={{width: '70%'}} /><span className="progress-value">70%</span>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="progress-container progress-primary"><span className="progress-badge">Illustrator</span>
                        <div className="progress">
                          <div className="progress-bar progress-bar-primary" data-aos="progress-full" data-aos-offset={10} data-aos-duration={2000} role="progressbar" aria-valuenow={60} aria-valuemin={0} aria-valuemax={100} style={{width: '85%'}} /><span className="progress-value">85%</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="row">
                    <div className="col-md-6">
                      <div className="progress-container progress-primary"><span className="progress-badge">CSS</span>
                        <div className="progress">
                          <div className="progress-bar progress-bar-primary" data-aos="progress-full" data-aos-offset={10} data-aos-duration={2000} role="progressbar" aria-valuenow={60} aria-valuemin={0} aria-valuemax={100} style={{width: '40%'}} /><span className="progress-value">40%</span>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="progress-container progress-primary"><span className="progress-badge">Photoshop</span>
                        <div className="progress">
                          <div className="progress-bar progress-bar-primary" data-aos="progress-full" data-aos-offset={10} data-aos-duration={2000} role="progressbar" aria-valuenow={60} aria-valuemin={0} aria-valuemax={100} style={{width: '80%'}} /><span className="progress-value">80%</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="row">
                    <div className="col-md-6">
                      <div className="progress-container progress-primary"><span className="progress-badge">JavaScript</span>
                        <div className="progress">
                          <div className="progress-bar progress-bar-primary" data-aos="progress-full" data-aos-offset={10} data-aos-duration={2000} role="progressbar" aria-valuenow={60} aria-valuemin={0} aria-valuemax={100} style={{width: '60%'}} /><span className="progress-value">60%</span>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="progress-container progress-primary"><span className="progress-badge">C++</span>
                        <div className="progress">
                          <div className="progress-bar progress-bar-primary" data-aos="progress-full" data-aos-offset={10} data-aos-duration={2000} role="progressbar" aria-valuenow={60} aria-valuemin={0} aria-valuemax={100} style={{width: '80%'}} /><span className="progress-value">80%</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="row">
                    <div className="col-md-6">
                      <div className="progress-container progress-primary"><span className="progress-badge">Bootstrap</span>
                        <div className="progress">
                          <div className="progress-bar progress-bar-primary" data-aos="progress-full" data-aos-offset={10} data-aos-duration={2000} role="progressbar" aria-valuenow={60} aria-valuemin={0} aria-valuemax={100} style={{width: '30%'}} /><span className="progress-value">30%</span>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="progress-container progress-primary"><span className="progress-badge">C#</span>
                        <div className="progress">
                          <div className="progress-bar progress-bar-primary" data-aos="progress-full" data-aos-offset={10} data-aos-duration={2000} role="progressbar" aria-valuenow={60} aria-valuemin={0} aria-valuemax={100} style={{width: '80%'}} /><span className="progress-value">80%</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="row">
                    <div className="col-md-6">
                      <div className="progress-container progress-primary"><span className="progress-badge">React JS</span>
                        <div className="progress">
                          <div className="progress-bar progress-bar-primary" data-aos="progress-full" data-aos-offset={10} data-aos-duration={2000} role="progressbar" aria-valuenow={60} aria-valuemin={0} aria-valuemax={100} style={{width: '50%'}} /><span className="progress-value">50%</span>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="progress-container progress-primary"><span className="progress-badge">Phython</span>
                        <div className="progress">
                          <div className="progress-bar progress-bar-primary" data-aos="progress-full" data-aos-offset={10} data-aos-duration={2000} role="progressbar" aria-valuenow={60} aria-valuemin={0} aria-valuemax={100} style={{width: '40%'}} /><span className="progress-value">40%</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                </div>
              </div>
            </div>
          </div>
          <div className="section" id="portfolio">
            <div className="container">
              <div className="row">
                <div className="col-md-6 ml-auto mr-auto">
                  <div className="h4 text-center mb-4 title">Portfolio</div>
                  <div className="nav-align-center">
                    <ul className="nav nav-pills nav-pills-primary" role="tablist">
                      <li className="nav-item"><a className="nav-link active" data-toggle="tab" href="#web-development" role="tablist"><i className="fa fa-laptop" aria-hidden="true" /></a></li>
                      <li className="nav-item"><a className="nav-link" data-toggle="tab" href="#graphic-design" role="tablist"><i className="fa fa-picture-o" aria-hidden="true" /></a></li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="tab-content gallery mt-5">
                <div className="tab-pane active" id="web-development">
                  <div className="ml-auto mr-auto">
                    <div className="row">
                      <div className="col-md-6">
                        <div className="cc-porfolio-image img-raised" data-aos="fade-up" data-aos-anchor-placement="top-bottom"><a href="#web-development">
                            <figure className="cc-effect"><img src="images/project-1.jpg" alt="Image" />
                              <figcaption>
                                <div className="h4">Recent Project</div>
                                <p>Web Development</p>
                              </figcaption>
                            </figure></a></div>
                      </div>
                      <div className="col-md-6">
                        <div className="cc-porfolio-image img-raised" data-aos="fade-up" data-aos-anchor-placement="top-bottom"><a href="#web-development">
                            <figure className="cc-effect"><img src="images/windows-app-1.jpg" alt="Image" />
                              <figcaption>
                                <div className="h4">Visual Programming Project</div>
                                <p>Windows App Development</p>
                              </figcaption>
                            </figure></a></div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="tab-pane" id="graphic-design" role="tabpanel">
                  <div className="ml-auto mr-auto">
                    <div className="row">
                      <div className="col-md-6">
                        <div className="cc-porfolio-image img-raised" data-aos="fade-up" data-aos-anchor-placement="top-bottom"><a href="#graphic-design">
                            <figure className="cc-effect"><img src="images/graphic-design-1.jpg" alt="Image" />
                              <figcaption>
                                <div className="h4">Vector Vexel</div>
                                <p>Graphic Design</p>
                              </figcaption>
                            </figure></a></div>
                        <div className="cc-porfolio-image img-raised" data-aos="fade-up" data-aos-anchor-placement="top-bottom"><a href="#graphic-design">
                            <figure className="cc-effect"><img src="images/graphic-design-2.jpg" alt="Image" />
                              <figcaption>
                                <div className="h4">Billboard</div>
                                <p>Graphic Design</p>
                              </figcaption>
                            </figure></a></div>
                      </div>
                      <div className="col-md-6">
                        <div className="cc-porfolio-image img-raised" data-aos="fade-up" data-aos-anchor-placement="top-bottom"><a href="#graphic-design">
                            <figure className="cc-effect"><img src="images/graphic-design-3.jpg" alt="Image" />
                              <figcaption>
                                <div className="h4">Lanyard</div>
                                <p>Graphic Design</p>
                              </figcaption>
                            </figure></a></div>
                        <div className="cc-porfolio-image img-raised" data-aos="fade-up" data-aos-anchor-placement="top-bottom"><a href="#graphic-design">
                            <figure className="cc-effect"><img src="images/graphic-design-4.jpg" alt="Image" />
                              <figcaption>
                                <div className="h4">Flyer</div>
                                <p>Graphic Design</p>
                              </figcaption>
                            </figure></a></div>
                      </div>
                      <div className="col-md-6">
                        <div className="cc-porfolio-image img-raised" data-aos="fade-up" data-aos-anchor-placement="top-bottom"><a href="#graphic-design">
                            <figure className="cc-effect"><img src="images/graphic-design-5.jpg" alt="Image" />
                              <figcaption>
                                <div className="h4">Tumbnail</div>
                                <p>Graphic Design</p>
                              </figcaption>
                            </figure></a></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="section" id="education">
            <div className="container cc-education">
              <div className="h4 text-center mb-4 title">Education</div>
              <div className="card">
                <div className="row">
                  <div className="col-md-3 bg-primary" data-aos="fade-right" data-aos-offset={50} data-aos-duration={500}>
                    <div className="card-body cc-education-header">
                      <p>{Education[0].waktu}</p>
                      <div className="h5">{Education[0].tingkat}</div>
                    </div>
                  </div>
                  <div className="col-md-9" data-aos="fade-left" data-aos-offset={50} data-aos-duration={500}>
                    <div className="card-body">
                      <div className="h5">{Education[0].jurusan}</div>
                      <p className="category">{Education[0].sekolah}</p>
                      <p>{Education[0].deskripsi}</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="card">
                <div className="row">
                  <div className="col-md-3 bg-primary" data-aos="fade-right" data-aos-offset={50} data-aos-duration={500}>
                    <div className="card-body cc-education-header">
                      <p>{Education[1].tingkat}</p>
                      <div className="h5">{Education[1].sekolah}</div>
                    </div>
                  </div>
                  <div className="col-md-9" data-aos="fade-left" data-aos-offset={50} data-aos-duration={500}>
                    <div className="card-body">
                      <div className="h5">{Education[1].jurusan}</div>
                      <p className="category">{Education[1].sekolah}</p>
                      <p>{Education[1].deskripsi}</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="card">
                <div className="row">
                  <div className="col-md-3 bg-primary" data-aos="fade-right" data-aos-offset={50} data-aos-duration={500}>
                    <div className="card-body cc-education-header">
                      <p>{Education[2].waktu}</p>
                      <div className="h5">{Education[2].tingkat}</div>
                    </div>
                  </div>
                  <div className="col-md-9" data-aos="fade-left" data-aos-offset={50} data-aos-duration={500}>
                    <div className="card-body">
                      {/* <div className="h5">Bachelor of Computer Science</div> */}
                      <p className="category">{Education[2].sekolah}</p>
                      <p>{Education[2].deskripsi}</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="card">
                <div className="row">
                  <div className="col-md-3 bg-primary" data-aos="fade-right" data-aos-offset={50} data-aos-duration={500}>
                    <div className="card-body cc-education-header">
                      <p>{Education[3].waktu}</p>
                      <div className="h5">{Education[3].tingkat}</div>
                    </div>
                  </div>
                  <div className="col-md-9" data-aos="fade-left" data-aos-offset={50} data-aos-duration={500}>
                    <div className="card-body">
                      {/* <div className="h5">Science and Mathematics</div> */}
                      <p className="category">{Education[3].sekolah}</p>
                      <p>{Education[3].deskripsi}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
    </div>
  )
}

export default index
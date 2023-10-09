import { faInstagram, faSquareFacebook, faTwitter } from '@fortawesome/free-brands-svg-icons';
import './footer.css';
import { faAngleUp, faEnvelopeOpen, faPhone } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import image1 from './../../images/news-image.jpg';
import { articles } from './news';





const Footer = (props) => {

     const displayNews = articles.slice(0,2).map((article, index) => (
     
          <div key={index} className="latest-stories">
          <div className="stories-image">
               <a href={'#news'}><img src={ image1 } className="img-responsive" alt=""/></a>
          </div>
          <div className="stories-info">
               <a href={'#news'}><h5>{ article.shortTitle }</h5></a>
               <span>{ article.date }</span>
          </div>
     </div>
          ));

    return (
    <div>
         <footer data-stellar-background-ratio="5">
               <div className="container">
                    <div className="row">

                         <div className="col-md-4 col-sm-4">
                              <div className="footer-thumb"> 
                                   <h4 className="wow fadeInUp" data-wow-delay="0.4s">Contact Info</h4>
                                   <p>Fusce at libero iaculis, venenatis augue quis, pharetra lorem. Curabitur ut dolor eu elit consequat ultricies.</p>

                                   <div className="contact-info" id="contact-info">
                                        <p><FontAwesomeIcon icon={faPhone}></FontAwesomeIcon> 010-070-0170</p>
                                        <p><FontAwesomeIcon icon={faEnvelopeOpen}></FontAwesomeIcon> <a href="#contact-info">info@company.com</a></p>
                                   </div>
                              </div>
                         </div>

                         <div className="col-md-4 col-sm-4"> 
                         <div className="footer-thumb"> 
                              <h4 className="wow fadeInUp" data-wow-delay="0.4s">Latest News</h4>

                              { displayNews }

                         </div>
                    </div>


                       

                         <div className="col-md-4 col-sm-4"> 
                              <div className="footer-thumb">
                                   <div className="opening-hours">
                                        <h4 className="wow fadeInUp" data-wow-delay="0.4s">Opening Hours</h4>
                                        <p>Monday - Friday <span>06:00 AM - 10:00 PM</span></p>
                                        <p>Saturday <span>09:00 AM - 08:00 PM</span></p>
                                        <p>Sunday <span>Closed</span></p>
                                   </div> 

                                   <ul className="social-icon" id="social-icon">
                                        <li><a className='fa' href="https://www.facebook.com/tooplate" attr="facebook icon"><FontAwesomeIcon  icon={faSquareFacebook} /> </a></li>
                                        <li><a className='fa' href="#social-icon"><FontAwesomeIcon  icon={faTwitter}></FontAwesomeIcon> </a></li>
                                        <li><a className='fa' href="#social-icon"><FontAwesomeIcon  icon={faInstagram}></FontAwesomeIcon> </a></li>
                                   </ul>
                              </div>
                         </div>

                         <div className="col-md-12 col-sm-12 border-top">
                              <div className="col-md-4 col-sm-6">
                                   <div className="copyright-text"> 
                                        <p>Copyright &copy; 2017 divineion 
                                        
                                        | Design: <a href="http://www.tooplate.com" target="_parent">Tooplate</a></p>
                                   </div>
                              </div>
                              <div className="col-md-6 col-sm-6">
                                   <div className="footer-link" id="footer-link"> 
                                        <a href="#footer-link">Laboratory Tests</a>
                                        <a href="#footer-link">Departments</a>
                                        <a href="#footer-link">Insurance Policy</a>
                                        <a href="#footer-link">Careers</a>
                                   </div>
                              </div>
                              <div className="col-md-2 col-sm-2 text-align-center">
                                   <div className="angle-up-btn"> 
                                   <a href="#root" className="smoothScroll wow fadeInUp" data-wow-delay="1.2s"><FontAwesomeIcon icon={ faAngleUp }></FontAwesomeIcon></a>
                                   </div>
                              </div>   
                         </div>
                         
                    </div>
               </div>
          </footer>
    </div>
     );
}

export default Footer;
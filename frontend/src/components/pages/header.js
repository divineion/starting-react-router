import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './header.css';
import { faCalendarPlus, faEnvelopeOpen, faPhone } from '@fortawesome/free-solid-svg-icons';

const Header = (props) => {
    return  (
     <header>
          <div className="container">
               <div className="row">

                    <div className="col-md-4 col-sm-5">
                         <p className='mt-0'>Welcome to a Professional Health Care</p>
                    </div>
                         
                    <div className="col-md-8 col-sm-7 text-align-right">
                         <span className="phone-icon"><FontAwesomeIcon icon={faPhone} className='fa'></FontAwesomeIcon> 010-060-0160</span>
                         <span className="date-icon"><FontAwesomeIcon icon={faCalendarPlus} className='fa'></FontAwesomeIcon> 6:00 AM - 10:00 PM (Mon-Fri)</span>
                         <span className="email-icon"><FontAwesomeIcon icon={faEnvelopeOpen} className='fa'></FontAwesomeIcon> <a href="mailto:info@company.com">info@company.com</a></span>
                    </div>

               </div>
          </div>
     </header>
    );
}
export default Header;
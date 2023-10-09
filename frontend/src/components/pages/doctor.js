import {  faEnvelopeOpen, faPhone } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import image1 from '../../images/news-image1.jpg';
import image2 from '../../images/news-image2.jpg';
import image3 from '../../images/news-image3.jpg';
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { Link } from "react-router-dom";

const Doctor = (props) => {

    const doctors = [
        {
            name:'Nate Baston',
            service: 'General Principal',
            phone: '010-020-0120',
            email: 'general@company.com',
            illustration: image1,
        },
        {
            name:'Jason Stewart',
            service: 'Pregnancy',
            phone: '010-070-0170',
            email: 'pregnancy@company.com',
            illustration: image2,
        },
        {
            name:'Miasha Nakahara',
            service: 'Cardiology',
            phone: '010-040-0140',
            email: 'cardio@company.com',
            illustration: image3,
        }
    ];


    function displayDoctors() {
        return doctors.map((doctor, index) => {
            return (
                <div className="col-md-4 col-sm-6" key={index}>
                    <div className="team-thumb wow fadeInUp" data-wow-delay="0.2s">
                        <img src={ doctor.illustration } className="img-responsive" alt=""/>

                        <div className="team-info">
                            <h3>{ doctor.name }</h3>
                            <p>{ doctor.service }</p>
                            <div className="team-contact-info" id="team-contact-info">
                                <p><Link to={`tel:${ doctor.phone }`}><FontAwesomeIcon icon={faPhone}></FontAwesomeIcon> { doctor.phone }</Link></p>
                                <p><FontAwesomeIcon icon={faEnvelopeOpen}></FontAwesomeIcon> <a href="#team-contact-info">{ doctor.email }</a></p>
                            </div>
                            <ul className="social-icon" id="social-icon1">
                                <li><Link to="#social-icon1"><FontAwesomeIcon icon={ faLinkedin }></FontAwesomeIcon> </Link></li>
                                <li><Link to={`mailto:${doctor.email}`}><FontAwesomeIcon icon={ faEnvelopeOpen }>lol</FontAwesomeIcon> </Link></li>
                            </ul>
                        </div>
                    </div>
                </div>
            )
        })
    };
    
    return (   <div className="row">
    { displayDoctors() }
</div>)
 
}



export default Doctor;
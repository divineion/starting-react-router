import './appointment.css';
import appointmentImage from '../../../images/appointment-image.jpg';
import ContactForm from './contactForm';

const Appointment = (props) => {
    return (
             <section id="appointment" data-stellar-background-ratio="3">
               <div className="container">
                    <div className="row">

                         <div className="col-md-6 col-sm-6" id='appointmentImage'>
                              <img src={ appointmentImage } className="img-responsive" alt="" width="455px" height="auto"/>
                         </div>
                         <div className="col-md-6 col-sm-6" id="CONTACTFORMHERE">
                              <ContactForm></ContactForm>
                         </div>

                    </div>
               </div>
          </section>
     );
}

export default Appointment;
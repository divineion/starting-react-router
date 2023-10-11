import './appointment.css';
import { useState } from 'react';
import emailjs from '@emailjs/browser';


let today;
today = new Date();
let defaultValueInputDate;
defaultValueInputDate = `${today.toISOString().split('T')[0]}`;
const contactFormEmpty = {
     name: '',
     email: '',
     date: defaultValueInputDate,
     phone: '',
     department: 'General',
     message: '', 
}

let appointment;

const ContactForm = (props) => {
    
     const [formData, setFormData] = useState({...contactFormEmpty})


     const onChangeHandler = (e) => {
          const name = e.target.name;
          const value = e.target.value;
          setFormData(formData => ({...formData, [name]: value}))
     }

     const handleSubmit = async (e) => {
          e.preventDefault()
          
          console.log('formData', formData);
          appointment = {...formData}

          await fetch('https://127.0.0.1:8000/apip/appointments.json', {
               method: 'POST',
               headers: {
                    'Content-Type': 'application/json',
               },
               body: JSON.stringify(appointment),
          })
          .then(response => {
               if (!response.ok) {
                    throw new Error('ERREUR ! statut :' + response.status);
               }
               console.log('response', response);
               return response.json()
          })
          .then(data => console.log(data))
          .catch((error) => {
               console.error('Error : ', error);
          });

          /**
           *  MAIL
           */

                (function() {
          // https://dashboard.emailjs.com/admin/account
          emailjs.init('GhUDJUsLSOC3pHJmg');
      })();

          var templateParams = {
               to_name: 'Health Center Team',
               from_name: appointment.name,
               message: `New appointment request from ${appointment.name}: \n message :  ${appointment.message}  \n preferred date : ${appointment.date} \n department : ${appointment.department}  \n email :  ${appointment.email} \n phone contact :  ${appointment.phone}`
           };

          emailjs.send('default_service', 'template_5binzzt', templateParams);


          setFormData({...contactFormEmpty})
          console.log('appointment', appointment)
     }

     return (
        <>
        <form onSubmit={handleSubmit} id="appointment-form" method="post" action="#">

             <div className="section-title wow fadeInUp" data-wow-delay="0.4s">
                  <h2>Make an appointment</h2>
             </div>

             <div className="wow fadeInUp" data-wow-delay="0.8s">
                  <div className="col-md-6 col-sm-6">
                       <label htmlFor="name">Name</label>
                       <input value={formData.name} onChange={onChangeHandler} type="text" className="form-control" id="name" name="name"  placeholder="Full Name" required/>
                  </div> 
                  <div className="col-md-6 col-sm-6">
                       <label htmlFor="email">Email</label>
                       <input  value={formData.email} onChange={onChangeHandler} type="email" className="form-control" id="email" name="email"  placeholder="Your Email" required/>
                  </div>
                  <div className="col-md-6 col-sm-6">
                       <label htmlFor="date">Select Date</label>
                       <input value={formData.date} onChange={onChangeHandler} type="date" name="date"  className="form-control" required/>
                  </div>

                    <div className="col-md-6 col-sm-6">
                         <label htmlFor="select">Select Department</label>
                         <select value={formData.department} onChange={onChangeHandler} name='department' className="form-control" required>
                             <optgroup label="Department">
                                   <option value='General'>General Health</option>
                                   <option value='Cardiology'>Cardiology</option>
                                   <option value='Dental'>Dental</option>
                                   <option value='Research'>Medical Research</option>
                              </optgroup>
                         </select>
                    </div>

                  <div className="col-md-12 col-sm-12">
                       <label htmlFor="telephone">Phone Number</label>
                       <input value={formData.phone} onChange={onChangeHandler} type="tel" className="form-control" id="phone" name="phone" placeholder="Phone" required/>

                       <label htmlFor="Message">Additional Message</label>
                       <textarea value={formData.message}  onChange={onChangeHandler} className="form-control" rows="5" id="message" name="message" placeholder="Message" required></textarea>
                       
                       <button type="submit" className="form-control" id="cf-submit" name="submit">Submit Button</button>
                  </div>
             </div>
        </form>
   </>

    )

}

export default ContactForm;

import './appointment.css';
import { useState } from 'react';


let today;
today = new Date();
let defaultValueInputDate;
defaultValueInputDate = `${today.toISOString().split('T')[0]}`;
const contactFormEmpty = {
     name: '',
     email: '',
     date: defaultValueInputDate,
     phone: '',
     department: '',
     message: ''
}

let appointment;

const ContactForm = (props) => {
    
     const [formData, setFormData] = useState({...contactFormEmpty})


     const onChangeHandler = (e) => {
          const name = e.target.name;
          const value = e.target.value;
          setFormData(formData => ({...formData, [name]: value}))
     }

     const handleSubmit = (e) => {
          e.preventDefault()
          appointment = {...formData}
          setFormData({...contactFormEmpty})
          console.log(appointment)
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
                       <input value={formData.name} onChange={onChangeHandler} type="text" className="form-control" id="name" name="name"  placeholder="Full Name"/>
                  </div> 
                  <div className="col-md-6 col-sm-6">
                       <label htmlFor="email">Email</label>
                       <input  value={formData.email} onChange={onChangeHandler} type="email" className="form-control" id="email" name="email"  placeholder="Your Email"/>
                  </div>
                  <div className="col-md-6 col-sm-6">
                       <label htmlFor="date">Select Date</label>
                       <input value={formData.date} onChange={onChangeHandler} type="date" name="date"  className="form-control"/>
                  </div>

                    <div className="col-md-6 col-sm-6">
                         <label htmlFor="select">Select Department</label>
                         <select value={formData} onChange={onChangeHandler} name='department' className="form-control">
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
                       <input value={formData.phone} onChange={onChangeHandler} type="tel" className="form-control" id="phone" name="phone" placeholder="Phone"/>

                       <label htmlFor="Message">Additional Message</label>
                       <textarea value={formData.message}  onChange={onChangeHandler} className="form-control" rows="5" id="message" name="message" placeholder="Message"></textarea>
                       
                       <button type="submit" className="form-control" id="cf-submit" name="submit">Submit Button</button>
                  </div>
             </div>
        </form>
   </>

    )

}

export default ContactForm;
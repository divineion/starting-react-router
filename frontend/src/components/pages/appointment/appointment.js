import "./appointment.css";
import appointmentImage from "../../../images/appointment-image.jpg";
import ContactForm from "./contactForm";
import ModificationRequestForm from "./modificationRequestForm";
import { Link } from "react-router-dom";
import React, { useState } from "react";

const Appointment = (props) => {
  // state pour conditionner l'affichage
  const [showContactForm, setShowContactForm] = useState(true);

  const toggleForm = () => {
    setShowContactForm(!showContactForm);
  };

  return (
    <section id="appointment" data-stellar-background-ratio="3">
      <div className="container">
        <div className="row">
          <div className="col-md-6 col-sm-6" id="appointmentImage">
            <img
              src={appointmentImage}
              className="img-responsive"
              alt=""
              width="455px"
              height="auto"
            />
          </div>
          <div className="col-md-6 col-sm-6" id="CONTACTFORMHERE">
            <div className="section-title wow fadeInUp" data-wow-delay="0.4s">
              {showContactForm ? (
                <h2>Make an appointment</h2>
              ) : (
                <div
                  className="section-title wow fadeInUp"
                  data-wow-delay="0.4s"
                >
                  <p>
                    Please provide the information regarding your appointment
                  </p>
                </div>
              )}
            </div>
            <p>
              <Link to="" onClick={toggleForm}>
                {showContactForm
                  ? "Request a modification of a confirmed appointment"
                  : "Go back to contact form"}
              </Link>
            </p>

            {showContactForm ? <ContactForm /> : <ModificationRequestForm />}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Appointment;

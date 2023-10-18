import { faEnvelopeOpen, faPhone } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

//import { Card } from "react-bootstrap";

const Doctor = (props) => {
  const [doctorsList, setDoctorsList] = useState([]);

  //les hooks doivent être utilisés à l'intérieur de composants React... hum

  useEffect(() => {
    fetch("https://127.0.0.1:8000/apip/doctors?page=1")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Erreur réseau");
        }
        return response.json();
      })
      .then((data) => {
        setDoctorsList(data["hydra:member"]);
      })
      .catch((error) => {
        console.log("Erreur : ", error);
      });
  }, []);

  return (
    <div className="row">
      {doctorsList.map((doctor, index) => (
        <div className="col-md-4 col-sm-6" key={index}>
          <div className="team-thumb wow fadeInUp" data-wow-delay="0.2s">
            <img src={doctor.illustration} className="img-responsive" alt="" />

            <div className="team-info">
              <h3>{doctor.name}</h3>
              <p>{doctor.service}</p>
              <div className="team-contact-info" id="team-contact-info">
                <p>
                  <Link to={`tel:${doctor.phone}`}>
                    <FontAwesomeIcon icon={faPhone}></FontAwesomeIcon>{" "}
                    {doctor.phone}
                  </Link>
                </p>
                <p>
                  <FontAwesomeIcon icon={faEnvelopeOpen}></FontAwesomeIcon>{" "}
                  <a href={`mailto:${doctor.email}`}>{doctor.email}</a>
                </p>
              </div>
              <ul className="social-icon" id="social-icon1">
                <li>
                  <Link to="#social-icon1">
                    <FontAwesomeIcon icon={faLinkedin}></FontAwesomeIcon>{" "}
                  </Link>
                </li>
                <li>
                  <Link to={`mailto:${doctor.email}`}>
                    <FontAwesomeIcon icon={faEnvelopeOpen}>lol</FontAwesomeIcon>{" "}
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Doctor;

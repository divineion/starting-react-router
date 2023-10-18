import "./appointment.css";
import { useState } from "react";

const modificationFormEmpty = {
  name: "",
  id: "",
  date: "",
  email: "",
};

let elementsToCkeck;
let idToCheck;
let data;
let nameToCheck;
let matchFolder;

const ModificationForm = (props) => {
  const [modificationFormData, setModificationFormData] = useState({
    ...modificationFormEmpty,
  });
  const [matchResult, setMatchResult] = useState(false);

  const onChangeHandler = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setModificationFormData((modificationFormData) => ({
      ...modificationFormData,
      [name]: value,
    }));
    console.log("name et value des input : ", name, value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    elementsToCkeck = { ...modificationFormData };
    console.log("elementsToCkeck.name : ", elementsToCkeck.name);
    idToCheck = parseInt(modificationFormData.id);
    nameToCheck = modificationFormData.name;
    console.log("log depuis handleSubmit : ", matchResult);
    if (modificationFormData.id) {
      async function submitForm(form, onsubmit) {
        (() => {
          console.log(
            "modificationFormData.name : ",
            modificationFormData.name
          );
        })();
        try {
          console.log(modificationFormData.id);
          const response = await fetch(
            `https://127.0.0.1:8000/apip/appointments/${modificationFormData.id}.json`
          );
          if (!response.ok) {
            console.log("element not found");
            throw new Error(
              "Erreur depuis la function submitForm, statut : " +
                response.status
            );
          }
          const getData = await response.json();
          console.log("data from submitForm() : ", getData);
        } catch (error) {
          console.log(error);
        }
      }
      submitForm();
    } else {
      try {
        console.log(idToCheck);
        const response = await fetch(
          `https://127.0.0.1:8000/apip/appointments/${modificationFormData.id}.json`,
          {
            method: "PATCH",
            headers: {
              "Content-Type": "application/merge-patch+json",
            },
            body: JSON.stringify({
              date: modificationFormData.date,
            }),
          }
        );
        if (!response.ok) {
          console.log("element not found");
          throw new Error(
            "Erreur lors de la modif, statut : " + response.status
          );
        }
        data = await response.json();

        // Mise à jour de matchResult en fonction des résultats de la requête
        setMatchResult(matchFolder());
        console.log("matchResult : ", matchResult);
      } catch (error) {
        console.error("Error catchée : ", error);
      }
    }

    /**
     *  MAIL APPOINTMENT NEW INFORMATIONS
     */

    //      (function() {
    //      // https://dashboard.emailjs.com/admin/account
    //      emailjs.init('GhUDJUsLSOC3pHJmg');// clé publique à créer
    //  })();

    // var templateParams = {
    //      to_name: 'Health Center Team',
    //      from_name: appointment.name,
    //      message: `New appointment modification from ${appointment.name}: \n message :  ${appointment.message}  \n preferred date : ${appointment.date} \n department : ${appointment.department}  \n email :  ${appointment.email} \n phone contact :  ${appointment.phone}`
    //  };

    //emailjs.send('default_service', 'template_5binzzt', templateParams); //template à définir

    //setModificationFormData({...modificationFormEmpty})
  };

  matchFolder = () => {
    if (idToCheck === data.id && nameToCheck === data.name) {
      console.log("dossier trouvé");
      let folder = [];
      folder = data;
      console.log("folder : ", folder);
      return true;
    } else if (
      modificationFormData.id === data.id &&
      modificationFormData.name === data.name
    ) {
      console.log("else if dossier trouvé");
      let folder = [];
      folder = data;
      console.log("else if folder : ", folder);
      return true;
    }
  };

  return (
    <>
      <form
        onSubmit={handleSubmit}
        id="modification-form"
        method="get"
        action="#"
        className="was-validated"
      >
        {matchResult && (
          <div className="col-md-12 col-sm-12">
            <div className="col-md-6 col-sm-6">
              <label htmlFor="name">Name</label>
              <input
                value={data.name}
                readOnly
                type="text"
                className="form-control"
                id="name"
                name="name"
                placeholder="Full Name"
                required
              />
            </div>
            <div className="col-md-12 col-sm-12">
              <label htmlFor="modificationFormId">Appointment Identifier</label>
              <input
                aria-describedby="modificationFormId"
                value={modificationFormData.id}
                readOnly
                type="number"
                className="form-control"
                id="modificationFormId"
                name="id"
                placeholder="identifier"
                required
              />
            </div>
            <div className="col-md-6 col-sm-6">
              <label htmlFor="email">Email</label>
              <input
                onChange={onChangeHandler}
                value={data.email}
                type="email"
                className="form-control"
                id="email"
                name="email"
                placeholder="Your Email"
                required
              />
            </div>
            <div className="col-md-6 col-sm-6">
              <label htmlFor="date">Date</label>
              <input
                onChange={onChangeHandler}
                value={modificationFormData.date}
                type="date"
                name="date"
                className="form-control"
                required
              />
            </div>

            <div className="col-md-6 col-sm-6">
              <label htmlFor="select">Department</label>
              <select
                value={data.department}
                onChange={onChangeHandler}
                name="department"
                className="form-control"
                required
              >
                <optgroup label="Department">
                  <option value="1">General Health</option>
                  <option value="2">Cardiology</option>
                  <option value="3">Dental</option>
                  <option value="4">Medical Research</option>
                </optgroup>
              </select>
            </div>
            <div className="col-md-12 col-sm-12">
              <button
                className="form-control"
                id="modif-submit"
                name="modif-submit"
              >
                Modify
              </button>
            </div>
          </div>
        )}

        {!matchResult && (
          <div className="col-md-12 col-sm-12">
            <div className="wow fadeInUp" data-wow-delay="0.8s">
              <div className="col-md-6 col-sm-6">
                <label htmlFor="name">Name</label>
                <input
                  value={modificationFormData.name}
                  onChange={onChangeHandler}
                  type="text"
                  className="form-control"
                  id="name"
                  name="name"
                  placeholder="Full Name"
                  required
                />
              </div>
              <div className="col-md-12 col-sm-12">
                <label htmlFor="modificationFormId">
                  Appointment Identifier
                </label>
                <input
                  aria-describedby="modificationFormId"
                  value={modificationFormData.id}
                  onChange={onChangeHandler}
                  type="number"
                  className="form-control"
                  id="modificationFormId"
                  name="id"
                  placeholder="identifier"
                  required
                />
              </div>
              <button
                className="form-control"
                id="cf-submit"
                name="check-submit"
              >
                Submit
              </button>
            </div>
          </div>
        )}
      </form>
    </>
  );
};

export default ModificationForm;

import React, { useState } from 'react';

const Education = ({ educationList, setEducationList }) => {
  const [newEducation, setNewEducation] = useState({ institution: '', datedebut: '', datefin: '', diploma: '' });

  const handleEducationChange = (index, e) => {
    const { name, value } = e.target;
    const updatedEducationList = [...educationList];
    updatedEducationList[index][name] = value;
    setEducationList(updatedEducationList);
  };

  const handleNewEducationChange = (e) => {
    const { name, value } = e.target;
    setNewEducation({ ...newEducation, [name]: value });
  };

  const addEducation = () => {
    setEducationList([...educationList, newEducation]);
    setNewEducation({ institution: '', datedebut: '', datefin: '', diploma: '' }); // Reset newEducation
  };

  return (
    <div>
      <h4>Formation</h4>

      {/* Form for adding new education */}
      <div className="form-group">
        <label>Institution :</label>
        <input
          type="text"
          name="institution"
          value={newEducation.institution}
          onChange={handleNewEducationChange}
          className="form-control"
        />
        <label>Date de début :</label>
        <input
          type="date"
          name="datedebut"
          value={newEducation.datedebut}
          onChange={handleNewEducationChange}
          className="form-control"
        />
        <label>Date de fin :</label>
        <input
          type="date"
          name="datefin"
          value={newEducation.datefin}
          onChange={handleNewEducationChange}
          className="form-control"
        />
        <label>Diplôme :</label>
        <input
          type="text"
          name="diploma"
          value={newEducation.diploma}
          onChange={handleNewEducationChange}
          className="form-control"
        />
      </div>
      
      <button type="button" onClick={addEducation} className="btn btn-primary mb-2">
        Ajouter Formation
      </button>

      {/* Display the list of educations */}
      <h5>Liste des formations ajoutées :</h5>
      <ul className="list-group">
        {educationList.map((education, index) => (
          <li key={index} className="list-group-item">
            <strong>{education.institution}</strong><br />
            <em>{education.datedebut} - {education.datefin}</em><br />
            <p>Diplôme : {education.diploma}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Education;

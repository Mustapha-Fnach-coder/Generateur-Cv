import React, { useState } from 'react';

const Experience = ({ experienceList, setExperienceList }) => {
  const [newExperience, setNewExperience] = useState({ entreprise: '', datedebut: '', datefin: '', taches: '' });

  const handleExperienceChange = (index, e) => {
    const { name, value } = e.target;
    const updatedExperienceList = [...experienceList];
    updatedExperienceList[index][name] = value;
    setExperienceList(updatedExperienceList);
  };

  const handleNewExperienceChange = (e) => {
    const { name, value } = e.target;
    setNewExperience({ ...newExperience, [name]: value });
  };

  const addExperience = () => {
    setExperienceList([...experienceList, newExperience]);
    setNewExperience({ entreprise: '', datedebut: '', datefin: '', taches: '' }); // Reset newExperience
  };
    const removeLastExperience = () => {
        if (experienceList.length > 0) {
            const updatedExperienceList = experienceList.slice(0, -1); // Remove last item
            setExperienceList(updatedExperienceList);
        }
    };
  return (
    <div>
      <h4>Expérience professionnelle</h4>

      {/* Form for adding new experience */}
      <div className="form-group">
        <label>Entreprise :</label>
        <input
          type="text"
          name="entreprise"
          value={newExperience.entreprise}
          onChange={handleNewExperienceChange}
          className="form-control"
        />
        <label>Date de début :</label>
        <input
          type="date"
          name="datedebut"
          value={newExperience.datedebut}
          onChange={handleNewExperienceChange}
          className="form-control"
        />
        <label>Date de fin :</label>
        <input
          type="date"
          name="datefin"
          value={newExperience.datefin}
          onChange={handleNewExperienceChange}
          className="form-control"
        />
        <label>Tâches réalisées :</label>
        <textarea
          name="taches"
          value={newExperience.taches}
          onChange={handleNewExperienceChange}
          className="form-control"
        />
      </div>
      
      <button type="button" onClick={addExperience} className="btn btn-primary mb-2">
        Ajouter Expérience
      </button>

          <button type="button" onClick={removeLastExperience} className="btn btn-danger mb-2">
              Supprimer la dernière formation
       </button>


      {/* Display the list of experiences */}
      <h5>Liste des expériences ajoutées :</h5>
      <ul className="list-group">
        {experienceList.map((experience, index) => (
          <li key={index} className="list-group-item">
            <strong>{experience.entreprise}</strong><br />
            <em>{experience.datedebut} - {experience.datefin}</em><br />
            <p>{experience.taches}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Experience;

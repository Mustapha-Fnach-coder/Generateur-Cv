import React from 'react';

const Experience = ({ experienceList, setExperienceList }) => {
  const handleExperienceChange = (index, e) => {
    const { name, value } = e.target;
    const updatedExperienceList = [...experienceList];
    updatedExperienceList[index][name] = value;
    setExperienceList(updatedExperienceList);
  };

  const addExperience = () => {
    setExperienceList([...experienceList, { entreprise: '', datedebut: '', datefin: '', taches: '' }]);
  };

  return (
    <div>
      <h4>Expérience professionnelle</h4>
      {experienceList.map((experience, index) => (
        <div key={index} className="form-group">
          <label>Entreprise :</label>
          <input
            type="text"
            name="entreprise"
            value={experience.entreprise}
            onChange={(e) => handleExperienceChange(index, e)}
            className="form-control"
          />
          <label>Date de début :</label>
          <input
            type="date"
            name="datedebut"
            value={experience.datedebut}
            onChange={(e) => handleExperienceChange(index, e)}
            className="form-control"
          />
          <label>Date de fin :</label>
          <input
            type="date"
            name="datefin"
            value={experience.datefin}
            onChange={(e) => handleExperienceChange(index, e)}
            className="form-control"
          />
          <label>Tâches réalisées :</label>
          <textarea
            name="taches"
            value={experience.taches}
            onChange={(e) => handleExperienceChange(index, e)}
            className="form-control"
          />
        </div>
      ))}
      <button type="button" onClick={addExperience} className="btn btn-primary mb-2">
        Ajouter Expérience
      </button>
    </div>
  );
};

export default Experience;
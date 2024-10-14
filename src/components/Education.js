import React from 'react';

const Education = ({ educationList, setEducationList }) => {
  const handleEducationChange = (index, e) => {
    const { name, value } = e.target;
    const updatedEducationList = [...educationList];
    updatedEducationList[index][name] = value;
    setEducationList(updatedEducationList);
  };

  const addEducation = () => {
    setEducationList([...educationList, { institution: '', datedebut: '', datefin: '', diploma: '' }]);
  };

  return (
    <div>
      <h4>Formation</h4>
      {educationList.map((education, index) => (
        <div key={index} className="form-group">
          <label>Institution :</label>
          <input
            type="text"
            name="institution"
            value={education.institution}
            onChange={(e) => handleEducationChange(index, e)}
            className="form-control"
          />
          <label>Date de début :</label>
          <input
            type="date"
            name="datedebut"
            value={education.datedebut}
            onChange={(e) => handleEducationChange(index, e)}
            className="form-control"
          />
          <label>Date de fin :</label>
          <input
            type="date"
            name="datefin"
            value={education.datefin}
            onChange={(e) => handleEducationChange(index, e)}
            className="form-control"
          />
          <label>Diplôme :</label>
          <input
            type="text"
            name="diploma"
            value={education.diploma}
            onChange={(e) => handleEducationChange(index, e)}
            className="form-control"
          />
        </div>
      ))}
      <button type="button" onClick={addEducation} className="btn btn-primary mb-2">
        Ajouter Formation
      </button>
    </div>
  );
};

export default Education;
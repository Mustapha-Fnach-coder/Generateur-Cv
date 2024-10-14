import React, { useState } from 'react';

const Skills = ({ hobbiesList, setHobbiesList, skillsList, setSkillsList, languagesList, setLanguagesList }) => {
  const [newHobby, setNewHobby] = useState('');
  const [newSkill, setNewSkill] = useState('');
  const [newLanguage, setNewLanguage] = useState('');

  const addToList = (list, setList, value, setValue) => {
    if (value) {
      setList((prev) => [...prev, value]);
      setValue('');
    }
  };

  return (
    <div>
      <h4>Hobbies</h4>
      <div className="form-group">
        <input
          type="text"
          value={newHobby}
          onChange={(e) => setNewHobby(e.target.value)}
          className="form-control mb-2"
          placeholder="Ajouter un hobbie"
        />
        <button
          type="button"
          onClick={() => addToList(hobbiesList, setHobbiesList, newHobby, setNewHobby)}
          className="btn btn-primary mb-2"
        >
          Ajouter Hobbie
        </button>
      </div>

      <h4>Compétences</h4>
      <div className="form-group">
        <input
          type="text"
          value={newSkill}
          onChange={(e) => setNewSkill(e.target.value)}
          className="form-control mb-2"
          placeholder="Ajouter une compétence"
        />
        <button
          type="button"
          onClick={() => addToList(skillsList, setSkillsList, newSkill, setNewSkill)}
          className="btn btn-primary mb-2"
        >
          Ajouter Compétence
        </button>
      </div>

      <h4>Langues</h4>
      <div className="form-group">
        <input
          type="text"
          value={newLanguage}
          onChange={(e) => setNewLanguage(e.target.value)}
          className="form-control mb-2"
          placeholder="Ajouter une langue"
        />
        <button
          type="button"
          onClick={() => addToList(languagesList, setLanguagesList, newLanguage, setNewLanguage)}
          className="btn btn-primary mb-2"
        >
          Ajouter Langue
        </button>
      </div>
    </div>
  );
};

export default Skills;
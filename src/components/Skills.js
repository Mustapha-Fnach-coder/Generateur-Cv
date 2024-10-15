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

    const removeLastItem = (list, setList) => {
        if (list.length > 0) {
            setList((prev) => prev.slice(0, -1)); 
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
        <button
            type="button"
            onClick={() => removeLastItem(hobbiesList, setHobbiesList)}
            className="btn btn-danger mb-2"
        >
         Supprimer le dernier hobbie
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
              <button
                  type="button"
                  onClick={() => removeLastItem(skillsList, setSkillsList)}
                  className="btn btn-danger mb-2"
              >
                  Supprimer le dernier hobbie
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
              <button
                  type="button"
                  onClick={() => removeLastItem(languagesList, setLanguagesList)}
                  className="btn btn-danger mb-2"
              >
                  Supprimer le dernier hobbie
              </button>
      </div>
    </div>
  );
};

export default Skills;
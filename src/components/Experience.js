import React, { useState } from 'react';

const Experience = ({ experienceList, setExperienceList }) => {
  const [newExperience, setNewExperience] = useState({
    entreprise: '',
    datedebut: '',
    datefin: '',
    taches: []
  });

  const [newTask, setNewTask] = useState(''); // حالة لتتبع المهمة الجديدة

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

  // لإضافة مهمة جديدة إلى لائحة المهام
  const addTask = () => {
    if (newTask.trim() !== '') {
      setNewExperience({
        ...newExperience,
        taches: [...newExperience.taches, newTask] // إضافة المهمة إلى اللائحة
      });
      setNewTask(''); // إعادة تعيين حقل المهمة بعد الإضافة
    }
  };

  const addExperience = () => {
    setExperienceList([...experienceList, newExperience]);
    setNewExperience({ entreprise: '', datedebut: '', datefin: '', taches: [] }); // إعادة تعيين حالة التجربة
  };

  const removeLastExperience = () => {
    if (experienceList.length > 0) {
      const updatedExperienceList = experienceList.slice(0, -1); // حذف آخر تجربة
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
        
        {/* Section for adding multiple tasks */}
        <label>Ajouter une tâche :</label>
        <div className="d-flex">
          <input
            type="text"
            value={newTask}
            onChange={(e) => setNewTask(e.target.value)}
            placeholder="Ajouter une tâche"
            className="form-control"
          />
          <button type="button" onClick={addTask} className="btn btn-secondary ml-2">
            Ajouter tâche
          </button>
        </div>

        {/* Displaying added tasks */}
        <ul className="list-group mt-2">
          {newExperience.taches.map((task, index) => (
            <li key={index} className="list-group-item">
              {task}
            </li>
          ))}
        </ul>
      </div>

      <button type="button" onClick={addExperience} className="btn btn-primary mb-2">
        Ajouter Expérience
      </button>

      <button type="button" onClick={removeLastExperience} className="btn btn-danger mb-2">
        Supprimer la dernière expérience
      </button>

      {/* Display the list of experiences */}
      <h5>Liste des expériences ajoutées :</h5>
      <ul className="list-group">
        {experienceList.map((experience, index) => (
          <li key={index} className="list-group-item">
            <strong>{experience.entreprise}</strong><br />
            <em>{experience.datedebut} - {experience.datefin}</em><br />
            <p>Tâches réalisées :</p>
            <ul>
              {experience.taches.map((task, taskIndex) => (
                <li key={taskIndex}>{task}</li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Experience;

import React, { useState } from 'react';
import PersonalInfo from './PersonalInfo';
import Experience from './Experience';
import Education from './Education';
import Skills from './Skills';
import CvDisplay from './CvDisplay';
import { generatePDF } from '../utils/pdfGenerator';

const CvGenerator = () => {
  const [formData, setFormData] = useState({
    profilePicture: null,
    nom: '',
    prenom:'',
    title: '',
    objective: '',
    email: '',
    phone: '',
    address: '',
    linkedIn: '',
  });

  const [experienceList, setExperienceList] = useState([
    { entreprise: '', datedebut: '', datefin: '', taches: []},
  ]);

  const [educationList, setEducationList] = useState([
    { institution: '', datedebut: '', datefin: '', diploma: '' },
  ]);

  const [hobbiesList, setHobbiesList] = useState([]);
  const [skillsList, setSkillsList] = useState([]);
  const [languagesList, setLanguagesList] = useState([]);

  const handleChange = (e) => {
    const { name, value, type, files } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === 'file' ? files[0] : value,
    }));
  };

  return (
    <div>
      <form className="mb-5">
        <PersonalInfo formData={formData} handleChange={handleChange} />
        <Experience 
          experienceList={experienceList} 
          setExperienceList={setExperienceList} 
        />
        <Education 
          educationList={educationList} 
          setEducationList={setEducationList} 
        />
        <Skills 
          hobbiesList={hobbiesList} 
          setHobbiesList={setHobbiesList}
          skillsList={skillsList} 
          setSkillsList={setSkillsList}
          languagesList={languagesList} 
          setLanguagesList={setLanguagesList}
        />
      </form>

      <CvDisplay 
        formData={formData}
        experienceList={experienceList}
        educationList={educationList}
        hobbiesList={hobbiesList}
        skillsList={skillsList}
        languagesList={languagesList}
      />

      <button onClick={() => generatePDF('cvDisplay')} className="btn btn-success">
        Télécharger le CV en PDF
      </button>
    </div>
  );
};

export default CvGenerator;
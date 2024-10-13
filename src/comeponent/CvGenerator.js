import React, { useState } from 'react';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';
import './style.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import './stylees.css'

const CvGenerator = () => {
  const [formData, setFormData] = useState({
    profilePicture: null,
    name: '',
    title: '',
    objective: '',
    email: '',
    phone: '',
    address: '',
    linkedIn: '',
  });

  const [experienceList, setExperienceList] = useState([
    { entreprise: '', datedebut: '', datefin: '', taches: '' },
  ]);

  const [educationList, setEducationList] = useState([
    { institution: '', datedebut: '', datefin: '', diploma: '' },
  ]);

  const [hobbiesList, setHobbiesList] = useState([]);
  const [skillsList, setSkillsList] = useState([]);
  const [languagesList, setLanguagesList] = useState([]);

  const [newHobby, setNewHobby] = useState('');
  const [newSkill, setNewSkill] = useState('');
  const [newLanguage, setNewLanguage] = useState('');

  const handleChange = (e) => {
    const { name, value, type, files } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === 'file' ? files[0] : value,
    }));
  };

  const handleExperienceChange = (index, e) => {
    const { name, value } = e.target;
    const updatedExperienceList = [...experienceList];
    updatedExperienceList[index][name] = value;
    setExperienceList(updatedExperienceList);
  };

  const handleEducationChange = (index, e) => {
    const { name, value } = e.target;
    const updatedEducationList = [...educationList];
    updatedEducationList[index][name] = value;
    setEducationList(updatedEducationList);
  };

  const addExperience = () => {
    setExperienceList([...experienceList, { entreprise: '', datedebut: '', datefin: '', taches: '' }]);
  };

  const addEducation = () => {
    setEducationList([...educationList, { institution: '', datedebut: '', datefin: '', diploma: '' }]);
  };

  const addToList = (list, setList, value, setValue) => {
    if (value) {
      setList((prev) => [...prev, value]);
      setValue(''); // Reset the input field after adding
    }
  };

  const generatePDF = () => {
    const input = document.getElementById('cvDisplay');

    html2canvas(input).then((canvas) => {
      const imgData = canvas.toDataURL('image/png');
      const pdf = new jsPDF();
      const imgWidth = 190;
      const pageHeight = pdf.internal.pageSize.height;
      const imgHeight = (canvas.height * imgWidth) / canvas.width;
      let heightLeft = imgHeight;

      let position = 0;

      pdf.addImage(imgData, 'PNG', 10, position, imgWidth, imgHeight);
      heightLeft -= pageHeight;

      while (heightLeft >= 0) {
        position = heightLeft - imgHeight;
        pdf.addPage();
        pdf.addImage(imgData, 'PNG', 10, position, imgWidth, imgHeight);
        heightLeft -= pageHeight;
      }

      pdf.save('cv.pdf');
    });
  };

  return (
    <div>
    <div className="container mt-4">
      <h1 className="text-center mb-4">Formulaire CV</h1>
      <form className="mb-5">
        {/* Informations personnelles */}
        <div className="form-group">
          <label>Photo de profil :</label>
          <input 
            type="file" 
            name="profilePicture" 
            accept="image/*" 
            onChange={handleChange} 
            className="form-control"
          />
        </div>

        <div className="form-group">
          <label>Nom complet :</label>
          <input 
            type="text" 
            name="name" 
            value={formData.name} 
            onChange={handleChange} 
            className="form-control" 
            required 
          />
        </div>

        <div className="form-group">
          <label>Titre de poste :</label>
          <input 
            type="text" 
            name="title" 
            value={formData.title} 
            onChange={handleChange} 
            className="form-control" 
            required 
          />
        </div>

        <div className="form-group">
          <label>Objectif :</label>
          <textarea 
            type="text" 
            name="objective" 
            value={formData.objective} 
            onChange={handleChange} 
            className="form-control" 
            required 
          />
        </div>

        <div className="form-group">
          <label>Email :</label>
          <input 
            type="email" 
            name="email" 
            value={formData.email} 
            onChange={handleChange} 
            className="form-control" 
            required 
          />
        </div>

        <div className="form-group">
          <label>Téléphone :</label>
          <input 
            type="text" 
            name="phone" 
            value={formData.phone} 
            onChange={handleChange} 
            className="form-control" 
            required 
          />
        </div>

        <div className="form-group">
          <label>Adresse :</label>
          <input 
            type="text" 
            name="address" 
            value={formData.address} 
            onChange={handleChange} 
            className="form-control" 
            required 
          />
        </div>

        <div className="form-group">
          <label>LinkedIn :</label>
          <input 
            type="text" 
            name="linkedIn" 
            value={formData.linkedIn} 
            onChange={handleChange} 
            className="form-control" 
          />
        </div>

        {/* Expérience professionnelle */}
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

        {/* Formation */}
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
          </div>
        ))}
        <button type="button" onClick={addEducation} className="btn btn-primary mb-2">
          Ajouter Formation
        </button>

        {/* Hobbies */}
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

        {/* Compétences */}
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

        {/* Langues */}
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
      </form>

      {/* Affichage du CV */}
      <div >
        <h2>{formData.name}</h2>
        <p><strong>{formData.title}</strong></p>
        <p>{formData.objective}</p>
        {formData.profilePicture && (
          <img
            src={URL.createObjectURL(formData.profilePicture)}
            alt="Profile"
            style={{ width: '150px', borderRadius: '50%' }}
          />
        )}
        <p><strong>Email : </strong>{formData.email}</p>
        <p><strong>Téléphone : </strong>{formData.phone}</p>
        <p><strong>Adresse : </strong>{formData.address}</p>
        {formData.linkedIn && (
          <p><strong>LinkedIn : </strong><a href={formData.linkedIn} target="_blank" rel="noopener noreferrer">{formData.linkedIn}</a></p>
        )}

        {/* Expérience professionnelle */}
        <h3>Expérience professionnelle</h3>
        {experienceList.map((experience, index) => (
          <div key={index}>
            <p><strong>Entreprise : </strong>{experience.entreprise}</p>
            <p><strong>Période : </strong>{experience.datedebut} - {experience.datefin}</p>
            <p><strong>Tâches réalisées : </strong>{experience.taches}</p>
          </div>
        ))}

        {/* Formation */}
        <h3>Formation</h3>
        {educationList.map((education, index) => (
          <div key={index}>
            <p><strong>Institution : </strong>{education.institution}</p>
            <p><strong>Période : </strong>{education.datedebut} - {education.datefin}</p>
            <p><strong>Diplôme : </strong>{education.diploma}</p>
          </div>
        ))}

        {/* Hobbies */}
        <h3>Hobbies</h3>
        {hobbiesList.length > 0 ? (
          <ul>
            {hobbiesList.map((hobby, index) => (
              <li key={index}>{hobby}</li>
            ))}
          </ul>
        ) : (
          <p>Aucun hobby renseigné</p>
        )}

        {/* Compétences */}
        <h3>Compétences</h3>
        {skillsList.length > 0 ? (
          <ul>
            {skillsList.map((skill, index) => (
              <li key={index}>{skill}</li>
            ))}
          </ul>
        ) : (
          <p>Aucune compétence renseignée</p>
        )}

        {/* Langues */}
        <h3>Langues</h3>
        {languagesList.length > 0 ? (
          <ul>
            {languagesList.map((language, index) => (
              <li key={index}>{language}</li>
            ))}
          </ul>
        ) : (
          <p>Aucune langue renseignée</p>
        )}
      </div>
    </div>

    <button onClick={generatePDF} className="btn btn-success">
      Télécharger le CV en PDF
    </button>
    {/* -------------------------------------------------- */}
    <div className="cv-container" id="cvDisplay">
      <div className="left-column">
      {formData.profilePicture && (
          <img
          className="portait"
            src={URL.createObjectURL(formData.profilePicture)}
            alt="Profile"
          />
        )}
        <div className="section">
          <p>
            <i className="icon fab fa-linkedin text-darkblue"></i> <a href={formData.linkedIn} target="_blank" rel="noopener noreferrer">{formData.linkedIn}</a>
          </p>
        </div>
        <div className="section">
          <h2>À PROPOS</h2>
          <p><strong>{formData.objective}</strong></p>
        </div>
        <div className="section">
          <h2>COMPÉTENCES</h2>
          <ul className="skills">
            {skillsList.map((skill, index) => (
              <li key={index}><i className="icon fas fa-check-circle text-darkblue"></i><strong>{skill}</strong></li>
            ))}
          </ul>
        </div>
        <div className="section">
          <h2>Langues</h2>
          <ul>
            {languagesList.map((language, index) => (
              <li key={index}><strong>{language}</strong></li>
            ))}
          </ul>
        </div>
        <div className="section">
          <h2>Centres d'intérêt</h2>
          <ul>
            {hobbiesList.map((hobby, index) => (
              <li key={index}>{hobby}</li>
            ))}
          </ul>
        </div>
      </div>
      <div className="right-column">
        <div className="header">
          <h1>{formData.name} <span className="text-blue text-uppercase">Gomba</span></h1>
          <p><strong>{formData.title}</strong></p>
          <ul className="infos">
            <li><i className="icon fas fa-at text-blue"></i> <a href={formData.email}><strong>{formData.email}</strong></a></li>
            <li><i className="icon fas fa-phone text-blue"></i> {formData.phone}</li>
            <li><i className="icon fas fa-map-marker-alt text-blue"></i> {formData.address}</li>
          </ul>
        </div>
        <div className="content">
          <div className="section">
            <h2>Expériences <br /><span className="text-blue">professionnelles</span></h2>
            {experienceList.map((experience, index) => (
          <div key={index}>
             <p>
              <strong>{experience.datedebut}<i className="fas fa-long-arrow-alt-right"></i> {experience.datefin}</strong>
              <br />
              {experience.entreprise} <em>{experience.entreprise}</em>
            </p>
              <ul className="experience-list">
                <li>{experience.taches}</li>
              </ul>
          </div>
        ))}
          </div>
          
          <div className="section">
            <h2>Études <br /><span className="text-blue">& formations</span></h2>
            {educationList.map((education, index) => (
          <div key={index}>
              <p>
              <strong>{education.datedebut} <i className="fas fa-long-arrow-alt-right"></i> {education.datefin}</strong>
              <br />
              <em>{education.institution}</em>, {education.diploma}
            </p>
          </div>
        ))}
          </div>
          <div className="section">
            <h2>Autres <br /><span className="text-blue">expériences</span></h2>
            <p>
              Permis B, possession d’une voiture
              <br />
              Animateur Scout pendant 6 ans
              <br />
              Brevet d’animateur de Centre de Vacances
            </p>
          </div>
        </div>
      </div>
    </div>
    <button onClick={generatePDF} className="btn btn-success">
      Télécharger le CV en PDF
    </button>
    </div>
  );
};

export default CvGenerator;

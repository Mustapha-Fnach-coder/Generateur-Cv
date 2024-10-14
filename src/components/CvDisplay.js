import React from 'react';
import './stylees.css';

const CvDisplay = ({ formData, experienceList, educationList, hobbiesList, skillsList, languagesList }) => {
  return (
    <div className="cv-container" id="cvDisplay">
      <div className="left-column">
        {formData.profilePicture && (
          <img
            className="portrait"
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
            <li><i className="icon fas fa-at text-blue"></i> <a href={`mailto:${formData.email}`}><strong>{formData.email}</strong></a></li>
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
                  {experience.entreprise}
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
        </div>
      </div>
    </div>
  );
};

export default CvDisplay;
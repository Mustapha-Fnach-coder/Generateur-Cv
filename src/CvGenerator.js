// CvGenerator.js
import React, { useState } from 'react';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';
import './style.css'

const CvGenerator = () => {
  const [formData, setFormData] = useState({
    profilePicture: null,
    name: '',
    title: '',
    objective: '',
    email: '',
    phone: '',
    address: '',
    experience: '',
    education: '',
    hobbies: '',
    skills: '',
    languages: '',
  });

  
  const [experienceList, setExperienceList] = useState([]);
  const [educationList, setEducationList] = useState([]);
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

  
  const addToList = (list, setList, value) => {
    if (value) {
      setList((prev) => [...prev, value]);
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
      <h1>Formulaire CV</h1>
      <form>
        <label>
          Photo de profil :
          <input type="file" name="profilePicture" accept="image/*" onChange={handleChange} />
        </label>
        <br />

        <label>
          Nom complet :
          <input type="text" name="name" value={formData.name} onChange={handleChange} required />
        </label>
        <br />

        <label>
          Titre de poste :
          <input type="text" name="title" value={formData.title} onChange={handleChange} required />
        </label>
        <br />

        <label>
          Objectif :
          <input type="text" name="objective" value={formData.objective} onChange={handleChange} required />
        </label>
        <br />

        <label>
          Email :
          <input type="email" name="email" value={formData.email} onChange={handleChange} required />
        </label>
        <br />

        <label>
          Téléphone :
          <input type="text" name="phone" value={formData.phone} onChange={handleChange} required />
        </label>
        <br />

        <label>
          Adresse :
          <input type="text" name="address" value={formData.address} onChange={handleChange} required />
        </label>
        <br />

        <label>
          Expérience professionnelle :
          <textarea name="experience" value={formData.experience} onChange={handleChange} required />
        </label>
        <button type="button" onClick={() => addToList(experienceList, setExperienceList, formData.experience)}>Ajouter Expérience</button>
        <ul>
          {experienceList.map((exp, index) => (
            <li key={index}>{exp}</li>
          ))}
        </ul>
        <br />

        <label>
          Formation :
          <textarea name="education" value={formData.education} onChange={handleChange} required />
        </label>
        <button type="button" onClick={() => addToList(educationList, setEducationList, formData.education)}>Ajouter Formation</button>
        <ul>
          {educationList.map((edu, index) => (
            <li key={index}>{edu}</li>
          ))}
        </ul>
        <br />

        <label>
          Loisirs :
          <input type="text" name="hobbies" value={formData.hobbies} onChange={handleChange} />
        </label>
        <button type="button" onClick={() => addToList(hobbiesList, setHobbiesList, formData.hobbies)}>Ajouter Loisirs</button>
        <ul>
          {hobbiesList.map((hobby, index) => (
            <li key={index}>{hobby}</li>
          ))}
        </ul>
        <br />

        <label>
          Compétences :
          <input type="text" name="skills" value={formData.skills} onChange={handleChange} required />
        </label>
        <button type="button" onClick={() => addToList(skillsList, setSkillsList, formData.skills)}>Ajouter Compétences</button>
        <ul>
          {skillsList.map((skill, index) => (
            <li key={index}>{skill}</li>
          ))}
        </ul>
        <br />

        <label>
          Langues :
          <input type="text" name="languages" value={formData.languages} onChange={handleChange} required />
        </label>
        <button type="button" onClick={() => addToList(languagesList, setLanguagesList, formData.languages)}>Ajouter Langues</button>
        <ul>
          {languagesList.map((language, index) => (
            <li key={index}>{language}</li>
          ))}
        </ul>
        <br />

        <button type="button" onClick={generatePDF}>Imprimer le CV en PDF</button>
      </form>

      <div id="cvDisplay" style={{ display: 'block' }}>
        <div className="cv-container">
          <header>
            <div className="profile">
              {formData.profilePicture && (
                <img
                  src={URL.createObjectURL(formData.profilePicture)}
                  alt="Photo de profil"
                  className="profile-picture"
                />
              )}
              <div className="contact-info">
                <h1>{formData.name}</h1>
                <h2>{formData.title}</h2>
                <p>Email: {formData.email}</p>
                <p>Téléphone: {formData.phone}</p>
                <p>Adresse: {formData.address}</p>
              </div>
            </div>
          </header>

          <section className="objective">
            <h3>Objectif Professionnel</h3>
            <p>{formData.objective}</p>
          </section>

          <section className="experience">
            <h3>Expérience Professionnelle</h3>
            <ul>
              {experienceList.map((exp, index) => (
                <li key={index}>{exp}</li>
              ))}
            </ul>
          </section>

          <section className="education">
            <h3>Formation</h3>
            <ul>
              {educationList.map((edu, index) => (
                <li key={index}>{edu}</li>
              ))}
            </ul>
          </section>

          <section className="skills">
            <h3>Compétences</h3>
            <ul>
              {skillsList.map((skill, index) => (
                <li key={index}>{skill}</li>
              ))}
            </ul>
          </section>

          <section className="hobbies">
            <h3>Loisirs</h3>
            <ul>
              {hobbiesList.map((hobby, index) => (
                <li key={index}>{hobby}</li>
              ))}
            </ul>
          </section>

          <section className="languages">
            <h3>Langues</h3>
            <ul>
              {languagesList.map((language, index) => (
                <li key={index}>{language}</li>
              ))}
            </ul>
          </section>
        </div>
      </div>
    </div>
  );
};

export default CvGenerator;

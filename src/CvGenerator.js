// CvGenerator.js
import React, { useState } from 'react';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';
import './style.css';
import 'bootstrap/dist/css/bootstrap.min.css';


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
          <div className="container mt-4">
      <h1 className="text-center mb-4">Formulaire CV</h1>
      <form className="mb-5">
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
          <input 
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
          <label>Expérience professionnelle :</label>
          <textarea 
            name="experience" 
            value={formData.experience} 
            onChange={handleChange} 
            className="form-control" 
            required 
          />
        </div>
        <button 
          type="button" 
          onClick={() => addToList(experienceList, setExperienceList, formData.experience)} 
          className="btn btn-primary mb-2"
        >
          Ajouter Expérience
        </button>

        <ul className="list-group mb-3">
          {experienceList.map((exp, index) => (
            <li key={index} className="list-group-item">{exp}</li>
          ))}
        </ul>

        <div className="form-group">
          <label>Formation :</label>
          <textarea 
            name="education" 
            value={formData.education} 
            onChange={handleChange} 
            className="form-control" 
            required 
          />
        </div>
        <button 
          type="button" 
          onClick={() => addToList(educationList, setEducationList, formData.education)} 
          className="btn btn-primary mb-2"
        >
          Ajouter Formation
        </button>

        <ul className="list-group mb-3">
          {educationList.map((edu, index) => (
            <li key={index} className="list-group-item">{edu}</li>
          ))}
        </ul>

        <div className="form-group">
          <label>Loisirs :</label>
          <input 
            type="text" 
            name="hobbies" 
            value={formData.hobbies} 
            onChange={handleChange} 
            className="form-control" 
          />
        </div>
        <button 
          type="button" 
          onClick={() => addToList(hobbiesList, setHobbiesList, formData.hobbies)} 
          className="btn btn-primary mb-2"
        >
          Ajouter Loisirs
        </button>

        <ul className="list-group mb-3">
          {hobbiesList.map((hobby, index) => (
            <li key={index} className="list-group-item">{hobby}</li>
          ))}
        </ul>

        <div className="form-group">
          <label>Compétences :</label>
          <input 
            type="text" 
            name="skills" 
            value={formData.skills} 
            onChange={handleChange} 
            className="form-control" 
            required 
          />
        </div>
        <button 
          type="button" 
          onClick={() => addToList(skillsList, setSkillsList, formData.skills)} 
          className="btn btn-primary mb-2"
        >
          Ajouter Compétences
        </button>

        <ul className="list-group mb-3">
          {skillsList.map((skill, index) => (
            <li key={index} className="list-group-item">{skill}</li>
          ))}
        </ul>

        <div className="form-group">
          <label>Langues :</label>
          <input 
            type="text" 
            name="languages" 
            value={formData.languages} 
            onChange={handleChange} 
            className="form-control" 
            required 
          />
        </div>
        <button 
          type="button" 
          onClick={() => addToList(languagesList, setLanguagesList, formData.languages)} 
          className="btn btn-primary mb-2"
        >
          Ajouter Langues
        </button>

        <ul className="list-group mb-3">
          {languagesList.map((language, index) => (
            <li key={index} className="list-group-item">{language}</li>
          ))}
        </ul>

        <button 
          type="button" 
          onClick={generatePDF} 
          className="btn btn-success"
        >
          Imprimer le CV en PDF
        </button>
      </form>
    </div>


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
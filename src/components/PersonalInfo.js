import React from 'react';

const PersonalInfo = ({ formData, handleChange }) => {
  return (
    <div>
      <h4>Informations personnelles</h4>
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
    </div>
  );
};

export default PersonalInfo;
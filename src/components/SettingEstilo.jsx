import React, { useState } from 'react';
import { Button, TextField } from '@mui/material';
import { Upload, Delete } from '@mui/icons-material';
import './styles/SettingEstilo.css';

const SettingEstilo = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setSelectedImage(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleRemoveImage = () => {
    setSelectedImage(null);
  };

  return (
    <div className="setting-estilo-container">
      <div className="image-upload-container">
        <label htmlFor="image-upload" className="image-upload-label">
          <div className="image-preview">
            {selectedImage ? (
              <img src={selectedImage} alt="Preview" />
            ) : (
              <Upload fontSize="large" />
            )}
          </div>
        </label>
        <input
          id="image-upload"
          type="file"
          accept="image/*"
          style={{ display: 'none' }}
          onChange={handleImageUpload}
        />
        <div className="image-actions">
          <Button
            variant="outlined"
            component="span"
            startIcon={<Upload />}
            onClick={() => document.getElementById('image-upload').click()}
          >
            Update
          </Button>
          <Button
            variant="outlined"
            color="error"
            startIcon={<Delete />}
            onClick={handleRemoveImage}
          >
            Remove
          </Button>
        </div>
      </div>

      <div className="setting-fields">
        <TextField 
          label="Nome do Estilo" 
          variant="outlined" 
          fullWidth 
          margin="normal" 
        />
        <TextField 
          label="Musica" 
          variant="outlined" 
          fullWidth 
          margin="normal" 
          InputProps={{
            endAdornment: (
              <Upload />
            ),
          }}
        />
        <div className="style-description">
          Sinceramente eu não pensei em mais coisa não, depois a gente adiciona mais campo de estilo.
        </div>
        <div className="action-buttons">
          <Button variant="contained" color="primary">
            Salvar
          </Button>
          <Button variant="outlined">
            Limpar
          </Button>
        </div>
      </div>
    </div>
  );
};

export default SettingEstilo;

import React, { useState } from 'react';
import { Modal, Box, Typography, TextField, Button, MenuItem, IconButton, Select, InputLabel, FormControl, Chip } from '@mui/material';
import { PhotoCamera } from '@mui/icons-material';
import toast from 'react-hot-toast';
import axios from 'axios'; // Para fazer a requisição ao backend

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 350,
  bgcolor: '#fff8f0',
  borderRadius: '20px',
  boxShadow: 24,
  padding: '20px 30px',
  outline: 'none',
  border: '2px solid #a64900',
};

const PhotoUploadModal = ({ open, onClose, onSave }) => {
  const [photo, setPhoto] = useState(null);
  const [name, setName] = useState('');
  const [date, setDate] = useState('');
  const [manos, setManos] = useState([]);
  const [isPublic, setIsPublic] = useState('');

  const handlePhotoChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      setPhoto(file);
    }
  };

  const handleSave = async () => {
    if (photo && name && date && manos.length > 0 && isPublic !== '') {
      const formData = new FormData();
      formData.append('photo', photo);

      try {
        const response = await axios.post('http://localhost:5000/upload', formData, {
          headers: {
            'Content-Type': 'multipart/form-data',
          },
        });

        const photoPath = response.data.path;
        const manosString = manos.join(';');
        const photoData = {
          titulo: name,
          path: photoPath, // Caminho recebido do servidor
          IdMembros: manosString,
          data_foto: date,
          permitido: isPublic === 'true', // Converte o valor para booleano
        };

        onSave(photoData);
        toast.success('Foto salva com sucesso!');
        handleClose();
      } catch (error) {
        console.error('Erro ao salvar a foto:', error);
        toast.error('Erro ao salvar a foto.');
      }
    } else {
      toast.error('Por favor, preencha todos os campos.');
    }
  };

  const handleClose = () => {
    setPhoto(null);
    setName('');
    setDate('');
    setManos([]);
    setIsPublic('');
    onClose();
  };

  return (
    <Modal open={open} onClose={handleClose}>
      <Box sx={style}>
        <Box sx={{ display: 'flex', justifyContent: 'center', mb: 2 }}>
          <IconButton
            component="label"
            sx={{
              width: 180,
              height: 180,
              borderRadius: '10px',
              bgcolor: '#f0f0f0',
              border: '2px dashed #ccc',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'pointer',
              color: '#a64900',
              flexDirection: 'column',
              padding: '10px',
              textAlign: 'center',
            }}
          >
            {photo ? (
              <img
                src={URL.createObjectURL(photo)}
                alt="Selecionado"
                style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '10px' }}
              />
            ) : (
              <>
                <PhotoCamera sx={{ fontSize: 40 }} />
                <Typography variant="subtitle1">Clique Aqui</Typography>
                <Typography variant="subtitle2">Para adicionar a foto</Typography>
              </>
            )}
            <input type="file" accept="image/*" onChange={handlePhotoChange} hidden />
          </IconButton>
        </Box>
        <TextField
          label="Nome"
          variant="outlined"
          fullWidth
          margin="normal"
          value={name}
          onChange={(e) => setName(e.target.value)}
          sx={{ borderRadius: '10px', bgcolor: '#fff' }}
        />
        <TextField
          label="Data da Foto"
          variant="outlined"
          fullWidth
          margin="normal"
          type="date"
          InputLabelProps={{ shrink: true }}
          value={date}
          onChange={(e) => setDate(e.target.value)}
          sx={{ borderRadius: '10px', bgcolor: '#fff' }}
        />

        {/* Campo Selecione os Manos com Multiselect */}
        <FormControl fullWidth margin="normal" sx={{ bgcolor: '#fff', borderRadius: '10px' }}>
          <InputLabel id="manos-label">Selecione os manos</InputLabel>
          <Select
            labelId="manos-label"
            multiple
            value={manos}
            onChange={(e) => setManos(e.target.value)}
            renderValue={(selected) => (
              <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5 }}>
                {selected.map((value) => (
                  <Chip key={value} label={`Mano ${value}`} />
                ))}
              </Box>
            )}
          >
            <MenuItem value={1}>Mano 1</MenuItem>
            <MenuItem value={2}>Mano 2</MenuItem>
            <MenuItem value={3}>Mano 3</MenuItem>
          </Select>
        </FormControl>

        <TextField
          label="Público?"
          variant="outlined"
          fullWidth
          margin="normal"
          select
          value={isPublic}
          onChange={(e) => setIsPublic(e.target.value)}
          sx={{ borderRadius: '10px', bgcolor: '#fff' }}
        >
          <MenuItem value="true">Sim</MenuItem>
          <MenuItem value="false">Não</MenuItem>
        </TextField>
        <Button
          variant="contained"
          fullWidth
          onClick={handleSave}
          sx={{
            mt: 2,
            bgcolor: '#BB4E00',
            color: '#fff',
            borderRadius: '10px',
            padding: '10px 0',
            textTransform: 'none',
            '&:hover': {
              bgcolor: '#E88239',
            },
          }}
        >
          Salvar
        </Button>
      </Box>
    </Modal>
  );
};

export default PhotoUploadModal;

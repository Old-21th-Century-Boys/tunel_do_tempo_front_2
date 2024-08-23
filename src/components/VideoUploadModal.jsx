import React, { useState } from 'react';
import { Modal, Box, Typography, TextField, Button, MenuItem, IconButton } from '@mui/material';
import { VideoLibrary } from '@mui/icons-material';
import toast from 'react-hot-toast';

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

const VideoUploadModal = ({ open, onClose, onSave }) => {
  const [video, setVideo] = useState(null);
  const [title, setTitle] = useState('');
  const [date, setDate] = useState('');
  const [manos, setManos] = useState('');
  const [isPublic, setIsPublic] = useState('');

  const handleVideoChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      setVideo(file);
    }
  };

  const handleSave = () => {
    if (video && title && date) {
      onSave({ video, title, date, manos, isPublic });
      toast.success('Vídeo salvo com sucesso!');
      handleClose();
    } else {
      toast.error('Por favor, preencha todos os campos.');
    }
  };

  const handleClose = () => {
    setVideo(null);
    setTitle('');
    setDate('');
    setManos('');
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
            {video ? (
              <Typography variant="subtitle1">{video.name}</Typography>
            ) : (
              <>
                <VideoLibrary sx={{ fontSize: 40 }} />
                <Typography variant="subtitle1">Clique Aqui</Typography>
                <Typography variant="subtitle2">Para adicionar um vídeo</Typography>
              </>
            )}
            <input type="file" accept="video/*" onChange={handleVideoChange} hidden />
          </IconButton>
        </Box>
        <TextField
          label="Título"
          variant="outlined"
          fullWidth
          margin="normal"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          sx={{ borderRadius: '10px', bgcolor: '#fff' }}
        />
        <TextField
          label="Data do Vídeo"
          variant="outlined"
          fullWidth
          margin="normal"
          type="date"
          InputLabelProps={{ shrink: true }}
          value={date}
          onChange={(e) => setDate(e.target.value)}
          sx={{ borderRadius: '10px', bgcolor: '#fff' }}
        />
        <TextField
          label="Selecione os manos"
          variant="outlined"
          fullWidth
          margin="normal"
          select
          value={manos}
          onChange={(e) => setManos(e.target.value)}
          sx={{ borderRadius: '10px', bgcolor: '#fff' }}
        >
          <MenuItem value="mano1">Mano 1</MenuItem>
          <MenuItem value="mano2">Mano 2</MenuItem>
          <MenuItem value="mano3">Mano 3</MenuItem>
        </TextField>
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
          <MenuItem value="yes">Sim</MenuItem>
          <MenuItem value="no">Não</MenuItem>
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

export default VideoUploadModal;

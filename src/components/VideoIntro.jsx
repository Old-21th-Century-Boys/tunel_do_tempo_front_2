import React, { useRef, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './VideoIntro.css';
import videoSrc from '../assets/videos/Abertura.mp4';

const VideoIntro = () => {
  const videoRef = useRef(null);
  const navigate = useNavigate();
  const [muted, setMuted] = useState(false); 
  const [isPlaying, setIsPlaying] = useState(false); 

  const handleKeyPress = (event) => {
    if (event.key === 'Enter') {
      navigate('/login');
    }
  };

  const togglePlayPause = () => {
    if (isPlaying) {
      videoRef.current.pause();
    } else {
      videoRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  const toggleMute = () => {
    setMuted(!muted);
  };

  useEffect(() => {
    const video = videoRef.current;
    video.muted = muted;
    window.addEventListener('keydown', handleKeyPress);

    return () => {
      window.removeEventListener('keydown', handleKeyPress);
    };
  }, [muted]);

  return (
    <div className="video-container">
      <video
        ref={videoRef}
        className="video-background"
        src={videoSrc}
        autoPlay
        loop
        muted={muted}
        onPlay={() => setIsPlaying(true)}
        onPause={() => setIsPlaying(false)}
      />
      <button
        className={`play-button ${isPlaying ? 'playing' : 'paused'}`}
        onClick={togglePlayPause}
      />
      <div className="controls">
        <button className="mute-button" onClick={toggleMute}>
          {muted ? '🔇' : '🔊'}
        </button>
        <div className="press-enter">Pressione ENTER para pular o vídeo</div>
      </div>
    </div>
  );
};

export default VideoIntro;

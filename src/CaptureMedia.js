import React, { useState } from 'react';

const MediaCapture = () => {
  const [videoUrl, setVideoUrl] = useState(null);

  const handleCapture = ({ target }) => {
    const fileReader = new FileReader();
    const file = target.files[0];

    fileReader.onloadend = () => setVideoUrl(fileReader.result);
    fileReader.readAsDataURL(file);
  };

  return (
    <div>
      <input type="file" accept="video/*" capture="camcorder" onChange={handleCapture} />
      {videoUrl && <video src={videoUrl} controls />}
    </div>
  );
};

export default MediaCapture;

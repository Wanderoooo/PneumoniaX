import React, { useState } from 'react';
import { useDropzone } from 'react-dropzone';

const ImageDropZone = ({ onDrop }) => {
  const [preview, setPreview] = useState(null);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop: (acceptedFiles) => {
      setPreview(URL.createObjectURL(acceptedFiles[0]));
      onDrop(acceptedFiles);
    },
    accept: 'image/*',
  });

  return (
    <div {...getRootProps()} className={`dropzone ${isDragActive ? 'active' : ''}`}>
      <input {...getInputProps()} />
      {preview ? (
        <img src={preview} alt="Preview" className="preview-image" />
      ) : (
        <p>Drag & drop X-ray image here, or click to select one</p>
      )}
    </div>
  );
};

export default ImageDropZone;

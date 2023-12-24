import React, { useState } from 'react';
import axios from 'axios';
import ImageDropZone from './components/ImageDropZone';
import './styles.css';

const App = () => {
  const [uploadedImage, setUploadedImage] = useState(null);
  const [prediction, setPrediction] = useState(null);

  const handleDrop = async (acceptedFiles) => {
    const file = acceptedFiles[0];

    try {
      const formData = new FormData();
      formData.append('file', file);

      const response = await axios.post('http://localhost:8000/predict', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });

      setPrediction(response.data);
      console.log(response.data);
      setUploadedImage(URL.createObjectURL(file)); // Create a URL for the uploaded image
    } catch (error) {
      console.error('Error making prediction:', error.message);
    }
  };

  return (
    <div className="app-container">
      <h1>PneumoniaX</h1>
      <p>CNN trained to identify normal, 
        bacterial, and Covid-induced pneumonia X-ray images</p>
      <p>95% accuracy; Exercise discretion when confidence is (&lt;) 80%</p>
      <ImageDropZone onDrop={handleDrop} />
      {prediction && (
        <div className="prediction-container">
          <p>Prediction: {prediction.class}</p>
          <p>Confidence: {prediction.confidence}</p>
        </div>
      )}
    </div>
  );
};

export default App;



import React from 'react';

const ImageTest = () => {
  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h2>Google Drive Image Test</h2>
      <img
        src="https://drive.google.com/uc?export=view&id=1tz2_Upyl-6l4OUKJUsaiGjgpO21ozjDY"
        alt="Test from Google Drive"
        style={{ width: '300px', border: '2px solid #ccc' }}
      />
    </div>
  );
};

export default ImageTest;

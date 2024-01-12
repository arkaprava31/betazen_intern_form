import React from 'react';
import { useCommonContext } from '../../Contexts/CommonContext';

const FileInputComponent = ({ field, label }) => {
  const { state, dispatch } = useCommonContext();

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    dispatch({ type: 'UPLOAD_FILE', payload: { field, file } });
  };

  return (
    <div className="info-box">
      <label>{label}</label>
      <input type="file" onChange={handleFileChange} />
    </div>
  );
};

export default FileInputComponent;
